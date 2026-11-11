
"use client";

import { useState, useTransition } from "react";
import { addProject, editProject } from "@/actions/projectActions";

interface ProjectFormProps {
  project?: {
    pengenal: number;
    judul: string;
    kategori: string;
    gambar: string;
    keterangan: string;
  };
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function ProjectForm({
  project,
  onSuccess,
  onCancel,
}: ProjectFormProps) {
  const [judul, setJudul] = useState(project?.judul ?? "");
  const [kategori, setKategori] = useState(project?.kategori ?? "");
  const [gambar, setGambar] = useState(project?.gambar ?? "");
  const [keterangan, setKeterangan] = useState(
    project?.keterangan ?? ""
  );

  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const data = {
      judul,
      kategori,
      gambar,
      keterangan,
    };

    startTransition(async () => {
      const result = project
        ? await editProject(project.pengenal, data)
        : await addProject(data);

      setMessage(result.message);

      if (result.success) {
        if (!project) {
          setJudul("");
          setKategori("");
          setGambar("");
          setKeterangan("");
        }

        onSuccess?.();
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          {project ? "Perbarui portfolio" : "Karya baru"}
        </p>
        <h2 className="mt-1 text-xl font-semibold text-white">
          {project ? "Edit proyek" : "Tambah proyek"}
        </h2>
      </div>

      <div>
        <label className="mb-2 block text-xs font-medium text-slate-300">
          Judul Proyek
        </label>
        <input
          type="text"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          placeholder="Contoh: Simple Calculator"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-400/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-medium text-slate-300">
          Kategori
        </label>
        <input
          type="text"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          placeholder="Contoh: Aplikasi Web"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-400/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-medium text-slate-300">
          URL Gambar
        </label>
        <input
          type="url"
          value={gambar}
          onChange={(e) => setGambar(e.target.value)}
          placeholder="https://... atau /images/nama-file.png"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-400/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-medium text-slate-300">
          Keterangan
        </label>
        <textarea
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
          placeholder="Jelaskan proyek kamu..."
          required
          rows={4}
          className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-400/10"
        />
      </div>

      {message && (
        <p role="status" className={`rounded-xl border px-4 py-3 text-sm ${message.includes("berhasil") ? "border-emerald-300/15 bg-emerald-300/[0.06] text-emerald-200" : "border-rose-300/15 bg-rose-300/[0.06] text-rose-200"}`}>
          {message}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full border border-cyan-300/60 bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:opacity-50"
        >
          {isPending
            ? "Menyimpan..."
            : project
              ? "Simpan Perubahan"
              : "Tambah Proyek"}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Tutup
          </button>
        )}
      </div>
    </form>
  );
}
