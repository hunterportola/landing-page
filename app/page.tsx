'use client'

import { Navigation } from '@/components/layout/navigation'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/layout/hero'
import { AnimatedPage } from '@/components/animated-page'
import { GlassSectionCard } from '@/components/sections/glass-section-card'
import { BottomBar } from '@/components/layout/bottom-bar'
import { WaitlistModal } from '@/components/forms/waitlist-modal'
import { AdvantageStickySection } from '@/components/advantage-sticky'
import { useState } from 'react'

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const navigationItems = [
    {
      title: 'Products',
      items: [
        {
          title: 'Product One',
          href: '/products/one',
          description: 'A powerful solution for your needs',
        },
        {
          title: 'Product Two',
          href: '/products/two',
          description: 'Another great product we offer',
        },
      ],
    },
    {
      title: 'Developers',
      items: [
        {
          title: 'Documentation',
          href: '/docs',
          description: 'Get started with our comprehensive docs',
        },
        {
          title: 'API Reference',
          href: '/api',
          description: 'Complete API documentation',
        },
      ],
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Company',
      href: '/company',
    },
  ]

  return (
    <AnimatedPage>
        <Navigation
          items={navigationItems}
        />
        
        <Hero
            headline="MAIN HEADING HERE"
            subheadline="Subheading here"
            actions={
              <Button 
                size="lg" 
                className="min-w-[140px]" 
                onClick={() => setWaitlistOpen(true)}
              >
                Inquire
              </Button>
            }
            background="none"
          />
      
      {/* Additional sections for scrolling demonstration */}
      <main className="container mx-auto space-y-32 py-20">
        {/* Section 1 - Advantage Sticky */}
        <AdvantageStickySection />
        
        {/* Sections 2 and 3 */}
        {[2, 3].map((num) => (
          <GlassSectionCard
            key={num}
            className="min-h-[50vh] flex items-center justify-center text-center"
          >
            <h2 className="text-2xl font-semibold">Section {num}</h2>
          </GlassSectionCard>
        ))}
      </main>

        <BottomBar
          brand="Acme"
          sections={[
            {
              title: 'Product',
              actions: [
                { label: 'Overview', href: '#' },
                { label: 'Pricing', href: '#' },
                { label: 'Integrations', href: '#' },
              ],
            },
            {
              title: 'Company',
              actions: [
                { label: 'About', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Press', href: '#' },
              ],
            },
            {
              title: 'Resources',
              actions: [
                { label: 'Docs', href: '#' },
                { label: 'Status', href: '#' },
                { label: 'Support', href: '#' },
              ],
            },
          ]}
          footerNote="©2025 Acme Inc."
          secondaryNote="All rights reserved"
        />
        
        <WaitlistModal 
          open={waitlistOpen} 
          onOpenChange={setWaitlistOpen} 
        />
    </AnimatedPage>
  )
}
