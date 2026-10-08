import React from "react";
import { Link } from "react-router-dom";
import { quickLinks } from "../data/site.js";
import Icon from "./Icons.jsx";

export default function QuickAccess() {
  return (
    <nav className="quick-access" aria-label="Quick access">
      <div className="container">
        <ul className="quick-access__grid">
          {quickLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="quick-item">
                <Icon name={item.icon} size={28} />
                <span className="quick-item__label">{item.label}</span>
                <span className="quick-item__desc">{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
