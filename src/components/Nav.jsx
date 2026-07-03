import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const hashLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const sectionEls = useRef([])
  const rafId = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

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

  // Non-home pages always show nav background (no hero underneath)
  const showBg = !isHome || scrolled
  const isArtifactsActive = location.pathname.startsWith('/artifacts')

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showBg ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
        <Link to="/" className="font-extrabold text-lg tracking-tight text-gray-900 hover:text-green-600 transition-colors">
          KP
        </Link>
        <div className="flex gap-8">
          {hashLinks.map(({ label, href }) => (
            <a
              key={href}
              href={isHome ? href : `/${href}`}
              className={`text-sm font-medium tracking-wide transition-colors ${
                active === href
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {label}
            </a>
          ))}
          <Link
            to="/artifacts"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isArtifactsActive
                ? 'text-green-600'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Artifacts
          </Link>
        </div>
      </div>
    </nav>
  )
}
