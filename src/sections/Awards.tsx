import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  org: string
  avatar: string
  link?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Home Server project recognized for innovation and practical application. A personal server setup demonstrating networking, storage, and security configuration skills.',
    name: "People's Choice Award",
    org: 'TechXpo 2024 — ULM',
    avatar: 'award-techxpo.png',
  },
  {
    quote:
      'Awarded for academic excellence, demonstrating consistent performance and dedication to Computer Science studies throughout the undergraduate program.',
    name: 'Academic Merit Scholarship',
    org: 'University of Louisiana at Monroe',
    avatar: 'award-scholarship.png',
  },
  {
    quote:
      'Developed Live ULM Parking Website prototype in a 24-hour hackathon, demonstrating rapid prototyping and full-stack development capabilities under pressure.',
    name: 'Hawkathon 2024 Participant',
    org: 'ULM',
    avatar: 'award-hawkathon.png',
  },
  {
    quote:
      'Built CareerGenie — a web platform that helps users discover career paths tailored to their skills and interests. Developed during a 24-hour hackathon, showcasing full-stack development and AI integration.',
    name: 'Hawkathon 2026 Participant',
    org: 'ULM',
    avatar: 'award-hawkathon.png',
    link: 'https://www.careergenie.tech/',
  },
]

export default function Awards() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="awards" className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Label & Heading */}
          <div data-animate data-delay="0">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] dark:bg-[#EAEAEA]"></span>
              <span className="text-[13px] font-medium text-[#666] dark:text-[#A1A1A1] tracking-wide">
                Awards & Recognition
              </span>
            </div>
            <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15]">
              Achievements that validate the work
            </h2>
          </div>

          {/* Right: Carousel */}
          <div data-animate data-delay="0.2">
            <div className="bg-[#F8F8F8] dark:bg-[#111] rounded-2xl p-6 md:p-8 flex flex-col" style={{ minHeight: '320px' }}>
              <div className="flex-1 mb-4">
                <p className="text-lg text-[#1A1A1A] dark:text-[#EAEAEA] leading-relaxed">
                  "{testimonials[current].quote}"
                  {testimonials[current].link && (
                    <>
                      {' '}
                      <a
                        href={testimonials[current].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline text-sm font-medium text-[#666] dark:text-[#A1A1A1] hover:text-[#1A1A1A] dark:hover:text-white underline underline-offset-4 decoration-[#E5E5E5] dark:decoration-white/20 hover:decoration-[#1A1A1A] dark:hover:decoration-white transition-colors duration-300"
                      >
                        View Project →
                      </a>
                    </>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#1A1A1A] dark:text-[#EAEAEA] fill-[#1A1A1A] dark:fill-[#EAEAEA]"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={`${import.meta.env.BASE_URL}${testimonials[current].avatar}`}
                    alt={testimonials[current].name}
                    className="w-10 h-10 rounded-full object-cover bg-white dark:bg-[#0A0A0A]"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A] dark:text-[#EAEAEA]">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-[#666] dark:text-[#A1A1A1]">
                      {testimonials[current].org}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-lg bg-[#E5E5E5] dark:bg-[#333] text-[#1A1A1A] dark:text-[#EAEAEA] flex items-center justify-center hover:bg-[#D5D5D5] dark:hover:bg-[#444] transition-colors duration-200"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-lg bg-[#E5E5E5] dark:bg-[#333] text-[#1A1A1A] dark:text-[#EAEAEA] flex items-center justify-center hover:bg-[#D5D5D5] dark:hover:bg-[#444] transition-colors duration-200"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Trusted By */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <img
                src={`${import.meta.env.BASE_URL}profile-avatar.jpg`}
                alt="Gaurav"
                className="w-8 h-8 rounded-full border-2 border-[#F2F2F2] dark:border-[#0A0A0A] object-cover"
              />
              <p className="text-sm text-[#666] dark:text-[#A1A1A1]">
                Driven by passion for technology and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
