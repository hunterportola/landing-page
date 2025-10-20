# Landing Page Project Guidelines

This Next.js project is built with specific technology choices and constraints. Follow these guidelines strictly when developing.

## Technology Stack

- **Framework**: Next.js 15 with App Router (TypeScript)
- **Smooth Scrolling**: Lenis (for high-performance, natural scrolling)
- **UI Components**: ShadCN UI exclusively
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: Tailwind CSS

## Critical Rules

### 1. UI Components
- **NEVER create custom UI components**
- **ALWAYS use ShadCN UI components for ALL UI elements**
- To add new components: `npx shadcn@latest add [component-name]`
- Available via MCP: `npx shadcn-mcp --config /Volumes/Drive/Projects/shadcn-mcp-config.json`

### 2. Scrolling
- **Use Lenis for ALL smooth scrolling functionality**
- Lenis is already integrated in the root layout
- Do NOT use other scrolling libraries or native scroll behaviors
- Access Lenis instance via React context when needed

### 3. Animations
- **Use GSAP for ALL animations (except scrolling)**
- This includes:
  - Element animations
  - Page transitions
  - Hover effects
  - Timeline animations
  - ScrollTrigger animations (integrated with Lenis)

### 4. Project Structure
```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Lenis wrapper
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Component directory
│   └── ui/               # ShadCN UI components only
├── lib/                   # Utility functions
│   └── utils.ts          # cn() helper and utilities
└── public/               # Static assets
```

## Implementation Guidelines

### Lenis Setup (Already configured in layout.tsx)
- Wrapped at the root level
- Provides smooth, normalized scrolling across all pages
- Accessibility-first approach

### GSAP Integration
- Import GSAP in components where animations are needed
- Use `useGSAP` hook for React integration
- Always clean up animations on unmount
- Integrate ScrollTrigger with Lenis for scroll-based animations

### ShadCN Workflow
1. Need a button? `npx shadcn@latest add button`
2. Need a card? `npx shadcn@latest add card`
3. Need a form? `npx shadcn@latest add form`
4. NEVER write custom component code for UI elements

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npx shadcn@latest add [component]` - Add ShadCN components

## Performance Considerations

1. Lenis is lightweight and performant by default
2. GSAP animations should use `will-change` sparingly
3. Lazy load heavy animations
4. Use Next.js Image component for all images
5. Implement proper loading states with ShadCN Skeleton components

## Accessibility

1. Lenis maintains native scroll accessibility
2. All ShadCN components are accessible by default
3. Ensure GSAP animations respect `prefers-reduced-motion`
4. Maintain proper heading hierarchy
5. Use semantic HTML elements

## Do's and Don'ts

### Do's ✅
- Use ShadCN components for everything UI
- Implement smooth scrolling with Lenis
- Create engaging animations with GSAP
- Follow Next.js 15 best practices
- Use TypeScript strictly
- Maintain component composition

### Don'ts ❌
- Create custom UI components
- Use other animation libraries
- Implement custom scroll behaviors
- Override ShadCN component internals
- Use inline styles (use Tailwind classes)
- Ignore TypeScript errors

## Notes

This project prioritizes:
1. Modern, smooth user experience
2. Consistent UI through ShadCN
3. High-performance animations
4. Accessibility
5. Developer experience through strict conventions