"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { StackLayer } from "./stack-layer"
import "./disk-animation.css"

gsap.registerPlugin(ScrollTrigger)

export function DiskStackAnimation() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !stackRef.current || !frameRef.current) return

    const stack = stackRef.current
    const frame = frameRef.current

    // Get Lenis instance from window if available
    const lenis = (window as any).lenis

    if (lenis) {
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (value) {
            lenis.scrollTo(value, { immediate: true })
          }
          return lenis.animatedScroll
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })

      lenis.on('scroll', ScrollTrigger.update)
    }

    // Create scroll trigger for the animation states
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          
          // Remove all state classes
          stack.classList.remove("stack-traditional", "stack-column")
          
          // Add appropriate state class based on scroll progress
          if (progress < 0.5) {
            stack.classList.add("stack-traditional")
          } else {
            stack.classList.add("stack-column")
          }
        }
      }
    })

    // Add smooth transform to the sticky frame
    gsap.to(frame, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      },
      y: -100,
      ease: "none"
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      if (lenis) {
        lenis.off('scroll', ScrollTrigger.update)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[250vh]"
    >
      <div ref={wrapRef} className="disk-animation-wrap">
        <div ref={frameRef} className="disk-animation-frame">
          <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto px-8">
            <div ref={stackRef} className="stack stack-traditional ml-64">
              <StackLayer 
                type="fintech"
                label="Loan Originator"
              />
              
              <div className="stack-layer-group">
                <StackLayer 
                  type="middleware"
                  label="Broker"
                />
                <StackLayer 
                  type="core"
                  label="Third Party Auditors"
                />
                <StackLayer 
                  type="bank"
                  label="Loan Transfer Agent"
                />
              </div>

              <StackLayer 
                type="column"
                label="Portola"
              />
              
              <StackLayer 
                type="fed"
                label="Capital Partner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}