"use client"

import { useEffect, useMemo, useState } from 'react'
import * as d3 from 'd3'

export default function LineAreaChart({ days = 60 }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        const res = await fetch(`/api/daily-sentiment/history?days=${days}`, { cache: 'no-store', signal: controller.signal })
        if (!res.ok) throw new Error(await res.text())
        const json = await res.json()
        setData(json?.series || [])
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to load history')
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [days])

  const chart = useMemo(() => {
    if (!data || !data.length) return null
    const parsed = data.map(d => ({
      date: new Date(d.date),
      positive: d.positive,
      negative: d.negative,
      net: d.net,
    }))
    return parsed
  }, [data])

  if (loading) return <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">Loading…</div>
  if (error) return <div className="flex h-48 items-center justify-center text-sm text-red-600">{error}</div>
  if (!chart || !chart.length) return <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">No data</div>

  return (
    <MiniChart data={chart} />
  )
}

function MiniChart({ data }) {
  const width = 900
  const height = 240
  const margin = { top: 16, right: 16, bottom: 28, left: 44 }

  const x = d3.scaleUtc()
    .domain(d3.extent(data, d => d.date))
    .range([margin.left, width - margin.right])

  const y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.net)).nice()
    .range([height - margin.bottom, margin.top])

  const area = d3.area()
    .x(d => x(d.date))
    .y0(y(0))
    .y1(d => y(d.net))
    .curve(d3.curveCatmullRom.alpha(0.4))

  const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.net))
    .curve(d3.curveCatmullRom.alpha(0.4))

  const gradientId = 'net-gradient'

  const ticks = x.ticks(6)
  const formatDate = d3.timeFormat('%b %d')

  const min = d3.min(data, d => d.net) ?? 0
  const max = d3.max(data, d => d.net) ?? 0
  const maxAbs = Math.max(Math.abs(min), Math.abs(max), 1)
  const colorScale = d3.scaleDiverging(d3.interpolateRdYlGn).domain([-maxAbs, 0, maxAbs])

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[240px]">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={colorScale(maxAbs)} stopOpacity="0.25" />
          <stop offset="100%" stopColor={colorScale(-maxAbs)} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="none" />
      <path d={area(data)} fill={`url(#${gradientId})`} />
      <path d={line(data)} fill="none" stroke={colorScale(data[data.length - 1].net)} strokeWidth="2" />
      {ticks.map((t, i) => (
        <g key={String(t)} transform={`translate(${x(t)},0)`}>
          <line y1={height - margin.bottom + 6} y2={height - margin.bottom + 10} stroke="currentColor" opacity="0.25" />
          <text y={height - margin.bottom + 20} textAnchor="middle" fontSize="10" className="fill-muted-foreground">{formatDate(t)}</text>
        </g>
      ))}
      <g>
        <line x1={margin.left - 6} x2={margin.left - 10} y1={y(0)} y2={y(0)} stroke="currentColor" opacity="0.25" />
        <text x={margin.left - 12} y={y(0)} dy="0.32em" textAnchor="end" fontSize="10" className="fill-muted-foreground">0</text>
      </g>
    </svg>
  )
}


