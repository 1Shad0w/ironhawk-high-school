import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icons.jsx";

export default function EventList({
  events = [],
  showDescription = false,
  showAction = true
}) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <article className="event-row" key={event.id}>
          <div className="event-date" aria-hidden="true">
            <span>{event.month}</span>
            <strong>{event.day}</strong>
          </div>
          <div>
            <h3>{event.title}</h3>
            <p className="event-row__meta">
              <span>
                <Icon name="clock" size={15} />
                {event.time}
              </span>
              <span>
                <Icon name="pin" size={15} />
                {event.location}
              </span>
              {event.weekday && (
                <span>
                  <Icon name="calendar" size={15} />
                  {event.weekday}
                </span>
              )}
            </p>
            {showDescription && event.description && (
              <p className="event-row__desc">{event.description}</p>
            )}
          </div>
          {showAction && (
            <div className="event-row__action">
              <Link to="/calendar" className="btn btn--ghost btn--sm">
                Details
              </Link>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
