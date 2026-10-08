import React from "react";
import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import useApi from "../components/useApi.js";
import { newsFallback } from "../data/news.js";

export default function NewsDetail() {
  const { slug } = useParams();
  const fallback = newsFallback.find((post) => post.slug === slug) || null;
  const { data } = useApi(`/api/news/${slug}`, fallback);
  const post = data;

  const related = newsFallback
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!post) {
    return (
      <section className="section">
        <div className="container notfound">
          <h1>Article not found</h1>
          <p>We could not find that news article.</p>
          <Link to="/news" className="btn btn--primary">
            Back to News
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="section">
      <div className="container">
        <div className="article-layout">
          <div>
            <Reveal className="article-header">
              <p className="eyebrow">{post.category}</p>
              <h1>{post.title}</h1>
              <div className="article-meta">
                <time dateTime={post.date}>{post.displayDate}</time>
                <span>By {post.author}</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <img className="article-hero" src={post.image} alt="" />
            </Reveal>

            <Reveal className="prose" delay={120}>
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            <p style={{ marginTop: 32 }}>
              <Link to="/news" className="link-arrow">
                Back to News & Events
              </Link>
            </p>
          </div>

          <aside className="article-aside">
            <Reveal className="panel">
              <h3>Quick Links</h3>
              <div className="portal-links" style={{ marginTop: 14 }}>
                <Link to="/calendar">School Calendar</Link>
                <Link to="/portal">Student Portal</Link>
                <Link to="/lunch-menu">Lunch Menu</Link>
              </div>
            </Reveal>

            <Reveal className="panel" delay={80}>
              <h3>More News</h3>
              <div className="news-mini">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/news/${item.slug}`}
                    className="news-mini__item"
                  >
                    <img
                      className="news-mini__thumb"
                      src={item.image}
                      alt=""
                      loading="lazy"
                    />
                    <div>
                      <time dateTime={item.date}>{item.displayDate}</time>
                      <h4>{item.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </article>
  );
}
