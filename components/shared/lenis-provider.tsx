'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<Lenis | null>(null)

  useLayoutEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Expose lenis to window for GSAP integration
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenisRef.current
    }

    return () => {
      if (typeof window !== 'undefined') {
        delete (window as any).lenis
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