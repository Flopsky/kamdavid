"use client"

import { useEffect, useState } from 'react'
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Projector } from "lucide-react"
import InteractiveTreemap from '@/components/Treemap'
import LineAreaChart from '@/components/LineAreaChart'
import BarLeaderboard from '@/components/BarLeaderboard'
import BreadthGauge from '@/components/BreadthGauge'


export function Component() {
  const [treeData, setTreeData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        const res = await fetch('/api/daily-sentiment?metric=positive', { cache: 'no-store', signal: controller.signal })
        if (!res.ok) throw new Error(await res.text())
        const json = await res.json()
        setTreeData(json)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [])








    return (
        <div className="flex flex-col gap-8">
            <Card className="elevated-card">
                <CardHeader>
                    <h1 className="text-xl font-semibold text-gradient"><Projector className="mr-2 inline h-5 w-5" /> Project Rocket</h1>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    This dashboard ranks stocks: greener = better, bigger = larger movement. Updated {treeData?.as_of_date ? `on ${treeData.as_of_date}` : 'every 24h'}.
                </CardContent>
            </Card>

            <div className="w-full">
                <div className="h-[70vh] w-full">
                    {loading && <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Loading…</div>}
                    {error && <div className="flex h-full items-center justify-center text-sm text-red-600">{error}</div>}
                    {!loading && !error && treeData && <InteractiveTreemap data={treeData} />}
                </div>
            </div>

            {!loading && !error && (
                <Card className="elevated-card">
                    <CardHeader>
                        <h2 className="text-lg font-semibold">Market overview</h2>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 lg:grid-cols-[1fr_280px] items-start">
                            <LineAreaChart days={90} />
                            <div className="flex justify-center"><BreadthGauge /></div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {!loading && !error && (
                <Card className="elevated-card">
                    <CardHeader>
                        <h2 className="text-lg font-semibold">Leaders & laggards today</h2>
                    </CardHeader>
                    <CardContent>
                        <BarLeaderboard limit={8} />
                    </CardContent>
                </Card>
            )}

            

            <section className="flex items-center justify-center">
                <a href="mailto:davidkamgang84@gmail.com">
                    <Button variant="soft">Contact Me</Button>
                </a>
            </section>
        </div>
    );
}
