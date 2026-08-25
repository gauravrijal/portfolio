import { useState } from 'react'
import { ShieldCheck, Building2, HeartPulse, Code2, ChevronDown } from 'lucide-react'

const VISIBLE_BULLETS = 4

const roles = [
  {
    label: 'Farm Bureau · San Antonio, TX',
    title: 'IAM SailPoint Engineer',
    period: 'May 2025 – Present',
    icon: ShieldCheck,
    bullets: [
      'Deployed IdentityNow and Identity Security Cloud to automate provisioning, deprovisioning, and access reviews, reducing onboarding time by 40%.',
      'Integrated self-service access requests, automated password resets, and MFA enrollment into ISC, reducing IT helpdesk tickets by 30%.',
      'Automated Role-Based Access Control and policy enforcement within ISC, removing excess privileges and aligning entitlements with least-privilege principles.',
      'Managed the IDN Non-Employee Risk Management module, administering user profiles, processes, administrative roles, and SAML-based SSO.',
      'Installed and customized SailPoint IdentityNow connectors across Active Directory, Azure AD, JDBC, Workday, SAP, and ServiceNow.',
      'Deployed Joiner–Mover–Leaver lifecycle workflows to eliminate orphaned accounts and strengthen audit readiness.',
      'Sponsored access certification campaigns and risk-driven access audits supporting SOX, HIPAA, and ISO 27001 compliance.',
      'Integrated Okta with enterprise SaaS, HR systems, VPNs, Microsoft 365, Salesforce, and Workday to secure access for thousands of users.',
      'Deployed Okta Adaptive MFA and Conditional Access policies driven by location, device posture, and IP reputation signals.',
      'Partnered with Security Operations, GRC, and Cloud Engineering to implement Segregation of Duties policies and continuous monitoring dashboards.',
    ],
  },
  {
    label: 'Deloitte · Austin, TX',
    title: 'IAM Engineer',
    period: 'June 2023 – May 2025',
    icon: Building2,
    bullets: [
      'Designed and implemented SailPoint IdentityIQ for end-to-end lifecycle management, access certifications, and audit reporting across 50,000+ identities.',
      'Migrated IAM architecture from SailPoint IIQ to Identity Security Cloud, refactoring legacy roles and cutting infrastructure overhead by 40%.',
      'Applied ISC Access Modeling and Identity Analytics to uncover entitlement bloat, cutting excess permissions by over 35%.',
      'Configured SailPoint ISC integrations with Microsoft Entra ID for SCIM-based provisioning across 100+ SaaS and IaaS applications.',
      'Developed custom IIQ rules — BuildMap, Correlation, Provisioning, and Policy Violation — plus onboarding workflows for SAP, Oracle, and legacy mainframe systems.',
      'Architected Just-in-Time access provisioning for privileged users with granular role definitions and time-bound approval workflows.',
      'Leveraged Entra ID Conditional Access, Privileged Identity Management, and Self-Service Password Reset to strengthen identity security.',
      'Delivered unified governance by integrating SailPoint ISC with Entra ID, Okta, and ServiceNow via REST APIs and SCIM interfaces.',
      'Built custom dashboards and reports for identity risk tracking, orphan account auditing, and certification campaign analysis.',
      'Provided Tier-3 support, connector debugging, and rule performance tuning across IIQ, ISC, and Entra ID environments.',
    ],
  },
  {
    label: 'Tenet Healthcare · Dallas, TX',
    title: 'SailPoint Consultant',
    period: 'July 2021 – June 2023',
    icon: HeartPulse,
    bullets: [
      'Engineered customized approval procedures and modified out-of-the-box workflows to meet healthcare regulatory and client requirements.',
      'Customized connectors and configurations to manage Identity Cubes across JDBC, LDAP, Active Directory, and flat-file sources.',
      'Built provisioning plans, launch arguments, AccountRequests, and AttributeRequests using Java and BeanShell scripting.',
      'Created an automated disaster recovery plan using AWS cross-region failover mechanisms.',
      'Created custom email templates, task definitions, certification events, and Lifecycle Manager workflows.',
      'Deployed custom Java classes to execute and manage custom tasks within IdentityIQ.',
      'Designed specialized tasks to recalculate and refresh system statistics across all identity roles.',
      'Led code reviews, authored design documentation, and ran SailPoint Compliance Manager knowledge-sharing sessions.',
      'Mentored internal team members and coached client technical teams on IAM and IGA best practices.',
    ],
  },
  {
    label: 'ATOS · Irving, TX',
    title: 'IAM Software Developer',
    period: 'August 2020 – July 2021',
    icon: Code2,
    bullets: [
      'Administered and maintained SailPoint IIQ policy servers across Dev, QA, UAT, and Production environments.',
      'Configured advanced access certifications using Populations and Group Factories within IdentityIQ.',
      'Configured Segregation of Duties policies to eliminate compliance violations and uphold access governance standards.',
      'Developed Oracle SQL and PL/SQL procedures, queries, functions, and packages for database operations.',
      'Developed XML definitions for Web Enrollment applications feeding downstream enterprise web services.',
      'Built web services using SOAP, WSDL, UDDI, and service-oriented architecture design principles.',
      'Packaged and deployed enterprise web components on IBM WebSphere Application Server.',
      'Implemented Log4j logging frameworks with structured exception handling and error reporting.',
      'Authored technical runbooks, architecture specifications, and operational process flows.',
    ],
  },
]

