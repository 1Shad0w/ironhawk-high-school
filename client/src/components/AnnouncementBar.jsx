import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AnnouncementBar({ children, to, linkLabel }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="announcement" role="region" aria-label="School announcement">
      <div className="container announcement__inner">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap"
          }}
        >
          <span className="announcement__tag">Attention</span>
          <p>
            {children}{" "}
            {to && <Link to={to}>{linkLabel || "Learn more"}</Link>}
          </p>
        </div>
        <button
          type="button"
          className="announcement__close"
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
