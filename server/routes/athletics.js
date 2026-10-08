import { Router } from "express";
import { athletics, findSportBySlug } from "../data/athletics.js";

const router = Router();

// GET /api/athletics  -> all sports. Optional ?season= filter.
router.get("/", (req, res) => {
  const { season } = req.query;
  let results = [...athletics];

  if (season) {
    results = results.filter((item) =>
      item.season.toLowerCase().includes(String(season).toLowerCase())
    );
  }

  res.json({ count: results.length, data: results });
});

// GET /api/athletics/:slug  -> a single program
router.get("/:slug", (req, res) => {
  const sport = findSportBySlug(req.params.slug);
  if (!sport) {
    return res.status(404).json({ error: "Program not found" });
  }
  res.json({ data: sport });
});

export default router;
