import * as React from "react"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

const layerToneClasses = {
  default: [
    "absolute inset-0 -z-30 rounded-[32px] bg-slate-950/85 shadow-[0_30px_80px_rgba(2,6,23,0.7)]",
    "absolute inset-0 -z-20 translate-x-[22px] translate-y-[22px] rounded-[30px] border border-white/5 bg-slate-900/70 shadow-[0_26px_60px_rgba(2,6,23,0.55)]",
    "absolute inset-0 -z-10 translate-x-[12px] translate-y-[12px] rounded-[28px] border border-white/10 bg-white/10",
  ],
  "progressive-dark": [
    "absolute inset-0 -z-40 rounded-[38px] border border-white/5 bg-gradient-to-br from-white/12 via-white/4 to-transparent shadow-[0_40px_110px_rgba(15,23,42,0.25)]",
    "absolute inset-0 -z-30 translate-x-[28px] translate-y-[28px] rounded-[34px] border border-white/10 bg-slate-900/55 shadow-[0_36px_90px_rgba(15,23,42,0.35)]",
    "absolute inset-0 -z-20 translate-x-[18px] translate-y-[18px] rounded-[32px] border border-white/12 bg-slate-950/70 shadow-[0_28px_70px_rgba(15,23,42,0.4)]",
    "absolute inset-0 -z-10 translate-x-[10px] translate-y-[10px] rounded-[30px] border border-white/15 bg-slate-950/80",
  ],
} as const

type LayerTone = keyof typeof layerToneClasses

export interface LayeredGlassPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Accent color used to tint the conic highlight layer.
   */
  accentColor?: string
  /**
   * Controls the palette of supporting layers. Use `"progressive-dark"` to step
   * each layer darker toward the foreground, matching the reference structure.
   */
  tone?: LayerTone
}

/**
 * A layered glassmorphism shell that creates depth by stacking
 * multiple translucent panels with blur, gradients, and soft shadows.
 */
export const LayeredGlassPanel = React.forwardRef<
  HTMLDivElement,
  LayeredGlassPanelProps
>(
  (
    {
      className,
      accentColor = "rgba(99, 102, 241, 0.9)",
      tone = "progressive-dark",
      children,
      ...props
    },
    ref,
  ) => {
    const layers = layerToneClasses[tone] ?? layerToneClasses.default

    return (
      <div
        ref={ref}
        style={{ "--glass-accent": accentColor } as React.CSSProperties}
        className={cn(
          "group relative isolate flex w-full max-w-md flex-col text-sm text-slate-50/90",
          className,
        )}
        {...props}
      >
        {layers.map((layerClass, index) => (
          <div key={`${tone}-${index}`} className={layerClass} aria-hidden="true" />
        ))}
        <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/15 bg-white/10 px-8 py-9 backdrop-blur-2xl backdrop-saturate-150">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_58%)] opacity-70 transition-opacity duration-500 group-hover:opacity-90"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-x-20 top-[-55%] h-[140%] bg-[conic-gradient(from_200deg_at_50%_50%,var(--glass-accent),transparent_220deg)] opacity-35 blur-3xl transition duration-700 ease-out group-hover:opacity-55"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-px rounded-[22px] bg-gradient-to-br from-white/30 via-white/5 to-white/10 opacity-70"
            aria-hidden="true"
          />
          <div className="relative z-10 space-y-6">{children}</div>
        </div>
      </div>
    )
  },
)

LayeredGlassPanel.displayName = "LayeredGlassPanel"

export interface LayeredGlassBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode
}

export function LayeredGlassBadge({
  icon,
  children,
  className,
  ...props
}: LayeredGlassBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/70 backdrop-blur-xl",
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  )
}

export interface LayeredGlassMetricProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string
  trend?: {
    direction: "up" | "down"
    label: string
  }
}

export function LayeredGlassMetric({
  label,
  value,
  trend,
  className,
  ...props
}: LayeredGlassMetricProps) {
  const TrendIcon = trend?.direction === "down" ? ArrowDownRight : ArrowUpRight

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-left backdrop-blur-xl",
        className,
      )}
      {...props}
    >
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/60">
          {label}
        </p>
        <p className="text-lg font-semibold text-white">{value}</p>
      </div>
      {trend ? (
        <span
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-[0.65rem] font-medium",
            trend.direction === "down"
              ? "bg-rose-500/15 text-rose-200"
              : "bg-emerald-500/15 text-emerald-100",
          )}
        >
          <TrendIcon className="h-3.5 w-3.5" />
          {trend.label}
        </span>
      ) : null}
    </div>
  )
}
