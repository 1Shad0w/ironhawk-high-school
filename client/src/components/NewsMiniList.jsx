import React from "react";
import { Link } from "react-router-dom";

export default function NewsMiniList({ posts = [] }) {
  return (
    <div className="news-mini">
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={`/news/${post.slug}`}
          className="news-mini__item"
        >
          <img
            className="news-mini__thumb"
            src={post.image}
            alt=""
            loading="lazy"
          />
          <div>
            <time dateTime={post.date}>{post.displayDate}</time>
            <h4>{post.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
