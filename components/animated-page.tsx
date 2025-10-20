'use client'

import { useEffect, useState } from 'react'
import { PageWrapper } from './page-wrapper'
import { useHeroIntroAnimation } from '@/hooks/use-hero-intro-animation'

interface AnimatedPageProps {
  children: React.ReactNode
}

export function AnimatedPage({ children }: AnimatedPageProps) {
  const [isAnimationReady, setIsAnimationReady] = useState(false)
  const { scopeRef } = useHeroIntroAnimation({
    isReady: isAnimationReady,
    onComplete: () => {
      // Animation complete - can trigger additional actions here
    }
  })

  return (
    <PageWrapper onReady={() => setIsAnimationReady(true)}>
      <div ref={scopeRef}>
        {children}
      </div>
    </PageWrapper>
  )
}