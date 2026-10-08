import React from "react";
import { Link } from "react-router-dom";

export default function CTABand({ title, text, primary, secondary }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <div className="cta-band__actions">
          {primary && (
            <Link className="btn btn--dark" to={primary.to}>
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link className="btn btn--outline" to={secondary.to}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
