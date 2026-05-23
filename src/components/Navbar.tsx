import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleMobileMenu, closeMobileMenu, setActiveSection, toggleTheme } from '../store/slices/uiSlice'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const dispatch = useAppDispatch()
  const { activeSection, isMobileMenuOpen, isDark } = useAppSelector((s) => s.ui)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) dispatch(setActiveSection(entry.target.id))
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [dispatch])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    dispatch(closeMobileMenu())
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === id
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur border-b border-gray-200 dark:border-white/5">
          <ul className="flex flex-col py-3">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                    activeSection === id
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
