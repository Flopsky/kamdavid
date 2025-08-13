"use client"

import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Youtube, Instagram, Projector } from "lucide-react"

export function Component() {
  return (
    <div className="flex flex-col gap-16">
      <section
        className="w-full overflow-hidden rounded-xl border bg-card text-card-foreground elevated-card"
        id="hero"
      >
        <div className="grid items-center gap-6 p-8 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4 animate-fade-up">
            <Avatar className="h-24 w-24 ring-2 ring-border">
              <AvatarImage src="https://avatars.githubusercontent.com/u/75791840?v=4" alt="David Kamgang" />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-4 opacity-90">
              <a className="ring-hover" href="https://www.instagram.com/davidnintcheu/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a className="ring-hover" href="https://github.com/Flopsky" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a className="ring-hover" href="https://www.linkedin.com/in/dkamgang/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a className="ring-hover" href="mailto:davidkamgang84@gmail.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
              <a className="ring-hover" href="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="space-y-3 text-center md:text-left animate-fade-up">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl text-gradient">Hello, I'm a HPC and Data Science Engineer</h1>
            <p className="balanced text-muted-foreground">I specialize in creating high-quality apps and projects, most of them open source.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Link href="/#projects" className="text-sm underline">Explore projects</Link>
              <Link href="/investing" className="text-sm underline">Investing dashboard</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 scroll-mt-header" id="about">
        <h3 className="text-2xl font-bold tracking-tight">About Me</h3>
        <p className="max-w-2xl text-center text-muted-foreground balanced">
          👀 I’m interested in Data Science, HPC and problem solving. I’m continuously improving my skills in deep learning, high-performance computing (HPC) methods, and full-stack development. 💞️ Open to collaborate on Data Science and math libraries. 📫 Reach me at <a href="mailto:davidkamgang84@gmail.com" className="underline">davidkamgang84@gmail.com</a>.
        </p>
        <Badge variant="secondary">Available for collaboration</Badge>
      </section>

      <section className="flex flex-col items-center gap-8 scroll-mt-header" id="projects">
        <h3 className="text-2xl font-bold tracking-tight">Current Projects</h3>
        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold"><Projector className="mr-2 inline h-4 w-4" />ArXFlix</h4>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              ArXFlix turns your boring Arxiv research paper into a captivating video. My team won Mistral AI Hackathon with this 24h project.
              <div className="mt-3 space-x-3">
                <a className="underline" href="https://github.com/julien-blanchon/arxflix" target="_blank" rel="noreferrer">GitHub</a>
                <a className="underline" href="https://www.youtube.com/@Arxflix" target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold"><Projector className="mr-2 inline h-4 w-4" />MarkThat</h4>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A Python library to convert images and PDFs to Markdown or generate rich image descriptions using multimodal LLMs. MIT license, Python 3.10+. Features include multiple providers (OpenAI, Anthropic, Gemini, Mistral, OpenRouter), advanced figure extraction, robust retries with fallbacks, async processing, and a clean, well-tested architecture.
              <div className="mt-3 space-x-3">
                <a className="underline" href="https://pypi.org/project/markthat/" target="_blank" rel="noreferrer">PyPI</a>
                <a className="underline" href="https://github.com/Flopsky/MarkThat" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold"><Projector className="mr-2 inline h-4 w-4" />OpenDeepWiki</h4>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              OpenDeepWiki transforms code interaction by creating documentation and examples automatically. Open source in December.
              <div className="mt-3 space-x-3">
                <a className="underline" href="https://github.com/Flopsky/OpenDeepWiki" target="_blank" rel="noreferrer">GitHub</a>
                <a className="underline" href="https://www.deepgithub.com/" target="_blank" rel="noreferrer">Website</a>
              </div>
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold"><Projector className="mr-2 inline h-4 w-4" />Kokoro-Podcast</h4>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Open-source project turning long text into a streaming, podcast-like audio experience.
              <div className="mt-3">
                <a className="underline" href="https://github.com/Flopsky/Kokoro-Podcast" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold"><Projector className="mr-2 inline h-4 w-4" />Project Rocket</h4>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Dynamic dashboards for stocks. Should I hold, sell, or buy? Uses LLM, GCP, Pandas, D3, GitHub.
              <div className="mt-3"><a className="underline" href="/investing">See dashboard</a></div>
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold"><Projector className="mr-2 inline h-4 w-4" />Project PromoTime</h4>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Helps verify if a company lies about promos. Architecture in progress.
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold"><Projector className="mr-2 inline h-4 w-4" />Project Feynman</h4>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Learning assistant with synthesis and progressive questions. Includes MCQs.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 scroll-mt-header" id="skills">
        <h3 className="text-2xl font-bold tracking-tight">Skills</h3>
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold">Data Engineering</h4>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
              <img alt="SQL" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/331760/sql-database-generic.svg" title="SQL" />
              <img alt="DBT" className="h-10 w-10 ring-hover" src="https://raw.githubusercontent.com/dbt-labs/events.getdbt.com/3df02b2103f5d4257c80f4ef4d70e98c87fd5530/ui/img/logos/logo-white.svg" title="DBT" />
              <img alt="Snowflake" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/407485/snowflake.svg" title="Snowflake" />
              <img alt="Azure" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/448274/azure.svg" title="Azure" />
              <img alt="AWS" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/448266/aws.svg" title="AWS" />
              <img alt="GCP" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/448223/gcp.svg" title="GCP" />
              <img alt="Spark" className="h-10 w-10 ring-hover" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" title="Spark" />
              <img alt="ELK" className="h-10 w-10 ring-hover" src="https://cdn.worldvectorlogo.com/logos/elastic-stack.svg" title="ELK" />
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold">DevOps</h4>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
              <img alt="Github Action" className="h-10 w-10 ring-hover" src="https://blog.frankel.ch/assets/resources/github-actions-maven-releases/git-hub-actions.svg" title="Github Action" />
              <img alt="GitLab" className="h-10 w-10 ring-hover" src="https://images.ctfassets.net/xz1dnu24egyd/3FbNmZRES38q2Sk2EcoT7a/a290dc207a67cf779fc7c2456b177e9f/press-kit-icon.svg" title="GitLab" />
              <img alt="Docker" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/349342/docker.svg" title="Docker" />
              <img alt="Airflow" className="h-10 w-10 ring-hover" src="https://icon.icepanel.io/Technology/svg/Apache-Airflow.svg" title="Airflow" />
              <img alt="Kubernetes" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/376331/kubernetes.svg" title="Kubernetes" />
              <img alt="Argoproj" className="h-10 w-10 ring-hover" src="https://raw.githubusercontent.com/cloudbow/argoproj-argo/3f6ac9c9f1ccd92d4dabf52e964a1dd52b1622f6/os-project-logo.svg" title="Argoproj" />
              <img alt="Terraform" className="h-10 w-10 ring-hover" src="https://static-00.iconduck.com/assets.00/terraform-icon-452x512-ildgg5fd.png" title="Terraform" />
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold">HPC</h4>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
              <img alt="CUDA" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/373541/cuda.svg" title="CUDA" />
              <img alt="OpenCL" className="h-10 w-10 ring-hover" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenCL_logo.svg" title="OpenCL" />
              <img alt="OpenMP" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/499714/rocket.svg" title="OpenMP" />
              <img alt="MPI" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/448987/cluster.svg" title="MPI" />
              <img alt="MKL" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/454733/chip-computer-cpu.svg" title="MKL" />
              <img alt="BLAS" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/288625/chip-processor.svg" title="BLAS" />
              <img alt="LAPACK" className="h-10 w-10 ring-hover" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/LAPACK_logo.svg" title="LAPACK" />
              <img alt="Inria/Vite" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/408990/thunderbolt.svg" title="Inria/Vite" />
            </CardContent>
          </Card>

          <Card className="elevated-card">
            <CardHeader>
              <h4 className="text-lg font-semibold">Machine Learning</h4>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
              <img alt="PyTorch" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/354240/pytorch.svg" title="PyTorch" />
              <img alt="TensorFlow" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/375503/tensorflow-enterprise.svg" title="TensorFlow" />
              <img alt="Hugging Face" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/396671/hugging-face.svg" title="Hugging Face" />
              <img alt="LangChain" className="h-10 w-10 ring-hover" src="https://latestlogo.com/wp-content/uploads/2024/03/langchain-logo.svg" title="LangChain" />
              <img alt="Pandas" className="h-10 w-10 ring-hover" src="https://www.svgrepo.com/show/473742/pandas.svg" title="Pandas" />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 scroll-mt-header" id="contact">
        <h3 className="text-2xl font-bold tracking-tight">Contact</h3>
        <a href="mailto:davidkamgang84@gmail.com">
          <Button>Contact Me</Button>
        </a>
      </section>
    </div>
  );
}
