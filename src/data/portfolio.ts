// backend/src/data/portfolio.ts

export const portfolio = [
  //  Financials
  { ticker: "HDFCBANK.NS", purchasePrice: 1490, quantity: 50, sector: "Financials" },
  { ticker: "BAJFINANCE.NS", purchasePrice: 6466, quantity: 15, sector: "Financials" },
  { ticker: "ICICIBANK.NS", purchasePrice: 780, quantity: 84, sector: "Financials" },
  { ticker: "BAJAJHFL.NS", purchasePrice: 130, quantity: 504, sector: "Financials" },    // Bajaj Housing Finance
  { ticker: "SAVFI.BO", purchasePrice: 24, quantity: 1080, sector: "Financials" },        // Savani Financials (BSE-only)

  //  Technology
  { ticker: "AFFLE.NS", purchasePrice: 1151, quantity: 50, sector: "Technology" },
  { ticker: "LTIM.NS", purchasePrice: 4775, quantity: 16, sector: "Technology" },
  { ticker: "KPITTECH.NS", purchasePrice: 672, quantity: 61, sector: "Technology" },
  { ticker: "TATATECH.NS", purchasePrice: 1072, quantity: 63, sector: "Technology" },
  { ticker: "BLSE.NS", purchasePrice: 232, quantity: 191, sector: "Technology" },
  { ticker: "TANLA.NS", purchasePrice: 1134, quantity: 45, sector: "Technology" },

  //  Consumer
  { ticker: "DMART.NS", purchasePrice: 3777, quantity: 27, sector: "Consumer" },
  { ticker: "TATACONSUM.NS", purchasePrice: 845, quantity: 90, sector: "Consumer" },
  { ticker: "PIDILITIND.NS", purchasePrice: 2376, quantity: 36, sector: "Consumer" },

  //  Power
  { ticker: "TATAPOWER.NS", purchasePrice: 224, quantity: 225, sector: "Power" },
  { ticker: "KPIGREEN.NS", purchasePrice: 875, quantity: 50, sector: "Power" },            // validated as NS :contentReference[oaicite:2]{index=2}
  { ticker: "SUZLON.NS", purchasePrice: 44, quantity: 450, sector: "Power" },
  { ticker: "GENSOL.NS", purchasePrice: 998, quantity: 45, sector: "Power" },

  //  Pipes
  { ticker: "HARIOMPIPE.NS", purchasePrice: 580, quantity: 60, sector: "Pipes" },         // validated :contentReference[oaicite:3]{index=3}
  { ticker: "ASTRAL.NS", purchasePrice: 1517, quantity: 56, sector: "Pipes" },
  { ticker: "POLYCAB.NS", purchasePrice: 2818, quantity: 28, sector: "Pipes" },

  //  Others
  { ticker: "CLEAN.NS", purchasePrice: 1610, quantity: 32, sector: "Others" },
  { ticker: "DEEPAKNTR.NS", purchasePrice: 2248, quantity: 27, sector: "Others" },
  { ticker: "FINEORG.NS", purchasePrice: 4284, quantity: 16, sector: "Others" },
  { ticker: "GRAVITA.NS", purchasePrice: 2037, quantity: 8, sector: "Others" },
  { ticker: "SBILIFE.NS", purchasePrice: 1197, quantity: 49, sector: "Others" },

  //  Sold / Exit (optional)
  { ticker: "INFY.NS", purchasePrice: 1647, quantity: 36, sector: "Sold" },
  { ticker: "HAPPSTMNDS.NS", purchasePrice: 1103, quantity: 45, sector: "Sold" },
  { ticker: "EASEMYTRIP.NS", purchasePrice: 20, quantity: 1332, sector: "Sold" },
];
