import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BottomBarAction = {
  label: string
  href: string
}

type BottomBarSection = {
  title: string
  actions: BottomBarAction[]
}

type BottomBarProps = {
  brand?: React.ReactNode
  sections: BottomBarSection[]
  footerNote?: string
  secondaryNote?: string
  className?: string
}

export function BottomBar({
  brand,
  sections,
  footerNote,
  secondaryNote,
  className,
}: BottomBarProps) {
  return (
    <footer className={cn("border-t bg-muted/20", className)}>
      <div className="container mx-auto space-y-10 px-6 py-12">
        {brand ? (
          <div className="text-lg font-semibold uppercase tracking-widest">
            {brand}
          </div>
        ) : null}

        <div className="grid gap-8 md:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wide">
                {section.title}
              </h3>
              <div className="flex flex-col gap-3">
                {section.actions.map((action) => (
                  <Button key={action.label} variant="outline" asChild>
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {(footerNote || secondaryNote) && (
          <div className="flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <span>{footerNote}</span>
            <span>{secondaryNote}</span>
          </div>
        )}
      </div>
    </footer>
  )
}
