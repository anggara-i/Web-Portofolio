import type { ProjectRecord } from "@/services/projectService";
import ProjectImage from "./project-image";

interface ProjectsProps {
  projects: ProjectRecord[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="projects-container">
        <div className="projects-title">
          <p>MY PROJECTS</p>
          <h2 id="projects-heading">Things I Have Built.</h2>
        </div>

        <div className="projects-grid">
          {projects.length === 0 && (
            <p>No projects are available right now. Please check back soon.</p>
          )}
          {projects.map((project, index) => (
            <article className="project-card" key={project.pengenal}>
              {project.gambar && (
                <ProjectImage
                  src={project.gambar}
                  title={project.judul}
                  category={project.kategori}
                />
              )}
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{project.judul}</h3>
              {project.keterangan && <p>{project.keterangan}</p>}
              {project.kategori && <small>{project.kategori}</small>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}