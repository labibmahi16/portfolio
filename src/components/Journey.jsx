import Section from "./Section";
import { timeline, achievements } from "../data";

// Experience styled as a `git log`
export default function Journey() {
  return (
    <Section id="journey" index={5} title="journey">
      <div className="gitlog">
        {timeline.map((t, i) => (
          <div key={t.hash} className="commit" style={{ "--d": `${i * 120}ms` }}>
            <div className="node">
              <span className="dot" />
              {i < timeline.length - 1 && <span className="line" />}
            </div>
            <div className="commit-body">
              <div className="commit-meta">
                <code className="hash">{t.hash}</code>
                <span className="dim">{t.date}</span>
              </div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub">Achievements &amp; certificates</h3>
      <ul className="achievements">
        {achievements.map((a) => (
          <li key={a}>
            <span className="prompt">✓</span> {a}
          </li>
        ))}
      </ul>
    </Section>
  );
}
