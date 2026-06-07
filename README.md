# Portofolio AI Engineer

Website portofolio personal yang minimalis, cepat, dan mobile-first untuk seorang AI Engineer. Dibuat dengan **Astro + Tailwind CSS + TypeScript**. Mendukung **dark / light mode**, animasi halus saat scroll, dan optimasi SEO (Open Graph + sitemap).

> ⚠️ Konten saat ini masih memakai **contoh** (nama "Raka Pratama", email & link dummy). Ganti dengan data aslimu sebelum publish — lihat [Cara mengganti konten](#cara-mengganti-konten).

---

## ✨ Fitur

- Single page dengan anchor navigation: Hero → About → Projects → Skills → Experience → Contact → Footer
- Dark / light mode dengan toggle (preferensi tersimpan di `localStorage`, tanpa flash saat load)
- Data project & profil di **file terpisah** — tambah project tanpa menyentuh layout
- Responsif penuh (mobile, tablet, desktop) + menu mobile
- Aksesibilitas dasar: HTML semantik, alt text, skip link, fokus keyboard, dukungan `prefers-reduced-motion`
- SEO: meta title/description, Open Graph, Twitter card, sitemap, favicon
- Performa tinggi (situs statis Astro, font dengan `preconnect`, gambar `lazy load`)

---

## 🚀 Menjalankan secara lokal

Butuh **Node.js 18+** (project ini diuji dengan Node 26 & npm 11).

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server (default http://localhost:4321)
npm run dev

# 3. Build untuk produksi (output ke folder dist/)
npm run build

# 4. Preview hasil build
npm run preview
```

> Catatan Windows: jika `node` belum ada di PATH, tambahkan folder instalasinya
> (mis. `C:\Program Files\nodejs`) ke PATH terlebih dahulu.

---

## 📁 Struktur folder

```
portfolio/
├── public/                  # Aset statis (favicon, robots.txt, gambar, CV PDF)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/          # Komponen UI per-section
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Skills.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── SocialIcon.astro
│   ├── data/                # ⬅️ Edit konten di sini
│   │   ├── projects.ts      # Daftar project
│   │   └── site.ts          # Profil, about, skills, experience, kontak
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, meta SEO/OG, dark-mode script
│   ├── pages/
│   │   └── index.astro       # Merangkai semua section
│   └── styles/
│       └── global.css        # Tailwind + design token (warna aksen, font, animasi)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## ✏️ Cara mengganti konten

Semua konten ada di folder [`src/data/`](src/data) — **tidak perlu menyentuh layout**.

### Menambah / mengubah project

Edit [`src/data/projects.ts`](src/data/projects.ts). Tiap project mengikuti tipe `Project`:

```ts
{
  title: "Judul Project",
  description: "Masalah → solusi → hasil/metrik terukur.",
  tech: ["Python", "FastAPI", "Docker"],   // tampil sebagai badge
  demo: "https://demo.example.com",          // atau null
  repo: "https://github.com/user/repo",      // atau null
  image: "/projects/nama-gambar.webp",       // taruh file di public/projects, atau null
  highlight: true,                            // opsional: tampil lebih besar & di atas
}
```

- Tandai 1–2 project terbaik dengan `highlight: true`.
- Untuk thumbnail: simpan gambar (disarankan `.webp`) di `public/projects/` lalu set `image`. Jika `null`, kartu memakai placeholder judul.

### Mengubah profil, skills, experience, kontak

Edit [`src/data/site.ts`](src/data/site.ts):

- `site` — nama, role, tagline, dan meta SEO/Open Graph.
- `about` — paragraf About + tech utama.
- `skills` — grup skill (label + daftar item).
- `experience` — riwayat pekerjaan.
- `contacts` / `contactEmail` — link email, GitHub, LinkedIn, X, Hugging Face, dan CV.

### Hal lain yang perlu diganti sebelum publish

- **Domain:** ubah `site:` di [`astro.config.mjs`](astro.config.mjs) dan URL Sitemap di [`public/robots.txt`](public/robots.txt) ke domain aslimu (penting agar sitemap & Open Graph benar).
- **CV:** taruh file `cv-<nama>.pdf` di folder `public/` dan sesuaikan link di `site.ts`.
- **OG image:** taruh `og-image.png` (disarankan 1200×630) di `public/`.
- **Favicon:** ganti `public/favicon.svg`.

### Mengubah warna aksen / font

Edit token di [`src/styles/global.css`](src/styles/global.css) pada blok `@theme` (variabel `--color-accent-*` dan `--font-sans`).

---

## ☁️ Deploy

Situs ini statis sehingga bisa di-deploy gratis ke **Vercel** atau **Netlify**:

1. Push repository ke GitHub.
2. Import repo di Vercel/Netlify.
3. Framework preset terdeteksi otomatis (Astro). Build command `npm run build`, output `dist/`.

---

## 🧰 Tech stack

- [Astro](https://astro.build) — situs statis cepat
- [Tailwind CSS v4](https://tailwindcss.com) — styling utility-first
- TypeScript
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
