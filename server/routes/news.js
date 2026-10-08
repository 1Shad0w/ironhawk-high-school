import { Router } from "express";
import { news, findNewsBySlug } from "../data/news.js";

const router = Router();

// GET /api/news  -> all posts, newest first. Optional ?category= filter.
router.get("/", (req, res) => {
  const { category, limit } = req.query;
  let results = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

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

// GET /api/news/:slug  -> a single article
router.get("/:slug", (req, res) => {
  const article = findNewsBySlug(req.params.slug);
  if (!article) {
    return res.status(404).json({ error: "Article not found" });
  }
  res.json({ data: article });
});

export default router;
