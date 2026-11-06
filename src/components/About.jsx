import { useRef, useState, useEffect } from "react";
import Section from "./Section";
import Img from "./Img";
import { profile, education, stats, interests, languages } from "../data";
import { useCountUp } from "../hooks";

function Stat({ value, suffix, label, noCount }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), {
      threshold: 0.5,
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, seen && !noCount);
  return (
    <div ref={ref} className="stat">
      <b>
        {noCount ? value : n}
        {suffix}
      </b>
      <span>{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" index={1} title="about">
      <div className="about-grid">
        <div className="portrait">
          <div className="portrait-frame">
            <Img src={profile.photo} alt={profile.name} label="add /images/profile.jpg" />
            <div className="scan" />
          </div>
          <span className="tag t1">&lt;student /&gt;</span>
          <span className="tag t2">{"{ photographer }"}</span>
        </div>

        <div className="about-text">
          <p>{profile.summary}</p>
          <div className="edu card">
            <span className="label">education</span>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p className="dim">
              {education.place} · {education.expected}
            </p>
          </div>
          <div className="chips">
            <span className="label">interests</span>
            {interests.map((i) => (
              <span key={i} className="chip">
                {i}
              </span>
            ))}
          </div>
          <div className="chips">
            <span className="label">languages</span>
            {languages.map((l) => (
              <span key={l.name} className="chip">
                {l.name} · {l.level}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="stats">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </Section>
  );
}
