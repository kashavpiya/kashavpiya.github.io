import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const hashLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionEls = useRef([])
  const rafId = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isHome) return
    sectionEls.current = hashLinks.map(l => document.querySelector(l.href))

    const onScroll = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
        const current = sectionEls.current.findLast(
          el => el && el.getBoundingClientRect().top <= 120
        )
        setActive(current ? '#' + current.id : '')
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [isHome])

  const showBg = !isHome || scrolled || menuOpen

  const handleNavLink = (e, href) => {
    setMenuOpen(false)
    if (!isHome) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showBg ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-extrabold text-lg tracking-tight text-gray-900 hover:text-green-600 transition-colors">
          KP
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {hashLinks.map(({ label, href }) => (
            <a
              key={href}
              href={isHome ? href : `/${href}`}
              onClick={(e) => handleNavLink(e, href)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                active === href
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 -mr-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? 'max-h-96 border-b border-gray-100' : 'max-h-0'
      }`}>
        <div className="px-6 pb-6 flex flex-col gap-1">
          {hashLinks.map(({ label, href }) => (
            <a
              key={href}
              href={isHome ? href : `/${href}`}
              onClick={(e) => handleNavLink(e, href)}
              className={`py-3 text-base font-medium border-b border-gray-50 last:border-0 transition-colors ${
                active === href ? 'text-green-600' : 'text-gray-700'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
