import React from "react";
import { Link } from "react-router-dom";

const facts = [
  { value: "Est. 1974", label: "Serving Ironhawk" },
  { value: "2,400+", label: "Students" },
  { value: "95%", label: "Graduation Rate" },
  { value: "40+", label: "Clubs & Activities" }
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="/images/hero-campus.jpg"
          alt="Students gathered outside the Ironhawk High School campus with the foothills behind them"
        />
      </div>
      <div className="hero__overlay" />

      <div className="container">
        <div className="hero__inner">
          <p className="hero__eyebrow">Welcome to Ironhawk High School</p>
          <h1 className="hero__title">
            <span>Learn.</span>
            <span>Grow.</span>
            <span>Achieve.</span>
          </h1>
          <p className="hero__text">
            Where academic excellence, athletic spirit, and community come
            together.
          </p>
          <div className="hero__actions">
            <Link to="/about" className="btn btn--outline">
              Explore Our School
            </Link>
            <Link to="/enroll" className="btn btn--primary">
              Enroll Now
            </Link>
          </div>

          <div className="hero__facts">
            {facts.map((fact) => (
              <div className="hero__fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
