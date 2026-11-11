"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import PiMark from "@/components/pi-mark";
import PortfolioBackground from "@/components/portfolio-background";

interface AdminPortfolioShellProps {
  children: ReactNode;
  headerActions?: ReactNode;
}

export default function AdminPortfolioShell({
  children,
  headerActions,
}: AdminPortfolioShellProps) {
  const [isLight, setIsLight] = useState(false);

  return (
    <main className={`space-background ${isLight ? "light-mode" : ""}`}>
      <PortfolioBackground />

      <nav className="navbar admin-navbar" aria-label="Navigasi admin">
        <a href="/" className="logo" aria-label="Portfolio Indra Anggara Putra">
          <span className="logo-mark" aria-hidden="true">
            <PiMark variant="admin-nav" className="pi-mark" />
          </span>
          <span className="logo-name">
            PORTOFOLIO<span className="logo-dot">.</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="admin-navbar-actions">
          {headerActions}
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
            type="button"
            className="theme-toggle"
            onClick={() => setIsLight((light) => !light)}
            aria-label={isLight ? "Aktifkan tema malam" : "Aktifkan tema terang"}
          >
            {isLight ? "🌙" : "☀️"}
          </button>
          <a
            href="/"
            className="admin-nav-home"
            aria-label="Buka portfolio"
            title="Buka portfolio"
          >
            <ArrowUpRight size={17} />
          </a>
        </div>
      </nav>

      <div className="admin-portfolio-content">{children}</div>
    </main>
  );
}
