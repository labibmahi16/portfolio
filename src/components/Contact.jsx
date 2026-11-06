import { useState } from "react";
import Section from "./Section";
import { links, profile } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <Section id="contact" index={7} title="contact">
      <div className="card contact">
        <h3>Let's build something together.</h3>
        <p>
          Open to internships, collaborations, research projects and interesting ideas.
          Based in {profile.location}.
        </p>
        <button className="btn primary" onClick={copy}>
          {copied ? "Copied ✓" : links.email}
        </button>
        <div className="socials">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {links.facebook && (
            <a href={links.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          )}
          <a href={links.instagram} target="_blank" rel="noreferrer">
            Digital Cams BD
          </a>
          <a href={`mailto:${links.email}`}>Email</a>
        </div>
      </div>
    </Section>
  );
}
