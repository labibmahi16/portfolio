import { useEffect, useState } from "react";
import { profile } from "../data";

const items = ["about", "skills", "projects", "research", "journey", "gallery", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="progress" style={{ width: `${progress}%` }} />
      <a href="#top" className="logo">
        <span className="dim">~/</span>
        {profile.handle}
        <span className="caret">_</span>
      </a>
      <nav>
        {items.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
            {id}
          </a>
        ))}
      </nav>
    </header>
  );
}
