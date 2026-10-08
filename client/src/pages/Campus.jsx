import React from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import CampusGallery from "../components/CampusGallery.jsx";
import CTABand from "../components/CTABand.jsx";
import Icon from "../components/Icons.jsx";
import { campusFacts } from "../data/campus.js";

const facilities = [
  {
    icon: "book",
    title: "Library & Media Center",
    text: "A two-story research hub with group study rooms, a media lab, and a curated collection."
  },
  {
    icon: "flask",
    title: "Science & STEM Wing",
    text: "Dedicated labs, robotics bays, and a fabrication studio for hands-on learning."
  },
  {
    icon: "palette",
    title: "Performing Arts Center",
    text: "A 900-seat theater plus rehearsal halls, music rooms, and a student gallery."
  },
  {
    icon: "award",
    title: "Athletic Facilities",
    text: "Two gymnasiums, a field house, stadium, and six outdoor fields and courts."
  },
  {
    icon: "lunch",
    title: "Hawk Commons",
    text: "A bright dining and social commons that doubles as a space for community events."
  },
  {
    icon: "student",
    title: "College & Career Center",
    text: "Advising, testing, and internship support all in one welcoming space."
  }
];

export default function Campus() {
  return (
    <>
      <PageHero
        title="Explore Our Campus"
        intro="Spaces designed for learning, collaboration, creativity, and community."
        image="/images/campus-exterior.jpg"
        breadcrumbs={[{ label: "Campus" }]}
      />

      <section className="section section--tight">
        <div className="container">
          <Reveal className="stats-row" style={{ marginTop: 0 }}>
            {campusFacts.map((fact) => (
              <div className="stat" key={fact.label}>
                <div className="stat__value">{fact.value}</div>
                <div className="stat__label">{fact.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="A Look Around"
            subtitle="Click any image to view it larger."
          />
          <Reveal>
            <CampusGallery />
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading
            eyebrow="Facilities"
            title="Built for Learning"
            subtitle="Our campus is designed to support academics, athletics, and the arts."
          />
          <div className="panel-grid">
            {facilities.map((item, index) => (
              <Reveal
                className="panel"
                key={item.title}
                delay={index * 50}
              >
                <div style={{ color: "var(--orange-dark)", marginBottom: 14 }}>
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
        title="Schedule a campus visit."
        text="See our facilities in person and meet the people who make Ironhawk special."
        primary={{ label: "Request a Tour", to: "/contact" }}
        secondary={{ label: "Enroll Now", to: "/enroll" }}
      />
    </>
  );
}
