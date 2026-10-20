"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Project = {
  id: number;
  title: string;
  description: string | null;
  category: string | null;
  image: string | null;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("Proyek")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }

      setProjects(data ?? []);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-title">
          <p>MY PROJECTS</p>
          <h2>Things I Have Built.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              {project.image && (
                <img
                  className="project-card-image"
                  src={project.image}
                  alt={`Pratinjau proyek ${project.title}`}
                  onError={(event) => {
                    console.error(
                      `Error loading project image "${project.image}":`,
                      event.currentTarget.src,
                    );
                    if (
                      project.category?.trim().toLowerCase() === "figma" &&
                      !event.currentTarget.src.endsWith("/images/figma.png")
                    ) {
                      event.currentTarget.src = "/images/figma.png";
                      return;
                    }
                    event.currentTarget.hidden = true;
                  }}
                />
              )}
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.category}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}