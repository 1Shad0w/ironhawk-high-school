import React, { useCallback, useEffect } from "react";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  const next = useCallback(
    () => onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate]
  );
  const prev = useCallback(
    () => onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [next, prev, onClose]);

  if (!item) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — image viewer`}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        &times;
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={(event) => {
          event.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
      >
        &#8249;
      </button>

      <figure
        className="lightbox__figure"
        onClick={(event) => event.stopPropagation()}
      >
        <img src={item.src} alt={item.title} />
        <figcaption className="lightbox__caption">
          <strong>{item.title}</strong>
          <span>{item.description}</span>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={(event) => {
          event.stopPropagation();
          next();
        }}
        aria-label="Next image"
      >
        &#8250;
      </button>
    </div>
  );
}
