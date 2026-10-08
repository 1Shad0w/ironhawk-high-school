import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import CTABand from "../components/CTABand.jsx";
import Icon from "../components/Icons.jsx";
import useApi from "../components/useApi.js";
import { athleticsFallback } from "../data/athletics.js";

const highlights = [
  {
    icon: "award",
    title: "Championship Tradition",
    text: "More than 60 conference championships and a proud record of excellence across all programs."
  },
  {
    icon: "users",
    title: "For Every Athlete",
    text: "Freshman through varsity levels, with no-cut programs and a place for every student to compete."
  },
  {
    icon: "heart",
    title: "Hawk Nation",
    text: "A student section, marching band, and community that show up loud and proud all season long."
  }
];

export default function Athletics() {
  const { data } = useApi("/api/athletics", athleticsFallback);
  const sports = data || [];

  return (
    <>
      <PageHero
        title="Ironhawk Athletics"
        intro="Compete. Lead. Inspire. Six varsity programs, one proud tradition."
        image="/images/athletics-uniform.jpg"
        breadcrumbs={[{ label: "Athletics" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Varsity Programs"
            title="Meet Our Teams"
            subtitle="Each of our programs is built on discipline, teamwork, and Hawk pride."
          />
          <div className="panel-grid">
            {sports.map((sport, index) => (
              <Reveal
                as="article"
                className="panel"
                key={sport.id}
                delay={index * 50}
                style={{ padding: 0, overflow: "hidden" }}
              >
                <Link
                  to={`/athletics/${sport.slug}`}
                  style={{ display: "block", position: "relative" }}
                >
                  <img
                    src={sport.image}
                    alt={`${sport.team} team`}
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover" }}
                  />
                  <span
                    className="tag"
                    style={{ position: "absolute", top: 12, left: 12 }}
                  >
                    {sport.season}
                  </span>
                </Link>
                <div style={{ padding: "22px 24px 26px" }}>
                  <h3>{sport.name}</h3>
                  <p style={{ marginBottom: 12 }}>{sport.description}</p>
                  <p
                    style={{
                      margin: "0 0 16px",
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      fontSize: "0.82rem",
                      color: "var(--orange-dark)"
                    }}
                  >
                    {sport.gender} · {sport.record}
                  </p>
                  <Link to={`/athletics/${sport.slug}`} className="link-arrow">
                    View Schedule
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Hawk Pride"
            title="More Than a Game"
            center
          />
          <div className="panel-grid">
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 60}
                className="panel panel--dark"
              >
                <div style={{ color: "var(--orange)", marginBottom: 14 }}>
                  <Icon name={item.icon} size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Support Hawk Nation."
        text="Join the Ironhawk Athletic Boosters and never miss a game."
        primary={{ label: "View Full Schedule", to: "/calendar" }}
        secondary={{ label: "Contact Athletics", to: "/contact" }}
      />
    </>
  );
}
