import { Router } from "express";

const router = Router();

// Very light in-memory store so submissions are visible during development.
export const messages = [];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact  -> accepts a contact / enrollment inquiry
router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body || {};

  const errors = {};
  if (!name || !String(name).trim()) errors.name = "Please enter your name.";
  if (!email || !EMAIL_RE.test(String(email).trim()))
    errors.email = "Please enter a valid email address.";
  if (!message || String(message).trim().length < 10)
    errors.message = "Please include a message of at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      ok: false,
      error: "Please correct the highlighted fields.",
      errors
    });
  }

  const record = {
    id: messages.length + 1,
    name: String(name).trim(),
    email: String(email).trim(),
    subject: subject ? String(subject).trim() : "General Inquiry",
    message: String(message).trim(),
    receivedAt: new Date().toISOString()
  };

  messages.push(record);

  res.status(201).json({
    ok: true,
    message:
      "Thank you. Your message has been sent to the Ironhawk High School main office.",
    reference: `IHS-${String(record.id).padStart(5, "0")}`
  });
});

export default router;
