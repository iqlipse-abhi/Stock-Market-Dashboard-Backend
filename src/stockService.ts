// // backend/src/stockService.ts
// import yahooFinance from "yahoo-finance2";

// export async function fetchStockData(ticker: string, exchange: string) {
//   try {
//     // NSE stocks use .NS, BSE stocks use .BO
//     const symbol = exchange === "NSE" ? `${ticker}.NS` : `${ticker}.BO`;

//     // const quote = await yahooFinance.quote(symbol, {
//     //   modules: [
//     //     "price",
//     //     "summaryDetail",
//     //     "defaultKeyStatistics",
//     //     "financialData",
//     //   ],
//     // });

//     // return {
//     //   cmp: quote.regularMarketPrice ?? null,
//     //   pe: quote.trailingPE ?? null,
//     //   latestEarnings: quote.epsTrailingTwelveMonths ?? null,
//     // };

//     try {
//       const quote = await yahooFinance.quote(ticker);
//       const cmp = quote?.regularMarketPrice ?? null;
//       const pe = quote?.trailingPE ?? null;
//       const eps = quote?.epsTrailingTwelveMonths ?? null;

//       return { ticker, cmp, pe, eps };
//     } catch (err) {
//       console.warn(`Yahoo fetch failed for ${ticker}:`, (err as Error).message);
//       return { ticker, cmp: null, pe: null, eps: null };
//     }

//     // when market is closed to chk dummy data
//     return {
//       cmp: (quote.regularMarketPrice ?? 0) + (Math.random() * 5 - 2.5), // wiggle +/- 2.5
//       pe: quote.trailingPE ?? null,
//       latestEarnings: quote.epsTrailingTwelveMonths ?? null,
//     };
//   } catch (err) {
//     console.warn(
//       `Yahoo fetch failed for ${ticker} (${exchange})`,
//       (err as Error).message
//     );
//     return { cmp: null, pe: null, latestEarnings: null };
//   }
// }


import yahooFinance from "yahoo-finance2";

export async function fetchStockData(ticker: string) {
  try {
    const quote = await yahooFinance.quote(ticker);

    // Try to get earnings from quoteSummary
    let earnings = null;
    try {
      const summary: any = await yahooFinance.quoteSummary(ticker, { modules: ["earnings"] });
      earnings =
        summary?.earnings?.financialsChart?.quarterly?.slice(-1)[0]?.actual ??
        summary?.earnings?.earningsChart?.quarterly?.slice(-1)[0]?.actual ??
        null;
    } catch {
      earnings = null;
    }

    return {
      ticker,
      cmp: quote?.regularMarketPrice ?? null,
      pe: quote?.trailingPE ?? null,
      eps: quote?.epsTrailingTwelveMonths ?? null,
      latestEarnings: earnings,
    };
  } catch (err) {
    console.warn(`Yahoo fetch failed for ${ticker}:`, (err as Error).message);
    return { ticker, cmp: null, pe: null, eps: null, latestEarnings: null };
  }
}
