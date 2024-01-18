"use client"

import { useRouter } from "next/navigation"
import clsx from "clsx"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InfoCardProps {
  title: string
  description: string
  destination?: string
  disabled?: boolean
}

export const InfoCard = (props: InfoCardProps) => {
  const { title, description, destination, disabled } = props

  const router = useRouter()

  return (
    <Card
      className={clsx(
        "",
        disabled
          ? "relative hover:cursor-not-allowed"
          : "transition-shadow duration-200 hover:cursor-pointer hover:bg-slate-50 hover:shadow-sm"
      )}
      onClick={() => {
        if (destination) router.push(destination)
      }}
    >
      {disabled && (
        <Badge variant={"default"} className="absolute -right-1 -top-1">
          Coming Soon
        </Badge>
      )}
      <CardHeader className={clsx(disabled && "opacity-50")}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className={clsx(disabled && "opacity-50")}>
        {description}
      </CardContent>
    </Card>
  )
}
