import { useEffect } from 'react'
import Lenis from 'lenis'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Process from './sections/Process'
import Awards from './sections/Awards'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  useScrollAnimation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#0A0A0A] transition-colors duration-300">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Process />
      <Awards />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
