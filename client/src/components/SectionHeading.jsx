import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  action = null,
  id
}) {
  const classes = [
    "section-head",
    center ? "section-head--center" : "",
    action ? "section-head--row" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && (
          <h2 className="section-title" id={id}>
            {title}
          </h2>
        )}
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
