# PRD — Website Portofolio AI Engineer

> Blueprint untuk dikerjakan oleh Claude Code. Konten di bawah sudah diisi dengan **contoh** untuk profil AI Engineer.
> ⚠️ Ganti semua data bertanda `(contoh)` dengan data aslimu sebelum publish — terutama nama, email, dan link.

---

## 1. Ringkasan Proyek

**Apa:** Website portofolio personal untuk seorang AI Engineer.
**Tujuan utama:** Showcase project AI/ML agar recruiter, hiring manager, dan kolaborator bisa menilai kemampuan teknis dalam < 30 detik.
**Gaya:** Minimalis & bersih — banyak whitespace, tipografi kuat, satu warna aksen, fokus ke project.
**Prinsip utama:** Cepat, ringan, mobile-first, dark mode. Project & hasil terukur (metrik) jadi bintang utama.

---

## 2. Target Pengunjung

- Recruiter / hiring manager teknis (AI/ML/Data roles).
- Sesama engineer & peneliti (melihat kualitas kode, GitHub, demo).
- Calon klien/kolaborator untuk proyek AI.

Implikasi: link GitHub & demo mudah ditemukan, tiap project menyebut **masalah → solusi → hasil/metrik**.

---

## 3. Tech Stack (rekomendasi)

- **Direkomendasikan:** Astro + Tailwind CSS — sangat cepat, ringan, skor performa tinggi default. Cocok untuk situs statis berisi konten.
- **Alternatif:** Next.js + Tailwind CSS — bila ingin sekalian menampilkan React / butuh fitur dinamis (mis. demo interaktif).
- **Deploy:** Vercel atau Netlify (gratis, otomatis dari GitHub).
- **Font:** Inter / Geist.

> Untuk Claude Code: gunakan TypeScript, taruh data project di file terpisah (`projects.ts` / `projects.json` / markdown) agar mudah menambah project baru tanpa menyentuh layout.

---

## 4. Struktur Halaman

Single page dengan anchor navigation + halaman detail project opsional.

Urutan section:

1. **Hero / Intro**
2. **About**
3. **Projects** (terpenting)
4. **Skills / Tech Stack**
5. **Experience** (opsional)
6. **Contact**
7. **Footer**

---

## 5. Konten (sudah diisi — contoh untuk AI Engineer)

### Hero
- **Nama:** Raka Pratama *(contoh)*
- **Role:** AI Engineer
- **Tagline:** "Membangun sistem AI yang andal — dari riset model hingga deployment ke produksi."
- **CTA:** Tombol "Lihat Project" + "Hubungi Saya".

### About
> AI Engineer dengan fokus pada Large Language Models, sistem RAG, dan MLOps. Saya senang mengubah model dari notebook menjadi layanan produksi yang cepat, hemat biaya, dan terukur. Berpengalaman membangun pipeline end-to-end: data, training, evaluasi, hingga deployment dan monitoring. *(contoh — ganti dengan ceritamu)*

- **Tech utama:** Python, PyTorch, LangChain, FastAPI, Docker, AWS.

### Skills / Tech Stack (contoh)
- **Bahasa & Framework:** Python, PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers.
- **LLM & GenAI:** LangChain, LlamaIndex, OpenAI/Anthropic API, RAG, fine-tuning (LoRA/QLoRA), prompt engineering.
- **Data & ML:** Pandas, NumPy, vector DB (Pinecone/Chroma/pgvector), feature engineering.
- **MLOps & Deploy:** FastAPI, Docker, Kubernetes, MLflow, AWS SageMaker, CI/CD.
- **Lainnya:** SQL, Git, Linux, monitoring (Prometheus/Grafana).

### Experience (opsional — contoh)
- **AI Engineer** — PT Teknologi Cerdas *(contoh)* · 2023–sekarang
  Membangun chatbot RAG untuk customer service, menurunkan waktu respons tim support ~40%.
- **Machine Learning Engineer (Intern)** — Startup AI *(contoh)* · 2022–2023
  Mengembangkan model klasifikasi dokumen dengan akurasi 94%.

### Contact (contoh — WAJIB diganti)
- **Email:** raka.pratama@email.com *(contoh)*
- **GitHub:** github.com/rakapratama *(contoh)*
- **LinkedIn:** linkedin.com/in/rakapratama *(contoh)*
- **X / Twitter:** x.com/rakapratama *(contoh)*
- **Hugging Face:** huggingface.co/rakapratama *(contoh, relevan untuk AI Engineer)*
- **CV (PDF):** /cv-raka-pratama.pdf *(contoh — letakkan file di folder public)*

---

## 6. Projects (6 contoh project AI Engineer)

Tiap project memuat: judul, deskripsi (masalah → solusi → hasil), tech stack, link demo, link repo, gambar/thumbnail.

