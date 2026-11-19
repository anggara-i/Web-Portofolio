# Web Portfolio - Indra Anggara Putra

Portfolio pribadi berbasis Next.js untuk menampilkan profil, skills, dan
project.

## Progres Supabase

- Supabase sudah terhubung ke aplikasi.
- Data project diambil dari tabel `Proyek` dan ditampilkan di halaman utama.
- Gambar project menggunakan path lokal di `public/images`.
- Build lokal berhasil.
- Agar deploy Vercel berhasil, tambahkan `NEXT_PUBLIC_SUPABASE_URL` dan
  `NEXT_PUBLIC_SUPABASE_ANON_KEY` di Environment Variables Vercel.
- Tambahkan `NEXT_PUBLIC_SITE_URL` berisi alamat utama situs, misalnya
  `https://nama-domain-anda.com`, agar URL sitemap dan metadata sosial
  menggunakan domain produksi. Tanpa variabel tersebut, aplikasi memakai
  `VERCEL_PROJECT_PRODUCTION_URL` atau `VERCEL_URL` jika tersedia, lalu
  `http://localhost:3000` sebagai fallback lokal.
- Robots dapat diakses melalui `/robots.txt`, dan sitemap XML melalui
  `/sitemap.xml`.

## Teknologi

Next.js · React · TypeScript · Supabase

## Menjalankan Project

```bash
npm install
npm run dev
```
