'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'

declare global {
  interface Window {
    lenis?: Lenis
  }
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<Lenis | null>(null)

  useLayoutEffect(() => {
    lenisRef.current = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.8,
      touchMultiplier: 2.4,
      infinite: false,
    })

    // Expose lenis to window for GSAP integration
    if (typeof window !== 'undefined') {
      window.lenis = lenisRef.current ?? undefined
    }

    return () => {
      if (typeof window !== 'undefined') {
        delete window.lenis
      }
      lenisRef.current?.destroy()
    }
  }, [])

  useEffect(() => {
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return <>{children}</>
}
