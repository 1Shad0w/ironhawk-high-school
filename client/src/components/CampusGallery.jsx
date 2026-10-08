import React, { useState } from "react";
import { campusSpaces } from "../data/campus.js";
import Lightbox from "./Lightbox.jsx";
import Icon from "./Icons.jsx";

export default function CampusGallery({ items = campusSpaces }) {
  const [index, setIndex] = useState(null);

  return (
    <>
      <div className="campus-gallery">
        {items.map((space, i) => (
          <button
            type="button"
            key={space.id}
            className="gallery-item"
            onClick={() => setIndex(i)}
            aria-label={`View larger image: ${space.title}`}
          >
            <img src={space.src} alt={space.title} loading="lazy" />
            <span className="gallery-item__zoom" aria-hidden="true">
              <Icon name="zoom" size={18} />
            </span>
            <span className="gallery-item__label">{space.title}</span>
          </button>
        ))}
      </div>

      {index !== null && (
        <Lightbox
          items={items}
          index={index}
          onClose={() => setIndex(null)}
          onNavigate={setIndex}
        />
      )}
    </>
  );
}
