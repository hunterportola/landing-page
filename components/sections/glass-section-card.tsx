import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type GlassSectionCardProps = React.ComponentProps<typeof Card>

const glassClasses =
  "backdrop-blur-[25px] backdrop-saturate-[200%] bg-background/80 border-[rgba(209,213,219,0.3)] shadow-lg"

export const GlassSectionCard = React.forwardRef<
  HTMLDivElement,
  GlassSectionCardProps
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn(glassClasses, className)} {...props} />
))

GlassSectionCard.displayName = "GlassSectionCard"

export {
  CardContent as GlassSectionCardContent,
  CardDescription as GlassSectionCardDescription,
  CardFooter as GlassSectionCardFooter,
  CardHeader as GlassSectionCardHeader,
  CardTitle as GlassSectionCardTitle,
}
