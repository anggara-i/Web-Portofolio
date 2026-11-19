"use client";

import { LockKeyhole, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import PiMark from "@/components/pi-mark";

interface PortfolioShellProps {
  children: ReactNode;
}

export default function PortfolioShell({ children }: PortfolioShellProps) {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main
      id="main-content"
      className={`space-background ${isLight ? "light-mode" : ""}`}
    >
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <nav
        className={`navbar${isMenuOpen ? " menu-open" : ""}`}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="logo"
          aria-label="Portfolio Indra Anggara Putra"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="logo-mark" aria-hidden="true">
            <PiMark variant="nav" className="pi-mark" />
          </span>
          <span className="logo-name">
            PORTOFOLIO<span className="logo-dot">.</span>
          </span>
        </a>

        <div className="nav-links" id="portfolio-navigation">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>

        <div className="navbar-actions">
          <a
            href="/admin/login"
            className="admin-nav-shortcut"
            aria-label="Admin login"
            title="Admin login"
          >
            <LockKeyhole size={14} aria-hidden="true" />
            Admin
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsLight((light) => !light)}
            aria-label={
              isLight ? "Switch to dark theme" : "Switch to light theme"
            }
            aria-pressed={isLight}
          >
            {isLight ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {children}
    </main>
  );
}
