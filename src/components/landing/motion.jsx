"use client"

import { useEffect, useRef, useState } from "react"

// Interaction primitives for the landing page. Every effect is skipped when the
// visitor asks for reduced motion, and tilt only runs on fine pointers (mouse/trackpad).

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Adds `is-visible` once the element scrolls into view.
export function useInView(ref, { once = true, threshold = 0.15 } = {}) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return setVisible(true)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) io.disconnect()
        } else if (!once) setVisible(false)
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref, once, threshold])
  return visible
}

// A bento tile: reveals on scroll, follows the cursor with a soft spotlight,
// and (optionally) tilts in 3D toward the pointer.
export function Tile({ as: Tag = "div", className = "", delay = 0, tilt = false, glow = "rgba(47,76,255,0.10)", children, ...props }) {
  const ref = useRef(null)
  const visible = useInView(ref)

  function onPointerMove(e) {
    const el = ref.current
    if (!el || e.pointerType !== "mouse") return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty("--mx", `${x}px`)
    el.style.setProperty("--my", `${y}px`)
    if (tilt && !prefersReducedMotion()) {
      const rx = ((y / r.height) - 0.5) * -6
      const ry = ((x / r.width) - 0.5) * 6
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    }
  }

  function onPointerLeave() {
    if (ref.current) ref.current.style.transform = ""
  }

  return (
    <Tag
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ "--delay": `${delay}ms`, "--glow": glow }}
      className={`tile group relative isolate overflow-hidden ${visible ? "is-visible" : ""} ${className}`}
      {...props}
    >
      <span aria-hidden className="tile-glow pointer-events-none absolute inset-0 -z-10" />
      {children}
    </Tag>
  )
}

// Letters of a headline rise in one after another.
export function StaggerText({ text, start = 0, step = 35 }) {
  return (
    <span aria-label={text}>
      {[...text].map((ch, i) => (
        <span key={i} aria-hidden className="rise inline-block" style={{ animationDelay: `${start + i * step}ms` }}>
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  )
}

// Cycles through words with a vertical slide.
export function RotatingWord({ words, interval = 2200 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])
  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {words.map((w, n) => (
        <span
          key={w}
          aria-hidden={n !== i}
          className="col-start-1 row-start-1 whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateY(${(n - i) * 110}%)`, opacity: n === i ? 1 : 0 }}
        >
          {w}
        </span>
      ))}
    </span>
  )
}

// Scroll progress (0 → 1), whether the page has scrolled, and which section is on screen.
export function useScrollState(sectionIds) {
  const [state, setState] = useState({ progress: 0, scrolled: false, active: null })
  useEffect(() => {
    let frame = 0
    function update() {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const y = window.scrollY
      let active = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) active = id
      }
      setState({ progress: max > 0 ? y / max : 0, scrolled: y > 24, active })
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [sectionIds])
  return state
}

// Pulls a child toward the cursor while the pointer is over `areaRef`.
export function useMagnet(areaRef, strength = 0.25) {
  const target = useRef(null)
  useEffect(() => {
    const area = areaRef.current
    const el = target.current
    if (!area || !el || prefersReducedMotion()) return
    function move(e) {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    }
    function reset() {
      el.style.transform = ""
    }
    area.addEventListener("pointermove", move)
    area.addEventListener("pointerleave", reset)
    return () => {
      area.removeEventListener("pointermove", move)
      area.removeEventListener("pointerleave", reset)
    }
  }, [areaRef, strength])
  return target
}

// Copies text to the clipboard and briefly reports success.
export function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${text}`
    }
  }
  return (
    <button type="button" onClick={copy} className={className} aria-live="polite">
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  )
}

// A Manim-style scene for the DeepManim tile: axes, a sine wave drawing itself,
// a tracer dot riding the curve and a rotating unit circle.
export function ManimScene({ className = "" }) {
  const wave = "M0 60 C 25 0, 50 0, 75 60 S 125 120, 150 60 S 200 0, 225 60 S 275 120, 300 60"
  return (
    <svg viewBox="-10 -10 320 140" className={className} fill="none" aria-hidden>
      <path d="M0 60 H300 M0 0 V120" stroke="currentColor" strokeOpacity=".25" />
      {[75, 150, 225].map((x) => (
        <path key={x} d={`M${x} 56 V64`} stroke="currentColor" strokeOpacity=".35" />
      ))}
      <path d={wave} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" pathLength="1" className="draw" />
      <circle r="5" fill="currentColor">
        <animateMotion dur="4s" repeatCount="indefinite" path={wave} />
      </circle>
      <g transform="translate(262 22)">
        <circle r="16" stroke="currentColor" strokeOpacity=".5" />
        <g className="spin">
          <path d="M0 0 L16 0" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" r="3" fill="currentColor" />
        </g>
      </g>
    </svg>
  )
}
