import { AnimatedPage } from "@/components/animated-page"
import {
  LayeredGlassBadge,
  LayeredGlassMetric,
  LayeredGlassPanel,
} from "@/components/ui/layered-glass-panel"

const bestPractices = [
  "Layer multiple translucent surfaces: pair a dark, saturated base panel with lighter inner panels to emphasize depth while keeping readable contrast for text.",
  "Use blur and saturation boosts sparingly: backdrop blur of 20–30px with a slight backdrop-saturate filter keeps the background soft without smearing the shapes behind it.",
  "Anchor the glass with soft shadows and subtle borders: diffuse box shadows and low-opacity white borders create separation without harsh edges.",
  "Introduce a color accent with gradients: conic or radial gradients tied to a single accent color add motion and hierarchy without overwhelming the glass effect.",
]

const mockTeam = [
  "from-indigo-400 via-indigo-300 to-indigo-500",
  "from-sky-400 via-cyan-300 to-sky-500",
  "from-rose-400 via-pink-300 to-rose-500",
]

export default function GlassDemoPage() {
  return (
    <AnimatedPage>
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <div className="pointer-events-none absolute inset-x-0 top-[-40%] h-[60vh] bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_65%)]" />
        <div className="pointer-events-none absolute -left-32 top-[35%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute -right-24 bottom-[15%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.12),transparent_70%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-20">
          <section className="space-y-10">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600/70">
                Glassmorphism Study
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                Building layered glass panels with depth, light, and contrast.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                The mock component on the right follows current UI best
                practices for glassmorphism. Notice how the darker base layer
                holds the composition while lighter inner surfaces carry the
                interactive content. Accent light is used to guide the eye,
                not as decoration alone.
              </p>
            </div>

            <div className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/60 p-8 shadow-[0_40px_80px_rgba(148,163,184,0.18)] backdrop-blur-xl">
              <h2 className="text-xl font-semibold">
                What makes the effect work
              </h2>
              <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                {bestPractices.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                The component is wrapped in a <code>LayeredGlassPanel</code>{" "}
                shell, which provides the stacked backgrounds, blur, and light
                accents. Content inside the shell remains regular JSX so you
                can compose headlines, metrics, or calls-to-action using the
                existing design system primitives.
              </p>
              <p>
                Try tweaking the <code>accentColor</code> prop to align the
                highlight sweep with your brand palette, or switch{" "}
                <code>tone=&quot;default&quot;</code> for a flatter stack. Replace the
                metrics with buttons, charts, or streaming data tiles—the glass
                foundation handles the styling for you.
              </p>
            </div>
          </section>

          <aside className="relative flex justify-center lg:sticky lg:top-24">
            <div
              className="pointer-events-none absolute inset-x-6 top-6 -z-20 h-[420px] rounded-[40px] bg-gradient-to-br from-indigo-500/30 via-transparent to-transparent blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-10 top-16 -z-30 h-[400px] rounded-[44px] border border-white/5 bg-slate-900/90"
              aria-hidden="true"
            />

            <LayeredGlassPanel accentColor="rgba(129, 140, 248, 0.85)">
              <LayeredGlassBadge>Session Overview</LayeredGlassBadge>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">
                  Experience Summit — Aurora Track
                </h2>
                <p className="text-sm leading-relaxed text-slate-200/85">
                  Live collaboration hub for the design systems team. Track
                  contributions, sentiment, and the next release milestone in
                  real time.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <LayeredGlassMetric
                  label="Active Seats"
                  value="128 designers"
                  trend={{ direction: "up", label: "+12.4%" }}
                />
                <LayeredGlassMetric
                  label="Sentiment"
                  value="Positive · 87%"
                  trend={{ direction: "up", label: "+4.1%" }}
                />
                <LayeredGlassMetric
                  label="Next Release"
                  value="Nov 12, 2025"
                />
                <LayeredGlassMetric
                  label="Feedback Queue"
                  value="16 open threads"
                  trend={{ direction: "down", label: "-6 items" }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex -space-x-3">
                  {mockTeam.map((gradient) => (
                    <span
                      key={gradient}
                      className={`relative h-11 w-11 rounded-full border border-white/20 bg-gradient-to-br ${gradient} shadow-[0_10px_22px_rgba(15,23,42,0.35)]`}
                    >
                      <span className="absolute inset-0 rounded-full bg-white/20 mix-blend-overlay" />
                    </span>
                  ))}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white/80 backdrop-blur">
                    +8
                  </span>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25">
                  Invite collaborators
                  <span className="text-base leading-none">↗</span>
                </button>
              </div>
            </LayeredGlassPanel>
          </aside>
        </div>
      </div>
    </AnimatedPage>
  )
}
