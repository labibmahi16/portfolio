import { useEffect, useState } from "react";
import { profile, links } from "../data";
import { prefersReducedMotion } from "../hooks";
import Img from "./Img";

function useTypewriter(words, speed = 55, pause = 1700) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return;
    }
    let i = 0, j = 0, del = false, t;
    const step = () => {
      const word = words[i];
      if (!del) {
        j++;
        setText(word.slice(0, j));
        if (j === word.length) {
          del = true;
          t = setTimeout(step, pause);
          return;
        }
      } else {
        j--;
        setText(word.slice(0, j));
        if (j === 0) {
          del = false;
          i = (i + 1) % words.length;
        }
      }
      t = setTimeout(step, del ? speed / 2 : speed);
    };
    t = setTimeout(step, 600);
    return () => clearTimeout(t);
  }, [words, speed, pause]);
  return text;
}

// Terminal that "types" a short session
const SCRIPT = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "k.m mahir labib" },
  { type: "cmd", text: "cat education.txt" },
  { type: "out", text: "B.Sc. CSE · BRAC University · '29" },
  { type: "cmd", text: "ls ./interests" },
  { type: "out", text: "software/  research/  photography/  startups/" },
  { type: "cmd", text: "git status" },
  { type: "out", text: "on branch main — building something new ✓" },
];

function Terminal() {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (prefersReducedMotion()) {
      setLines(SCRIPT);
      return;
    }
    let cancelled = false;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      await sleep(900);
      for (const line of SCRIPT) {
        if (cancelled) return;
        if (line.type === "cmd") {
          for (let k = 1; k <= line.text.length; k++) {
            if (cancelled) return;
            setTyping(line.text.slice(0, k));
            await sleep(45);
          }
          await sleep(250);
          setTyping("");
          setLines((l) => [...l, line]);
        } else {
          await sleep(200);
          setLines((l) => [...l, line]);
          await sleep(350);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="terminal">
      <div className="term-bar">
        <i className="r" />
        <i className="y" />
        <i className="g" />
        <span>mahir@bracu: ~</span>
      </div>
      <div className="term-body">
        {lines.map((l, i) =>
          l.type === "cmd" ? (
            <div key={i}>
              <span className="prompt">$</span> {l.text}
            </div>
          ) : (
            <div key={i} className="out">
              {l.text}
            </div>
          )
        )}
        <div>
          <span className="prompt">$</span> {typing}
          <span className="caret">▍</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(profile.roles);
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <div className="avatar">
          <div className="avatar-ring" />
          <div className="avatar-img">
            <Img src={profile.photo} alt={profile.name} label="photo" />
          </div>
          <span className="avatar-status">
            <i /> open to opportunities
          </span>
        </div>
        <p className="eyebrow">// hello, world</p>
        <h1>
          Hi, I'm <span className="grad">{profile.name}</span>
        </h1>
        <p className="role">
          <span className="dim">&gt; </span>
          {role}
          <span className="caret">|</span>
        </p>
        <p className="lead">{profile.summary}</p>
        <div className="cta">
          <a className="btn primary" href="#projects">
            View projects
          </a>
          <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
      <Terminal />
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
