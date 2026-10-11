"use client"

import { useRef } from "react"
import { profile, projects, skills } from "@/content/profile"
import { Tile, StaggerText, RotatingWord, useScrollState, useMagnet, CopyButton, ManimScene } from "./motion"

// Landing page.
// A confident grid of tiles: bold grotesk type, soft neutrals, one cobalt accent.

const pad = "rounded-[28px] p-6 sm:p-8"
const sections = ["work", "skills", "contact"]
const building = ["GPU kernels", "data platforms", "AI products", "open source"]

function Arrow({ className = "" }) {
  return (
    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg transition-transform duration-300 group-hover:rotate-45 ${className}`}>
      ↗
    </span>
  )
}

function ProjectTile({ p, featured, delay }) {
  return (
    <Tile
      as="a"
      href={p.href}
      target="_blank"
      rel="noreferrer"
      tilt
      delay={delay}
      glow={featured ? "rgba(255,255,255,0.18)" : "rgba(47,76,255,0.10)"}
      className={`flex flex-col justify-between gap-8 outline-none focus-visible:ring-4 focus-visible:ring-[#2f4cff]/40 ${pad} ${
        featured ? "bg-[#2f4cff] text-white md:col-span-2 md:row-span-2" : "bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${featured ? "bg-white/15" : "bg-[#ececea] text-neutral-600"}`}>
          {p.kind}
        </span>
        <Arrow className={featured ? "border-white/30" : "border-neutral-900/15 group-hover:border-[#2f4cff] group-hover:bg-[#2f4cff] group-hover:text-white"} />
      </div>
      {featured && <ManimScene className="w-full max-w-lg self-center text-white/90" />}
      <div>
        {p.award && <p className={`mb-2 text-xs font-medium ${featured ? "text-white/80" : "text-[#2f4cff]"}`}>★ {p.award}</p>}
        <h3 className={`font-grotesk font-semibold tracking-tight transition-colors ${featured ? "text-5xl sm:text-7xl" : "text-3xl group-hover:text-[#2f4cff]"}`}>{p.name}</h3>
        <p className={`pretty mt-3 leading-relaxed ${featured ? "max-w-md text-lg text-white/80" : "text-[15px] text-neutral-600"}`}>{p.blurb}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className={`text-xs ${featured ? "text-white/60" : "text-neutral-400"}`}>#{t.toLowerCase().replace(/\s+/g, "")}</span>
          ))}
        </div>
      </div>
    </Tile>
  )
}

