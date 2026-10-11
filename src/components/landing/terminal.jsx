import { profile, projects, skills } from "@/content/profile"

// Option B — Terminal.
// Dark, monospaced and precise: an engineer's index with a single acid accent.

const grid = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
}

function Label({ children }) {
  return <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#c6f432]">{children}</p>
}

export function Terminal() {
  return (
    <div className="min-h-screen bg-[#0b0c0a] font-mono text-[#d8d6cc] selection:bg-[#c6f432] selection:text-black" style={grid}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex items-center justify-between border-b border-white/10 py-5 text-xs">
          <a href="#top" className="text-white">dk<span className="text-[#c6f432]">@</span>kamgang:~$</a>
          <nav className="flex gap-5 text-white/50">
            <a className="hover:text-[#c6f432]" href="#work">[work]</a>
            <a className="hover:text-[#c6f432]" href="#stack">[stack]</a>
            <a className="hover:text-[#c6f432]" href="#contact">[contact]</a>
          </nav>
        </header>

        <section id="top" className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="reveal text-sm text-white/40">$ whoami</p>
            <h1 className="reveal reveal-1 mt-4 text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              David<br />Kamgang
            </h1>
            <p className="reveal reveal-2 mt-6 text-lg text-[#c6f432] sm:text-xl">
              &gt; {profile.role}<span className="blink ml-1 inline-block h-5 w-2.5 translate-y-0.5 bg-[#c6f432]" />
            </p>
            <p className="reveal reveal-3 pretty mt-8 max-w-xl text-sm leading-7 text-white/60">{profile.intro}</p>
          </div>

          <dl className="reveal reveal-3 border border-white/10 bg-black/40 text-xs leading-6">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-white/40">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="ml-2">profile.yaml</span>
            </div>
            <div className="space-y-1 p-4">
              {[
                ["focus", "hpc · ml · data platforms"],
                ["gpu", "cuda · opencl · mpi"],
                ["ml", "pytorch · hugging face"],
                ["shipped", `${projects.length} projects, 1 hackathon win`],
                ["status", "open to collaboration"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[5.5rem_1fr]">
                  <dt className="text-white/40">{k}:</dt>
                  <dd className={k === "status" ? "text-[#c6f432]" : "text-white/85"}>{v}</dd>
                </div>
              ))}
            </div>
          </dl>
        </section>

        <section id="work" className="scroll-mt-4 border-t border-white/10 py-16 sm:py-24">
          <Label>01 / Work</Label>
          <div className="border-t border-white/10">
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[2.5rem_1fr_auto] gap-x-4 gap-y-2 border-b border-white/10 px-2 py-6 transition-colors hover:bg-[#c6f432] hover:text-black sm:grid-cols-[3rem_12rem_7rem_1fr_auto] sm:items-baseline"
              >
                <span className="text-xs text-white/30 group-hover:text-black/50">{String(i + 1).padStart(3, "0")}</span>
                <span className="text-lg font-semibold text-white group-hover:text-black">{p.name}</span>
                <span className="hidden text-xs uppercase tracking-wider text-white/40 group-hover:text-black/60 sm:block">{p.kind}</span>
                <span className="col-span-2 col-start-2 text-sm leading-6 text-white/60 group-hover:text-black/80 sm:col-span-1 sm:col-start-auto">
                  {p.award && <span className="mr-2 text-[#c6f432] group-hover:text-black">★ {p.award}.</span>}
                  {p.blurb}
                </span>
                <span className="col-start-3 row-start-1 text-sm text-white/40 group-hover:text-black sm:col-start-auto sm:row-start-auto">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="stack" className="scroll-mt-4 border-t border-white/10 py-16 sm:py-24">
          <Label>02 / Stack</Label>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.area} className="bg-[#0b0c0a] p-6">
                <h3 className="text-sm text-white">## {s.area}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-white/55">
                  {s.items.map((it) => (
                    <li key={it}><span className="text-white/25">- </span>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-4 border-t border-white/10 py-20 sm:py-28">
          <Label>03 / Contact</Label>
          <p className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Got a hard performance problem or an AI product idea? Let’s build it.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-flex items-center gap-3 border border-[#c6f432] px-5 py-3 text-sm text-[#c6f432] transition-colors hover:bg-[#c6f432] hover:text-black"
          >
            $ mail {profile.email} <span>→</span>
          </a>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-8 pb-20 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name} — exit 0</span>
          <div className="flex gap-5">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hover:text-[#c6f432]">{l.label.toLowerCase()}</a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
