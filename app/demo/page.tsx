import { Navigation } from '@/components/layout/navigation'
import { AnimatedPage } from '@/components/animated-page'

export default function DemoPage() {
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
        <Navigation items={navigationItems} />
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Fixed Background Pattern Demo</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Scroll down to see how the pattern stays fixed while content moves over it.
            </p>
            
            <div className="bg-background/95 backdrop-blur p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Content Section</h2>
              <p className="text-muted-foreground">
                This card has a semi-transparent background to show the pattern behind it while maintaining readability.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-32">
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Solid Background</h3>
                <p className="text-muted-foreground">
                  This card has a solid background color.
                </p>
              </div>
              
              <div className="bg-background/80 backdrop-blur p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Transparent Background</h3>
                <p className="text-muted-foreground">
                  This card is partially transparent to show the pattern.
                </p>
              </div>
            </div>

            {/* More sections to demonstrate scrolling */}
            <div className="space-y-32">
              <div className="bg-background/95 backdrop-blur p-12 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Keep Scrolling</h2>
                <p className="text-lg text-muted-foreground">
                  Notice how the tiny geometric pattern stays in place while this content scrolls over it.
                </p>
              </div>

              <div className="bg-background/90 backdrop-blur p-12 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Fixed Background Effect</h2>
                <p className="text-lg text-muted-foreground">
                  This creates a sense of depth and makes the content feel like it&apos;s floating above the background.
                </p>
              </div>

              <div className="bg-background/95 backdrop-blur p-12 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Perfect for Modern Designs</h2>
                <p className="text-lg text-muted-foreground">
                  The fixed background pattern adds visual interest without being distracting.
                </p>
              </div>
            </div>
          </div>
        </div>
    </AnimatedPage>
  )
}
