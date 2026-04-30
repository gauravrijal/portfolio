import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  useEffect(() => {
    // Wait for DOM to be ready
    const ctx = gsap.context(() => {
      // Select all elements with data-animate attribute
      const animatedElements = document.querySelectorAll('[data-animate]')

      animatedElements.forEach((el) => {
        const stagger = el.getAttribute('data-stagger') || '0'
        const delay = el.getAttribute('data-delay') || '0'
        const y = el.getAttribute('data-y') || '40'

        const children = el.querySelectorAll('[data-animate-child]')
        
        if (children.length > 0) {
          gsap.fromTo(
            children,
            { opacity: 0, y: parseInt(y) },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: parseFloat(stagger),
              delay: parseFloat(delay),
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                once: true,
              },
            }
          )
        } else {
          gsap.fromTo(
            el,
            { opacity: 0, y: parseInt(y) },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: parseFloat(delay),
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                once: true,
              },
            }
          )
        }
      })

      // Timeline animation for process section
      const timelineLine = document.querySelector('[data-timeline-line]')
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineLine.parentElement,
              start: 'top 60%',
              once: true,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])
}
