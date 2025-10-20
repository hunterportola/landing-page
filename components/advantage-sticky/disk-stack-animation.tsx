"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { StackLayer } from "./stack-layer"
import "./disk-animation.css"

gsap.registerPlugin(ScrollTrigger)

type LenisInstance = {
  scrollTo: (value: number, options?: { immediate?: boolean }) => void
  animatedScroll: number
  on: (event: "scroll", handler: () => void) => void
  off: (event: "scroll", handler: () => void) => void
}

type WindowWithLenis = Window & { lenis?: LenisInstance }
type AccordionValue = "before" | "after"

const ACCORDION_COPY: Record<AccordionValue, { title: string; description: string }> = {
  before: {
    title: "Before",
    description: "Add the before-state description here to explain the traditional process."
  },
  after: {
    title: "After",
    description: "Add the after-state description here to highlight the streamlined experience."
  }
}

export function DiskStackAnimation() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const [accordionValue, setAccordionValue] = useState<AccordionValue>("before")

  useEffect(() => {
    if (!sectionRef.current || !stackRef.current || !frameRef.current || !gridRef.current) {
      return
    }

    const stack = stackRef.current
    const frame = frameRef.current
    const grid = gridRef.current
    const section = sectionRef.current

    const lenis = (window as WindowWithLenis).lenis

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

      lenis.on("scroll", ScrollTrigger.update)
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      stack.classList.remove("stack-traditional")
      stack.classList.add("stack-column")
      setAccordionValue("after")
      return () => {
        if (lenis) {
          lenis.off("scroll", ScrollTrigger.update)
        }
      }
    }

    const ctx = gsap.context(() => {
      const PROBLEM_STAGE = 0.1
      const SOLUTION_STAGE = 0.32

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "+=90%",
          scrub: 1,
          onUpdate: (self) => {
            if (self.progress < SOLUTION_STAGE) {
              stack.classList.add("stack-traditional")
              stack.classList.remove("stack-column")
            } else {
              stack.classList.add("stack-column")
              stack.classList.remove("stack-traditional")
            }
          }
        }
      })

      timeline.add("problem", PROBLEM_STAGE)
      timeline.add("solution", SOLUTION_STAGE)

      timeline.add(() => setAccordionValue("before"), "problem")
      timeline.add(() => setAccordionValue("after"), "solution")

      timeline.to(frame, {
        y: -40,
        ease: "none",
        duration: 1
      }, 0)
    }, grid)

    return () => {
      ctx.revert()
      stack.classList.add("stack-traditional")
      stack.classList.remove("stack-column")
      gsap.set(frame, { y: 0 })
      setAccordionValue("before")
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="advantage-section">
      <div className="advantage-card">
        <div ref={gridRef} className="advantage-grid">
          <div className="advantage-accordion-wrap">
            <h2 className="advantage-headline">
              Collapse Your Stack. Go Direct to Capital.
            </h2>
            <Accordion
              type="single"
              collapsible
              value={accordionValue}
              onValueChange={(value) => setAccordionValue((value as AccordionValue) || "before")}
              className="advantage-accordion"
            >
              {(["before", "after"] as AccordionValue[]).map((key) => {
                const { title, description } = ACCORDION_COPY[key]
                return (
                  <AccordionItem key={key} value={key} className="advantage-accordion-item">
                    <AccordionTrigger className="advantage-accordion-trigger">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="advantage-accordion-content">
                      {description}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
          <div className="disk-animation-wrap">
            <div ref={frameRef} className="disk-animation-frame">
              <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto px-8">
                <div ref={stackRef} className={cn("stack", "stack-traditional")}>
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
        </div>
      </div>
    </section>
  )
}
