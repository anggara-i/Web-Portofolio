export default function Projects() {
  const projects = [
    {
      title: "Website Pelanggaran Siswa",
      description: "Website untuk mengelola dan menampilkan data pelanggaran siswa.",
      tech: "Next.js",
    },
    {
      title: "Website Portfolio",
      description: "Website portfolio pribadi untuk menampilkan profil, kemampuan, dan project.",
      tech: "Next.js • TypeScript",
    },
    {
      title: "EA trade",
      description: "kemampuan trading otomatis yang dilakukan oleh AI sederhana.",
      tech: "HTML • CSS • JavaScript",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-title">
          <p>MY PROJECTS</p>
          <h2>Things I Have Built.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
