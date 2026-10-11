"use client"

import { useRef } from "react"
import { profile, projects, skills } from "@/content/profile"
import { Tile, StaggerText, RotatingWord, useScrollState, useMagnet, CopyButton, ManimScene } from "./motion"

// Landing page.
// A warm bento grid: cream paper, ivory tiles, grotesk type with serif-italic accents,
// and a single clay accent. Colors live in tailwind.config.js.

const pad = "rounded-[24px] p-6 sm:p-8"
const card = "bg-ivory ring-1 ring-ink/[0.06]"
const sections = ["work", "skills", "contact"]
const building = ["GPU kernels", "data platforms", "AI products", "open source"]

function Arrow({ className = "" }) {
  return (
    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-base transition-all duration-300 group-hover:rotate-45 ${className}`}>
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
      glow={featured ? "rgba(255,236,214,0.22)" : "rgba(191,85,48,0.09)"}
      className={`flex flex-col justify-between gap-8 outline-none focus-visible:ring-4 focus-visible:ring-clay/40 ${pad} ${
        featured ? "bg-gradient-to-br from-[#c8613b] to-clay-deep text-ivory md:col-span-2 md:row-span-2" : card
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs tracking-wide ${featured ? "bg-ivory/15 text-ivory/90" : "bg-sand/60 text-ink/70"}`}>
          {p.kind}
        </span>
        <Arrow className={featured ? "border-ivory/30 group-hover:bg-ivory group-hover:text-clay-deep" : "border-ink/10 text-ink/70 group-hover:border-clay group-hover:bg-clay group-hover:text-ivory"} />
      </div>
      {featured && <ManimScene className="w-full max-w-lg self-center text-ivory/90" />}
      <div>
        {p.award && <p className={`mb-2 text-xs font-medium ${featured ? "text-ivory/80" : "text-clay"}`}>★ {p.award}</p>}
        <h3 className={`font-grotesk font-medium tracking-tight transition-colors ${featured ? "text-5xl sm:text-7xl" : "text-3xl group-hover:text-clay"}`}>{p.name}</h3>
        <p className={`pretty mt-3 leading-relaxed ${featured ? "max-w-md text-lg text-ivory/80" : "text-[15px] text-ink/60"}`}>{p.blurb}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {p.tags.map((t) => (
            <span key={t} className={`text-xs ${featured ? "text-ivory/60" : "text-ink/40"}`}>#{t.toLowerCase().replace(/\s+/g, "")}</span>
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
          <span className="text-base text-clay/70">✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <Tile delay={240} className="marquee-wrap col-span-full rounded-[24px] py-5 font-serif text-3xl italic text-ink/80 ring-1 ring-ink/10 sm:text-4xl">
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
    <div className="grain min-h-screen bg-cream text-ink">
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-ochre to-clay"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header
          className={`sticky top-3 z-40 mt-3 flex items-center justify-between rounded-full px-5 py-2.5 text-sm backdrop-blur-md transition-all duration-500 ${
            scrolled ? "bg-ivory/85 shadow-[0_10px_30px_-15px_rgba(74,40,20,0.35)] ring-1 ring-ink/[0.06]" : "bg-transparent"
          }`}
        >
          <a href="#top" className="font-serif text-2xl italic leading-none transition-colors hover:text-clay">
            dk<span className="text-clay">.</span>
          </a>
          <nav className="flex items-center gap-1 text-ink/55">
            {sections.slice(0, 2).map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-full px-3 py-1.5 capitalize transition-colors ${active === id ? "bg-sand/70 text-ink" : "hover:text-ink"}`}
              >
                {id}
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-1 rounded-full px-4 py-1.5 text-ivory transition-colors ${active === "contact" ? "bg-clay" : "bg-espresso hover:bg-clay"}`}
            >
              Contact
            </a>
          </nav>
        </header>

        <section id="top" className="grid gap-3 pt-6 md:grid-cols-4">
          <Tile className={`${pad} ${card} flex flex-col justify-between gap-16 md:col-span-3 md:row-span-2`}>
            <p className="text-sm text-ink/55">
              {profile.role} — building{" "}
              <span className="font-serif text-base italic text-clay"><RotatingWord words={building} /></span>
            </p>
            <h1 className="font-grotesk text-[15vw] font-medium leading-[0.86] tracking-[-0.045em] md:text-[8rem] lg:text-[9.5rem]">
              <StaggerText text="David" start={100} />
              <br />
              <StaggerText text="Kamgang" start={280} />
              <span className="rise inline-block text-clay" style={{ animationDelay: "560ms" }}>.</span>
            </h1>
            <p className="pretty max-w-xl text-lg leading-relaxed text-ink/65">{profile.intro}</p>
          </Tile>

          <Tile delay={120} className="rounded-[24px] bg-sand">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="aspect-square h-full w-full object-cover sepia-[.15] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Tile>

          <Tile
            as="a"
            href="#contact"
            delay={200}
            glow="rgba(255,248,238,0.5)"
            className={`${pad} flex flex-col justify-between gap-8 bg-sand text-ink`}
          >
            <span className="flex items-center gap-2 text-sm text-ink/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
              </span>
              Available
            </span>
            <span className="flex items-end justify-between gap-3 font-grotesk text-2xl font-medium leading-tight">
              <span>Open to <span className="font-serif text-[1.15em] italic">collaboration</span></span>
              <Arrow className="border-ink/15 group-hover:border-clay group-hover:bg-clay group-hover:text-ivory" />
            </span>
          </Tile>

          <Marquee />
        </section>

        <section id="work" className="scroll-mt-20 pt-20">
          <div className="mb-6 flex items-end justify-between px-2">
            <h2 className="font-grotesk text-4xl font-medium tracking-tight sm:text-5xl">
              Selected <span className="font-serif text-[1.1em] italic text-clay">work</span>
            </h2>
            <span className="text-sm text-ink/50">{String(projects.length).padStart(2, "0")} projects</span>
          </div>
          <div className="grid auto-rows-[minmax(260px,auto)] gap-3 md:grid-cols-4">
            <ProjectTile p={featured} featured delay={0} />
            {rest.map((p, i) => <ProjectTile key={p.name} p={p} delay={80 * (i + 1)} />)}
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 pt-20">
          <h2 className="mb-6 px-2 font-grotesk text-4xl font-medium tracking-tight sm:text-5xl">
            What I <span className="font-serif text-[1.1em] italic text-clay">work with</span>
          </h2>
          <div className="grid gap-3 md:grid-cols-4">
            {skills.map((s, i) => (
              <Tile key={s.area} delay={80 * i} className={`${pad} ${card}`}>
                <span className="font-serif text-lg italic text-clay">0{i + 1}</span>
                <h3 className="mt-1 font-grotesk text-lg font-medium">{s.area}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="cursor-default rounded-full bg-sand/50 px-3 py-1.5 text-sm text-ink/75 transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay hover:text-ivory"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </Tile>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 py-20">
          <Tile glow="rgba(217,154,78,0.22)" className="rounded-[24px] bg-espresso p-8 text-ivory sm:p-12">
            <div ref={contactRef} className="flex flex-col justify-between gap-16 md:flex-row md:items-end">
              <div>
                <p className="text-sm text-ivory/50">Have a project in mind?</p>
                <p className="mt-4 font-grotesk text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl">
                  Let’s build<br />
                  <span className="font-serif text-[1.1em] italic text-ochre">something</span>
                  <span className="text-clay">.</span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <CopyButton
                  text={profile.email}
                  className="rounded-full border border-ivory/20 px-5 py-3 text-sm text-ivory/75 transition-colors hover:border-ivory/60 hover:text-ivory"
                />
                <a
                  ref={magnet}
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-full bg-clay py-2 pl-5 pr-2 text-sm font-medium transition-[transform,background-color] duration-200 ease-out hover:bg-[#cc6038]"
                >
                  {profile.email}
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-base text-clay-deep">↗</span>
                </a>
              </div>
            </div>
          </Tile>
        </section>

        <footer className="flex flex-col gap-4 border-t border-ink/10 px-2 pb-24 pt-6 text-sm text-ink/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-5">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">{l.label}</a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
