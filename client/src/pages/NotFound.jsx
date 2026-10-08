import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container notfound">
        <img src="/images/crest.png" alt="Ironhawk High School crest" />
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for may have moved. Return home or use the
          navigation to find what you need.
        </p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
