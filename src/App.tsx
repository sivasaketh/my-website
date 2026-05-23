import { useState, useEffect } from 'react'
import { useAppSelector } from './store/hooks'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const isDark = useAppSelector((s) => s.ui.isDark)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrollable = el.scrollHeight - el.clientHeight
      setScrollPct(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 bg-indigo-500 pointer-events-none transition-[width] duration-75"
        style={{ width: `${scrollPct}%` }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
