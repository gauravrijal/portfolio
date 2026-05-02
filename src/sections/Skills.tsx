import { ArrowUpRight } from 'lucide-react'

const skills = [
  'Java',
  'Python',
  'SQL',
  'React',
  'Git',
  'Spring Boot',
]

const experiences = [
  { role: 'B.S. Computer Science', org: 'ULM', years: '2022 - 2026' },
  { role: 'Tutor', org: 'Nepalese Encounters', years: '2019 - 2020' },
  { role: 'Photo Editor', org: 'Sai Vision Photo Studio', years: '2020 - 2021' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div data-animate data-delay="0">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] dark:bg-[#EAEAEA]"></span>
            <span className="text-[13px] font-medium text-[#666] dark:text-[#A1A1A1] tracking-wide">
              Skills & Expertise
            </span>
          </div>
          <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15] max-w-[600px] mb-12">
            The knowledge that powers my code
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto" data-animate data-stagger="0.1">
          {/* Profile Card */}
          <div
            className="bg-white dark:bg-[#111] border border-[#E5E5E5] dark:border-white/10 rounded-2xl overflow-hidden"
            data-animate-child
          >
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}profile-header.jpg`}
                alt="Workspace"
                className="w-full h-full object-cover opacity-100 dark:opacity-90"
              />
            </div>
            <div className="px-6 pb-6">
              <div className="w-[120px] h-[120px] rounded-full border-4 border-white dark:border-[#0A0A0A] overflow-hidden -mt-[60px] relative shadow-lg">
                <img
                  src={`${import.meta.env.BASE_URL}profile-avatar.jpg`}
                  alt="Gaurav Rijal"
                  className="w-full h-full object-cover opacity-100 dark:opacity-90"
                />
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#F5F5F5] dark:bg-[#222] px-4 py-2 rounded-lg text-[13px] text-[#666] dark:text-[#A1A1A1] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="flex flex-col gap-3 mt-8" data-animate data-stagger="0.1">
            {experiences.map((exp) => (
              <div
                key={exp.role + exp.org}
                className="grid grid-cols-[1fr_1fr_auto] items-center bg-[#F8F8F8] dark:bg-[#111] rounded-xl px-6 py-4 hover:bg-[#F0F0F0] dark:hover:bg-[#222] transition-colors duration-200"
                data-animate-child
              >
                <span className="text-sm font-medium text-[#1A1A1A] dark:text-[#EAEAEA]">
                  {exp.role}
                </span>
                <span className="text-sm text-[#666] dark:text-[#A1A1A1]">{exp.org}</span>
                <span className="text-sm text-[#999] dark:text-[#777]">{exp.years}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div className="text-center mt-16" data-animate data-delay="0.2">
          <p className="font-script text-2xl md:text-[28px] text-[#999] dark:text-[#777] mb-6">
            Let's Build Something Amazing
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] dark:bg-[#EAEAEA] text-white dark:text-[#1A1A1A] text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#333] dark:hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            Get In Touch Today
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
