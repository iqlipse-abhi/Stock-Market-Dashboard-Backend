// backend/src/index.ts
import express = require("express");
import cors = require( "cors");
import { initScheduler, getSnapshot } from "./snapshot";

const app = express();
app.use(cors());

app.get("/", (_req, res) => res.send("Backend API running 🚀"));

app.get("/portfolio", (_req, res) => {
  // always return the latest in-memory snapshot
  res.json(getSnapshot());
});

const PORT = 4000;

(async () => {
  await initScheduler(); // start 15s refresh loop
  app.listen(PORT, () => console.log(`✅ Backend on http://localhost:${PORT}`));
})();
