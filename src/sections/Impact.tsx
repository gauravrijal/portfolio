import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  LifeBuoy,
  Users,
  Server,
  ShieldCheck,
  Plug,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Highlight {
  metric: string
  label: string
  detail: string
  context: string
  icon: LucideIcon
}

const highlights: Highlight[] = [
  {
    metric: '40%',
    label: 'Faster onboarding',
    detail:
      'Automated and consolidated provisioning, deprovisioning, and access reviews across Identity Security Cloud, cutting the time new joiners wait for the access they need to work.',
    context: 'Lifecycle automation',
    icon: Clock,
  },
  {
    metric: '50,000+',
    label: 'Identities governed',
    detail:
      'Delivered end-to-end lifecycle management, access certifications, policy enforcement, and audit reporting at enterprise scale on SailPoint IdentityIQ.',
    context: 'Identity governance',
    icon: Users,
  },
  {
    metric: '35%',
    label: 'Excess permissions removed',
    detail:
      'Applied Access Modeling and Identity Analytics to surface entitlement bloat, then enforced least-privilege access to shrink the standing permission footprint.',
    context: 'Least privilege',
    icon: ShieldCheck,
  },
  {
    metric: '100+',
    label: 'Applications integrated',
    detail:
      'Configured SCIM-based automated provisioning, dynamic group management, and conditional access enforcement across SaaS and IaaS applications.',
    context: 'Enterprise integration',
    icon: Plug,
  },
  {
    metric: '30%',
    label: 'Fewer helpdesk tickets',
    detail:
      'Integrated self-service access requests, automated password resets, and MFA enrollment, removing the routine access work that reached the service desk.',
    context: 'Self-service enablement',
    icon: LifeBuoy,
  },
  {
    metric: '40%',
    label: 'Lower infrastructure overhead',
    detail:
      'Migrated identity architecture from on-premises IdentityIQ to Identity Security Cloud, refactoring legacy roles and moving connectors to cloud-native models.',
    context: 'Cloud migration',
    icon: Server,
  },
]

export default function Impact() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % highlights.length)
  const prev = () => setCurrent((prev) => (prev - 1 + highlights.length) % highlights.length)

  const active = highlights[current]
  const Icon = active.icon

  return (
    <section id="impact" className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Label & Heading */}
          <div data-animate data-delay="0">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] dark:bg-[#EAEAEA]"></span>
              <span className="text-[13px] font-medium text-[#666] dark:text-[#A1A1A1] tracking-wide">
                Impact Highlights
              </span>
            </div>
            <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15]">
              Results that measure the work
            </h2>
          </div>

          {/* Right: Carousel */}
          <div data-animate data-delay="0.2">
            <div
              className="bg-[#F8F8F8] dark:bg-[#111] rounded-2xl p-6 md:p-8 flex flex-col"
              style={{ minHeight: '320px' }}
            >
              <div
                key={current}
                className="flex-1 animate-in fade-in slide-in-from-bottom-2 duration-300 ease-out"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[40px] md:text-[52px] leading-none text-[#1A1A1A] dark:text-[#EAEAEA]">
                    {active.metric}
                  </span>
                  <span className="text-sm font-medium text-[#666] dark:text-[#A1A1A1]">
                    {active.label}
                  </span>
                </div>
                <p className="text-base text-[#666] dark:text-[#A1A1A1] leading-relaxed mt-4">
                  {active.detail}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[#0A0A0A] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#666] dark:text-[#A1A1A1]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A] dark:text-[#EAEAEA]">
                      {active.context}
                    </p>
                    <p className="text-xs text-[#999] dark:text-[#777]">
                      {String(current + 1).padStart(2, '0')} / {String(highlights.length).padStart(2, '0')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-lg bg-[#E5E5E5] dark:bg-[#333] text-[#1A1A1A] dark:text-[#EAEAEA] flex items-center justify-center hover:bg-[#D5D5D5] dark:hover:bg-[#444] transition-colors duration-200"
                    aria-label="Previous highlight"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-lg bg-[#E5E5E5] dark:bg-[#333] text-[#1A1A1A] dark:text-[#EAEAEA] flex items-center justify-center hover:bg-[#D5D5D5] dark:hover:bg-[#444] transition-colors duration-200"
                    aria-label="Next highlight"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <img
                src={`${import.meta.env.BASE_URL}profile-avatar.jpg`}
                alt="Gaurav Rijal"
                className="w-8 h-8 rounded-full border-2 border-[#F2F2F2] dark:border-[#0A0A0A] object-cover"
              />
              <p className="text-sm text-[#666] dark:text-[#A1A1A1]">
                Identity programs delivered across insurance, healthcare, and consulting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
