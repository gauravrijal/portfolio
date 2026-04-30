import { Linkedin, Github, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/gauravrijal', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/gauravrijal', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="pt-20 pb-8 border-t border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center" data-animate data-delay="0">
          <h2 className="font-display text-[64px] md:text-[120px] text-[#1A1A1A] leading-none">
            Gaurav
          </h2>
          <p className="text-base text-[#666] max-w-[500px] mx-auto mt-6 leading-relaxed">
            Computer Science student crafting thoughtful, impactful digital
            experiences through code and creativity.
          </p>

          <a
            href="mailto:rijalgaurav078@gmail.com"
            className="inline-block text-base text-[#1A1A1A] mt-8 underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#1A1A1A] transition-colors duration-300"
          >
            rijalgaurav078@gmail.com
          </a>

          <div className="flex items-center justify-center gap-6 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#1A1A1A] hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-12 pt-6 border-t border-[#E5E5E5]">
          <p className="text-[13px] text-[#666]">© 2025 Gaurav</p>
          <p className="text-[13px] text-[#666]">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
