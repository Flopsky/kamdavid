import { profile, projects, skills } from "@/content/profile"

// Landing page.
// A confident grid of tiles: bold grotesk type, soft neutrals, one cobalt accent.

const tile = "rounded-[28px] bg-white p-6 sm:p-8"

function Arrow({ className = "" }) {
  return (
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-lg transition-transform duration-300 group-hover:rotate-45 ${className}`}>
      ↗
    </span>
  )
}

function ProjectTile({ p, featured }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className={`group flex flex-col justify-between gap-10 transition-transform duration-300 hover:-translate-y-1 ${
        featured ? "rounded-[28px] bg-[#2f4cff] p-6 text-white sm:p-8 md:col-span-2 md:row-span-2" : tile
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${featured ? "bg-white/15" : "bg-[#ececea] text-neutral-600"}`}>
          {p.award ?? p.kind}
        </span>
        <Arrow className={featured ? "border-white/30" : "border-neutral-900/15"} />
      </div>
      <div>
        <h3 className={`font-grotesk font-semibold tracking-tight ${featured ? "text-5xl sm:text-7xl" : "text-3xl"}`}>{p.name}</h3>
        <p className={`pretty mt-3 leading-relaxed ${featured ? "max-w-md text-lg text-white/80" : "text-[15px] text-neutral-600"}`}>{p.blurb}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className={`text-xs ${featured ? "text-white/60" : "text-neutral-400"}`}>#{t.toLowerCase().replace(/\s+/g, "")}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

export function Bento() {
  const featured = projects.find((p) => p.award)
  const rest = projects.filter((p) => p !== featured)

  return (
    <div className="min-h-screen bg-[#ececea] text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="sticky top-3 z-40 mt-3 flex items-center justify-between rounded-full bg-white/80 px-5 py-3 text-sm backdrop-blur">
          <a href="#top" className="font-grotesk font-semibold">dk.</a>
          <nav className="flex gap-5 text-neutral-500">
            <a className="hover:text-neutral-900" href="#work">Work</a>
            <a className="hover:text-neutral-900" href="#skills">Skills</a>
            <a className="rounded-full bg-neutral-900 px-4 py-1.5 text-white hover:bg-[#2f4cff]" href="#contact">Contact</a>
          </nav>
        </header>

        <section id="top" className="grid gap-3 pt-6 md:grid-cols-4">
          <div className={`${tile} reveal md:col-span-3 md:row-span-2 flex flex-col justify-between gap-16`}>
            <p className="text-sm text-neutral-500">{profile.role}</p>
            <h1 className="font-grotesk text-[15vw] font-semibold leading-[0.85] tracking-[-0.04em] md:text-[8.5rem] lg:text-[10rem]">
              David<br />Kamgang<span className="text-[#2f4cff]">.</span>
            </h1>
            <p className="pretty max-w-xl text-lg leading-relaxed text-neutral-600">{profile.intro}</p>
          </div>

          <div className="reveal reveal-1 overflow-hidden rounded-[28px] bg-neutral-300">
            <img src={profile.avatar} alt={profile.name} className="aspect-square h-full w-full object-cover" />
          </div>

          <a href="#contact" className="reveal reveal-2 group flex flex-col justify-between gap-8 rounded-[28px] bg-[#2f4cff] p-6 text-white sm:p-8">
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
          </a>
        </section>

        <section id="work" className="scroll-mt-20 pt-16">
          <div className="mb-5 flex items-end justify-between px-2">
            <h2 className="font-grotesk text-4xl font-semibold tracking-tight sm:text-5xl">Selected work</h2>
            <span className="text-sm text-neutral-500">{projects.length} projects</span>
          </div>
          <div className="grid auto-rows-[minmax(260px,auto)] gap-3 md:grid-cols-4">
            {featured && <ProjectTile p={featured} featured />}
            {rest.map((p) => <ProjectTile key={p.name} p={p} />)}
          </div>
        </section>

        <section id="skills" className="grid scroll-mt-20 gap-3 pt-16 md:grid-cols-4">
          <div className={`${tile} md:col-span-4`}>
            <h2 className="font-grotesk text-4xl font-semibold tracking-tight sm:text-5xl">What I work with</h2>
          </div>
          {skills.map((s) => (
            <div key={s.area} className={tile}>
              <h3 className="font-grotesk text-lg font-semibold">{s.area}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="rounded-full bg-[#ececea] px-3 py-1.5 text-sm text-neutral-700">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="contact" className="scroll-mt-20 py-16">
          <a href={`mailto:${profile.email}`} className="group flex flex-col justify-between gap-16 rounded-[28px] bg-neutral-900 p-8 text-white sm:p-12 md:flex-row md:items-end">
            <div>
              <p className="text-sm text-white/50">Have a project in mind?</p>
              <p className="mt-4 font-grotesk text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                Let’s build<br />something<span className="text-[#2f4cff]">.</span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <span className="text-sm sm:text-base">{profile.email}</span>
              <Arrow className="h-14 w-14 border-transparent bg-[#2f4cff] text-white" />
            </div>
          </a>
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
