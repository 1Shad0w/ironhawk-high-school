import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero.jsx";
import QuickAccess from "../components/QuickAccess.jsx";
import AnnouncementBar from "../components/AnnouncementBar.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import CampusGallery from "../components/CampusGallery.jsx";
import FeaturedArticle from "../components/FeaturedArticle.jsx";
import NewsMiniList from "../components/NewsMiniList.jsx";
import EventList from "../components/EventList.jsx";
import ContactForm from "../components/ContactForm.jsx";
import CTABand from "../components/CTABand.jsx";
import Icon from "../components/Icons.jsx";
import useApi from "../components/useApi.js";

import { stats, school } from "../data/site.js";
import { academicPrograms } from "../data/academics.js";
import { studentLifePrograms } from "../data/studentLife.js";
import { newsFallback } from "../data/news.js";
import { eventsFallback } from "../data/events.js";
import { athleticsFallback } from "../data/athletics.js";

const telHref = `tel:${school.phone.replace(/[^\d]/g, "")}`;

export default function Home() {
  const { data: news } = useApi("/api/news", newsFallback);
  const { data: events } = useApi("/api/events", eventsFallback);
  const { data: athletics } = useApi("/api/athletics", athleticsFallback);

  const posts = news || [];
  const featured = posts.find((post) => post.featured) || posts[0];
  const rest = posts.filter((post) => post !== featured).slice(0, 4);
  const upcoming = (events || []).slice(0, 4);
  const sports = (athletics || []).slice(0, 6);

  return (
    <>
      <AnnouncementBar to="/calendar" linkLabel="View the calendar">
        Fall Parent-Teacher Conferences are Thursday, October 18. Registration
        is open in the Parent Portal.
      </AnnouncementBar>

      <Hero />
      <QuickAccess />

      {/* About ---------------------------------------------------------- */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-media">
              <img
                src="/images/campus-exterior.jpg"
                alt="The Ironhawk High School main entrance and sign"
              />
              <div className="about-media__badge">
                <img src="/images/crest.png" alt="" />
                <span>Est. 1974</span>
              </div>
            </Reveal>

            <Reveal className="about-body" delay={120}>
              <p className="eyebrow">About Ironhawk</p>
              <h2 className="section-title">About Ironhawk</h2>
              <p>
                Ironhawk High School is a modern learning community focused on
                academic achievement, personal growth, leadership, and school
                spirit.
              </p>
              <ul className="about-points">
                <li>
                  <Icon name="checkCircle" size={20} />
                  Rigorous academics with 22 Advanced Placement courses.
                </li>
                <li>
                  <Icon name="checkCircle" size={20} />
                  A nationally recognized athletics and activities program.
                </li>
                <li>
                  <Icon name="checkCircle" size={20} />
                  A supportive, connected community of students and families.
                </li>
              </ul>
              <p style={{ marginTop: "24px" }}>
                <Link to="/about" className="link-arrow">
                  More About Our School
                </Link>
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

      {/* Academics ----------------------------------------------------- */}
      <section className="section section--paper" id="academics">
        <div className="container">
          <div className="academics-layout">
            <Reveal className="academics-aside">
              <p className="eyebrow">Academics</p>
              <h2 className="section-title">Preparing students for what's next.</h2>
              <p className="section-sub">
                From advanced coursework to hands-on career pathways, Ironhawk
                offers every student a rigorous and relevant education.
              </p>
              <p style={{ marginTop: "24px" }}>
                <Link to="/academics" className="btn btn--dark">
                  View Academic Programs
                </Link>
              </p>
              <img
                src="/images/campus-library.jpg"
                alt="Students studying in the Ironhawk library and media center"
              />
            </Reveal>

            <div className="program-list">
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
        </div>
      </section>

      {/* Athletics ----------------------------------------------------- */}
      <section className="section athletics" id="athletics">
        <div className="container athletics__inner">
          <div className="athletics-head">
            <div>
              <p className="eyebrow">Ironhawk Athletics</p>
              <h2 className="section-title">Ironhawk Athletics</h2>
              <p className="athletics-head__slogan">Compete. Lead. Inspire.</p>
            </div>
            <img
              className="athletics-head__mascot"
              src="/images/mascot.png"
              alt="The Ironhawk mascot"
            />
          </div>

          <div className="athletics-layout">
            <Reveal className="athletics-feature">
              <img
                src="/images/athletics-uniform.jpg"
                alt="Ironhawk Hawks basketball uniform"
              />
              <div className="athletics-feature__caption">
                <strong>Hawk Nation</strong>
                <span>Six varsity programs. One pride.</span>
              </div>
            </Reveal>

            <div>
              <div className="sport-list">
                {sports.map((sport, index) => (
                  <Reveal
                    as="article"
                    className="sport-row"
                    key={sport.id}
                    delay={index * 50}
                  >
                    <span className="sport-row__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{sport.name}</h3>
                      <p className="sport-row__meta">
                        {sport.season} · {sport.gender} · {sport.record}
                      </p>
                      <p className="sport-row__next">
                        Next: {sport.nextEvent.opponent} · {sport.nextEvent.date} ·{" "}
                        {sport.nextEvent.time}
                      </p>
                    </div>
                    <div className="sport-row__action">
                      <Link
                        to={`/athletics/${sport.slug}`}
                        className="btn btn--outline btn--sm"
                      >
                        Schedule
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="athletics-actions">
                <Link to="/athletics" className="btn btn--primary">
                  View Athletics Schedule
                </Link>
                <Link to="/athletics" className="btn btn--outline">
                  Meet Our Teams
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spirit -------------------------------------------------------- */}
      <section className="section section--tight spirit">
        <div className="container spirit__inner">
          <Reveal>
            <h2 className="spirit__title">
              One School.
              <em>One Community.</em>
            </h2>
            <p className="spirit__text">
              The Ironhawk spirit represents strength, determination,
              leadership, and community.
            </p>
            <div className="spirit__badges">
              <span>Strength</span>
              <span>Determination</span>
              <span>Leadership</span>
              <span>Community</span>
            </div>
          </Reveal>
          <Reveal
            as="img"
            className="spirit__mascot"
            src="/images/mascot.png"
            alt="Ironhawk mascot in a letterman jacket"
            delay={120}
          />
        </div>
      </section>

      {/* Campus -------------------------------------------------------- */}
      <section className="section" id="campus">
        <div className="container">
          <SectionHeading
            eyebrow="Campus"
            title="Explore Our Campus"
            subtitle="Spaces designed for learning, collaboration, creativity, and community."
            center
          />
          <Reveal>
            <CampusGallery />
          </Reveal>
        </div>
      </section>

      {/* Student life -------------------------------------------------- */}
      <section className="section section--paper" id="student-life">
        <div className="container">
          <SectionHeading
            eyebrow="Student Life"
            title="Student Life"
            subtitle="High school is about more than the classroom. From clubs to leadership to the arts, there is something for every Hawk."
            action={
              <Link to="/student-life" className="link-arrow">
                Explore Student Life
              </Link>
            }
          />
          <div className="life-mosaic">
            {studentLifePrograms.map((program) => (
              <Link
                to="/student-life"
                className="life-tile"
                key={program.id}
              >
                <img src={program.image} alt="" loading="lazy" />
                <div className="life-tile__body">
                  <h3>{program.title}</h3>
                  <p>{program.highlights[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News ---------------------------------------------------------- */}
      <section className="section" id="news">
        <div className="container">
          <SectionHeading
            eyebrow="News & Announcements"
            title="Latest News"
            subtitle="Stay up to date with everything happening around campus."
            action={
              <Link to="/news" className="link-arrow">
                All News & Events
              </Link>
            }
          />
          <div className="news-layout">
            <Reveal>
              <FeaturedArticle post={featured} />
            </Reveal>
            <Reveal delay={120}>
              <NewsMiniList posts={rest} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Events -------------------------------------------------------- */}
      <section className="section section--paper" id="events">
        <div className="container">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="What's Happening"
            subtitle="Mark your calendar for these upcoming dates."
            action={
              <Link to="/calendar" className="btn btn--ghost">
                View Full Calendar
              </Link>
            }
          />
          <EventList events={upcoming} showAction={false} />
        </div>
      </section>

      <CTABand
        title="Ready to join Hawk Nation?"
        text="Enrollment for the 2026–2027 school year is now open."
        primary={{ label: "Enroll Now", to: "/enroll" }}
        secondary={{ label: "Request Information", to: "/contact" }}
      />

      {/* Contact ------------------------------------------------------- */}
      <section className="section" id="contact">
        <div className="container">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact & Enrollment"
            subtitle="We would love to hear from you. Reach out to the main office or send us a message."
          />
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
                    <a href={`mailto:${school.email}`} style={{ color: "var(--white)" }}>
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
                <Link to="/contact" className="btn btn--outline">
                  Contact the School
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
