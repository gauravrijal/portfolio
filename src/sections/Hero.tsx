import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      const lines = heroRef.current!.querySelectorAll('[data-hero-line]')
      const subs = heroRef.current!.querySelectorAll('[data-hero-sub]')

      gsap.set([lines, subs], { opacity: 0, y: 32 })

      const tl = gsap.timeline({ delay: 0.15 })

      tl.to(lines, {
        opacity: 1,
        y: 0,
        duration: 1.25,
        stagger: 0.13,
        ease: 'power2.out',
      }).to(
        subs,
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.11,
          ease: 'power2.out',
        },
        '-=0.65',
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: [
      'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 42%, black 100%)',
      'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
    ].join(', '),
    WebkitMaskComposite: 'source-in',
    maskImage: [
      'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 42%, black 100%)',
      'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
    ].join(', '),
    maskComposite: 'intersect',
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Magazine-style hero photo — right portion on desktop, watermark on mobile */}
      <div 
        className="absolute right-0 w-full lg:w-[48%] opacity-[0.08] lg:opacity-100 pointer-events-none transition-opacity duration-500" 
        style={{ zIndex: 1, top: '72px', bottom: 0 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}hero-profile-1.jpg`}
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 18%',
            ...maskStyle,
          }}
        />
      </div>

      {/* Text content */}
      <div
        ref={heroRef}
        className="max-w-[1200px] mx-auto px-6 md:px-12 pt-12 pb-32 md:pt-16 md:pb-40 w-full relative"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-[560px]">

          {/* Line 1 */}
          <div data-hero-line>
            <span className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15] tracking-tight">
              Hey, I'm Gaurav
            </span>
          </div>

          {/* Line 2 */}
          <div data-hero-line className="mt-1">
            <span className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15] tracking-tight">
              Software
            </span>
          </div>

          {/* Line 3 */}
          <div data-hero-line className="mt-1">
            <span className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15] tracking-tight">
              Developer
            </span>
          </div>

          {/* Line 4 */}
          <div data-hero-line className="mt-1">
            <span className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15] tracking-tight">
              Based in Louisiana
            </span>
          </div>

          {/* Subtitle */}
          <p data-hero-sub className="mt-6 text-base text-[#666] dark:text-[#A1A1A1] max-w-[480px] leading-relaxed">
            I specialize in full-stack web development, system architecture, and
            creative problem-solving. B.S. in Computer Science from ULM,
            building impactful projects and seeking Software Engineering
            opportunities.
          </p>

          {/* CTA */}
          <a
            data-hero-sub
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] dark:bg-[#EAEAEA] text-white dark:text-[#1A1A1A] text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#333] dark:hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8"
          >
            Get In Touch Today
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
