import React from "react";
import { Link } from "react-router-dom";
import {
  school,
  footerQuickLinks,
  footerResources,
  social
} from "../data/site.js";
import Icon from "./Icons.jsx";

const telHref = `tel:${school.phone.replace(/[^\d]/g, "")}`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/crest.png" alt="Ironhawk High School crest" />
              <span className="footer-brand__name">
                Ironhawk
                <br />
                High School
              </span>
            </div>
            <p className="footer-motto">Learn. Grow. Achieve.</p>
            <p style={{ maxWidth: "42ch", margin: 0 }}>
              A modern learning community focused on academic achievement,
              personal growth, leadership, and school spirit.
            </p>
            <div className="social-row">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  <Icon name={item.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              {footerResources.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact">
              <div>
                <Icon name="pin" size={18} />
                <span>
                  {school.address.line1}
                  <br />
                  {school.address.city}, {school.address.state}
                </span>
              </div>
              <div>
                <Icon name="phone" size={18} />
                <a href={telHref}>{school.phone}</a>
              </div>
              <div>
                <Icon name="mail" size={18} />
                <a href={`mailto:${school.email}`}>{school.email}</a>
              </div>
              <div>
                <Icon name="clock" size={18} />
                <span>{school.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p style={{ margin: 0 }}>
            &copy; 2026 Ironhawk High School. All rights reserved.
          </p>
          <nav aria-label="Footer policies">
            <Link to="/about">Accessibility</Link>
            <Link to="/about">Non-Discrimination</Link>
            <Link to="/about">Title IX</Link>
            <Link to="/contact">Site Feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
