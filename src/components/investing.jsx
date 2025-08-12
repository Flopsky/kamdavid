"use client"

import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Projector } from "lucide-react"
import InteractiveTreemap from '@/components/Treemap'
import data from '@/data/positive.json'


export function Component() {








    return (
        <div className="flex flex-col gap-8">
            <Card>
                <CardHeader>
                    <h1 className="text-xl font-semibold"><Projector className="mr-2 inline h-5 w-5" /> Project Rocket</h1>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    This dashboard ranks stocks: greener = better, bigger = larger movement. Updated every 24h.
                </CardContent>
            </Card>

            <div className="w-full">
                <div className="h-[70vh] w-full">
                    <InteractiveTreemap data={data} />
                </div>
            </div>

            <section className="flex items-center justify-center">
                <a href="mailto:davidkamgang84@gmail.com">
                    <Button>Contact Me</Button>
                </a>
            </section>
        </div>
    );
}
