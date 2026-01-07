"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Youtube, Instagram, Projector, ArrowDown, Sparkles } from "lucide-react"

const roles = [
  "HPC Engineer",
  "Data Scientist",
  "Open Source Builder",
  "Problem Solver",
]

export function Component() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section - Full viewport impact */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center" id="hero">
        {/* Floating avatar */}
        <div className="animate-float mb-8">
          <Avatar className="h-32 w-32 ring-4 ring-foreground/10 shadow-2xl">
            <AvatarImage src="https://avatars.githubusercontent.com/u/75791840?v=4" alt="David Kamgang" />
            <AvatarFallback className="text-2xl font-bold">DK</AvatarFallback>
          </Avatar>
        </div>

        {/* Main headline */}
        <div className="space-y-6 max-w-4xl px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground animate-fade-in font-medium">
            Welcome to my corner of the internet
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight animate-fade-up">
            Hi, I'm <span className="text-primary">David</span>
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center">
            <span 
              className={`text-3xl md:text-5xl font-bold text-muted-foreground transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {roles[roleIndex]}
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-200">
            I build high-performance systems and data-driven solutions.
            <br className="hidden md:block" />
            Most of my work is open source.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 pt-4 animate-fade-up animation-delay-300">
            <a className="social-icon" href="https://github.com/Flopsky" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a className="social-icon" href="https://www.linkedin.com/in/dkamgang/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a className="social-icon" href="https://www.instagram.com/davidnintcheu/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a className="social-icon" href="mailto:davidkamgang84@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a className="social-icon" href="#" aria-label="YouTube">
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 animate-fade-up animation-delay-400">
            <Link href="/#projects">
              <Button size="lg" className="text-base px-8 py-6 font-semibold">
                <Sparkles className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </Link>
            <Link href="/investing">
              <Button variant="outline" size="lg" className="text-base px-8 py-6 font-semibold">
                Investing Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center gap-8 scroll-mt-header py-12" id="about">
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for collaboration
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">About Me</h2>
        <div className="max-w-3xl space-y-6 text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm passionate about <span className="font-semibold text-foreground">Data Science</span>, <span className="font-semibold text-foreground">High-Performance Computing</span>, and <span className="font-semibold text-foreground">problem solving</span>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently leveling up in deep learning, HPC methods, and full-stack development.
            I love collaborating on Data Science and math libraries.
          </p>
          <a 
            href="mailto:davidkamgang84@gmail.com" 
            className="inline-flex items-center gap-2 text-lg font-medium hover:underline underline-offset-4"
          >
            <Mail className="h-5 w-5" />
            davidkamgang84@gmail.com
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col items-center gap-12 scroll-mt-header py-12" id="projects">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of things I've built, from AI tools to data platforms
          </p>
        </div>
        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          <Card className="group project-card border-2 hover:border-foreground/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Projector className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold">DeepManim</h4>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Create engaging animated explainer videos, bringing ideas to life through multi-scene storytelling. Supports images and PDFs.
              </p>
              <a className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4" href="https://deepmanim.com/" target="_blank" rel="noreferrer">
                Visit Website →
              </a>
            </CardContent>
          </Card>

          <Card className="group project-card border-2 hover:border-foreground/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Projector className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold">DeepGithub</h4>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Automated code documentation and Q&A system. Plug-and-play advanced RAG for transforming code interaction.
              </p>
              <a className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4" href="https://www.deepgithub.com/" target="_blank" rel="noreferrer">
                Visit Website →
              </a>
            </CardContent>
          </Card>

          <Card className="group project-card border-2 hover:border-foreground/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold">ArXFlix</h4>
              </div>
              <Badge variant="secondary" className="w-fit text-xs">🏆 Mistral AI Hackathon Winner</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Turn boring Arxiv research papers into captivating videos. Built in 24 hours at the Mistral AI Hackathon.
              </p>
              <div className="flex gap-4">
                <a className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4" href="https://github.com/julien-blanchon/arxflix" target="_blank" rel="noreferrer">
                  GitHub →
                </a>
                <a className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4" href="https://www.youtube.com/@Arxflix" target="_blank" rel="noreferrer">
                  YouTube →
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="group project-card border-2 hover:border-foreground/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Projector className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold">MarkThat</h4>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Python library to convert images and PDFs to Markdown using multimodal LLMs. Supports OpenAI, Anthropic, Gemini, Mistral, and more.
              </p>
              <div className="flex gap-4">
                <a className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4" href="https://pypi.org/project/markthat/" target="_blank" rel="noreferrer">
                  PyPI →
                </a>
                <a className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4" href="https://github.com/Flopsky/MarkThat" target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="group project-card border-2 hover:border-foreground/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Projector className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold">Kokoro-Podcast</h4>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Open-source project turning long text into a streaming, podcast-like audio experience.
              </p>
              <a className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4" href="https://github.com/Flopsky/Kokoro-Podcast" target="_blank" rel="noreferrer">
                GitHub →
              </a>
            </CardContent>
          </Card>

          <Card className="group project-card border-2 hover:border-foreground/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Projector className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold">Project Rocket</h4>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Dynamic stock dashboards powered by LLMs. Should I hold, sell, or buy? Built with GCP, Pandas, and D3.
              </p>
              <Link className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4" href="/investing">
                View Dashboard →
              </Link>
            </CardContent>
          </Card>

          <Card className="group project-card border-2 border-dashed hover:border-foreground/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Projector className="h-5 w-5 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-bold text-muted-foreground">PromoTime</h4>
              </div>
              <Badge variant="outline" className="w-fit text-xs">Coming Soon</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Helps verify if a company lies about promos. Architecture in progress.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col items-center gap-12 scroll-mt-header py-12" id="skills">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technologies I work with daily
          </p>
        </div>
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-lg font-bold border-b pb-2">Data Engineering</h4>
            <div className="flex flex-wrap gap-3">
              <img alt="SQL" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/331760/sql-database-generic.svg" title="SQL" />
              <img alt="DBT" className="h-10 w-10 skill-icon" src="https://raw.githubusercontent.com/dbt-labs/events.getdbt.com/3df02b2103f5d4257c80f4ef4d70e98c87fd5530/ui/img/logos/logo-white.svg" title="DBT" />
              <img alt="Snowflake" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/407485/snowflake.svg" title="Snowflake" />
              <img alt="Azure" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/448274/azure.svg" title="Azure" />
              <img alt="AWS" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/448266/aws.svg" title="AWS" />
              <img alt="GCP" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/448223/gcp.svg" title="GCP" />
              <img alt="Spark" className="h-10 w-10 skill-icon" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" title="Spark" />
              <img alt="ELK" className="h-10 w-10 skill-icon" src="https://cdn.worldvectorlogo.com/logos/elastic-stack.svg" title="ELK" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold border-b pb-2">DevOps</h4>
            <div className="flex flex-wrap gap-3">
              <img alt="Github Action" className="h-10 w-10 skill-icon" src="https://blog.frankel.ch/assets/resources/github-actions-maven-releases/git-hub-actions.svg" title="Github Action" />
              <img alt="GitLab" className="h-10 w-10 skill-icon" src="https://images.ctfassets.net/xz1dnu24egyd/3FbNmZRES38q2Sk2EcoT7a/a290dc207a67cf779fc7c2456b177e9f/press-kit-icon.svg" title="GitLab" />
              <img alt="Docker" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/349342/docker.svg" title="Docker" />
              <img alt="Airflow" className="h-10 w-10 skill-icon" src="https://icon.icepanel.io/Technology/svg/Apache-Airflow.svg" title="Airflow" />
              <img alt="Kubernetes" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/376331/kubernetes.svg" title="Kubernetes" />
              <img alt="Argoproj" className="h-10 w-10 skill-icon" src="https://raw.githubusercontent.com/cloudbow/argoproj-argo/3f6ac9c9f1ccd92d4dabf52e964a1dd52b1622f6/os-project-logo.svg" title="Argoproj" />
              <img alt="Terraform" className="h-10 w-10 skill-icon" src="https://static-00.iconduck.com/assets.00/terraform-icon-452x512-ildgg5fd.png" title="Terraform" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold border-b pb-2">HPC</h4>
            <div className="flex flex-wrap gap-3">
              <img alt="CUDA" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/373541/cuda.svg" title="CUDA" />
              <img alt="OpenCL" className="h-10 w-10 skill-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenCL_logo.svg" title="OpenCL" />
              <img alt="OpenMP" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/499714/rocket.svg" title="OpenMP" />
              <img alt="MPI" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/448987/cluster.svg" title="MPI" />
              <img alt="MKL" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/454733/chip-computer-cpu.svg" title="MKL" />
              <img alt="BLAS" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/288625/chip-processor.svg" title="BLAS" />
              <img alt="LAPACK" className="h-10 w-10 skill-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/LAPACK_logo.svg" title="LAPACK" />
              <img alt="Inria/Vite" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/408990/thunderbolt.svg" title="Inria/Vite" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold border-b pb-2">Machine Learning</h4>
            <div className="flex flex-wrap gap-3">
              <img alt="PyTorch" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/354240/pytorch.svg" title="PyTorch" />
              <img alt="TensorFlow" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/375503/tensorflow-enterprise.svg" title="TensorFlow" />
              <img alt="Hugging Face" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/396671/hugging-face.svg" title="Hugging Face" />
              <img alt="LangChain" className="h-10 w-10 skill-icon" src="https://latestlogo.com/wp-content/uploads/2024/03/langchain-logo.svg" title="LangChain" />
              <img alt="Pandas" className="h-10 w-10 skill-icon" src="https://www.svgrepo.com/show/473742/pandas.svg" title="Pandas" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center gap-8 scroll-mt-header py-16" id="contact">
        <div className="text-center space-y-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>
        <a href="mailto:davidkamgang84@gmail.com">
          <Button size="lg" className="text-base px-10 py-6 font-semibold">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </a>
      </section>
    </div>
  );
}
