"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import type { ChartConfig } from "@/components/ui/chart"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart with dots"

const chartData = [
  { skill: "Java", level: 85 },
  { skill: "C/C++", level: 60 },
  { skill: "Node.js", level: 80 },
  { skill: "Python", level: 70 },
  { skill: "TypeScript", level: 85 },
  { skill: "SQL", level: 75 },
  { skill: "JavaScript", level: 85 },
  { skill: "Bash", level: 60 },
]


const chartConfig = {
  level: {
    label: "Nível",
    color: "hsl(54, 90%, 60%)",
  },
} satisfies ChartConfig

export function ChartRadarDots() {
  return (
 <Card className="max-w-lg">
      <CardHeader className="items-center">
        <CardTitle>Linguagens</CardTitle>
        <CardDescription>
          Nível de proficiência nas principais linguagens de
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <PolarAngleAxis dataKey="skill" />
            <PolarGrid />
            <Radar
              dataKey="level" 
              fill="var(--color-level)" 
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
