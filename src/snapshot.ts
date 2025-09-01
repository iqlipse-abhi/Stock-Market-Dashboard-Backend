// backend/src/snapshot.ts
import { portfolio } from "./data/portfolio";
import { fetchStockData } from "./stockService";

type StockRow = {
  ticker: string;
  exchange: string;
  purchasePrice: number;
  quantity: number;
  sector: string;
  cmp: number | null;
  pe: number | null;
  latestEarnings: number | null;
  investment: number;
  presentValue: number;
  gainLoss: number;
  portfolioPercent: number;
};

type SectorSummary = {
  sector: string;
  totalInvestment: number;
  totalPresentValue: number;
  totalGainLoss: number;
  items: StockRow[];
};

export type Snapshot = {
  ts: number; // epoch ms of last refresh
  stocks: StockRow[];
  sectorSummary: SectorSummary[];
};

let SNAPSHOT: Snapshot = { ts: 0, stocks: [], sectorSummary: [] };

export async function rebuildSnapshot(): Promise<void> {
  const enriched = await Promise.all(
    portfolio.map(async (s) => {
      const meta = await fetchStockData(s.ticker, s.exchange);

      const investment = s.purchasePrice * s.quantity;
      const cmp = meta.cmp ?? 0;
      const presentValue = cmp * s.quantity;
      const gainLoss = presentValue - investment;

      return {
        ...s,
        cmp: meta.cmp,
        pe: meta.pe,
        latestEarnings: meta.latestEarnings,
        investment,
        presentValue,
        gainLoss,
        portfolioPercent: 0, // fill after totals
      };
    })
  );

  const totalInvestment = enriched.reduce((a, b) => a + b.investment, 0) || 1;
  const withPerc = enriched.map((s) => ({
    ...s,
    portfolioPercent: (s.investment / totalInvestment) * 100,
  }));

  const bySector: Record<string, SectorSummary> = {};
  withPerc.forEach((s) => {
    const sec = s.sector || "Unknown";
    if (!bySector[sec]) {
      bySector[sec] = {
        sector: sec,
        totalInvestment: 0,
        totalPresentValue: 0,
        totalGainLoss: 0,
        items: [],
      };
    }
    bySector[sec].totalInvestment += s.investment;
    bySector[sec].totalPresentValue += s.presentValue;
    bySector[sec].totalGainLoss += s.gainLoss;
    bySector[sec].items.push(s);
  });

  SNAPSHOT = {
    ts: Date.now(),
    stocks: withPerc,
    sectorSummary: Object.values(bySector),
  };
}

export async function initScheduler(): Promise<void> {
  // build once on boot
  await rebuildSnapshot();

  // refresh every 15 seconds
  setInterval(async () => {
    try {
      await rebuildSnapshot();
    } catch (e) {
      // keep previous snapshot if refresh fails
      console.warn("Snapshot refresh failed:", (e as Error)?.message);
    }
  }, 15_000);
}

export function getSnapshot(): Snapshot {
  return SNAPSHOT;
}
