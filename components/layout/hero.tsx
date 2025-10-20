'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface HeroProps {
  headline: string
  subheadline?: string
  actions?: React.ReactNode
  media?: React.ReactNode
  background?: 'gradient' | 'solid' | 'none' | React.ReactNode
  className?: string
  containerClassName?: string
  headlineClassName?: string
  subheadlineClassName?: string
  headlineTag?: 'h1' | 'h2' | 'h3'
  reducedMotion?: boolean
  onAnimationReady?: () => void
}

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      headline,
      subheadline,
      actions,
      media,
      background = 'none',
      className,
      containerClassName,
      headlineClassName,
      subheadlineClassName,
      headlineTag: HeadlineTag = 'h1',
      reducedMotion = false,
      onAnimationReady,
    },
    ref
  ) => {
    // Use CSS custom property for dynamic nav height
    // This allows the nav to communicate its height to other components
    const heroHeight = 'min-h-[calc(100vh-var(--nav-height,4rem))]'
    const heroHeightMobile = 'min-h-[calc(100svh-var(--nav-height,4rem))]'

    const backgroundClasses: Record<string, string> = {
      gradient: 'bg-gradient-to-br from-background via-muted/20 to-background',
      solid: 'bg-muted/10',
      none: '',
    }

    const bgClass = typeof background === 'string' ? backgroundClasses[background] : ''

    return (
      <section
        ref={ref}
        className={cn(
          'relative flex items-center justify-center',
          heroHeight,
          heroHeightMobile,
          bgClass,
          className
        )}
        data-reduced-motion={reducedMotion}
      >
        {/* Custom background element */}
        {typeof background !== 'string' && background}

        {/* Content container with max-width for readability */}
        <div
          className={cn(
            'container relative z-10 flex flex-col items-center text-center',
            'px-6 md:px-12',
            'max-w-4xl', // Optimal reading width
            'hero-content', // Animation hook
            containerClassName
          )}
        >
          {/* Media slot (for illustrations, videos, etc.) */}
          {media && (
            <div className="mb-8 md:mb-12" aria-hidden="true">
              {media}
            </div>
          )}

          {/* Main headline with responsive typography */}
          <HeadlineTag
            className={cn(
              'font-bold tracking-tight',
              'text-[clamp(2.5rem,8vw,5rem)]', // Fluid typography
              'leading-[1.1]',
              'mb-4 md:mb-6',
              'max-w-[20ch]', // Prevent overly long lines
              'hero-headline', // Animation hook
              headlineClassName
            )}
            data-animation="hero-headline"
          >
            {headline}
          </HeadlineTag>

          {/* Subheadline */}
          {subheadline && (
            <p
              className={cn(
                'text-muted-foreground',
                'text-lg md:text-xl lg:text-2xl',
                'leading-relaxed',
                'mb-8 md:mb-10',
                'max-w-[60ch]', // Optimal reading length
                'hero-subheadline', // Animation hook
                subheadlineClassName
              )}
              data-animation="hero-subheadline"
            >
              {subheadline}
            </p>
          )}

          {/* CTA actions */}
          {actions && (
            <div className="flex flex-wrap items-center justify-center gap-4 hero-actions" data-animation="hero-actions">
              {actions}
            </div>
          )}
        </div>
      </section>
    )
  }
)

Hero.displayName = 'Hero'