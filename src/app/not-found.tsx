import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import PiMark from "../components/pi-mark";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="error-page space-background">
      <div className="sky-scene error-sky-scene" aria-hidden="true">
        <div className="planet-core" />
        <div className="planet-fragment shard-one" />
        <div className="planet-fragment shard-two" />
        <div className="planet-fragment shard-three" />
        <div className="morning-sun" />
        <div className="morning-cloud-sea" />
        <div className="morning-cloud cloud-one" />
        <div className="morning-cloud cloud-two" />
        <div className="morning-cloud cloud-three" />
        <div className="morning-cloud cloud-four" />
        <div className="morning-cloud cloud-five" />
      </div>

      <div className="stars" aria-hidden="true" />
      <div className="portfolio-grid-background" aria-hidden="true" />
      <div className="grid-background" aria-hidden="true" />

      <div className="error-content">
        <div className="brand-badge" aria-label="Project logo">
          <div className="brand-mark" aria-hidden="true">
            <PiMark variant="not-found" className="brand-pi-mark" />
          </div>
          <span className="brand-text">PORTFOLIO<span className="brand-dot">.</span></span>
        </div>

        <div className="error-number-wrap">
          <span className="error-kicker">Lost in the stack</span>
          <h1>404</h1>
        </div>

        <h2>Project Not Found</h2>

        <p>
          The page you were trying to open is missing, moved, or never existed in this portfolio.
        </p>

        <div className="error-buttons">
          <Link href="/#projects" className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <Link href="/" className="btn-secondary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="divider">
          <span />
          <Sparkles className="h-4 w-4" />
          <span />
        </div>

        <footer>© 2026 Indra Anggara Putra. All Rights Reserved.</footer>
      </div>
    </main>
  );
}