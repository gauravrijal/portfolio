import { GraduationCap, Code2, TrendingUp, Rocket } from 'lucide-react'

const steps = [
  {
    label: 'step1',
    title: 'Education Foundation',
    description:
      'B.S. in Computer Science at University of Louisiana at Monroe (GPA 3.34). Building strong foundations in algorithms, data structures, networking, and software engineering principles.',
    icon: GraduationCap,
    number: '- 001',
  },
  {
    label: 'step2',
    title: 'Hands-On Projects',
    description:
      'Developed real-world projects including a home server for web hosting, a live parking system for campus, and responsive business websites — applying classroom knowledge to practical solutions.',
    icon: Code2,
    number: '- 002',
  },
  {
    label: 'step3',
    title: 'Continuous Growth',
    description:
      'Expanding skills through hackathons, tech expos, and open-source contributions. Learning React, Spring Boot, database optimization, and cloud technologies.',
    icon: TrendingUp,
    number: '- 003',
  },
  {
    label: 'step4',
    title: 'Ready to Contribute',
    description:
      'Seeking Software Engineering internship opportunities to apply my technical skills, collaborate with experienced teams, and contribute to impactful products.',
    icon: Rocket,
    number: '- 004',
  },
]

export default function Process() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div data-animate data-delay="0">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
            <span className="text-[13px] font-medium text-[#666] tracking-wide">
              Education & Process
            </span>
          </div>
          <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.15] max-w-[600px] mb-12">
            The path that shaped my expertise
          </h2>
        </div>

        <div className="relative" data-animate data-stagger="0.2">
          {/* Timeline line */}
          <div
            className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-[#E5E5E5] origin-top"
            data-timeline-line
          />

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div
                key={step.label}
                className="relative pl-10 md:pl-14"
                data-animate-child
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1 top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#1A1A1A] border-4 border-[#F2F2F2]" />

                {/* Card */}
                <div className="bg-[#F8F8F8] rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-400">
                  <span className="text-xs text-[#999] font-medium uppercase tracking-wider">
                    {step.label}
                  </span>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <step.icon size={28} className="text-[#666]" />
                    <span className="text-sm text-[#999] font-medium">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
