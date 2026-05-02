import { useRef, useState, useEffect, useCallback } from 'react'
import { Play, Pause } from 'lucide-react'

interface Project {
  name: string
  category: string
  image: string
  link?: string
}

const projects: Project[] = [
  {
    name: 'Home Server',
    category: 'Linux · Networking · Web Hosting — TechXpo 2024 People\'s Choice Award',
    image: `${import.meta.env.BASE_URL}project-home-server.jpg`,
  },
  {
    name: 'CareerGenie',
    category: 'AI Career Discovery · React · Firebase — Hawkathon 2026',
    image: `${import.meta.env.BASE_URL}project-careergenie.png`,
    link: 'https://www.careergenie.tech/',
  },
  {
    name: 'Live ULM Parking',
    category: 'Hackathon Project — Hawkathon 2024',
    image: `${import.meta.env.BASE_URL}project-parking.jpg`,
  },
  {
    name: 'Business Blog Website',
    category: 'HTML · CSS · JavaScript · Responsive Design',
    image: `${import.meta.env.BASE_URL}project-blog.jpg`,
  },
]

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 768 ? 2 : 1)
    }
    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, projects.length - cardsPerView)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    // Calculate active index based on scroll position and card alignment
    const scrollLeft = el.scrollLeft
    let closest = 0
    let minDiff = Infinity
    
    Array.from(el.children).forEach((child, i) => {
      const paddingLeft = parseInt(window.getComputedStyle(el).paddingLeft || '0')
      const targetScroll = (child as HTMLElement).offsetLeft - paddingLeft
      const diff = Math.abs(scrollLeft - targetScroll)
      
      if (diff < minDiff) {
        minDiff = diff
        closest = i
      }
    })
    
    setActiveIndex(Math.min(closest, maxIndex))
  }, [maxIndex])

  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const child = el.children[index] as HTMLElement
    if (child) {
      const paddingLeft = parseInt(window.getComputedStyle(el).paddingLeft || '0')
      el.scrollTo({
        left: child.offsetLeft - paddingLeft,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    
    // Start at the first card
    setTimeout(() => {
      scrollToCard(0)
      checkScroll()
    }, 100)

    el.addEventListener('scroll', checkScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', checkScroll)
    }
  }, [maxIndex, checkScroll]) // Re-run initial check if layout changes drastically

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1
      if (nextIndex > maxIndex) nextIndex = 0
      scrollToCard(nextIndex)
    }, 4000) // Scroll every 4 seconds
    return () => clearInterval(interval)
  }, [isPaused, activeIndex, maxIndex])

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div data-animate data-delay="0" className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] dark:bg-[#EAEAEA]"></span>
            <span className="text-[13px] font-medium text-[#666] dark:text-[#A1A1A1] tracking-wide">
              My Projects
            </span>
          </div>
          <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15] max-w-[600px] mx-auto">
            The projects that turn ideas into reality
          </h2>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative" data-animate data-delay="0.2">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-8 pt-4 cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-p-6 md:scroll-p-12"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={(e) => {
            const el = scrollRef.current
            if (!el) return
            const startX = e.pageX - el.offsetLeft
            const scrollLeft = el.scrollLeft
            let dragged = false

            const onMove = (ev: MouseEvent) => {
              dragged = true
              const x = ev.pageX - el.offsetLeft
              el.scrollLeft = scrollLeft - (x - startX)
            }
            const onUp = () => {
              document.removeEventListener('mousemove', onMove)
              document.removeEventListener('mouseup', onUp)
              if (dragged) {
                // Prevent click on links after drag
                const preventClick = (ev: Event) => {
                  ev.preventDefault()
                  ev.stopPropagation()
                }
                el.addEventListener('click', preventClick, { capture: true, once: true })
              }
            }
            document.addEventListener('mousemove', onMove)
            document.addEventListener('mouseup', onUp)
          }}
        >
          {projects.map((project) => {
            const Wrapper = project.link ? 'a' : 'div'
            const linkProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <Wrapper
                key={project.name}
                {...linkProps}
                className="w-full md:w-[calc(50%-12px)] bg-white dark:bg-[#111] border border-[#E5E5E5] dark:border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-white/5 transition-all duration-300 flex-shrink-0 block snap-start"
                data-animate-child
              >
                <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-100 dark:opacity-90"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-medium text-[#1A1A1A] dark:text-[#EAEAEA]">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#666] dark:text-[#A1A1A1] mt-2 leading-relaxed">{project.category}</p>
                </div>
              </Wrapper>
            )
          })}
        </div>

        {/* Pagination & Controls */}
        <div className="flex items-center justify-center gap-4 mt-6 px-6 relative z-20">
          <div className="flex items-center gap-2 bg-[#EBEBEB] dark:bg-[#1A1A1A] px-3.5 py-2.5 rounded-full border border-transparent dark:border-white/5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  scrollToCard(i)
                  setIsPaused(true)
                }}
                aria-label={`Go to view ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-[#333] dark:bg-[#EAEAEA]' : 'w-2 bg-[#999] dark:bg-[#555] hover:bg-[#666] dark:hover:bg-[#888]'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play slider" : "Pause slider"}
            className="w-10 h-10 rounded-full bg-[#EBEBEB] dark:bg-[#1A1A1A] border border-transparent dark:border-white/5 flex items-center justify-center text-[#333] dark:text-[#EAEAEA] hover:bg-[#E5E5E5] dark:hover:bg-[#222] transition-colors"
          >
            {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
          </button>
        </div>
      </div>
    </section>
  )
}
