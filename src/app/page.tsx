import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/project";
import Contact from "../components/ui/contact";
import PortfolioBackground from "../components/portfolio-background";
import PortfolioShell from "@/components/PortfolioShell";
import { getProjects } from "@/services/projectService";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <PortfolioShell>
      <PortfolioBackground />

      <section id="home" className="hero" aria-labelledby="home-title">
        <div className="hero-content">
          <p className="hero-label">DESIGNING AND BUILDING FOR THE WEB</p>
          <h1 id="home-title">
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
            <Image
              src="/images/fotoku.webp"
              alt="Indra Anggara Putra"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 90vw, 40vw"
              preload
            />
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>Indra Anggara Putra</h3>
            <p>
              Personal portfolio of Indra Anggara Putra, a Software Engineering
              student at SMK Negeri 1 Pasuruan.
            </p>
          </div>

          <div className="footer-links">
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

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
    </PortfolioShell>
  );
}