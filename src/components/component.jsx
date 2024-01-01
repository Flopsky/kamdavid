import Link from "next/link"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Component() {



  return (
    (
      <div className="bg-gray-900 min-h-screen flex flex-col">
        <header
          className="w-full flex flex-wrap justify-between items-center p-4 sticky top-0 bg-gray-900 z-50">
          <h1 className="text-4xl font-bold">David KAMGANG  </h1>
          <nav className="flex flex-wrap gap-4">
            <Link className="text-lg font-medium hover:underline" href="/">
              <InfoIcon className="w-4 h-4 text-blue-500" />
              About
            </Link>
            <Link className="text-lg font-medium hover:underline" href="#">
              <ProjectorIcon className="w-4 h-4 text-yellow-500" />
              Projects
            </Link>
            <Link className="text-lg font-medium hover:underline" href="#">
              <ActivityIcon className="w-4 h-4 text-green-500" />
              Skills
            </Link>
            <Link className="text-lg font-medium hover:underline" href="#">
              <SchoolIcon className="w-4 h-4 text-red-500" />
              Students
            </Link>
            <Link className="text-lg font-medium hover:underline" href="#">
              <ComputerIcon className="w-4 h-4 text-indigo-500" />
              HPC
            </Link>
            <Link className="text-lg font-medium hover:underline" href="/investing">
              <CurrencyIcon className="w-4 h-4 text-pink-500" />
              Investing
            </Link>
            <Link className="text-lg font-medium hover:underline" href="#">
              <ContactIcon className="w-4 h-4 text-cyan-500" />
              Contact
            </Link>
          </nav>
        </header>
        <main
          key="1"
          className="flex flex-col items-center justify-center p-4 bg-gray-900 text-white font-mono">

          <section
            className="w-full h-[500px] bg-center bg-cover"
            id="hero"
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
            }}
          >
            <div className="h-full flex justify-center items-center bg-black bg-opacity-60">
              {/* Left side: div containing image and icons */}
              <div className="flex flex-col items-center space-y-4 p-4">
                {/* Image div */}
                <img
                  alt="David KAMGANG"
                  className="w-24 h-24 rounded-full"
                  height="100"
                  src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRwZoodMi6QSqQLpLLlvIrlX3AZmncXeI66kmAeKRCNMw263IHTKK5Fyt9FDgrr2PfKV7A5gQKB2cDIAtWaSkQnrwFfsA=w2160-h1337"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                {/* Icons div */}
                <div className="flex items-center space-x-4">
                  <a href="https://www.instagram.com/davidnintcheu/" rel="noopener noreferrer" target="_blank">
                    <InstagramIcon className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://github.com/Flopsky" rel="noopener noreferrer" target="_blank">
                    <GithubIcon className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/dkamgang/" rel="noopener noreferrer" target="_blank">
                    <LinkedinIcon className="w-6 h-6 text-white" />
                  </a>
                  <a href="mailto:David%20Doe%20<davidkamgang84@gmail.com>" rel="noopener noreferrer" target="_blank">
                    <MailIcon className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    <YoutubeIcon className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Right side: div containing text */}
              <div className="p-4">
                <h2 className="text-3xl font-bold text-white">Hello, I'm a HPC and Data Science Engineer</h2>
                <p className="text-xl text-white">I specialize in creating high-quality apps and projects, most of them open source.</p>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center gap-8 p-4" id="about">
            <Avatar
              alt="David KAMGANG"
              className="w-48 h-48"
              src="/placeholder.svg?height=200&width=200" />
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="text-lg text-gray-300">
              - 👀 I’m interested in Data Science, HPC and problem solving. <br />
              - 🌱 I'm currently improving my skills in deep learning, high-performance computing (HPC) methods, and full-stack development.<br />
              - 💞️ I’m looking to collaborate on Data Science 🔥 , Maths libraries development 🔥<br />
              - 📫 How to reach me davidkamgang84@gmail.com<br />
            </p>
            <Badge className="px-4 py-2 text-sm font-medium rounded-md bg-gray-700" />
          </section>
          <section className="w-full flex flex-col items-center gap-8 p-4" id="projects">
            <h3 className="text-2xl font-bold">Current Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="bg-gray-800 transform hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <h4 className="text-lg font-bold text-blue-500">
                    <ProjectorIcon className="w-4 h-4" />
                    Project Rocket
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    This project goal is to provide dynamic dashboards on the state of stocks. It helps answer the question : should that hold or sell ? LLM, GCP, Pandas, Streamlit, Chart Js, Github
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 transform hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <h4 className="text-lg font-bold text-yellow-500">
                    <ProjectorIcon className="w-4 h-4" />
                    Project PromoTime
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    This project goal is to help figuring out if a company is lying about it promos. I'm still constructing the architecture.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 transform hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <h4 className="text-lg font-bold text-green-500">
                    <ProjectorIcon className="w-4 h-4" />
                    Project Feynman
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    This project goal is to help Students and people learn more effectively. You provide your subject and it provides a synthesis and progressives questions to help learning. It provides multi choice questions...
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="w-full flex flex-col items-center gap-8 p-4">
            <h3 className="text-2xl font-bold">Skills</h3>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              <Card
                className="bg-gray-800 transform hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <h4 className="text-lg font-bold text-blue-500">Data Engineering</h4>
                </CardHeader>
                <CardContent
                  className="flex flex-wrap gap-4 justify-center items-center space-x-2 animate-bounce-slow">
                  <img alt="SQL" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/331760/sql-database-generic.svg" title="SQL" />
                  <img alt="DBT" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://raw.githubusercontent.com/dbt-labs/events.getdbt.com/3df02b2103f5d4257c80f4ef4d70e98c87fd5530/ui/img/logos/logo-white.svg" title="DBT" />
                  <img
                    alt="Snowflake"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://www.svgrepo.com/show/407485/snowflake.svg"
                    title="Snowflake" />
                  <img alt="Azure" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/448274/azure.svg" title="Azure" />
                  <img alt="AWS" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/448266/aws.svg" title="AWS" />
                  <img alt="GCP" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/448223/gcp.svg" title="GCP" />
                  <img alt="Spark" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" title="Spark" />
                  <img alt="ELK" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://cdn.worldvectorlogo.com/logos/elastic-stack.svg" title="ELK" />
                </CardContent>
              </Card>
              <Card
                className="bg-gray-800 transform hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <h4 className="text-lg font-bold text-yellow-500">DevOps</h4>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4 justify-center items-center space-x-2">
                  <img
                    alt="Github Action"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://blog.frankel.ch/assets/resources/github-actions-maven-releases/git-hub-actions.svg"
                    title="Github Action" />
                  <img alt="GitLab" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://images.ctfassets.net/xz1dnu24egyd/3FbNmZRES38q2Sk2EcoT7a/a290dc207a67cf779fc7c2456b177e9f/press-kit-icon.svg" title="GitLab" />
                  <img alt="Docker" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/349342/docker.svg" title="Docker" />
                  <img
                    alt="Airflow"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://icon.icepanel.io/Technology/svg/Apache-Airflow.svg"
                    title="Airflow" />
                  <img
                    alt="Kubernetes"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://www.svgrepo.com/show/376331/kubernetes.svg"
                    title="Kubernetes" />
                  <img
                    alt="Argoproj"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://landscape.cncf.io/logos/argo.svg"
                    title="Argoproj" />
                  <img
                    alt="Terraform"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://static-00.iconduck.com/assets.00/terraform-icon-452x512-ildgg5fd.png"
                    title="Terraform" />
                </CardContent>
              </Card>
              <Card
                className="bg-gray-800 transform hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <h4 className="text-lg font-bold text-green-500">HPC</h4>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4 justify-center items-center space-x-2">
                  <img alt="CUDA" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/373541/cuda.svg" title="CUDA" />
                  <img
                    alt="OpenCL"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenCL_logo.svg"
                    title="OpenCL" />
                  <img alt="OpenMP" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/499714/rocket.svg" title="OpenMP" />
                  <img alt="MPI" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/448987/cluster.svg" title="MPI" />
                  <img alt="MKL" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/454733/chip-computer-cpu.svg" title="MKL" />
                  <img alt="BLAS" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/288625/chip-processor.svg" title="BLAS" />
                  <img alt="LAPACK" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/LAPACK_logo.svg" title="LAPACK" />

                  <img
                    alt="Inria/Vite"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://www.svgrepo.com/show/408990/thunderbolt.svg"
                    title="Inria/Vite" />
                </CardContent>
              </Card>
              <Card
                className="bg-gray-800 transform hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <h4 className="text-lg font-bold text-indigo-500">Data Science</h4>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4 justify-center items-center space-x-2">
                  <img
                    alt="PyTorch"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://www.svgrepo.com/show/354240/pytorch.svg"
                    title="PyTorch" />
                  <img
                    alt="TensorFlow"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200 "
                    src="https://www.svgrepo.com/show/375503/tensorflow-enterprise.svg"
                    title="TensorFlow" />
                  <img
                    alt="Hugging Face"
                    className="w-10 h-10 transform hover:scale-110 transition-transform duration-200"
                    src="https://www.svgrepo.com/show/396671/hugging-face.svg"
                    title="Hugging Face" />
                  <img alt="Pandas" className="w-10 h-10 transform hover:scale-110 transition-transform duration-200" src="https://www.svgrepo.com/show/473742/pandas.svg" title="Pandas" />
                </CardContent>
              </Card>
            </div>
          </section>

        </main>

        <section className="w-full flex flex-col items-center gap-8 p-4 mt-auto" id="contact">
          <h3 className="text-2xl font-bold">Contact</h3>
          <a href="mailto:David%20Doe%20<davidkamgang84@gmail.com>" rel="noopener noreferrer" target="_blank">
            <Button
              className="bg-blue-500 hover:bg-blue-700 w-full sm:w-auto"
              variant="filled">
              <MailIcon className="w-4 h-4" />
              Contact Me
            </Button>
          </a>
        </section>

        <footer className="w-full flex justify-center items-center p-4 bg-gray-800">
          <p className="text-sm text-gray-500">© David KAMGANG</p>
        </footer>

      </div>)
  );
}


function InfoIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>)
  );
}


function ProjectorIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path
        d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>)
  );
}


function ActivityIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>)
  );
}


function SchoolIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>)
  );
}


function ComputerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>)
  );
}


function CurrencyIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>)
  );
}


function ContactIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>)
  );
}


function InstagramIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}


function GithubIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>)
  );
}


function LinkedinIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function YoutubeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>)
  );
}
