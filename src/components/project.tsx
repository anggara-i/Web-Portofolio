export default function Projects() {
  const projects = [
    {
      title: "Student Management Dashboard",
      description:
        "A dashboard for organizing and viewing student records.",
      tech: "Next.js",
    },
    {
      title: "Personal Portfolio",
      description:
        "A focused portfolio for sharing my work, skills, and progress.",
      tech: "Next.js • TypeScript",
    },
    {
      title: "Trading Assistant",
      description:
        "A simple experiment in automated trading with AI-assisted logic.",
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
            <div className="project-card" key={index}>
              <span>0{index + 1}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.tech}</small>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}