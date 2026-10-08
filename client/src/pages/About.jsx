import React from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import CTABand from "../components/CTABand.jsx";
import Icon from "../components/Icons.jsx";
import { stats, school } from "../data/site.js";

const values = [
  {
    icon: "award",
    title: "Academic Excellence",
    text: "High expectations, rigorous coursework, and the support every student needs to reach their potential."
  },
  {
    icon: "users",
    title: "Community",
    text: "A welcoming campus culture where students, families, and staff support one another."
  },
  {
    icon: "star",
    title: "Leadership",
    text: "Opportunities to lead in the classroom, on the field, and in service to our community."
  },
  {
    icon: "heart",
    title: "School Spirit",
    text: "Hawk pride runs deep — in our athletics, our arts, and everything we do together."
  }
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Ironhawk"
        intro="A modern learning community focused on academic achievement, personal growth, leadership, and school spirit."
        image="/images/campus-exterior.jpg"
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-media">
              <img
                src="/images/campus-exterior.jpg"
                alt="The Ironhawk High School main entrance"
              />
              <div className="about-media__badge">
                <img src="/images/crest.png" alt="" />
                <span>Est. 1974</span>
              </div>
            </Reveal>
            <Reveal className="about-body" delay={120}>
              <p className="eyebrow">Our School</p>
              <h2 className="section-title">Who We Are</h2>
              <p>
                Ironhawk High School is a modern learning community focused on
                academic achievement, personal growth, leadership, and school
                spirit.
              </p>
              <p>
                Since {school.founded}, Ironhawk has served generations of
                families in the {school.district}. Today, more than 2,400
                students learn in a campus designed for collaboration,
                creativity, and community.
              </p>
              <p>
                Our educators are committed to knowing every student by name and
                by strength, preparing graduates for college, careers, and
                meaningful lives.
              </p>
            </Reveal>
          </div>

          <Reveal className="stats-row">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat__value">{stat.value}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that guide our students, staff, and community."
            center
          />
          <div className="panel-grid">
            {values.map((value, index) => (
              <Reveal className="panel" key={value.title} delay={index * 60}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 52,
                    height: 52,
                    background: "var(--charcoal)",
                    color: "var(--orange)",
                    borderRadius: "var(--radius)",
                    marginBottom: 18
                  }}
                >
                  <Icon name={value.icon} size={26} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <Reveal className="feature-row__media">
              <img
                src="/images/campus-hallway.jpg"
                alt="Students walking through an Ironhawk academic hallway"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Leadership</p>
              <h3>A Message from Our Principal</h3>
              <p>
                "At Ironhawk, we believe every student deserves an education that
                challenges them and a community that supports them. Our
                commitment is simple: know students well, hold high
                expectations, and provide the opportunities and care that help
                each Hawk soar."
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Dr. Elena Marsh</strong>
                <br />
                Principal, Ironhawk High School
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Come see Ironhawk for yourself."
        text="Schedule a campus visit or start your enrollment today."
        primary={{ label: "Enroll Now", to: "/enroll" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
