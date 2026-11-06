import { useEffect, useRef } from "react";

// Soft light that trails the cursor (desktop only; hidden on touch via CSS)
export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    let x = 0, y = 0, tx = 0, ty = 0, raf;
    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (ref.current)
        ref.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
