import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Dumbbell, Brain, Flame, Users } from 'lucide-react'
import gymInterior from '../assets/gym_interior.png'

const features = [
  { icon: Dumbbell, title: 'Elite Equipment', desc: 'Industry-leading machines and free weights for maximum performance' },
  { icon: Brain, title: 'Expert Coaching', desc: 'Certified trainers with years of professional experience' },
  { icon: Flame, title: 'Diverse Programs', desc: 'From bodybuilding to cardio, yoga to martial arts — we have it all' },
  { icon: Users, title: 'Strong Community', desc: '9,000+ members united by a passion for fitness' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-32 bg-[#141414] overflow-hidden">
      {/* Top line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cc0000] to-transparent" />

      {/* BG text watermark */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 font-display text-[25vw] text-white/[0.015] text-center select-none pointer-events-none leading-none tracking-widest">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Visual */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#cc0000]/25 shadow-[0_0_60px_rgba(204,0,0,0.2)]">
              <img src={gymInterior} alt="Time Gym Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#cc0000]/30 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-[#0e0e0e]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-2xl"
            >
              <span className="text-3xl">🏆</span>
              <div>
                <p className="font-bold text-sm">Best Gym Award</p>
                <p className="text-white/50 text-xs">Cairo 2024</p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 }}
              className="absolute top-8 -right-6 bg-[#0e0e0e]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-2xl"
            >
              <span className="text-3xl">⚡</span>
              <div>
                <p className="font-bold text-sm">Open Daily</p>
                <p className="text-white/50 text-xs">6 AM – 12 AM</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-[#cc0000]/15 border border-[#cc0000]/30 text-[#cc0000] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[2px] uppercase mb-5">
                About Us
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-tight mb-6">
              More Than a Gym.<br />
              <span className="text-[#cc0000]">A Lifestyle.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              Time Gym was founded with a single mission: to create a space where every rep, every drop of sweat, and every milestone counts. We believe fitness is not just about the body — it's about building discipline, confidence, and a community that pushes you to your limits.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-10">
              Our state-of-the-art facilities are equipped with the latest training technology, staffed by certified professional coaches passionate about your transformation.
            </motion.p>

            {/* Features grid */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mb-10">
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -4, borderColor: 'rgba(204,0,0,0.4)' }}
                  className="group bg-white/[0.03] border border-white/8 rounded-2xl p-4 flex gap-3 items-start transition-all duration-300 hover:bg-[#cc0000]/8 cursor-default"
                >
                  <div className="w-9 h-9 bg-[#cc0000]/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc0000]/25 transition-colors">
                    <Icon size={18} className="text-[#cc0000]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#cc0000] hover:bg-[#ff1a1a] text-white font-semibold rounded-full transition-colors duration-300 shadow-[0_4px_24px_rgba(204,0,0,0.35)]"
            >
              Get In Touch
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
