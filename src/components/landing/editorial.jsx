import { profile, projects, skills } from "@/content/profile"

// Option A — Editorial.
// Warm paper, an expressive serif for display type, and a numbered index of work.

export function Editorial() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex items-center justify-between py-6 text-sm">
          <a href="#top" className="font-medium tracking-tight">{profile.name}</a>
          <nav className="flex gap-6 text-[#1a1a1a]/70">
            <a className="hover:text-[#1a1a1a]" href="#work">Work</a>
            <a className="hover:text-[#1a1a1a]" href="#about">About</a>
            <a className="hover:text-[#1a1a1a]" href="#contact">Contact</a>
          </nav>
        </header>

        <section id="top" className="pb-20 pt-16 sm:pb-28 sm:pt-24">
          <p className="reveal flex items-center gap-3 text-sm text-[#1a1a1a]/60">
            <span className="inline-block h-2 w-2 rounded-full bg-[#b4532a]" />
            {profile.role} — open to collaboration
          </p>
          <h1 className="reveal reveal-1 mt-8 max-w-5xl font-serif text-[13vw] leading-[0.92] tracking-[-0.02em] sm:text-8xl lg:text-[8.5rem]">
            I build fast systems <em className="text-[#b4532a]">&amp; the AI tools</em> that run on them.
          </h1>
          <div className="reveal reveal-2 mt-12 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="pretty max-w-xl text-lg leading-relaxed text-[#1a1a1a]/75">{profile.intro}</p>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 self-start rounded-full border border-[#1a1a1a] px-6 py-3 text-sm font-medium transition-colors hover:bg-[#1a1a1a] hover:text-[#f4f1ea] sm:self-end"
            >
              Selected work
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </section>

        <section id="work" className="scroll-mt-8 border-t border-[#1a1a1a]/15 py-16 sm:py-24">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-serif text-4xl sm:text-5xl">Selected work</h2>
            <span className="text-sm text-[#1a1a1a]/50">{String(projects.length).padStart(2, "0")} projects</span>
          </div>
          <ol>
            {projects.map((p, i) => (
              <li key={p.name} className="border-t border-[#1a1a1a]/15 last:border-b">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 sm:grid-cols-[3.5rem_16rem_1fr_auto] sm:gap-x-8"
                >
                  <span className="font-mono text-xs text-[#1a1a1a]/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-3xl leading-none transition-colors group-hover:text-[#b4532a] sm:text-4xl">
                    {p.name}
                  </span>
                  <span className="col-span-3 col-start-2 row-start-2 max-w-xl text-[15px] leading-relaxed text-[#1a1a1a]/70 sm:col-span-1 sm:col-start-3 sm:row-start-1">
                    {p.award && <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-[#b4532a]">{p.award}</span>}
                    {p.blurb}
                  </span>
                  <span className="col-start-3 row-start-1 flex items-center gap-3 text-sm text-[#1a1a1a]/50 sm:col-start-4">
                    <span className="hidden md:inline">{p.kind}</span>
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b4532a]">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="grid scroll-mt-8 gap-12 border-t border-[#1a1a1a]/15 py-16 sm:py-24 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex items-start gap-5">
            <img src={profile.avatar} alt={profile.name} className="h-20 w-20 rounded-full object-cover grayscale" />
            <h2 className="font-serif text-4xl sm:text-5xl">About</h2>
          </div>
          <div>
            <p className="pretty font-serif text-2xl leading-snug sm:text-3xl">
              I care about the whole stack — the kernel that saves a millisecond, the pipeline that keeps data honest,
              and the interface that makes a model <em>useful</em>. Most of what I build is open source.
            </p>
            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.area}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-[#1a1a1a]/50">{s.area}</dt>
                  <dd className="mt-2 leading-relaxed text-[#1a1a1a]/80">{s.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 border-t border-[#1a1a1a]/15 py-20 sm:py-32">
          <p className="text-sm text-[#1a1a1a]/60">Have a project in mind?</p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-4 inline-block font-serif text-5xl leading-none sm:text-7xl lg:text-8xl"
          >
            Let’s talk<span className="text-[#b4532a]">.</span>
            <span className="ml-4 inline-block text-[#1a1a1a]/30 transition-all group-hover:translate-x-2 group-hover:text-[#b4532a]">→</span>
          </a>
          <p className="mt-6 text-[#1a1a1a]/60">{profile.email}</p>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#1a1a1a]/15 py-8 pb-20 text-sm text-[#1a1a1a]/60 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-6">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hover:text-[#1a1a1a]">{l.label}</a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
