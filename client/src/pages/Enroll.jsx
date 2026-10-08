import React from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Icon from "../components/Icons.jsx";
import { school } from "../data/site.js";

const steps = [
  {
    title: "Complete the Online Application",
    text: "Submit the enrollment form for the 2026–2027 school year. It takes about 15 minutes."
  },
  {
    title: "Provide Required Documents",
    text: "Proof of residency, immunization records, and a transcript from your current school."
  },
  {
    title: "Meet with a Counselor",
    text: "We will review your transcript, credits, and course requests to build your schedule."
  },
  {
    title: "Confirm Your Enrollment",
    text: "Sign your course agreement and join us at orientation to start the year strong."
  }
];

const documents = [
  "Proof of residency (utility bill or lease)",
  "Immunization records",
  "Official transcript from prior school",
  "Birth certificate or passport",
  "IEP or 504 plan, if applicable",
  "Emergency contact information"
];

const dates = [
  { label: "Open Enrollment Begins", value: "January 15, 2027" },
  { label: "Priority Application Deadline", value: "March 1, 2027" },
  { label: "Course Request Confirmation", value: "May 2027" },
  { label: "Fall Orientation", value: "August 2027" }
];

export default function Enroll() {
  return (
    <>
      <PageHero
        title="Enroll Now"
        intro="Enrollment for the 2026–2027 school year is open. Become part of Hawk Nation."
        image="/images/campus-exterior.jpg"
        breadcrumbs={[{ label: "Enroll" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How to Enroll"
            title="Four Simple Steps"
            subtitle="Our enrollment team will guide you through every step of the process."
          />
          <div className="panel-grid">
            {steps.map((step, index) => (
              <Reveal className="panel" key={step.title} delay={index * 60}>
                <div
                  className="stat__value"
                  style={{ color: "var(--orange)", fontSize: "2.2rem" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="academics-layout">
            <Reveal>
              <p className="eyebrow">Checklist</p>
              <h2 className="section-title">What You'll Need</h2>
              <p className="section-sub">
                Have these items ready to complete your application quickly.
              </p>
              <ul className="highlight-list" style={{ marginTop: 22 }}>
                {documents.map((doc) => (
                  <li key={doc}>
                    <Icon name="checkCircle" size={18} />
                    {doc}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Key Dates</p>
              <h2 className="section-title">Enrollment Timeline</h2>
              <div className="table-wrap">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th scope="col">Milestone</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dates.map((item) => (
                      <tr key={item.label}>
                        <td>
                          <strong>{item.label}</strong>
                        </td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <Reveal className="contact-info">
              <h3>Enrollment Office</h3>
              <p>
                Questions about enrollment? Our team is happy to help. Call,
                email, or send us a message and we will respond within one
                business day.
              </p>
              <div className="contact-info__list">
                <div>
                  <Icon name="phone" size={20} />
                  <span>
                    <strong>Phone</strong>
                    {school.phone}
                  </span>
                </div>
                <div>
                  <Icon name="mail" size={20} />
                  <span>
                    <strong>Email</strong>
                    enroll@ironhawkhs.edu
                  </span>
                </div>
                <div>
                  <Icon name="clock" size={20} />
                  <span>
                    <strong>Hours</strong>
                    {school.hours}
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="section-title" style={{ fontSize: "1.6rem" }}>
                Request Enrollment Information
              </h2>
              <ContactForm
                subjectOptions={["Enrollment", "Campus Tour", "Transcripts", "Counseling"]}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
