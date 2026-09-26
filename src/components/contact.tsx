export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* BAGIAN KIRI */}
        <div className="contact-intro">
          <p className="contact-label">CONTACT ME</p>

          <h2>Let's Connect.</h2>

          <p className="contact-description">
            Find me through any of the platforms below.
          </p>

          <div className="contact-mini-info">
            <p>📍 Pasuruan, East Java, Indonesia</p>
            <p>💻 Web Development</p>
          </div>
        </div>


        {/* BAGIAN KANAN */}
        <div className="contact-cards">

          <a
            href="mailto:anggaraputraindra4@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">✉</div>

            <div className="contact-info">
              <h3>Email</h3>
              <p>anggaraputraindra4@gmail.com</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>


          <a
            href="https://www.instagram.com/anggaaa_i"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">◎</div>

            <div className="contact-info">
              <h3>Instagram</h3>
              <p>@anggaaa_i</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>


          <a
            href="https://www.tiktok.com/@_angga420"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">♪</div>

            <div className="contact-info">
              <h3>TikTok</h3>
              <p>@_angga420</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}