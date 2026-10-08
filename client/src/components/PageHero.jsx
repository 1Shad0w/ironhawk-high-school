import React from "react";
import Breadcrumbs from "./Breadcrumbs.jsx";

export default function PageHero({ title, intro, image, breadcrumbs }) {
  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero__bg">
          <img src={image} alt="" />
        </div>
      )}
      <div className="page-hero__overlay" />
      <div className="container page-hero__inner">
        <Breadcrumbs items={breadcrumbs || [{ label: title }]} />
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}
