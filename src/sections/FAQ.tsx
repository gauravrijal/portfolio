import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What do you specialize in?',
    answer:
      'Identity and access management. I design and run identity governance programs on SailPoint IdentityIQ and Identity Security Cloud, covering joiner-mover-leaver lifecycle automation, access certifications, role-based access control, and segregation of duties. I also work across Okta and Microsoft Entra ID for single sign-on, adaptive MFA, and conditional access.',
  },
  {
    question: 'Which platforms and protocols do you work with?',
    answer:
      'SailPoint IdentityIQ, Identity Security Cloud, and IdentityNow day to day, alongside Okta, Microsoft Entra ID, Saviynt, and Non-Employee Risk Management. On the integration side I work with REST APIs, SCIM, SAML 2.0, OAuth 2.0, and OpenID Connect, and I build custom rules, connectors, and workflows in Java and BeanShell.',
  },
  {
    question: 'What scale of environments have you worked in?',
    answer:
      'Enterprise. I have delivered lifecycle management, access certifications, and audit reporting across more than 50,000 identities, and configured SCIM-based provisioning for over 100 SaaS and IaaS applications. I have also led a migration from on-premises IdentityIQ to Identity Security Cloud, and run certification campaigns and access audits supporting SOX, HIPAA, and ISO 27001 compliance.',
  },
  {
    question: 'What is your educational background?',
    answer:
      'I hold a Bachelor of Science in Computer Science from the University of Louisiana at Monroe. Alongside the degree I maintain industry certifications including the SailPoint Identity Security Leader Credential, Saviynt Identity Security for the AI Age, CompTIA Security+, Non-Human Identity Fundamentals, Ethical Hacking Essentials, and both the AWS Certified Cloud Practitioner and AWS Certified AI Practitioner.',
  },
  {
    question: 'How can I contact you?',
    answer:
      'You can reach me via email at rijalgaurav789@gmail.com, connect with me on LinkedIn, or use the contact form below. I am open to IAM and identity governance engineering roles, and I typically respond within 24 hours.',
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
              FAQs
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
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#666] dark:text-[#A1A1A1] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
