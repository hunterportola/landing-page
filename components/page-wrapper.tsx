'use client'

import { useState, useEffect } from 'react'
import { Preloader } from './preloader'
import { cn } from '@/lib/utils'

interface PageWrapperProps {
  children: React.ReactNode
  onReady?: () => void
}

export function PageWrapper({ children, onReady }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [animationReady, setAnimationReady] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Preload critical fonts
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('bold 48px Inter'),
        document.fonts.load('normal 16px Inter'),
      ])
    }
  }, [])

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <>
      {isLoading && (
        <Preloader 
          onComplete={() => {
            setIsLoading(false)
            // Trigger animation after a brief delay to ensure smooth transition
            setTimeout(() => {
              setAnimationReady(true)
              if (onReady) onReady()
            }, 100)
          }}
          brandName="Portola"
        />
      )}
      
      {/* Main content - only show after preloader is done */}
      <div
        className={cn(
          'transition-opacity duration-300',
          !isLoading ? 'opacity-100' : 'opacity-0'
        )}
        data-animation-ready={animationReady}
      >
        {children}
      </div>
    </>
  )
}