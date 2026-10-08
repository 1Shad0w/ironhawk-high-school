import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ post }) {
  return (
    <article className="news-card">
      <Link
        to={`/news/${post.slug}`}
        className="news-card__media"
        aria-label={post.title}
      >
        <img src={post.image} alt="" loading="lazy" />
        <span className="tag">{post.category}</span>
      </Link>
      <div className="news-card__body">
        <time dateTime={post.date}>{post.displayDate}</time>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/news/${post.slug}`} className="link-arrow">
          Read More
        </Link>
      </div>
    </article>
  );
}
