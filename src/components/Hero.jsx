import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import heroBg from '../assets/hero_bg.png'

const stats = [
  { number: '9K+', label: 'Members' },
  { number: '15+', label: 'Expert Coaches' },
  { number: '5', label: 'Branches' },
  { number: '8+', label: 'Years Strong' },
]

export default function Hero() {
  const particleRef = useRef(null)

  useEffect(() => {
    const container = particleRef.current
    if (!container) return
    const particles = Array.from({ length: 30 }, () => {
      const p = document.createElement('div')
      const size = Math.random() * 3 + 1
      p.style.cssText = `
        position:absolute; border-radius:50%; background:#cc0000;
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        bottom:${Math.random() * 30}%;
        opacity:0;
        animation: floatUp ${Math.random() * 10 + 8}s ${Math.random() * 8}s linear infinite;
      `
      container.appendChild(p)
      return p
    })
    return () => particles.forEach(p => p.remove())
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Time Gym"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          style={{ transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e]/95 via-[#0e0e0e]/70 to-[#cc0000]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
      </div>

      {/* Particles */}
      <div ref={particleRef} className="absolute inset-0 pointer-events-none z-[1]" />

      {/* Red glow orb */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full bg-[#cc0000]/5 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 bg-[#cc0000]/15 border border-[#cc0000]/30 text-[#ff6666] px-5 py-2 rounded-full text-xs font-semibold tracking-[2px] uppercase mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          Gym / Fitness Center — Est. 2016
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.92] tracking-wider mb-6"
        >
          <span className="block text-white">IT'S TIME</span>
          <span className="block text-[#cc0000] drop-shadow-[0_0_60px_rgba(204,0,0,0.6)]">
            TO TRAIN
          </span>
        </motion.h1>

        {/* Motto */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-[clamp(0.9rem,2.5vw,1.4rem] tracking-[5px] text-white/60 border-l-4 border-[#cc0000] pl-5 mb-6"
        >
          EARN THE BODY, REP BY REP
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white/60 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Transform your body, elevate your mind. Join Egypt's most elite fitness community and start your journey today.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#offers"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#cc0000] hover:bg-[#ff1a1a] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(204,0,0,0.4)] hover:shadow-[0_8px_40px_rgba(255,26,26,0.55)] hover:-translate-y-1 group"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-transparent border-2 border-white/25 hover:border-white/60 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center gap-0 bg-white/4 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 max-w-2xl"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center px-6 text-center">
                <span className="font-display text-4xl text-[#cc0000] leading-none">{s.number}</span>
                <span className="text-white/50 text-xs tracking-widest mt-1 uppercase">{s.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-12 bg-white/10 flex-shrink-0" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
      >
        <div className="w-px h-14 bg-gradient-to-b from-[#cc0000] to-transparent animate-pulse" />
        <ChevronDown size={14} className="text-white/40 animate-bounce" />
      </motion.div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          100% { transform: translateY(-100vh) scale(0.2); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
