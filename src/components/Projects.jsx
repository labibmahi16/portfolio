import Section from "./Section";
import Img from "./Img";
import { projects } from "../data";

function ProjectCard({ p, i }) {
  // 3D tilt following the cursor
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <article className="project card tilt" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="project-img">
        <Img src={p.image} alt={`${p.title} screenshot`} label={`add ${p.image}`} />
        <span className="num">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <div className="project-body">
        <span className="label">{p.tag}</span>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="chips small">
          {p.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        <div className="project-links">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer">
              Live site ↗
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer">
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index={3} title="projects">
      <div className="project-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
