import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#offers', label: 'Offers' },
  { href: '#coaches', label: 'Coaches' },
  { href: '#branches', label: 'Branches' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) setActive(s.id)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-white/8 shadow-2xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex-shrink-0">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#cc0000" strokeWidth="2"/>
              <circle cx="20" cy="20" r="14" stroke="#cc0000" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
              <line x1="20" y1="6" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="20" y1="20" x2="28" y2="24" stroke="#cc0000" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="20" r="2" fill="#cc0000"/>
            </svg>
          </div>
          <span className="font-display text-2xl tracking-widest group-hover:text-[#cc0000] transition-colors duration-300">
            TIME GYM
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  active === href.slice(1)
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
                {active === href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#cc0000] rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#offers"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#cc0000] hover:bg-[#ff1a1a] text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(204,0,0,0.35)] hover:shadow-[0_0_35px_rgba(255,26,26,0.5)] hover:-translate-y-0.5"
          >
            Join Now
          </a>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0e0e0e]/98 backdrop-blur-xl border-b border-white/8 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active === href.slice(1)
                        ? 'text-[#cc0000] bg-[#cc0000]/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#offers"
                  onClick={() => setMenuOpen(false)}
                  className="block mt-2 px-4 py-3 bg-[#cc0000] text-white text-sm font-semibold rounded-full text-center"
                >
                  Join Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
