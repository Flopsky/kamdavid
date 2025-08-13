"use client"

import { useEffect, useMemo, useState } from 'react'

export default function BreadthGauge() {
  const [leaves, setLeaves] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        const res = await fetch('/api/daily-sentiment?metric=net', { cache: 'no-store', signal: controller.signal })
        if (!res.ok) throw new Error(await res.text())
        const json = await res.json()
        const list = (json?.children || []).map(c => ({ name: c?.name, value: c?.children?.[0]?.value || 0 }))
        setLeaves(list)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to load breadth')
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [])

  const stats = useMemo(() => {
    if (!leaves) return null
    let pos = 0, neg = 0, flat = 0
    for (const l of leaves) {
      if (l.value > 0) pos += 1
      else if (l.value < 0) neg += 1
      else flat += 1
    }
    const total = Math.max(1, leaves.length)
    const pctPos = (100 * pos) / total
    return { pos, neg, flat, total, pctPos }
  }, [leaves])

  if (loading) return <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">Loading…</div>
  if (error) return <div className="flex h-40 items-center justify-center text-sm text-red-600">{error}</div>
  if (!stats) return null

  const R = 54
  const C = 2 * Math.PI * R
  const dash = (stats.pctPos / 100) * C

  return (
    <div className="flex items-center gap-4">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <defs>
          <linearGradient id="breadth-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <g transform="translate(70,70)">
          <circle r={R} fill="none" stroke="hsl(var(--border))" strokeWidth="12" />
          <circle
            r={R}
            fill="none"
            stroke="url(#breadth-grad)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${C - dash}`}
            transform="rotate(-90)"
          />
        </g>
        <text x="70" y="70" textAnchor="middle" dominantBaseline="central" className="fill-foreground" fontSize="20" fontWeight="600">
          {Math.round(stats.pctPos)}%
        </text>
        <text x="70" y="96" textAnchor="middle" className="fill-muted-foreground" fontSize="11">positive</text>
      </svg>
      <div className="text-sm text-muted-foreground">
        <div className="mb-1 text-foreground font-medium">Market breadth</div>
        <div className="space-x-2"><span className="inline-block h-2 w-2 rounded-full bg-green-500 align-middle" /> <span>{stats.pos} up</span></div>
        <div className="space-x-2"><span className="inline-block h-2 w-2 rounded-full bg-red-500 align-middle" /> <span>{stats.neg} down</span></div>
        {stats.flat > 0 && (
          <div className="space-x-2"><span className="inline-block h-2 w-2 rounded-full bg-slate-400 align-middle" /> <span>{stats.flat} flat</span></div>
        )}
        <div className="mt-1 opacity-70">Total: {stats.total}</div>
      </div>
    </div>
  )
}


