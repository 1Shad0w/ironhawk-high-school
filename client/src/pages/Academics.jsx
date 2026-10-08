import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import CTABand from "../components/CTABand.jsx";
import Icon from "../components/Icons.jsx";
import {
  academicPrograms,
  departments,
  graduationRequirements
} from "../data/academics.js";

export default function Academics() {
  return (
    <>
      <PageHero
        title="Academics"
        intro="Preparing students for what's next — through rigorous coursework, hands-on pathways, and personal support."
        image="/images/campus-library.jpg"
        breadcrumbs={[{ label: "Academics" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Academic Programs"
            title="Pathways for Every Student"
            subtitle="Explore the programs that make an Ironhawk education challenging, relevant, and rewarding."
          />
          <div className="program-list" style={{ marginTop: 12 }}>
            {academicPrograms.map((program, index) => (
              <Reveal
                as="article"
                className="program-row"
                key={program.id}
                delay={index * 60}
              >
                <div className="program-row__icon">
                  <Icon name={program.icon} size={26} />
                </div>
                <div>
                  <h3>{program.title}</h3>
                  <p className="program-row__summary">{program.summary}</p>
                  <ul className="program-row__details">
                    {program.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading
            eyebrow="Departments"
            title="Academic Departments"
            subtitle="Our departments offer a broad range of courses across every discipline."
          />
          <div className="table-wrap">
            <table className="info-table">
              <thead>
                <tr>
                  <th scope="col">Department</th>
                  <th scope="col">Department Chair</th>
                  <th scope="col">Courses Offered</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr key={dept.name}>
                    <td>
                      <strong>{dept.name}</strong>
                    </td>
                    <td>{dept.head}</td>
                    <td>{dept.courses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="academics-layout">
            <Reveal>
              <p className="eyebrow">Graduation</p>
              <h2 className="section-title">Graduation Requirements</h2>
              <p className="section-sub">
                Students must earn a minimum of 28 credits across the following
                subject areas to graduate from Ironhawk High School.
              </p>
              <p style={{ marginTop: 24 }}>
                <Link to="/enroll" className="btn btn--dark">
                  View Course Catalog
                </Link>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="table-wrap">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th scope="col">Subject Area</th>
                      <th scope="col">Credits Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    {graduationRequirements.map((req) => (
                      <tr key={req.subject}>
                        <td>
                          <strong>{req.subject}</strong>
                        </td>
                        <td>{req.credits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Plan your next four years at Ironhawk."
        text="Meet with a counselor and map out a pathway that fits your goals."
        primary={{ label: "Contact Counseling", to: "/contact" }}
        secondary={{ label: "Enroll Now", to: "/enroll" }}
      />
    </>
  );
}
