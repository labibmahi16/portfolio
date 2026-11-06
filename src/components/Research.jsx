import Section from "./Section";
import { research } from "../data";

export default function Research() {
  return (
    <Section id="research" index={4} title="research">
      <div className="paper-list">
        {research.map((r) => (
          <div key={r.title} className="card paper">
            <span className="label">paper · {r.status}</span>
            <h3>{r.title}</h3>
            <p className="dim">{r.role}</p>
            {r.authors && <p className="authors">Authors: {r.authors}</p>}
            <p>{r.summary}</p>
            {r.venue && <p className="venue">📍 {r.venue}</p>}
            {r.link && (
              <a className="paper-link" href={r.link} target="_blank" rel="noreferrer">
                {r.linkLabel || "Read paper ↗"}
              </a>
            )}
            <div className="chips small">
              {r.keywords.map((k) => (
                <span key={k} className="chip">
                  {k}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
