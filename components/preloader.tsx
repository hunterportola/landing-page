'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

interface PreloaderProps {
  onComplete?: () => void
  brandName?: string
}

export function Preloader({ onComplete, brandName = 'PORTOLA' }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden'
    
    // Flag to prevent double execution
    let completed = false

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Skip animation for accessibility
      if (onComplete && !completed) {
        completed = true
        document.body.style.overflow = ''
        onComplete()
      }
      return
    }

    // Create GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        if (!completed) {
          completed = true
          document.body.style.overflow = ''
          if (onComplete) onComplete()
        }
      }
    })

    // Animation sequence
    tl
      // Initial state - logo starts from top, text from bottom
      .set(logoRef.current, { 
        autoAlpha: 0,
        y: -30
      })
      .set(textRef.current, { 
        autoAlpha: 0,
        y: 30
      })
      // Fade in logo from top and text from bottom simultaneously
      .to([logoRef.current, textRef.current], {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      // Hold for brand recognition
      .to({}, { duration: 0.6 })
      // Fade down logo and text together
      .to([logoRef.current, textRef.current], {
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.inOut'
      })
      // Then fade out the whole container
      .to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      }, '-=0.2')

    return () => {
      // Cleanup
      document.body.style.overflow = ''
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center',
        'pointer-events-none isolate',
        'min-h-[calc(100svh-var(--nav-height,4rem))]'
      )}
      style={{ backgroundColor: '#FFFFFF' }}
      aria-label="Loading"
      role="status"
    >
      {/* Container matching hero layout */}
      <div className="container max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {/* Logo */}
          <div ref={logoRef} className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          
          {/* Brand text matching hero typography */}
          <span
            ref={textRef}
            className={cn(
              'font-bold tracking-tight',
              'text-[clamp(2.5rem,8vw,5rem)]', // Same size as hero headline
              'leading-none'
            )}
            style={{ color: '#000000' }}
          >
            {brandName}
          </span>
        </div>
      </div>
    </div>
  )
}