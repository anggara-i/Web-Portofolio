
"use server";

import { createClient } from "@/lib/supabase-server";
import {
  createProject,
  updateProject,
  deleteProject,
  type ProjectInput,
} from "@/services/projectService";
import { revalidatePath } from "next/cache";

async function checkAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Akses ditolak. Silakan login terlebih dahulu.");
  }
}

function validateProject(project: ProjectInput) {
  if (
    !project.judul.trim() ||
    !project.kategori.trim() ||
    !project.gambar.trim() ||
    !project.keterangan.trim()
  ) {
    throw new Error("Semua kolom proyek wajib diisi.");
  }
}

// Menambahkan proyek
export async function addProject(project: ProjectInput) {
  try {
    await checkAdmin();
    validateProject(project);

    await createProject(project);

    revalidatePath("/admin/proyek");
    revalidatePath("/proyek");
    revalidatePath("/");

    return { success: true, message: "Proyek berhasil ditambahkan." };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Gagal menambahkan proyek.",
    };
  }
}

// Mengedit proyek
export async function editProject(
  pengenal: number,
  project: ProjectInput
) {
  try {
    await checkAdmin();
    validateProject(project);

    if (!Number.isInteger(pengenal) || pengenal <= 0) {
      throw new Error("ID proyek tidak valid.");
    }

    await updateProject(pengenal, project);

    revalidatePath("/admin/proyek");
    revalidatePath("/proyek");
    revalidatePath("/");

    return { success: true, message: "Proyek berhasil diperbarui." };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Gagal mengedit proyek.",
    };
  }
}

// Menghapus proyek
export async function removeProject(pengenal: number) {
  try {
    await checkAdmin();

    if (!Number.isInteger(pengenal) || pengenal <= 0) {
      throw new Error("ID proyek tidak valid.");
    }

    await deleteProject(pengenal);

    revalidatePath("/admin/proyek");
    revalidatePath("/proyek");
    revalidatePath("/");

    return { success: true, message: "Proyek berhasil dihapus." };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Gagal menghapus proyek.",
    };
  }
}
