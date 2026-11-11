import AdminProjectsClient from "@/components/admin/AdminProjectsClient";
import { getProjects } from "@/services/projectService";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return <AdminProjectsClient projects={projects} />;
}