```
projects:
  - judul: "RAG Customer Support Assistant"
    deskripsi: "Chatbot internal yang menjawab pertanyaan dari 5.000+ dokumen perusahaan menggunakan Retrieval-Augmented Generation. Mengurangi waktu pencarian informasi tim support hingga 40%."
    tech: ["Python", "LangChain", "OpenAI API", "pgvector", "FastAPI", "Docker"]
    demo: "https://demo-rag-assistant.example.com"   # (contoh)
    repo: "https://github.com/rakapratama/rag-support-assistant"  # (contoh)
    gambar: "/projects/rag-assistant.webp"
    highlight: true

  - judul: "Document Classifier (Fine-tuned LLM)"
    deskripsi: "Klasifikasi otomatis dokumen legal ke dalam 12 kategori menggunakan model yang di-fine-tune dengan LoRA. Akurasi 94% pada test set."
    tech: ["Python", "PyTorch", "Hugging Face", "LoRA", "Weights & Biases"]
    demo: "https://huggingface.co/spaces/rakapratama/doc-classifier"  # (contoh)
    repo: "https://github.com/rakapratama/document-classifier"  # (contoh)
    gambar: "/projects/doc-classifier.webp"

  - judul: "Real-time Image Moderation API"
    deskripsi: "Layanan deteksi konten tidak pantas pada gambar secara real-time. Latensi rata-rata < 200ms, melayani 1M+ request/hari."
    tech: ["Python", "PyTorch", "FastAPI", "ONNX", "Kubernetes", "Redis"]
    demo: "https://moderation-api-docs.example.com"  # (contoh)
    repo: "https://github.com/rakapratama/image-moderation-api"  # (contoh)
    gambar: "/projects/moderation-api.webp"

  - judul: "Semantic Search Engine"
    deskripsi: "Mesin pencari semantik untuk katalog produk e-commerce. Meningkatkan klik-tayang hasil pencarian sebesar 28% dibanding keyword search."
    tech: ["Python", "Sentence-Transformers", "Pinecone", "FastAPI", "Streamlit"]
    demo: "https://semantic-search-demo.example.com"  # (contoh)
    repo: "https://github.com/rakapratama/semantic-search"  # (contoh)
    gambar: "/projects/semantic-search.webp"

  - judul: "MLOps Pipeline Template"
    deskripsi: "Template pipeline end-to-end: training, evaluasi, registry model, deployment otomatis, dan monitoring drift. Mempercepat onboarding project ML baru."
    tech: ["MLflow", "Docker", "GitHub Actions", "AWS SageMaker", "Prometheus"]
    demo: null
    repo: "https://github.com/rakapratama/mlops-pipeline-template"  # (contoh)
    gambar: "/projects/mlops-pipeline.webp"

  - judul: "Local LLM Chat App"
    deskripsi: "Aplikasi chat yang menjalankan LLM open-source secara lokal (privasi penuh, tanpa kirim data ke cloud). Mendukung streaming dan riwayat percakapan."
    tech: ["Python", "Ollama", "Llama 3", "FastAPI", "React"]
    demo: "https://local-llm-chat.example.com"  # (contoh)
    repo: "https://github.com/rakapratama/local-llm-chat"  # (contoh)
    gambar: "/projects/local-llm-chat.webp"
```

> Pilih 4–6 project terbaik. Tandai 1–2 sebagai `highlight: true` untuk ditampilkan lebih besar/di atas.

---

## 7. Desain (Minimalis & Bersih)

- **Layout:** mobile-first, max-width konten ~720–960px, banyak whitespace.
- **Warna:** background netral (putih / abu sangat terang), teks gelap, **satu** warna aksen (mis. biru `#2563eb` atau emerald) untuk link & tombol.
- **Dark mode:** sediakan toggle light/dark.
- **Tipografi:** maks 2 ukuran heading, 1 font body, line-height 1.5–1.7.
- **Animasi:** halus & minimal (fade/slide saat scroll).
- **Kartu project:** border tipis atau shadow halus, badge tech stack, hover state sederhana.
- **Hindari:** gradient ramai, stok foto generik, ikon berlebihan, popup.

---

## 8. Persyaratan Teknis (non-fungsional)

- **Responsif:** sempurna di mobile, tablet, desktop.
- **Performa:** target Lighthouse > 95. Gambar WebP + lazy load.
- **Aksesibilitas:** kontras cukup, alt text, navigasi keyboard, semantic HTML.
- **SEO:** meta title & description, Open Graph tags, sitemap, favicon.
- **Maintainable:** tambah project cukup edit file data project.

---

## 9. Deliverables

- [ ] Kode sumber lengkap & terstruktur rapi.
- [ ] README: cara jalankan lokal + cara menambah project.
- [ ] Siap deploy ke Vercel/Netlify.
- [ ] Semua section terisi (pakai contoh di atas sampai data asli siap).
- [ ] Dark/light mode berfungsi.
- [ ] Data project di file terpisah.
- [ ] Responsif & lolos cek aksesibilitas dasar.

---

## 10. Di Luar Cakupan (versi pertama)

- Blog / CMS.
- Backend/database.
- Form kontak pengirim email (cukup `mailto:` dulu).
- Multi-bahasa.

---

## Lampiran — Prompt untuk Claude Code

> "Baca PRD ini. Buatkan website portofolio AI Engineer sesuai spesifikasi menggunakan Astro + Tailwind CSS dengan TypeScript. Mulai dari setup project dan struktur folder, taruh data project di file terpisah, lalu kerjakan section per section (Hero → About → Projects → Skills → Contact). Jalankan dev server dan tunjukkan hasil tiap section sebelum lanjut. Terapkan dark mode dan pastikan responsif."
