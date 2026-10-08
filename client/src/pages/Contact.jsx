import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Icon from "../components/Icons.jsx";
import { school } from "../data/site.js";

const telHref = `tel:${school.phone.replace(/[^\d]/g, "")}`;

const offices = [
  {
    title: "Main Office",
    detail: "General questions, records & visitors",
    phone: "(555) 010-2026",
    email: "info@ironhawkhs.edu"
  },
  {
    title: "Counseling",
    detail: "Schedules, college & career planning",
    phone: "(555) 010-2080",
    email: "counseling@ironhawkhs.edu"
  },
  {
    title: "Athletics",
    detail: "Teams, schedules & eligibility",
    phone: "(555) 010-2075",
    email: "athletics@ironhawkhs.edu"
  },
  {
    title: "Attendance",
    detail: "Absences, tardies & clearances",
    phone: "(555) 010-2088",
    email: "attendance@ironhawkhs.edu"
  }
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        intro="We are here to help. Reach the main office, submit an inquiry, or stop by for a visit."
        image="/images/campus-exterior.jpg"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <Reveal className="contact-info">
              <h3>{school.name}</h3>
              <div className="contact-info__list">
                <div>
                  <Icon name="pin" size={20} />
                  <span>
                    <strong>Address</strong>
                    {school.address.line1}
                    <br />
                    {school.address.city}, {school.address.state}
                  </span>
                </div>
                <div>
                  <Icon name="phone" size={20} />
                  <span>
                    <strong>Phone</strong>
                    <a href={telHref} style={{ color: "var(--white)" }}>
                      {school.phone}
                    </a>
                  </span>
                </div>
                <div>
                  <Icon name="mail" size={20} />
                  <span>
                    <strong>Email</strong>
                    <a
                      href={`mailto:${school.email}`}
                      style={{ color: "var(--white)" }}
                    >
                      {school.email}
                    </a>
                  </span>
                </div>
                <div>
                  <Icon name="clock" size={20} />
                  <span>
                    <strong>Office Hours</strong>
                    {school.hours}
                  </span>
                </div>
              </div>
              <div className="contact-info__actions">
                <Link to="/enroll" className="btn btn--primary">
                  Apply Now
                </Link>
                <Link to="/campus" className="btn btn--outline">
                  Request Information
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="section-title" style={{ fontSize: "1.6rem" }}>
                Send Us a Message
              </h2>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading
            eyebrow="Departments"
            title="Who to Contact"
            subtitle="Reach the right office directly for faster service."
          />
          <div className="panel-grid">
            {offices.map((office, index) => (
              <Reveal className="panel" key={office.title} delay={index * 50}>
                <h3>{office.title}</h3>
                <p>{office.detail}</p>
                <div style={{ marginTop: 14, fontSize: "0.9rem" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                    <Icon name="phone" size={16} />
                    <span>{office.phone}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Icon name="mail" size={16} />
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="map-panel" role="img" aria-label={`Map showing ${school.name} at ${school.address.line1}, ${school.address.city}`}>
            <div className="map-panel__pin">
              <Icon name="pin" size={28} />
            </div>
            <div className="map-panel__info">
              <strong>{school.name}</strong>
              <span>
                {school.address.line1}, {school.address.city}, {school.address.state}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
