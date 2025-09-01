import yahooFinance from "yahoo-finance2";

export async function getCMP(symbol: string): Promise<number | null> {
  try {
    const result = await yahooFinance.quote(symbol);
    return result.regularMarketPrice || null;
  } catch (err) {
    console.error("Error fetching CMP:", err);
    return null;
  }
}
