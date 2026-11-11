
import { createClient } from "@/lib/supabase-server";

export interface ProjectInput {
  judul: string;
  kategori: string;
  gambar: string;
  keterangan: string;
}

function toDatabaseProject(project: ProjectInput) {
  return {
    title: project.judul,
    category: project.kategori,
    image: project.gambar,
    description: project.keterangan,
  };
}

// Mengambil semua data proyek
export async function getProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Proyek")
    .select("id, title, category, image, description")
    .order("id", { ascending: true });

  if (error) throw new Error(error.message);

  return data.map((project) => ({
    pengenal: project.id,
    judul: project.title ?? "",
    kategori: project.category ?? "",
    gambar: project.image ?? "",
    keterangan: project.description ?? "",
  }));
}

// Menambahkan proyek
export async function createProject(project: ProjectInput) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("Proyek")
    .insert(toDatabaseProject(project));

  if (error) throw new Error(error.message);
}

// Mengedit proyek
export async function updateProject(
  pengenal: number,
  project: ProjectInput
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("Proyek")
    .update(toDatabaseProject(project))
    .eq("id", pengenal);

  if (error) throw new Error(error.message);
}

// Menghapus proyek
export async function deleteProject(pengenal: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("Proyek")
    .delete()
    .eq("id", pengenal);

  if (error) throw new Error(error.message);
}
