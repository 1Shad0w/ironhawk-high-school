import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedArticle({ post }) {
  if (!post) return null;

  return (
    <Link to={`/news/${post.slug}`} className="featured-article">
      <img src={post.image} alt="" />
      <div className="featured-article__overlay" />
      <div className="featured-article__content">
        <div className="featured-article__meta">
          <span className="tag tag--light">{post.category}</span>
          <time dateTime={post.date}>{post.displayDate}</time>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
}
