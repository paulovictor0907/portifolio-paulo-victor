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
  { skill: "Spring Boot", level: 80 },
  { skill: "Vue", level: 60 },
  { skill: "React", level: 90 },
  { skill: "Microservices", level: 75 },
  { skill: "Docker", level: 70 },
]


const chartConfig = {
  level: {
    label: "Nível",
    color: "hsl(0 84.2% 60.2%)",
  },
} satisfies ChartConfig

export function ToolsRadarChart() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="items-center">
        <CardTitle>Tecnologias e Ferramentas</CardTitle>
        <CardDescription>
          Proficiência em frameworks e arquiteturas
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
