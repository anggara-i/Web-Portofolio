"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const emailAddress = "anggaraputraindra4@gmail.com";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    setFormStatus("Your email app will open with the message ready to send.");
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-intro">
          <p className="contact-label">CONTACT ME</p>
          <h2>Let&apos;s Connect.</h2>
          <p className="contact-description">
            Have a question or want to talk? Send me a message or find me here.
          </p>
          <div className="contact-mini-info">
            <p><MapPin size={17} aria-hidden="true" /> Pasuruan, East Java, Indonesia</p>
            <p>Web Development</p>
          </div>
        </div>

        <form className="guest-form" onSubmit={handleSubmit}>
          <div className="guest-form-heading">
            <p className="contact-label">GUESTBOOK</p>
            <h3>Send me a message</h3>
          </div>

          <label className="guest-field">
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </label>

          <label className="guest-field">
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </label>

          <label className="guest-field">
            <span>Your message</span>
            <textarea name="message" placeholder="Write your message..." rows={4} required />
          </label>

          <button className="guest-submit" type="submit">
            <Mail size={17} aria-hidden="true" /> Send Message
          </button>
          <p className="guest-status" aria-live="polite">{formStatus}</p>
        </form>

        <div className="contact-cards" aria-label="Tautan kontak">
          <a href={`mailto:${emailAddress}`} className="contact-card">
            <span className="contact-icon"><Mail size={21} aria-hidden="true" /></span>
            <span className="contact-info"><strong>Email</strong><span>{emailAddress}</span></span>
            <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />
          </a>

          <a href="https://www.instagram.com/anggaaa_i" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="contact-info"><strong>Instagram</strong><span>@anggaaa_i</span></span>
            <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />
          </a>

          <a href="https://www.tiktok.com/@_angga420" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.6 7.1a6.8 6.8 0 0 1-4.2-1.5v8.1a6.1 6.1 0 1 1-5.3-6.1v3.4a2.8 2.8 0 1 0 1.9 2.7V2.5h3.4c.2 2.2 1.8 4 4.2 4.3v.3Z" />
              </svg>
            </span>
            <span className="contact-info"><strong>TikTok</strong><span>@_angga420</span></span>
            <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />
          </a>

          <a href="https://goo.gl/maps/tKTG2x15DHemQdAe6?g_st=ac" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon"><MapPin size={21} aria-hidden="true" /></span>
            <span className="contact-info"><strong>My Location</strong><span>Open pinned place</span></span>
            <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}