import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { navLinks, utilityLinks, school } from "../data/site.js";
import Icon from "./Icons.jsx";

const telHref = `tel:${school.phone.replace(/[^\d]/g, "")}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <ul className="utility-bar__links">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="utility-bar__meta">
            <a href={telHref}>
              <Icon name="phone" size={15} /> {school.phone}
            </a>
            <span>{school.hours}</span>
          </div>
        </div>
      </div>

      <div className="masthead">
        <div className="container masthead__inner">
          <Link to="/" className="brand" aria-label="Ironhawk High School home">
            <img
              className="brand__crest"
              src="/images/crest.png"
              alt="Ironhawk High School crest"
            />
            <span className="brand__text">
              <span className="brand__name">Ironhawk</span>
              <span className="brand__sub">High School</span>
            </span>
          </Link>

          <div className="masthead__actions">
            <div className="masthead__district">
              <strong>Ironhawk Unified</strong>
              School District
            </div>
            <a className="masthead__phone" href={telHref}>
              <Icon name="phone" size={18} /> {school.phone}
            </a>
            <button
              type="button"
              className={`hamburger ${open ? "is-open" : ""}`}
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <nav className="main-nav" aria-label="Primary">
        <div className="container main-nav__inner">
          <ul className="main-nav__list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to} end={link.to === "/"}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/enroll" className="btn btn--primary main-nav__cta">
            Enroll Now
          </Link>
        </div>
      </nav>

      <div
        className={`drawer-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        className={`drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer__head">
          <img src="/images/crest.png" alt="Ironhawk High School" />
          <button
            type="button"
            className="drawer__close"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            &times;
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/enroll" className="btn btn--primary btn--block drawer__cta">
          Enroll Now
        </Link>

        <div className="drawer__secondary">
          <h4>Quick Links</h4>
          <ul>
            {utilityLinks.map((link) => (
              <li key={`drawer-${link.label}`}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  );
}
