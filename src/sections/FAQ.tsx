import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in Java, Python, and JavaScript development. For web development, I work with React, HTML/CSS, and have experience with Spring Boot for backend development. I\'m also proficient with SQL databases including MySQL and PostgreSQL.',
  },
  {
    question: 'What kind of projects have you built?',
    answer:
      'I\'ve built a home server setup for web hosting and media streaming (won TechXpo 2024 People\'s Choice Award), a live parking system prototype for my university campus at Hawkarthon 2024, and responsive business websites deployed on GitHub Pages.',
  },
  {
    question: 'Are you currently available for internships?',
    answer:
      'Yes, I\'m actively seeking Software Engineering internship opportunities for Summer 2025 and beyond. I\'m eager to apply my skills in a professional environment and contribute to meaningful projects.',
  },
  {
    question: 'What is your educational background?',
    answer:
      'I graduated with a B.S. in Computer Science from the University of Louisiana at Monroe (May 2026) with a GPA of 3.34. My coursework covered algorithms, databases, networking, operating systems, and software engineering.',
  },
  {
    question: 'How can I contact you?',
    answer:
      'You can reach me via email at rijalgaurav078@gmail.com, connect with me on LinkedIn, or use the contact form below. I typically respond within 24 hours.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div data-animate data-delay="0">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] dark:bg-[#EAEAEA]"></span>
            <span className="text-[13px] font-medium text-[#666] dark:text-[#A1A1A1] tracking-wide">
              FAQ'S
            </span>
          </div>
          <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15] max-w-[600px] mb-12">
            Common questions, answered with clarity
          </h2>
        </div>

        <div className="flex flex-col gap-4" data-animate data-stagger="0.1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] dark:bg-[#111] rounded-xl overflow-hidden"
              data-animate-child
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-base font-medium text-[#1A1A1A] dark:text-[#EAEAEA] pr-4">
                  {faq.question}
                </span>
                <ChevronUp
                  size={18}
                  className={`text-[#666] dark:text-[#A1A1A1] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#666] dark:text-[#A1A1A1] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
