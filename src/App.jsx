import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Journey from "./components/Journey";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { profile } from "./data";

export default function App() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Journey />
        <Gallery />
        <Contact />
      </main>
      <footer className="footer">
        <span className="dim">// </span>
        designed &amp; built by {profile.name} · React + Vite · deployed on Vercel
        <br />
        <span className="dim">return 0;</span>
      </footer>
    </>
  );
}
