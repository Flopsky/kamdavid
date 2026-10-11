"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Temporary pill for comparing the landing-page proposals.
// Delete this component (and its use in layout.js) once a direction is chosen.
const options = [
  { href: "/", label: "A", name: "Editorial" },
  { href: "/b", label: "B", name: "Terminal" },
  { href: "/c", label: "C", name: "Bento" },
]

export function OptionSwitcher() {
  const pathname = usePathname()
  return (
    <nav
      aria-label="Design options"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/90 p-1 font-sans text-xs text-neutral-700 shadow-lg backdrop-blur"
    >
      <span className="px-2 text-neutral-400">Option</span>
      {options.map((o) => {
        const active = pathname === o.href
        return (
          <Link
            key={o.href}
            href={o.href}
            title={o.name}
            className={`rounded-full px-3 py-1.5 transition-colors ${active ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"}`}
          >
            {o.label} <span className="hidden sm:inline">· {o.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
