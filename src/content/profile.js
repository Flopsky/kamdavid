// Landing-page content: edit copy, projects and skills here.

export const profile = {
  name: "David Kamgang",
  role: "HPC & Data Science Engineer",
  email: "davidkamgang84@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/75791840?v=4",
  intro:
    "I work across the whole stack — GPU kernels, data platforms, and LLM products that turn papers, code and documents into something people actually want to read.",
  links: [
    { label: "GitHub", href: "https://github.com/Flopsky" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dkamgang/" },
    { label: "Instagram", href: "https://www.instagram.com/davidnintcheu/" },
  ],
}

export const projects = [
  {
    name: "DeepManim",
    kind: "Product",
    blurb:
      "Animated explainer videos from a prompt, an image or a PDF — multi-scene storytelling rendered with Manim.",
    tags: ["LLM", "Video", "Manim"],
    href: "https://deepmanim.com/",
    cta: "deepmanim.com",
  },
  {
    name: "DeepGithub",
    kind: "Product",
    blurb:
      "Plug-and-play RAG over any repository: generated documentation and a Q&A assistant that knows your code.",
    tags: ["RAG", "Dev tools"],
    href: "https://www.deepgithub.com/",
    cta: "deepgithub.com",
  },
  {
    name: "ArXFlix",
    kind: "Hackathon",
    award: "Winner — Mistral AI Hackathon",
    blurb:
      "Turns dense arXiv papers into short narrated videos. Built in 24 hours, now a YouTube channel.",
    tags: ["Mistral", "TTS", "Video"],
    href: "https://github.com/julien-blanchon/arxflix",
    cta: "GitHub",
    secondary: { label: "YouTube", href: "https://www.youtube.com/@Arxflix" },
  },
  {
    name: "MarkThat",
    kind: "Library",
    blurb:
      "Python library that converts images and PDFs to clean Markdown with multimodal LLMs — OpenAI, Anthropic, Gemini, Mistral.",
    tags: ["Python", "PyPI", "OCR"],
    href: "https://github.com/Flopsky/MarkThat",
    cta: "GitHub",
    secondary: { label: "PyPI", href: "https://pypi.org/project/markthat/" },
  },
  {
    name: "Kokoro-Podcast",
    kind: "Open source",
    blurb:
      "Streams long-form text as a podcast-like listening experience, chunked and voiced on the fly.",
    tags: ["TTS", "Streaming"],
    href: "https://github.com/Flopsky/Kokoro-Podcast",
    cta: "GitHub",
  },
]

export const skills = [
  { area: "High-performance computing", items: ["CUDA", "OpenCL", "OpenMP", "MPI", "BLAS / LAPACK", "MKL"] },
  { area: "Machine learning", items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "Pandas"] },
  { area: "Data engineering", items: ["SQL", "dbt", "Snowflake", "Spark", "ELK"] },
  { area: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Airflow", "Argo"] },
]
