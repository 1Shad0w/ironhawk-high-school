import React from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icons.jsx";
import CTABand from "../components/CTABand.jsx";
import useApi from "../components/useApi.js";
import { athleticsFallback } from "../data/athletics.js";

const scheduleSample = [
  { date: "Oct 12", opponent: "North Ridge Titans", location: "Home", time: "7:00 PM" },
  { date: "Oct 18", opponent: "Riverside Cougars", location: "Away", time: "5:30 PM" },
  { date: "Oct 25", opponent: "Valley Christian", location: "Home", time: "6:00 PM" },
  { date: "Nov 01", opponent: "Summit Prep", location: "Away", time: "7:00 PM" }
];

export default function SportDetail() {
  const { slug } = useParams();
  const fallback =
    athleticsFallback.find((item) => item.slug === slug) || null;
  const { data } = useApi(`/api/athletics/${slug}`, fallback);
  const sport = data;

  if (!sport) {
    return (
      <section className="section">
        <div className="container notfound">
          <h1>Program not found</h1>
          <p>We could not find that athletic program.</p>
          <Link to="/athletics" className="btn btn--primary">
            Back to Athletics
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        title={sport.name}
        intro={sport.team}
        image={sport.image}
        breadcrumbs={[
          { label: "Athletics", to: "/athletics" },
          { label: sport.name }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="article-layout">
            <div>
              <Reveal>
                <p className="eyebrow">Team Overview</p>
                <h2 className="section-title">{sport.team}</h2>
                <p className="section-sub">{sport.description}</p>
              </Reveal>

              <Reveal delay={100}>
                <h3 style={{ marginTop: 36 }}>Upcoming Schedule</h3>
                <div className="table-wrap">
                  <table className="info-table">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Opponent</th>
                        <th scope="col">Location</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleSample.map((game) => (
                        <tr key={`${game.date}-${game.opponent}`}>
                          <td>
                            <strong>{game.date}</strong>
                          </td>
                          <td>{game.opponent}</td>
                          <td>{game.location}</td>
                          <td>{game.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <p style={{ marginTop: 28 }}>
                  <Link to="/athletics" className="link-arrow">
                    Back to All Programs
                  </Link>
                </p>
              </Reveal>
            </div>

            <aside className="article-aside">
              <Reveal className="panel">
                <h3>At a Glance</h3>
                <div className="contact-info__list" style={{ margin: "16px 0 0" }}>
                  <div>
                    <Icon name="calendar" size={18} />
                    <span>
                      <strong>Season</strong>
                      {sport.season}
                    </span>
                  </div>
                  <div>
                    <Icon name="users" size={18} />
                    <span>
                      <strong>Levels</strong>
                      {sport.gender}
                    </span>
                  </div>
                  <div>
                    <Icon name="award" size={18} />
                    <span>
                      <strong>Record</strong>
                      {sport.record}
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal className="panel" delay={100}>
                <h3>Next Event</h3>
                <p style={{ color: "var(--charcoal)", fontWeight: 600, marginBottom: 4 }}>
                  {sport.nextEvent.opponent}
                </p>
                <p style={{ margin: 0 }}>
                  {sport.nextEvent.date} · {sport.nextEvent.time}
                  <br />
                  {sport.nextEvent.location}
                </p>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CTABand
        title="Come out and support the Hawks."
        text="View the full athletics calendar and ticket information."
        primary={{ label: "Full Schedule", to: "/calendar" }}
        secondary={{ label: "Contact Athletics", to: "/contact" }}
      />
    </>
  );
}
