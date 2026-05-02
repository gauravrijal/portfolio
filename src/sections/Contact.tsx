import { useState } from 'react'
import { Send, Loader2, AlertCircle, Linkedin, Github, Instagram } from 'lucide-react'

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/gauravrijal', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/gauravrijal', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/gaurav__rijal/', label: 'Instagram' },
    { icon: DiscordIcon, href: 'https://discord.com/users/gaurav__rijal', label: 'Discord' },
    { icon: XIcon, href: 'https://x.com/gaurav__rijal', label: 'X (Twitter)' },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string

    // Web3Forms displays each named field as a labeled row in their email template.
    // We use descriptive field names and add the access key + metadata.
    const payload = new FormData()
    payload.append('access_key', '6d5a736c-f146-400c-a130-494da4de9934')
    payload.append('subject', `Portfolio: ${subject}`)
    payload.append('from_name', `${name} via Portfolio`)
    payload.append('replyto', email)
    payload.append('Name', name)
    payload.append('Email', email)
    payload.append('Subject', subject)
    payload.append('Message', formData.get('message') as string)
    payload.append('botcheck', '')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      })
      const result = await res.json()

      if (result.success) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setErrorMsg(result.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Typography & Socials */}
          <div data-animate data-delay="0" className="text-center order-2 lg:order-1">
            <h2 className="font-display text-[64px] md:text-[96px] text-[#1A1A1A] dark:text-[#EAEAEA] leading-none mb-6">
              Gaurav
            </h2>
            <p className="text-base text-[#666] dark:text-[#A1A1A1] max-w-[500px] mx-auto leading-relaxed">
              Computer Science graduate crafting thoughtful, impactful digital
              experiences through code and creativity.
            </p>

            <a
              href="mailto:rijalgaurav078@gmail.com"
              className="inline-block text-base text-[#1A1A1A] dark:text-[#EAEAEA] mt-8 underline underline-offset-4 decoration-[#E5E5E5] dark:decoration-white/20 hover:decoration-[#1A1A1A] dark:hover:decoration-white transition-colors duration-300"
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
                  className="text-[#666] dark:text-[#A1A1A1] hover:text-[#1A1A1A] dark:hover:text-[#EAEAEA] hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div data-animate data-delay="0.2" className="order-1 lg:order-2">
            <div className="bg-white dark:bg-[#111] border border-[#E5E5E5] dark:border-white/10 rounded-2xl p-6 md:p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-[#EAEAEA] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-[#666] dark:text-[#A1A1A1]">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm text-[#666] dark:text-[#A1A1A1] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-[#F8F8F8] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-white/10 rounded-lg px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#EAEAEA] placeholder:text-[#999] dark:placeholder:text-[#555] focus:border-[#1A1A1A] dark:focus:border-white focus:outline-none transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#666] dark:text-[#A1A1A1] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#F8F8F8] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-white/10 rounded-lg px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#EAEAEA] placeholder:text-[#999] dark:placeholder:text-[#555] focus:border-[#1A1A1A] dark:focus:border-white focus:outline-none transition-colors duration-200"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#666] dark:text-[#A1A1A1] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full bg-[#F8F8F8] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-white/10 rounded-lg px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#EAEAEA] placeholder:text-[#999] dark:placeholder:text-[#555] focus:border-[#1A1A1A] dark:focus:border-white focus:outline-none transition-colors duration-200"
                      placeholder="How can I help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#666] dark:text-[#A1A1A1] mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-[#F8F8F8] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-white/10 rounded-lg px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#EAEAEA] placeholder:text-[#999] dark:placeholder:text-[#555] focus:border-[#1A1A1A] dark:focus:border-white focus:outline-none transition-colors duration-200 resize-y"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                      <AlertCircle size={16} className="shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] dark:bg-[#EAEAEA] text-white dark:text-[#1A1A1A] text-sm font-medium py-3.5 rounded-full hover:bg-[#333] dark:hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {status === 'loading' ? (
                      <>
                        Sending...
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Your Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Contact Info */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#E5E5E5] dark:border-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}profile-avatar.jpg`}
                  alt="Gaurav"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1A1A1A] dark:text-[#EAEAEA]">
                    rijalgaurav078@gmail.com
                  </p>
                  <p className="text-xs text-[#666] dark:text-[#A1A1A1]">reply within 24 hrs</p>
                </div>
                <div className="flex items-center gap-2 bg-[#F5F5F5] dark:bg-[#222] px-3 py-1.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-[#666] dark:text-[#A1A1A1]">
                    AVAILABLE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