function Marquee() {
  const items = skills.flatMap((s) => s.items)
  const row = (hidden) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((it) => (
        <span key={it} className="flex items-center gap-8 whitespace-nowrap">
          {it}
          <span className="text-[#2f4cff]">✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <Tile delay={240} className="marquee-wrap col-span-full rounded-[28px] bg-neutral-900 py-5 font-grotesk text-2xl font-semibold text-white sm:text-3xl">
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </Tile>
  )
}

export function Bento() {
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const rest = projects.filter((p) => p !== featured)
  const { progress, scrolled, active } = useScrollState(sections)
  const contactRef = useRef(null)
  const magnet = useMagnet(contactRef, 0.3)

  return (
    <div className="min-h-screen bg-[#ececea] text-neutral-900">
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-[#2f4cff]"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header
          className={`sticky top-3 z-40 mt-3 flex items-center justify-between rounded-full px-5 py-3 text-sm backdrop-blur transition-all duration-300 ${
            scrolled ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]" : "bg-white/60"
          }`}
        >
          <a href="#top" className="font-grotesk font-semibold transition-colors hover:text-[#2f4cff]">dk<span className="text-[#2f4cff]">.</span></a>
          <nav className="flex items-center gap-1 text-neutral-500">
            {sections.slice(0, 2).map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-full px-3 py-1.5 capitalize transition-colors ${active === id ? "bg-[#ececea] text-neutral-900" : "hover:text-neutral-900"}`}
              >
                {id}
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-1 rounded-full px-4 py-1.5 text-white transition-colors ${active === "contact" ? "bg-[#2f4cff]" : "bg-neutral-900 hover:bg-[#2f4cff]"}`}
            >
              Contact
            </a>
          </nav>
        </header>

        <section id="top" className="grid gap-3 pt-6 md:grid-cols-4">
          <Tile className={`${pad} flex flex-col justify-between gap-16 bg-white md:col-span-3 md:row-span-2`}>
            <p className="text-sm text-neutral-500">
              {profile.role} — building <span className="font-medium text-[#2f4cff]"><RotatingWord words={building} /></span>
            </p>
            <h1 className="font-grotesk text-[15vw] font-semibold leading-[0.85] tracking-[-0.04em] md:text-[8.5rem] lg:text-[10rem]">
              <StaggerText text="David" start={100} />
              <br />
              <StaggerText text="Kamgang" start={280} />
              <span className="rise inline-block text-[#2f4cff]" style={{ animationDelay: "560ms" }}>.</span>
            </h1>
            <p className="pretty max-w-xl text-lg leading-relaxed text-neutral-600">{profile.intro}</p>
          </Tile>

          <Tile delay={120} className="rounded-[28px] bg-neutral-300">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="aspect-square h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Tile>

          <Tile
            as="a"
            href="#contact"
            delay={200}
            glow="rgba(255,255,255,0.22)"
            className={`${pad} flex flex-col justify-between gap-8 bg-[#2f4cff] text-white`}
          >
            <span className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              Available
            </span>
            <span className="flex items-end justify-between font-grotesk text-2xl font-semibold leading-tight">
              Open to<br />collaboration
              <Arrow className="border-white/30" />
            </span>
          </Tile>

          <Marquee />
        </section>

        <section id="work" className="scroll-mt-20 pt-16">
          <div className="mb-5 flex items-end justify-between px-2">
            <h2 className="font-grotesk text-4xl font-semibold tracking-tight sm:text-5xl">Selected work</h2>
            <span className="text-sm text-neutral-500">{projects.length} projects</span>
          </div>
          <div className="grid auto-rows-[minmax(260px,auto)] gap-3 md:grid-cols-4">
            <ProjectTile p={featured} featured delay={0} />
            {rest.map((p, i) => <ProjectTile key={p.name} p={p} delay={80 * (i + 1)} />)}
          </div>
        </section>

        <section id="skills" className="grid scroll-mt-20 gap-3 pt-16 md:grid-cols-4">
          <Tile className={`${pad} bg-white md:col-span-4`}>
            <h2 className="font-grotesk text-4xl font-semibold tracking-tight sm:text-5xl">What I work with</h2>
          </Tile>
          {skills.map((s, i) => (
            <Tile key={s.area} delay={80 * i} className={`${pad} bg-white`}>
              <h3 className="font-grotesk text-lg font-semibold">{s.area}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="cursor-default rounded-full bg-[#ececea] px-3 py-1.5 text-sm text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2f4cff] hover:text-white"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </Tile>
          ))}
        </section>

        <section id="contact" className="scroll-mt-20 py-16">
          <Tile
            glow="rgba(47,76,255,0.35)"
            className="rounded-[28px] bg-neutral-900 p-8 text-white sm:p-12"
          >
            <div ref={contactRef} className="flex flex-col justify-between gap-16 md:flex-row md:items-end">
              <div>
                <p className="text-sm text-white/50">Have a project in mind?</p>
                <p className="mt-4 font-grotesk text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                  Let’s build<br />something<span className="text-[#2f4cff]">.</span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <CopyButton
                  text={profile.email}
                  className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition-colors hover:border-white hover:text-white"
                />
                <a
                  ref={magnet}
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-full bg-[#2f4cff] py-2 pl-5 pr-2 text-sm font-medium transition-transform duration-200 ease-out hover:bg-[#4560ff]"
                >
                  {profile.email}
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#2f4cff]">↗</span>
                </a>
              </div>
            </div>
          </Tile>
        </section>

        <footer className="flex flex-col gap-4 px-2 pb-24 text-sm text-neutral-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-5">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hover:text-neutral-900">{l.label}</a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
