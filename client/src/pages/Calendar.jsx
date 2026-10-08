import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import EventList from "../components/EventList.jsx";
import useApi from "../components/useApi.js";
import { eventsFallback } from "../data/events.js";

export default function Calendar() {
  const { data } = useApi("/api/events", eventsFallback);
  const events = data || [];

  const groups = useMemo(() => {
    const map = new Map();
    events.forEach((event) => {
      if (!map.has(event.month)) map.set(event.month, []);
      map.get(event.month).push(event);
    });
    return Array.from(map.entries());
  }, [events]);

  return (
    <>
      <PageHero
        title="School Calendar"
        intro="Events, breaks, and important dates for the 2026–2027 school year."
        image="/images/campus-hallway.jpg"
        breadcrumbs={[{ label: "Calendar" }]}
      />

      <section className="section">
        <div className="container">
          <div className="article-layout">
            <div>
              {groups.map(([month, monthEvents]) => (
                <div className="calendar-group" key={month}>
                  <h2 className="calendar-group__title">{month} 2026</h2>
                  <EventList events={monthEvents} showDescription />
                </div>
              ))}
            </div>

            <aside className="article-aside">
              <Reveal className="panel">
                <h3>Quick Links</h3>
                <div className="portal-links" style={{ marginTop: 14 }}>
                  <Link to="/bell-schedule">Bell Schedule</Link>
                  <Link to="/lunch-menu">Lunch Menu</Link>
                  <Link to="/attendance">Attendance</Link>
                  <Link to="/news">News & Announcements</Link>
                </div>
              </Reveal>
              <Reveal className="panel" delay={80}>
                <h3>School Hours</h3>
                <p>
                  First bell: 7:55 AM
                  <br />
                  Dismissal: 3:29 PM
                  <br />
                  Office: 7:30 AM – 4:00 PM
                </p>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
