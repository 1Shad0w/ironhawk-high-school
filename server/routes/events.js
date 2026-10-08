import { Router } from "express";
import { events } from "../data/events.js";

const router = Router();

// GET /api/events  -> upcoming events. Optional ?category= and ?limit= filters.
router.get("/", (req, res) => {
  const { category, limit } = req.query;
  let results = [...events];

  if (category) {
    results = results.filter(
      (item) => item.category.toLowerCase() === String(category).toLowerCase()
    );
  }

  if (limit) {
    results = results.slice(0, Number(limit));
  }

  res.json({ count: results.length, data: results });
});

export default router;
