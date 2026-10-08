import React from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import CTABand from "../components/CTABand.jsx";
import Icon from "../components/Icons.jsx";
import { studentLifePrograms, clubs } from "../data/studentLife.js";

export default function StudentLife() {
  return (
    <>
      <PageHero
        title="Student Life"
        intro="High school is about more than the classroom. Discover the clubs, arts, leadership, and community that make Ironhawk home."
        image="/images/campus-cafeteria.jpg"
        breadcrumbs={[{ label: "Student Life" }]}
      />

      <section className="section">
        <div className="container">
          {studentLifePrograms.map((program, index) => (
            <Reveal
              className={`feature-row ${
                index % 2 === 1 ? "feature-row--reverse" : ""
              }`}
              key={program.id}
            >
              <div className="feature-row__media">
                <img src={program.image} alt="" loading="lazy" />
              </div>
              <div>
                <div className="feature-row__icon">
                  <Icon name={program.icon} size={28} />
                </div>
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
                <ul className="highlight-list">
                  {program.highlights.map((item) => (
                    <li key={item}>
                      <Icon name="checkCircle" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading
            eyebrow="Get Involved"
            title="Clubs & Organizations"
            subtitle="With more than 40 clubs, there is a place for every interest. New clubs are always welcome."
          />
          <div className="filter-bar" style={{ gap: 10 }}>
            {clubs.map((club) => (
              <span key={club} className="tag tag--light" style={{ fontSize: "0.8rem" }}>
                {club}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 28, color: "var(--muted)" }}>
            Interested in starting a new club? Visit the Student Activities
            office or ask your class advisor.
          </p>
        </div>
      </section>

      <CTABand
        title="Find your place at Ironhawk."
        text="Join a club, try out for a team, or take the stage."
        primary={{ label: "Explore Athletics", to: "/athletics" }}
        secondary={{ label: "Contact Student Activities", to: "/contact" }}
      />
    </>
  );
}
