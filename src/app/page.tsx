"use client";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/project";
import Contact from "../components/ui/contact";
import PiMark from "../components/pi-mark";
import PortfolioBackground from "../components/portfolio-background";
import { LockKeyhole, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={`space-background ${isLight ? "light-mode" : ""}`}>
      <PortfolioBackground />

      <nav className={`navbar${isMenuOpen ? " menu-open" : ""}`}>
        <a href="#home" className="logo" aria-label="Portfolio Indra Anggara Putra">
          <span className="logo-mark" aria-hidden="true"><PiMark variant="nav" className="pi-mark" /></span>
          <span className="logo-name">PORTOFOLIO<span className="logo-dot">.</span></span>
        </a>

        <div className="nav-links" id="portfolio-navigation">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isMenuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <div className="navbar-actions">
          <a
            href="/admin/login"
            className="admin-nav-shortcut"
            aria-label="Login admin"
            title="Login admin"
          >
            <LockKeyhole size={14} aria-hidden="true" />
            Admin
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsLight((light) => !light)}
            aria-label="Toggle theme"
            aria-pressed={isLight}
          >
            {isLight ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-label">DESIGNING AND BUILDING FOR THE WEB</p>
          <h1>
            Hello, I&apos;m <span>Indra Anggara Putra</span>
          </h1>
          <h2>Turning ideas into thoughtful web experiences.</h2>
          <p className="hero-description">
            I&apos;m a Software Engineering student at SMK Negeri 1 Pasuruan. I
            created this portfolio to share my work, keep growing my skills, and
            take meaningful steps toward the future I want to build.
          </p>
          <a href="#projects" className="hero-button">
            See What I&apos;ve Built
          </a>
        </div>

        <div className="hero-image">
          <div className="image-frame">
            <img
              src="/images/fotoku.webp"
              alt="Indra Anggara Putra"
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
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