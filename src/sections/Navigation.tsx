import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { useTheme } from '../components/ThemeProvider'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "light" : "dark")
  }

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Spacer to prevent content from hiding behind the fixed nav */}
      <div className="h-[72px]" />

      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 pb-1"
      >
        <div
          className={`
            w-full max-w-[1100px] px-5 md:px-8 py-3 flex items-center justify-between
            rounded-2xl border transition-all duration-500 ease-out
            ${scrolled
              ? 'bg-white/60 dark:bg-[#1A1A1A]/60 border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl'
              : 'bg-white/40 dark:bg-[#1A1A1A]/40 border-white/25 dark:border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-lg'
            }
          `}
          style={{
            WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
            backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="font-script text-2xl font-semibold text-[#1A1A1A] dark:text-[#EAEAEA] shrink-0 transition-colors"
          >
            Gaurav Rijal
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#555] dark:text-[#A1A1A1] hover:text-[#1A1A1A] dark:hover:text-[#EAEAEA] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1A1A1A] dark:after:bg-[#EAEAEA] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[#555] dark:text-[#A1A1A1] hover:text-[#1A1A1A] dark:hover:text-[#EAEAEA] transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              <Moon className="w-5 h-5 hidden dark:block" />
              <Sun className="w-5 h-5 block dark:hidden" />
            </button>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] dark:bg-[#EAEAEA] text-white dark:text-[#1A1A1A] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#333] dark:hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-[#555] dark:text-[#A1A1A1] hover:text-[#1A1A1A] dark:hover:text-[#EAEAEA] transition-colors rounded-full"
              aria-label="Toggle theme"
            >
              <Moon className="w-5 h-5 hidden dark:block" />
              <Sun className="w-5 h-5 block dark:hidden" />
            </button>
            <button
              className="p-2 text-[#1A1A1A] dark:text-[#EAEAEA]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 bg-[#F2F2F2]/85 dark:bg-[#0A0A0A]/85 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          backdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className={`flex flex-col gap-6 pt-28 px-8 transition-all duration-500 ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-medium text-[#1A1A1A] dark:text-[#EAEAEA] transition-all duration-300"
              style={{ transitionDelay: mobileMenuOpen ? `${i * 60}ms` : '0ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] dark:bg-[#EAEAEA] text-white dark:text-[#1A1A1A] text-base font-medium px-6 py-3 rounded-full mt-4 transition-all duration-300"
            style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 60}ms` : '0ms' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </>
  )
}
