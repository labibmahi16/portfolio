import { useReveal } from "../hooks";

export default function Section({ id, index, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="section">
      <div ref={ref} className="reveal">
        <h2 className="section-title">
          <span className="idx">{String(index).padStart(2, "0")}</span>
          <span className="dim">// </span>
          {title}
          <span className="rule" />
        </h2>
        {children}
      </div>
    </section>
  );
}
