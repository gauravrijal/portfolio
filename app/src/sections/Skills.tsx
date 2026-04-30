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
  { role: 'CS Student', org: 'ULM', years: '2022 - 2026' },
  { role: 'Tutor', org: 'Nepalese Encounters', years: '2019 - 2020' },
  { role: 'Photo Editor', org: 'Sai Vision Photo Studio', years: '2020 - 2021' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div data-animate data-delay="0">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
            <span className="text-[13px] font-medium text-[#666] tracking-wide">
              Skills & Expertise
            </span>
          </div>
          <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.15] max-w-[600px] mb-12">
            The knowledge that powers my code
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto" data-animate data-stagger="0.1">
          {/* Profile Card */}
          <div
            className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden"
            data-animate-child
          >
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src="/profile-header.jpg"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 pb-6">
              <div className="w-[120px] h-[120px] rounded-full border-4 border-white overflow-hidden -mt-[60px] relative shadow-lg">
                <img
                  src="/profile-avatar.jpg"
                  alt="Gaurav Rijal"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#F5F5F5] px-4 py-2 rounded-lg text-[13px] text-[#666] font-medium"
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
                className="grid grid-cols-[1fr_1fr_auto] items-center bg-[#F8F8F8] rounded-xl px-6 py-4 hover:bg-[#F0F0F0] transition-colors duration-200"
                data-animate-child
              >
                <span className="text-sm font-medium text-[#1A1A1A]">
                  {exp.role}
                </span>
                <span className="text-sm text-[#666]">{exp.org}</span>
                <span className="text-sm text-[#999]">{exp.years}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div className="text-center mt-16" data-animate data-delay="0.2">
          <p className="font-script text-2xl md:text-[28px] text-[#999] mb-6">
            Let's Build Something Amazing
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#333] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            Get In Touch Today
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
