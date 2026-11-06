import Section from "./Section";
import { skills } from "../data";

// Skills rendered like a code object — the "CSE" flavour, kept readable.
export default function Skills() {
  const entries = Object.entries(skills);
  return (
    <Section id="skills" index={2} title="skills">
      <div className="code-card">
        <div className="term-bar">
          <i className="r" />
          <i className="y" />
          <i className="g" />
          <span>skills.ts</span>
        </div>
        <pre className="code">
          <span className="k">const</span> <span className="v">skills</span> = {"{"}
          {"\n"}
          {entries.map(([key, list], i) => (
            <span key={key} className="row" style={{ "--d": `${i * 90}ms` }}>
              {"  "}
              <span className="p">{key}</span>: [
              {list.map((s, j) => (
                <span key={s}>
                  <span className="s chip-s">"{s}"</span>
                  {j < list.length - 1 ? ", " : ""}
                </span>
              ))}
              ],
              {"\n"}
            </span>
          ))}
          {"}"};
        </pre>
      </div>
    </Section>
  );
}
