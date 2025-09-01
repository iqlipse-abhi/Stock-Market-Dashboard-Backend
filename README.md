# 📊 Portfolio Dashboard

A full-stack stock portfolio dashboard built with **Next.js (frontend)** and **Express + TypeScript (backend)**.  
It fetches live stock data from **Yahoo Finance** and displays **sector-wise insights** like investments, CMP, gain/loss, and performance metrics.

---

## ✨ Features

- 📡 **Live Refresh** — updates stock data every 15 seconds
- 🏦 **Sector Grouping** — holdings organized by sectors
- 📈 **Gain/Loss Calculations** — both stock-level and sector-level
- 🌙 **Dark Mode** — auto-applied via Tailwind
- 🛑 **Fallback Mode** — dummy random values when market is closed or APIs fail
- ⚡ **Optimized** — caching & batched data fetch to avoid rate-limits

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/portfolio-dashboard.git
cd portfolio-dashboard
```

### 2️⃣ Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

### 3️⃣ Run Locally

**Start backend:**
```bash
cd backend
npm run dev
```
👉 Runs on: http://localhost:4000

**Start frontend:**
```bash
cd frontend
npm run dev
```
👉 Runs on: http://localhost:3000

---

## 🛠️ Tech Stack

### Frontend
- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Express.js** - Fast, minimalist web framework
- **TypeScript** - Type-safe server development
- **Yahoo Finance API** - Live stock data source

---

## 📂 Project Structure

```
portfolio-dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   ├── package.json
│   └── next.config.js
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   └── types/
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

---

---

## 📊 Dashboard Features

### Real-time Data
- Live stock prices updated every 15 seconds
- Current Market Price (CMP) tracking
- Automatic refresh when market is open

### Sector Analysis
- Holdings grouped by industry sectors
- Sector-wise performance metrics
- Investment distribution visualization

### Performance Metrics
- Individual stock gain/loss calculations
- Portfolio-level performance tracking
- Historical performance indicators

### Responsive Design
- Mobile-friendly interface
- Dark mode support
- Clean, modern UI with Tailwind CSS

---

## 🔄 API Endpoints

### GET `/portfolio`
Returns complete portfolio data including:
- Stock prices and performance
- Sector groupings
- Gain/loss calculations

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
```

### Backend (Railway/Heroku)
```bash
cd backend
npm run build
```

---

**Happy Trading! 📈**
