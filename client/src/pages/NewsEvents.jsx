import React, { useMemo, useState } from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import NewsCard from "../components/NewsCard.jsx";
import EventList from "../components/EventList.jsx";
import useApi from "../components/useApi.js";
import { newsFallback } from "../data/news.js";
import { eventsFallback } from "../data/events.js";

export default function NewsEvents() {
  const { data: news } = useApi("/api/news", newsFallback);
  const { data: events } = useApi("/api/events", eventsFallback);

  const posts = news || [];
  const allEvents = events || [];

  const categories = useMemo(() => {
    const set = new Set(posts.map((post) => post.category));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? posts
      : posts.filter((post) => post.category === filter);

  const groups = useMemo(() => {
    const map = new Map();
    allEvents.forEach((event) => {
      if (!map.has(event.month)) map.set(event.month, []);
      map.get(event.month).push(event);
    });
    return Array.from(map.entries());
  }, [allEvents]);

  return (
    <>
      <PageHero
        title="News & Events"
        intro="The latest from Ironhawk High School — announcements, celebrations, and everything on the calendar."
        image="/images/campus-hallway.jpg"
        breadcrumbs={[{ label: "News & Events" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="News & Announcements"
            title="Latest News"
            subtitle="Stay up to date with everything happening around campus."
          />

          <div className="filter-bar" role="tablist" aria-label="Filter news by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={filter === category ? "is-active" : ""}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="news-grid">
            {filtered.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 60}>
                <NewsCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="School Calendar"
            subtitle="Mark your calendar for these upcoming dates."
          />
          {groups.map(([month, monthEvents]) => (
            <div className="calendar-group" key={month}>
              <h3 className="calendar-group__title">{month} 2026</h3>
              <EventList events={monthEvents} showDescription />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
