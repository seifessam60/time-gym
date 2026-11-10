import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { IconFacebook, IconInstagram, IconYouTube, IconWhatsApp } from './SocialIcons'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Membership', href: '#offers' },
]

const exploreLinks = [
  { label: 'Our Coaches', href: '#coaches' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
]

const socials = [
  { icon: IconFacebook, label: 'Facebook', href: '#' },
  { icon: IconInstagram, label: 'Instagram', href: '#' },
  { icon: IconYouTube, label: 'YouTube', href: '#' },
  { icon: IconWhatsApp, label: 'WhatsApp', href: 'https://wa.me/201001234567' },
]

const branches = ['Nasr City', 'Heliopolis', 'Maadi', '6th of October', 'New Cairo']

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-[#141414] border-t border-white/[0.06] overflow-hidden">
      {/* Top red line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cc0000] to-transparent" />

      {/* BG watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none pb-2">
        <span className="font-display text-[18vw] text-white/[0.015] leading-none tracking-widest whitespace-nowrap">
          TIME GYM
        </span>
      </div>

      {/* Main Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5 group w-fit">
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
            <p className="font-display text-[#cc0000] tracking-[4px] text-sm mb-3">IT'S TIME TO TRAIN</p>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Egypt's premier fitness center. Earn the body, rep by rep. Join 9,000+ members on the journey.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: '#cc0000', borderColor: '#cc0000', color: '#fff' }}
                  className="w-10 h-10 bg-white/[0.05] border border-white/10 rounded-xl flex items-center justify-center text-white/50 transition-colors duration-300"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 text-sm hover:text-[#cc0000] transition-colors duration-300 flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#cc0000] transition-all duration-300 overflow-hidden" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-white mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 text-sm hover:text-[#cc0000] transition-colors duration-300 flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#cc0000] transition-all duration-300 overflow-hidden" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Branches */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-white mb-6">Our Branches</h4>
            <ul className="flex flex-col gap-2 mb-6">
              {branches.map(branch => (
                <li key={branch}>
                  <a
                    href="#branches"
                    className="text-white/50 text-sm hover:text-[#cc0000] transition-colors duration-300 flex items-center gap-2 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000]/40 group-hover:bg-[#cc0000] transition-colors flex-shrink-0" />
                    {branch}
                  </a>
                </li>
              ))}
            </ul>
            <div className="bg-[#cc0000]/10 border border-[#cc0000]/20 rounded-xl p-4">
              <p className="text-white/50 text-xs mb-1 font-medium">Working Hours</p>
              <p className="text-white text-sm font-semibold">Daily: 6:00 AM – 12:00 AM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center">
            © 2024 Time Gym. All Rights Reserved. Designed with ❤️ for champions.
          </p>
          <p className="font-display tracking-[3px] text-[#cc0000] text-xs">
            EARN THE BODY, REP BY REP
          </p>
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, backgroundColor: '#cc0000', borderColor: '#cc0000' }}
            className="flex items-center gap-2 text-xs text-white/40 hover:text-white border border-white/10 rounded-full px-4 py-2 transition-colors duration-300 group"
          >
            Back to top
            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
