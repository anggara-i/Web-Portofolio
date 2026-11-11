"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import { removeProject } from "@/actions/projectActions";

export interface Project {
  pengenal: number;
  judul: string;
  kategori: string;
  gambar: string;
  keterangan: string;
}

interface ProjectTableProps {
  projects: Project[];
  onEdit: (project: Project) => void;
}

export default function ProjectTable({
  projects,
  onEdit,
}: ProjectTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  function handleDelete(pengenal: number) {
    const confirmed = window.confirm(
      "Yakin ingin menghapus proyek ini? Tindakan ini tidak dapat dibatalkan.",
    );
    if (!confirmed) return;

    setMessage("");
    startTransition(async () => {
      const result = await removeProject(pengenal);
      setMessage(result.message);
      if (result.success) router.refresh();
    });
  }

  return (
    <div className="admin-project-list">
      {message && (
        <p role="status" className="admin-table-message">
          {message}
        </p>
      )}
      {projects.length === 0 ? (
        <div className="admin-empty-projects">
          <p>Belum ada proyek yang cocok.</p>
          <span>Coba kata kunci lain atau tambahkan karya baru.</span>
        </div>
      ) : (
        projects.map((project, index) => (
          <article className="admin-project-card" key={project.pengenal}>
            <div className="admin-project-image">
              {project.gambar && (
                <img
                  src={project.gambar}
                  alt={`Pratinjau ${project.judul}`}
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
              )}
              <span>#{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="admin-project-details">
              <div className="admin-project-meta">
                <span>{project.kategori}</span>
                <small>ID {project.pengenal}</small>
              </div>
              <h3>{project.judul}</h3>
              <p>{project.keterangan}</p>
              <div className="admin-project-actions">
                <button type="button" onClick={() => onEdit(project)}>
                  <Pencil size={14} />
                  Edit
                </button>
                <button
                  type="button"
                  disabled={isPending}
                  onClick={() => handleDelete(project.pengenal)}
                >
                  <Trash2 size={14} />
                  {isPending ? "Menghapus..." : "Hapus"}
                </button>
              </div>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
