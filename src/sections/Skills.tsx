import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useIsMobile } from '../hooks/use-mobile'

const skillGroups = [
  {
    category: 'Identity & Access Management',
    items: [
      'SailPoint IdentityIQ',
      'Identity Security Cloud (ISC)',
      'IdentityNow',
      'Okta',
      'Microsoft Entra ID',
      'Saviynt',
      'NERM',
      'CIAM',
      'PAM',
    ],
  },
  {
    category: 'Lifecycle & Governance',
    items: [
      'JML Workflows',
      'Provisioning & Deprovisioning',
      'Access Certifications',
      'Role Mining & Modeling',
      'RBAC / ABAC',
      'Segregation of Duties (SoD)',
      'Password Management',
    ],
  },
  {
    category: 'Directory Services',
    items: ['Active Directory', 'Microsoft Entra ID', 'Sun LDAP'],
  },
  {
    category: 'Protocols & Authentication',
    items: ['SAML 2.0', 'OAuth 2.0', 'OpenID Connect (OIDC)', 'WS-Federation', 'MFA', 'SSO'],
  },
  {
    category: 'Integration & APIs',
    items: ['REST APIs', 'SCIM', 'SOAP Web Services', 'WSDL', 'UDDI'],
  },
  {
    category: 'Programming & Scripting',
    items: ['Java', 'BeanShell', 'XML', 'SQL', 'PL/SQL'],
  },
  {
    category: 'Cloud & Operating Systems',
    items: ['AWS', 'Microsoft Azure', 'Linux (RHEL/Ubuntu)', 'Windows Server'],
  },
  {
    category: 'Databases & Application Servers',
    items: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'Apache Tomcat', 'IBM WebSphere'],
  },
  {
    category: 'Tools & Methodologies',
    items: ['Git', 'Log4j', 'Agile / Scrum'],
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Louisiana at Monroe',
    location: 'Monroe, LA',
  },
]

export default function Skills() {
  const isMobile = useIsMobile()
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    [skillGroups[0].category]: true,
  })

  const toggleGroup = (category: string) =>
    setOpenGroups((prev) => ({ ...prev, [category]: !prev[category] }))

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
            The toolkit behind enterprise identity
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

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-[#EAEAEA]">
                  Gaurav Rijal
                </h3>
                <p className="text-sm text-[#666] dark:text-[#A1A1A1] mt-1">
                  Certified IAM SailPoint Engineer
                </p>
                <p className="text-[13px] text-[#999] dark:text-[#777] mt-2">
                  IIQ · IdentityNow · ISC · NERM · Active Directory · Okta
                </p>
              </div>
            </div>
          </div>

          {/* Skill Categories */}
          <div
            className="grid md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-8 mt-8"
            data-animate
            data-stagger="0.08"
          >
            {skillGroups.map((group) => {
              const isOpen = !isMobile || !!openGroups[group.category]
              const label = (
                <span className="text-xs text-[#999] dark:text-[#777] font-medium uppercase tracking-wider">
                  {group.category}
                </span>
              )

              return (
                <div
                  key={group.category}
                  className="border-b border-[#E5E5E5] dark:border-white/10 pb-4 md:border-0 md:pb-0"
                  data-animate-child
                >
                  {isMobile ? (
                    <button
                      onClick={() => toggleGroup(group.category)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 py-1 text-left"
                    >
                      {label}
                      <ChevronDown
                        size={16}
                        className={`shrink-0 text-[#999] dark:text-[#777] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    label
                  )}

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2 md:pt-3">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="bg-[#F5F5F5] dark:bg-[#222] px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-lg text-[12px] md:text-[13px] text-[#666] dark:text-[#A1A1A1] font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Education */}
          <div className="flex flex-col gap-3 mt-12" data-animate data-stagger="0.1">
            {education.map((item) => (
              <div
                key={item.degree}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-center gap-1 bg-[#F8F8F8] dark:bg-[#111] rounded-xl px-6 py-4 hover:bg-[#F0F0F0] dark:hover:bg-[#222] transition-colors duration-200"
                data-animate-child
              >
                <span className="text-sm font-medium text-[#1A1A1A] dark:text-[#EAEAEA]">
                  {item.degree}
                </span>
                <span className="text-sm text-[#666] dark:text-[#A1A1A1]">
                  {item.school} · {item.location}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div className="text-center mt-16" data-animate data-delay="0.2">
          <p className="font-script text-2xl md:text-[28px] text-[#999] dark:text-[#777] mb-6">
            Let's Secure Something Together
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
