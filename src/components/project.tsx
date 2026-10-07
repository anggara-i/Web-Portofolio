"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

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