export default function Process() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggle = (label: string) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }))

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div data-animate data-delay="0">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] dark:bg-[#EAEAEA]"></span>
            <span className="text-[13px] font-medium text-[#666] dark:text-[#A1A1A1] tracking-wide">
              Professional Experience
            </span>
          </div>
          <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-[1.15] max-w-[600px] mb-12">
            Six years securing enterprise identity
          </h2>
        </div>

        <div className="relative" data-animate data-stagger="0.2">
          {/* Timeline line */}
          <div
            className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-[#E5E5E5] dark:bg-white/10 origin-top"
            data-timeline-line
          />

          <div className="flex flex-col gap-8">
            {roles.map((role) => {
              const isOpen = expanded[role.label]
              const shown = isOpen ? role.bullets : role.bullets.slice(0, VISIBLE_BULLETS)
              const hiddenCount = role.bullets.length - VISIBLE_BULLETS

              return (
                <div
                  key={role.label}
                  className="relative pl-10 md:pl-14"
                  data-animate-child
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1 top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#1A1A1A] dark:bg-[#EAEAEA] border-4 border-[#F2F2F2] dark:border-[#0A0A0A]" />

                  {/* Card */}
                  <div className="bg-[#F8F8F8] dark:bg-[#111] rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-white/5 transition-all duration-400">
                    <span className="text-xs text-[#999] dark:text-[#777] font-medium uppercase tracking-wider">
                      {role.label}
                    </span>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-[#EAEAEA] mt-2 mb-4">
                      {role.title}
                    </h3>

                    <ul className="flex flex-col gap-2.5">
                      {shown.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-[#999] dark:bg-[#777] shrink-0" />
                          <span className="text-sm text-[#666] dark:text-[#A1A1A1] leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {hiddenCount > 0 && (
                      <button
                        onClick={() => toggle(role.label)}
                        className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[#1A1A1A] dark:text-[#EAEAEA] hover:opacity-70 transition-opacity duration-200"
                        aria-expanded={!!isOpen}
                      >
                        {isOpen ? 'Show less' : `Show ${hiddenCount} more`}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}

                    <div className="flex items-center justify-between mt-6">
                      <role.icon size={28} className="text-[#666] dark:text-[#A1A1A1]" />
                      <span className="text-sm text-[#999] dark:text-[#777] font-medium">
                        {role.period}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
