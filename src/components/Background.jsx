import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks";

// Animated "network graph" — nodes, edges, faint binary rain, mouse interaction.
// Subtle nod to graph theory / data structures without shouting about it.
export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = prefersReducedMotion();
    let w, h, dpr, raf;
    const mouse = { x: -9999, y: -9999 };
    let nodes = [];
    let drops = [];
    const GLYPHS = "01";

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.floor((w * h) / 16000), 90);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.8,
      }));

      const cols = Math.floor(w / 28);
      drops = Array.from({ length: cols }, (_, i) => ({
        x: i * 28 + 8,
        y: Math.random() * h,
        speed: Math.random() * 0.4 + 0.15,
        len: Math.floor(Math.random() * 8) + 4,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // faint binary rain
      ctx.font = "12px 'JetBrains Mono', monospace";
      for (const d of drops) {
        for (let k = 0; k < d.len; k++) {
          const a = (1 - k / d.len) * 0.07;
          ctx.fillStyle = `rgba(94, 234, 212, ${a})`;
          ctx.fillText(GLYPHS[(k + Math.floor(d.y / 14)) % 2], d.x, d.y - k * 14);
        }
        if (!reduced) d.y += d.speed;
        if (d.y - d.len * 14 > h) d.y = 0;
      }

      // nodes + edges
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        // gentle pull toward the cursor
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 160 && dist > 1 && !reduced) {
          n.x += (dx / dist) * 0.35;
          n.y += (dy / dist) * 0.35;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(125, 211, 252, ${(1 - d / 130) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // edges to the cursor
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(94, 234, 212, ${(1 - dm / 170) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(186, 230, 253, 0.65)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}
