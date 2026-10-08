import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

import newsRouter from "./routes/news.js";
import eventsRouter from "./routes/events.js";
import athleticsRouter from "./routes/athletics.js";
import contactRouter from "./routes/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// --- API ---------------------------------------------------------------
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", school: "Ironhawk High School" });
});

app.use("/api/news", newsRouter);
app.use("/api/events", eventsRouter);
app.use("/api/athletics", athleticsRouter);
app.use("/api/contact", contactRouter);

app.use("/api", (_req, res) => {
  res.status(404).json({ error: "API route not found" });
});

// --- Static client (production build) ---------------------------------
const clientDist = path.resolve(__dirname, "../client/dist");

if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));

  // SPA fallback so client-side routes resolve on refresh.
  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Ironhawk High School server running on http://localhost:${PORT}`);
  if (!fs.existsSync(clientDist)) {
    console.log(
      "Client build not found — run the Vite dev server for the frontend."
    );
  }
});
