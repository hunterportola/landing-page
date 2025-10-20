'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface UseHeroIntroAnimationProps {
  isReady?: boolean
  onComplete?: () => void
}

export function useHeroIntroAnimation({ 
  isReady = true, 
  onComplete 
}: UseHeroIntroAnimationProps = {}) {
  const scopeRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (!isReady || !scopeRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Get all animation targets
    const headline = scopeRef.current.querySelector('.hero-headline')
    const subheadline = scopeRef.current.querySelector('.hero-subheadline')
    const actions = scopeRef.current.querySelector('.hero-actions')
    const navContainer = document.querySelector('.nav-container')
    const navItems = document.querySelectorAll('.nav-item')
    
    if (prefersReducedMotion) {
      // Instant reveal for accessibility
      gsap.set([headline, subheadline, actions, navContainer, navItems], { 
        opacity: 1, 
        visibility: 'visible' 
      })
      if (onComplete) onComplete()
      return
    }
    
    // Set initial states (elements start invisible)
    if (headline) {
      gsap.set(headline, { opacity: 0, y: -32, visibility: 'hidden' })
    }

    if (subheadline) {
      gsap.set(subheadline, { opacity: 0, y: -20, visibility: 'hidden' })
    }

    if (actions) {
      gsap.set(actions, { opacity: 0, y: -16, visibility: 'hidden' })
    }

    if (navContainer) {
      gsap.set(navContainer, {
        opacity: 0,
        y: -48,
        visibility: 'hidden'
      })
    }
    
    if (navItems.length) {
      gsap.set(navItems, {
        opacity: 0,
        y: -16,
        visibility: 'hidden'
      })
    }

    // Create master timeline
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete()
      }
    })
    
    // Phase 1: Headline fade-down animation
    if (headline) {
      tl.to(
        headline,
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 1.1,
          ease: 'power2.out',
        }
      )
    }
    
    // Phase 2: "Breathe" pause (slightly longer for dramatic effect)
    tl.to({}, { duration: 0.6 })
      .add('support')
    
    // Phase 3: Supporting elements fade in (after the pause)
    if (navContainer) {
      tl.to(
        navContainer,
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.9,
          ease: 'power2.out',
        },
        'support-=0.1'
      )
    }
    
    if (subheadline) {
      tl.to(
        subheadline,
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.9,
          ease: 'power2.out',
        },
        'support'
      )
    }
    
    if (actions) {
      tl.to(
        actions,
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.8,
          ease: 'power2.out',
        },
        'support+=0.15'
      )
    }
    
    if (navItems.length) {
      tl.to(
        navItems,
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.7,
          ease: 'power2.out',
        },
        'support+=0.2'
      )
    }
    
    // Cleanup function
    return () => {
      tl.kill()
    }
  }, { scope: scopeRef, dependencies: [isReady] })
  
  return { scopeRef }
}
