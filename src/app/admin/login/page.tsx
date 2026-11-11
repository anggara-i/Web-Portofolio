"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import AdminPortfolioShell from "@/components/admin/AdminPortfolioShell";
import { createClient } from "@/lib/supabase-browser";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: loginError } = await createClient().auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        setError("Email atau password tidak sesuai. Silakan coba lagi.");
        return;
      }

      router.replace("/admin/proyek");
      router.refresh();
    } catch (loginError) {
      setError(
        loginError instanceof Error
          ? `Tidak dapat masuk: ${loginError.message}`
          : "Tidak dapat terhubung. Periksa koneksi internet lalu coba lagi.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminPortfolioShell>
      <section className="hero admin-login-hero">
        <div className="hero-content">
          <p className="hero-label">PORTFOLIO CONTROL CENTER</p>
          <h1>
            Selamat datang, <span>Indra.</span>
          </h1>
          <h2>Ruang untuk mengelola karya dan perjalananmu.</h2>
          <p className="hero-description">
            Masuk ke area admin untuk memperbarui proyek yang kamu tampilkan di
            portfolio. Semua karya tetap membawa cerita dan identitasmu.
          </p>
          <a href="/" className="hero-button">
            Kembali melihat portfolio
          </a>
        </div>

        <div className="hero-image admin-login-form-wrap">
          <form onSubmit={handleLogin} className="admin-login-card">
            <div className="admin-login-heading">
              <span className="admin-login-icon">
                <ShieldCheck size={21} />
              </span>
              <div>
                <p className="admin-login-eyebrow">Area admin aman</p>
                <h2>Login admin</h2>
                <p>Gunakan akun Supabase kamu</p>
              </div>
            </div>

            <div className="admin-login-fields">
              <div>
                <label htmlFor="admin-email">
                  <Mail size={14} />
                  Email
                </label>
                <input
                  id="admin-email"
                  type="email"
                  autoComplete="username"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="email@contoh.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="admin-password">
                  <KeyRound size={14} />
                  Password
                  <span className="admin-password-note">Terlindungi</span>
                </label>
                <div className="admin-password-input">
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Masukkan password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <p role="alert" className="admin-form-error">
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} className="admin-login-submit">
              <LockKeyhole size={15} />
              {loading ? "Memverifikasi..." : "Masuk ke admin"}
            </button>
            <p className="admin-login-note">
              Halaman khusus pemilik portfolio. Jaga kerahasiaan akunmu.
            </p>
          </form>
        </div>
      </section>
    </AdminPortfolioShell>
  );
}
