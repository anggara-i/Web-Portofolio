"use client";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/project";
import Contact from "../components/ui/contact";
import PiMark from "../components/pi-mark";
import { useState } from "react";

export default function Home() {
  const [isLight, setIsLight] = useState(false);

  return (
  <main className={`space-background ${isLight ? "light-mode" : ""}`}>
      <div className="sky-scene" aria-hidden="true">
        <div className="evening-planet" />
        <div className="cosmic-dust" />
        <div className="meteor-streak" />
        <div className="morning-sun" />
        <div className="morning-cloud-sea" />
        <div className="morning-cloud cloud-one" />
        <div className="morning-cloud cloud-two" />
        <div className="morning-cloud cloud-three" />
        <div className="morning-cloud cloud-four" />
        <div className="morning-cloud cloud-five" />
      </div>
      <div className="stars" />
      <div className="portfolio-grid-background" aria-hidden="true" />
      <div className="corner-brand" aria-label="Indra Anggara Putra portfolio">
        <PiMark variant="corner" className="pi-mark" />
      </div>

      <nav className="navbar">
        <a href="#home" className="logo" aria-label="Portfolio Indra Anggara Putra">
          <span className="logo-mark" aria-hidden="true"><PiMark variant="nav" className="pi-mark" /></span>
          <span className="logo-name">PORTOFOLIO<span className="logo-dot">.</span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
        className="theme-toggle"
        onClick={() => setIsLight(!isLight)}
        aria-label="Toggle theme"
      >
      {isLight ? "🌙" : "☀️"}
      </button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO MY PORTFOLIO</p>
          <h1>
            Hello, I&apos;m <span>Indra Anggara Putra</span>
          </h1>
          <h2>Web Development</h2>
          <p className="hero-description">
            I&apos;m a Software Engineering student learning to build clear,
            useful web experiences with code.
          </p>
          <a href="#projects" className="hero-button">
            Explore My Projects
          </a>
        </div>

        <div className="hero-image">
          <div className="image-frame">
            <img src="/images/fotoku.jpg" alt="Indra Anggara Putra" />
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />

<footer className="footer">

  <div className="footer-container">

    {/* PROFILE */}
    <div className="footer-about">
      <h3>Indra Anggara Putra</h3>

      <p>
        Personal portfolio of Indra Anggara Putra,
        a Software Engineering student at SMK Negeri 1 Pasuruan.
      </p>
    </div>


    {/* EXPLORE */}
    <div className="footer-links">
      <h4>EXPLORE</h4>

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>


    {/* CONTACT */}
    <div className="footer-contact">
      <h4>GET IN TOUCH</h4>

      <a href="mailto:anggaraputraindra4@gmail.com">
        anggaraputraindra4@gmail.com
      </a>

      <a
        href="https://www.instagram.com/anggaaa_i"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>

      <p>Pasuruan, East Java, Indonesia</p>
    </div>

  </div>


  <div className="footer-bottom">
    <p>© 2026 Indra Anggara Putra. All Rights Reserved.</p>

    <p>Personal Portfolio</p>
  </div>

</footer>
    </main>
  );
}
