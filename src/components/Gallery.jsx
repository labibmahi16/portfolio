import { useEffect, useState } from "react";
import Section from "./Section";
import Img from "./Img";
import { gallery, photography } from "../data";

export default function Gallery() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section id="gallery" index={6} title="gallery">
      <p className="dim gallery-note">
        Through the lens — photography is how I look at the world when I'm not looking at a screen.
      </p>
      {photography.url && (
        <a className="ig-banner" href={photography.url} target="_blank" rel="noreferrer">
          <span className="ig-icon">📷</span>
          <span>
            <b>{photography.handle}</b>
            <small>more of my photography on Instagram ↗</small>
          </span>
        </a>
      )}
      <div className="gallery">
        {gallery.map((g, i) => (
          <button key={g.src} className="shot" onClick={() => setOpen(g)} aria-label={`Open ${g.caption}`}>
            <Img src={g.src} alt={g.caption} label={g.caption} />
            <span className="exif">
              {g.caption} · f/2.8 · 1/250s
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <Img src={open.src} alt={open.caption} label={open.caption} />
          <span className="lb-caption">{open.caption} — press Esc to close</span>
        </div>
      )}
    </Section>
  );
}
