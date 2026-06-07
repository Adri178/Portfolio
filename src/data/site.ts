// ============================================================
//  DATA PROFIL / SITE
//  Ganti semua data bertanda (contoh) dengan data aslimu —
//  terutama nama, email, dan link sosial sebelum publish.
// ============================================================

export const site = {
  name: "Adz Dzikri Tamyizur Rijal",
  role: "AI Engineer",
  tagline:
    "Membangun sistem AI yang andal — dari riset model hingga deployment ke produksi.",
  // Foto profil di halaman utama. Taruh file di /public (mis. /profile.jpg).
  // Untuk sementara memakai placeholder /profile.svg — ganti dengan fotomu.
  photo: "/profile.svg",
  // Dipakai untuk <title>, meta description, dan Open Graph.
  seoTitle: "Adz Dzikri Tamyizur Rijal — AI Engineer",
  seoDescription:
    "Portofolio AI Engineer: Large Language Models, sistem RAG, dan MLOps. Mengubah model dari notebook menjadi layanan produksi yang cepat, hemat biaya, dan terukur.",
  // URL gambar Open Graph (taruh file di /public). Boleh null.
  ogImage: "/og-image.png",
};

export const about = {
  paragraph:
    "AI Engineer dengan fokus pada Large Language Models, sistem RAG, dan MLOps. Saya senang mengubah model dari notebook menjadi layanan produksi yang cepat, hemat biaya, dan terukur. Berpengalaman membangun pipeline end-to-end: data, training, evaluasi, hingga deployment dan monitoring.",
  mainTech: ["Python", "PyTorch", "LangChain", "FastAPI", "Docker", "AWS"],
};

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Bahasa & Framework",
    items: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "Hugging Face Transformers"],
  },
  {
    label: "LLM & GenAI",
    items: [
      "LangChain",
      "LlamaIndex",
      "OpenAI / Anthropic API",
      "RAG",
      "Fine-tuning (LoRA/QLoRA)",
      "Prompt Engineering",
    ],
  },
  {
    label: "Data & ML",
    items: ["Pandas", "NumPy", "Vector DB (Pinecone/Chroma/pgvector)", "Feature Engineering"],
  },
  {
    label: "MLOps & Deploy",
    items: ["FastAPI", "Docker", "Kubernetes", "MLflow", "AWS SageMaker", "CI/CD"],
  },
  {
    label: "Lainnya",
    items: ["SQL", "Git", "Linux", "Monitoring (Prometheus/Grafana)"],
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "PT Teknologi Cerdas", // (contoh)
    period: "2023 – sekarang",
    description:
      "Membangun chatbot RAG untuk customer service, menurunkan waktu respons tim support ~40%.",
  },
  {
    role: "Machine Learning Engineer (Intern)",
    company: "Startup AI", // (contoh)
    period: "2022 – 2023",
    description:
      "Mengembangkan model klasifikasi dokumen dengan akurasi 94%.",
  },
];

export interface ContactLink {
  label: string;
  href: string;
  // Nama ikon (lihat src/components/SocialIcon.astro)
  icon: "email" | "github" | "linkedin" | "twitter" | "huggingface" | "cv";
}

// (contoh — WAJIB diganti dengan akun aslimu)
export const contacts: ContactLink[] = [
  { label: "Email", href: "mailto:raka.pratama@email.com", icon: "email" },
  { label: "GitHub", href: "https://github.com/rakapratama", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rakapratama", icon: "linkedin" },
  { label: "X / Twitter", href: "https://x.com/rakapratama", icon: "twitter" },
  { label: "Hugging Face", href: "https://huggingface.co/rakapratama", icon: "huggingface" },
  { label: "CV (PDF)", href: "/cv-raka-pratama.pdf", icon: "cv" },
];

export const contactEmail = "raka.pratama@email.com"; // (contoh)
