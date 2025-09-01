// backend/src/googleService.ts
import axios = require("axios");
import cheerio = require("cheerio");

export async function fetchGoogleMetrics(ticker: string, exchange: string) {
  const url = `https://www.google.com/finance/quote/${ticker}:${exchange}`;
  try {
    const res = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      timeout: 10000,
    });

    const $ = cheerio.load(res.data);
    let pe: number | null = null;
    let latestEarnings: number | null = null;

    // Find "P/E ratio" label
    $("div, span").each((_, el) => {
      const text = $(el).text().trim();
      if (/P\/E/i.test(text)) {
        const val = $(el).next().text().replace(/,/g, "");
        if (!isNaN(Number(val))) pe = Number(val);
      }
      if (/EPS|Earnings/i.test(text)) {
        const val = $(el).next().text().replace(/,/g, "");
        if (!isNaN(Number(val))) latestEarnings = Number(val);
      }
    });

    return { pe, latestEarnings };
  } catch (err) {
    console.warn("Google scrape failed", ticker, exchange);
    return { pe: null, latestEarnings: null };
  }
}
