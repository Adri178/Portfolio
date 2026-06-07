// ============================================================
//  DATA PROJECT
//  Tambah / ubah project cukup di file ini — tanpa menyentuh layout.
//  Tandai project terbaik dengan `highlight: true` agar tampil
//  lebih besar dan di urutan atas.
// ============================================================

export interface Project {
  /** Judul project */
  title: string;
  /** Deskripsi singkat: masalah → solusi → hasil/metrik */
  description: string;
  /** Stack teknologi (tampil sebagai badge) */
  tech: string[];
  /** Link demo langsung. null jika tidak ada. */
  demo: string | null;
  /** Link repository (GitHub). null jika privat. */
  repo: string | null;
  /** Path gambar/thumbnail di folder /public. null = pakai placeholder. */
  image: string | null;
  /** Tandai project unggulan agar tampil lebih besar & di atas. */
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    title: "RAG Customer Support Assistant",
    description:
      "Chatbot internal yang menjawab pertanyaan dari 5.000+ dokumen perusahaan menggunakan Retrieval-Augmented Generation. Mengurangi waktu pencarian informasi tim support hingga 40%.",
    tech: ["Python", "LangChain", "OpenAI API", "pgvector", "FastAPI", "Docker"],
    demo: "https://demo-rag-assistant.example.com",
    repo: "https://github.com/rakapratama/rag-support-assistant",
    image: null,
    highlight: true,
  },
  {
    title: "Document Classifier (Fine-tuned LLM)",
    description:
      "Klasifikasi otomatis dokumen legal ke dalam 12 kategori menggunakan model yang di-fine-tune dengan LoRA. Akurasi 94% pada test set.",
    tech: ["Python", "PyTorch", "Hugging Face", "LoRA", "Weights & Biases"],
    demo: "https://huggingface.co/spaces/rakapratama/doc-classifier",
    repo: "https://github.com/rakapratama/document-classifier",
    image: null,
    highlight: true,
  },
  {
    title: "Real-time Image Moderation API",
    description:
      "Layanan deteksi konten tidak pantas pada gambar secara real-time. Latensi rata-rata < 200ms, melayani 1M+ request/hari.",
    tech: ["Python", "PyTorch", "FastAPI", "ONNX", "Kubernetes", "Redis"],
    demo: "https://moderation-api-docs.example.com",
    repo: "https://github.com/rakapratama/image-moderation-api",
    image: null,
  },
  {
    title: "Semantic Search Engine",
    description:
      "Mesin pencari semantik untuk katalog produk e-commerce. Meningkatkan klik-tayang hasil pencarian sebesar 28% dibanding keyword search.",
    tech: ["Python", "Sentence-Transformers", "Pinecone", "FastAPI", "Streamlit"],
    demo: "https://semantic-search-demo.example.com",
    repo: "https://github.com/rakapratama/semantic-search",
    image: null,
  },
  {
    title: "MLOps Pipeline Template",
    description:
      "Template pipeline end-to-end: training, evaluasi, registry model, deployment otomatis, dan monitoring drift. Mempercepat onboarding project ML baru.",
    tech: ["MLflow", "Docker", "GitHub Actions", "AWS SageMaker", "Prometheus"],
    demo: null,
    repo: "https://github.com/rakapratama/mlops-pipeline-template",
    image: null,
  },
  {
    title: "Local LLM Chat App",
    description:
      "Aplikasi chat yang menjalankan LLM open-source secara lokal (privasi penuh, tanpa kirim data ke cloud). Mendukung streaming dan riwayat percakapan.",
    tech: ["Python", "Ollama", "Llama 3", "FastAPI", "React"],
    demo: "https://local-llm-chat.example.com",
    repo: "https://github.com/rakapratama/local-llm-chat",
    image: null,
  },
];
