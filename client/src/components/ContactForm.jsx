import React, { useState } from "react";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function ContactForm({
  subjectOptions = [
    "General Inquiry",
    "Enrollment",
    "Counseling",
    "Athletics",
    "Attendance",
    "Transcripts"
  ]
}) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrors(data.errors || {});
        setStatus({
          type: "error",
          text: data.error || "Something went wrong. Please try again."
        });
        return;
      }

      setStatus({
        type: "success",
        text: `${data.message} Reference: ${data.reference}`
      });
      setForm(EMPTY);
    } catch (err) {
      setStatus({
        type: "error",
        text: "We could not reach the server. Please call the main office at (555) 010-2026."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className={`field ${errors.name ? "field--error" : ""}`}>
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            value={form.name}
            onChange={update}
            autoComplete="name"
            required
          />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </div>

        <div className={`field ${errors.email ? "field--error" : ""}`}>
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            autoComplete="email"
            required
          />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-subject">Subject</label>
        <select id="cf-subject" name="subject" value={form.subject} onChange={update}>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={`field ${errors.message ? "field--error" : ""}`}>
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          value={form.message}
          onChange={update}
          required
        />
        {errors.message && (
          <span className="field__error">{errors.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="btn btn--primary btn--block"
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>

      {status && (
        <p
          className={`form__status form__status--${status.type}`}
          role="status"
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
