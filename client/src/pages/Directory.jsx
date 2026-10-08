import React, { useMemo, useState } from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icons.jsx";
import { staffDirectory, departments } from "../data/directory.js";

export default function Directory() {
  const [dept, setDept] = useState("All Departments");
  const [query, setQuery] = useState("");

  const options = useMemo(
    () => ["All Departments", ...departments],
    []
  );

  const filtered = staffDirectory.filter((person) => {
    const matchesDept =
      dept === "All Departments" || person.department === dept;
    const matchesQuery =
      !query ||
      person.name.toLowerCase().includes(query.toLowerCase()) ||
      person.role.toLowerCase().includes(query.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <>
      <PageHero
        title="Staff Directory"
        intro="Find and contact Ironhawk faculty and staff."
        image="/images/campus-library.jpg"
        breadcrumbs={[{ label: "Staff Directory" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Staff"
            title="Faculty & Staff Directory"
            subtitle="Reach any member of our team by phone or email."
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginBottom: 28
            }}
          >
            <div className="field" style={{ marginBottom: 0, minWidth: 240 }}>
              <label htmlFor="directory-search">Search</label>
              <input
                id="directory-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name or role"
              />
            </div>
            <div className="field" style={{ marginBottom: 0, minWidth: 240 }}>
              <label htmlFor="directory-dept">Department</label>
              <select
                id="directory-dept"
                value={dept}
                onChange={(event) => setDept(event.target.value)}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="table-wrap">
            <table className="info-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Department</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((person) => (
                  <tr key={person.email}>
                    <td>
                      <strong>{person.name}</strong>
                    </td>
                    <td>{person.role}</td>
                    <td>{person.department}</td>
                    <td>
                      <a href={`mailto:${person.email}`}>{person.email}</a>
                      <br />
                      <span style={{ color: "var(--muted)" }}>
                        {person.phone}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <p style={{ marginTop: 24, color: "var(--muted)" }}>
              No staff members match your search. Try a different name or
              department.
            </p>
          )}
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="panel-grid">
            <Reveal className="panel">
              <div style={{ color: "var(--orange-dark)", marginBottom: 12 }}>
                <Icon name="phone" size={28} />
              </div>
              <h3>Main Office</h3>
              <p>(555) 010-2026<br />info@ironhawkhs.edu</p>
            </Reveal>
            <Reveal className="panel" delay={60}>
              <div style={{ color: "var(--orange-dark)", marginBottom: 12 }}>
                <Icon name="mail" size={28} />
              </div>
              <h3>Report an Issue</h3>
              <p>Spot an incorrect listing? Let us know and we will update the directory.</p>
            </Reveal>
            <Reveal className="panel" delay={120}>
              <div style={{ color: "var(--orange-dark)", marginBottom: 12 }}>
                <Icon name="clock" size={28} />
              </div>
              <h3>Office Hours</h3>
              <p>Monday–Friday<br />7:30 AM – 4:00 PM</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
