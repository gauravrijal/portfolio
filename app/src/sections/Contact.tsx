import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div data-animate data-delay="0">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm text-[#666]">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm text-[#666] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F8F8F8] border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#999] focus:border-[#1A1A1A] focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#666] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#F8F8F8] border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#999] focus:border-[#1A1A1A] focus:outline-none transition-colors duration-200"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#666] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F8F8F8] border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#999] focus:border-[#1A1A1A] focus:outline-none transition-colors duration-200"
                    placeholder="How can I help?"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#666] mb-1.5">
                    How may we assist you?
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-[#F8F8F8] border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#999] focus:border-[#1A1A1A] focus:outline-none transition-colors duration-200 resize-y"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black text-white text-sm font-medium py-3.5 rounded-full hover:bg-[#333] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-2"
                >
                  Send Your Message
                  <Send size={16} />
                </button>
              </form>
            )}

            {/* Contact Info */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#E5E5E5]">
              <img
                src="/profile-avatar.jpg"
                alt="Gaurav"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1A1A1A]">
                  rijalgaurav078@gmail.com
                </p>
                <p className="text-xs text-[#666]">reply within 24 hrs</p>
              </div>
              <div className="flex items-center gap-2 bg-[#F5F5F5] px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-[#666]">
                  AVAILABLE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Book a Call */}
        <div className="flex items-center justify-between mt-8 px-2">
          <p className="font-script text-lg md:text-xl text-[#999]">
            Prefer to Book a call?
          </p>
          <a
            href="mailto:rijalgaurav078@gmail.com"
            className="text-sm text-[#1A1A1A] underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#1A1A1A] transition-colors duration-300"
          >
            Book a call anytime
          </a>
        </div>
      </div>
    </section>
  )
}
