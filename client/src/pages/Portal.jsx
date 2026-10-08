import React, { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icons.jsx";

function PortalLogin({ title, icon, note }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="portal-card">
      <div className="portal-card__head">
        <Icon name={icon} size={30} />
        <h3>{title}</h3>
      </div>
      <div className="portal-card__body">
        <p>{note}</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="field">
            <label htmlFor={`${icon}-user`}>Username or ID</label>
            <input id={`${icon}-user`} type="text" autoComplete="username" />
          </div>
          <div className="field">
            <label htmlFor={`${icon}-pass`}>Password</label>
            <input
              id={`${icon}-pass`}
              type="password"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn btn--primary btn--block">
            Sign In
          </button>
        </form>
        {submitted && (
          <p className="form__status form__status--error" role="status">
            This is a demonstration portal. In production, sign-in is handled by
            the district single sign-on service.
          </p>
        )}
      </div>
    </div>
  );
}

export default function Portal() {
  return (
    <>
      <PageHero
        title="Portals"
        intro="Access grades, assignments, attendance, and school resources in one place."
        image="/images/campus-library.jpg"
        breadcrumbs={[{ label: "Portals" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Secure Access"
            title="Student & Parent Portals"
            subtitle="Sign in to view real-time academic information and school communications."
          />
          <div className="portal-grid">
            <Reveal>
              <PortalLogin
                title="Student Portal"
                icon="student"
                note="View your grades, assignments, schedule, and lunch account balance."
              />
            </Reveal>
            <Reveal delay={120}>
              <PortalLogin
                title="Parent Portal"
                icon="parent"
                note="Monitor progress, update contact information, and register for conferences."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading
            eyebrow="Need Help?"
            title="Portal Support"
            subtitle="For login issues, contact the Technology Help Desk."
          />
          <div className="panel-grid">
            <Reveal className="panel">
              <h3>Reset a Password</h3>
              <p>
                Use the "Forgot Password" link on the sign-in page, or contact
                the help desk for assistance.
              </p>
            </Reveal>
            <Reveal className="panel" delay={60}>
              <h3>Technology Help Desk</h3>
              <p>
                Available Monday–Friday, 7:30 AM – 4:00 PM.
                <br />
                (555) 010-2090 · helpdesk@ironhawkhs.edu
              </p>
            </Reveal>
            <Reveal className="panel" delay={120}>
              <h3>New to the Portal?</h3>
              <p>
                Activation codes are emailed to families at the start of each
                school year. Contact the main office if you need one.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
