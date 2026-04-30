import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Home Server project recognized for innovation and practical application. A personal server setup demonstrating networking, storage, and security configuration skills.',
    name: "People's Choice Award",
    org: 'TechXpo 2024 — ULM',
    avatar: '/testimonial-techxpo.jpg',
  },
  {
    quote:
      'Awarded for academic excellence, demonstrating consistent performance and dedication to Computer Science studies throughout the undergraduate program.',
    name: 'Academic Merit Scholarship',
    org: 'University of Louisiana at Monroe',
    avatar: '/profile-avatar.jpg',
  },
  {
    quote:
      'Developed Live ULM Parking Website prototype in a 24-hour hackathon, demonstrating rapid prototyping and full-stack development capabilities under pressure.',
    name: 'Hawkarthon 2024 Participant',
    org: 'ULM',
    avatar: '/project-parking.jpg',
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
              <span className="text-[13px] font-medium text-[#666] tracking-wide">
                Awards & Recognition
              </span>
            </div>
            <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.15]">
              Achievements that validate the work
            </h2>
          </div>

          {/* Right: Carousel */}
          <div data-animate data-delay="0.2">
            <div className="bg-[#F8F8F8] rounded-2xl p-6 md:p-8">
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
                "{testimonials[current].quote}"
              </p>

              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#1A1A1A] fill-[#1A1A1A]"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-[#666]">
                      {testimonials[current].org}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-lg bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D5D5D5] transition-colors duration-200"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-lg bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D5D5D5] transition-colors duration-200"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Trusted By */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex -space-x-2">
                <img
                  src="/hero-profile-1.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/profile-avatar.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/testimonial-techxpo.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="text-sm text-[#666]">
                Driven by passion for technology and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
