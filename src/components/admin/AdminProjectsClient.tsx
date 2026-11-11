"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Plus, RefreshCw, Search, ShieldCheck } from "lucide-react";
import AdminPortfolioShell from "@/components/admin/AdminPortfolioShell";
import { createClient } from "@/lib/supabase-browser";
import ProjectForm from "./ProjectForm";
import ProjectTable, { type Project } from "./ProjectTable";

interface Props {
  projects: Project[];
}

export default function AdminProjectsClient({ projects }: Props) {
  const [editingProject, setEditingProject] = useState<Project | undefined>();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const categories = useMemo(
    () => new Set(projects.map((project) => project.kategori.trim().toLowerCase())).size,
    [projects],
  );
  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return projects;

    return projects.filter((project) =>
      `${project.judul} ${project.kategori} ${project.keterangan}`
        .toLowerCase()
        .includes(query),
    );
  }, [projects, search]);

  function openNewProjectForm() {
    setEditingProject(undefined);
    setIsFormOpen(true);
    setNotice("");
  }

  function handleSuccess() {
    setEditingProject(undefined);
    setIsFormOpen(false);
    router.refresh();
  }

  async function handleLogout() {
    setIsLoggingOut(true);
    setNotice("");
    const { error } = await createClient().auth.signOut();
    if (error) {
      setNotice(`Gagal keluar: ${error.message}`);
      setIsLoggingOut(false);
      return;
    }

    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <AdminPortfolioShell
      headerActions={
        <button
          type="button"
          onClick={() => void handleLogout()}
          disabled={isLoggingOut}
          aria-label={isLoggingOut ? "Sedang keluar" : "Keluar dari admin"}
          className="admin-logout-button"
        >
          <LogOut size={15} />
          {isLoggingOut ? "Keluar..." : "Keluar"}
        </button>
      }
    >
      <section className="hero admin-dashboard-hero">
        <div className="hero-content">
          <p className="hero-label">PORTFOLIO MANAGEMENT</p>
          <h1>
            Kelola <span>proyek.</span>
          </h1>
          <h2>Ruang kerja untuk karya Indra Anggara Putra.</h2>
          <p className="hero-description">
            Perbarui daftar proyek dan pastikan setiap karya tampil dengan
            cerita terbaiknya di portfolio.
          </p>
          <div className="admin-hero-actions">
            <button type="button" onClick={() => router.refresh()}>
              <RefreshCw size={15} />
              Muat ulang
            </button>
            <button type="button" onClick={openNewProjectForm}>
              <Plus size={16} />
              Tambah proyek
            </button>
          </div>
        </div>

        <div className="admin-stats" aria-label="Ringkasan portfolio">
          <article className="admin-stat-card">
            <span>Total proyek</span>
            <strong>{String(projects.length).padStart(2, "0")}</strong>
            <small>Karya di portfolio</small>
          </article>
          <article className="admin-stat-card">
            <span>Kategori</span>
            <strong>{String(categories).padStart(2, "0")}</strong>
            <small>Bidang karya</small>
          </article>
          <article className="admin-stat-card admin-stat-source">
            <span><ShieldCheck size={14} /> Data portfolio</span>
            <strong>Supabase</strong>
            <small>Database terhubung</small>
          </article>
        </div>
      </section>

      {notice && (
        <p role="alert" className="admin-form-error admin-notice">
          {notice}
        </p>
      )}

      {isFormOpen && (
        <section className="admin-editor-section">
          <div className="admin-content-container">
            <ProjectForm
              key={editingProject?.pengenal ?? "new"}
              project={editingProject}
              onSuccess={handleSuccess}
              onCancel={() => {
                setEditingProject(undefined);
                setIsFormOpen(false);
              }}
            />
          </div>
        </section>
      )}

      <section className="projects-section admin-projects-section">
        <div className="projects-container">
          <div className="admin-projects-heading">
            <div className="projects-title">
              <p>DAFTAR KARYA</p>
              <h2>Proyek portfolio.</h2>
            </div>
            <label className="admin-search">
              <Search size={16} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Cari proyek..."
                aria-label="Cari proyek"
              />
            </label>
          </div>
          <ProjectTable
            projects={filteredProjects}
            onEdit={(project) => {
              setEditingProject(project);
              setIsFormOpen(true);
              setNotice("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </section>

      <footer className="footer admin-footer">
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Indra Anggara Putra. All Rights Reserved.</p>
          <p>Portfolio Admin</p>
        </div>
      </footer>
    </AdminPortfolioShell>
  );
}
