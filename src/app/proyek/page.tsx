import Projects from "@/components/project";
import { getProjects } from "@/services/projectService";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse projects built by Indra Anggara Putra, a Software Engineering student and web developer in Pasuruan, Indonesia.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-slate-950">
      <Projects projects={projects} />
    </main>
  );
}