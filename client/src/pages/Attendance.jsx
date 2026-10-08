import React, { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icons.jsx";
import { school } from "../data/site.js";

const EMPTY = {
  student: "",
  grade: "9",
  id: "",
  date: "",
  reason: "Illness",
  notes: ""
};

export default function Attendance() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update = (event) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  return (
    <>
      <PageHero
        title="Attendance"
        intro="Report an absence, review attendance policies, and keep your student on track."
        image="/images/campus-hallway.jpg"
        breadcrumbs={[{ label: "Attendance" }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <Reveal className="contact-info">
              <h3>Attendance Office</h3>
              <p>
                Please report all absences before 9:00 AM on the day of the
                absence. Clearances are required within 72 hours.
              </p>
              <div className="contact-info__list">
                <div>
                  <Icon name="phone" size={20} />
                  <span>
                    <strong>Attendance Line</strong>
                    (555) 010-2088
                  </span>
                </div>
                <div>
                  <Icon name="mail" size={20} />
                  <span>
                    <strong>Email</strong>
                    attendance@ironhawkhs.edu
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
                Report an Absence
              </h2>
              <form
                className="form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                  setForm(EMPTY);
                }}
              >
                <div className="form__row">
                  <div className="field">
                    <label htmlFor="att-student">Student Name</label>
                    <input
                      id="att-student"
                      name="student"
                      value={form.student}
                      onChange={update}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="att-id">Student ID</label>
                    <input
                      id="att-id"
                      name="id"
                      value={form.id}
                      onChange={update}
                      required
                    />
                  </div>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="att-grade">Grade</label>
                    <select
                      id="att-grade"
                      name="grade"
                      value={form.grade}
                      onChange={update}
                    >
                      {["9", "10", "11", "12"].map((grade) => (
                        <option key={grade} value={grade}>
                          Grade {grade}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="att-date">Date of Absence</label>
                    <input
                      id="att-date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={update}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="att-reason">Reason</label>
                  <select
                    id="att-reason"
                    name="reason"
                    value={form.reason}
                    onChange={update}
                  >
                    <option>Illness</option>
                    <option>Medical Appointment</option>
                    <option>Family Emergency</option>
                    <option>Bereavement</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="att-notes">Additional Notes</label>
                  <textarea
                    id="att-notes"
                    name="notes"
                    value={form.notes}
                    onChange={update}
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--block">
                  Submit Absence
                </button>

                {submitted && (
                  <p className="form__status form__status--success" role="status">
                    Thank you. Your absence report has been received by the
                    attendance office.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading eyebrow="Policies" title="Attendance Guidelines" />
          <div className="panel-grid">
            <Reveal className="panel">
              <h3>Excused Absences</h3>
              <p>Illness, medical appointments, bereavement, and other approved reasons are excused when reported promptly.</p>
            </Reveal>
            <Reveal className="panel" delay={60}>
              <h3>Tardies</h3>
              <p>Students arriving after the first bell must check in at the attendance office before going to class.</p>
            </Reveal>
            <Reveal className="panel" delay={120}>
              <h3>Off-Campus Passes</h3>
              <p>Leaving campus early requires a parent note or call and a signed off-campus pass.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
