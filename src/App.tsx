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

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
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
