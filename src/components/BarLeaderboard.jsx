"use client"

import { useEffect, useMemo, useState } from 'react'
import * as d3 from 'd3'

export default function BarLeaderboard({ limit = 10 }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        const res = await fetch('/api/daily-sentiment?metric=net', { cache: 'no-store', signal: controller.signal })
        if (!res.ok) throw new Error(await res.text())
        const json = await res.json()
        const leaves = (json?.children || []).map(c => ({ name: c?.name, value: c?.children?.[0]?.value || 0 }))
        setData(leaves)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [])

  const top = useMemo(() => {
    if (!data) return null
    const sorted = [...data].sort((a, b) => b.value - a.value)
    const best = sorted.slice(0, limit)
    const worst = sorted.slice(-limit).reverse()
    return { best, worst }
  }, [data, limit])

  if (loading) return <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">Loading…</div>
  if (error) return <div className="flex h-40 items-center justify-center text-sm text-red-600">{error}</div>
  if (!top) return null

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Bars title="Top positive (net)" data={top.best} positive />
      <Bars title="Top negative (net)" data={top.worst} />
    </div>
  )
}

function Bars({ title, data, positive }) {
  const width = 520
  const barH = 22
  const height = 40 + data.length * (barH + 10)
  const margin = { top: 20, right: 12, bottom: 16, left: 120 }

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => Math.abs(d.value)) || 1])
    .nice()
    .range([0, width - margin.left - margin.right])

  const color = d3.scaleSequential(positive ? d3.interpolateGreens : d3.interpolateReds)
    .domain([0, x.domain()[1]])

  return (
    <div className="rounded-xl border bg-card p-4 elevated-card">
      <div className="mb-2 text-sm text-muted-foreground">{title}</div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {data.map((d, i) => {
          const w = x(Math.abs(d.value))
          return (
            <g key={d.name} transform={`translate(${margin.left},${margin.top + i * (barH + 10)})`}>
              <rect rx="6" width={w} height={barH} fill={color(Math.abs(d.value))} />
              <text x={-10} y={barH / 2} dominantBaseline="middle" textAnchor="end" className="fill-muted-foreground" fontSize="12">{d.name}</text>
              <text x={w + 8} y={barH / 2} dominantBaseline="middle" className="fill-muted-foreground" fontSize="12">{format(d.value)}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

function format(v) {
  const f = d3.format('~s')
  return v >= 0 ? `+${f(v)}` : f(v)
}


