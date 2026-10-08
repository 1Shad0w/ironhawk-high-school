import React from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { bellSchedules } from "../data/bellSchedule.js";

export default function BellSchedule() {
  return (
    <>
      <PageHero
        title="Bell Schedule"
        intro="Daily class periods, block days, and minimum-day schedules."
        image="/images/campus-hallway.jpg"
        breadcrumbs={[{ label: "Bell Schedule" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Daily Schedule"
            title="Class Periods & Times"
            subtitle="Ironhawk operates on a seven-period schedule with a mid-day Hawk Hour."
          />
          <div className="schedule-grid">
            {bellSchedules.map((schedule, index) => (
              <Reveal className="schedule-card" key={schedule.id} delay={index * 80}>
                <div className="schedule-card__head">
                  <h3>{schedule.title}</h3>
                  <p>{schedule.note}</p>
                </div>
                <ul>
                  {schedule.periods.map((period) => (
                    <li key={`${schedule.id}-${period.label}`}>
                      <span>{period.label}</span>
                      <span>{period.time}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading eyebrow="Good to Know" title="Schedule Notes" />
          <div className="panel-grid">
            <Reveal className="panel">
              <h3>Hawk Hour</h3>
              <p>
                Hawk Hour is a 50-minute period for lunch, tutoring, club
                meetings, and make-up work.
              </p>
            </Reveal>
            <Reveal className="panel">
              <h3>Block Days</h3>
              <p>
                Wednesdays use extended block periods for labs, projects, and
                deeper learning.
              </p>
            </Reveal>
            <Reveal className="panel">
              <h3>Minimum Days</h3>
              <p>
                Students are released early on designated staff development and
                conference days. Check the calendar for dates.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
