"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight hover:opacity-90 transition-opacity">David Kamgang</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link className="hover:underline" href="/#about">About</Link>
          <Link className="hover:underline" href="/#projects">Projects</Link>
          <Link className="hover:underline" href="/#skills">Skills</Link>
          <Link className="hover:underline" href="/investing">Investing</Link>
          <Link className="hover:underline" href="/#contact">Contact</Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}


