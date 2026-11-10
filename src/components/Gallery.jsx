import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import heroBg from '../assets/hero_bg.png'
import gymInterior from '../assets/gym_interior.png'
import gymEquipment from '../assets/gym_equipment.png'
import gymCardio from '../assets/gym_cardio.png'
import gymTraining from '../assets/gym_training.png'

const slides = [
  { image: heroBg, title: 'Elite Training Zone', subtitle: 'Where champions are forged' },
  { image: gymInterior, title: 'Premium Interior', subtitle: 'World-class facilities for world-class athletes' },
  { image: gymEquipment, title: 'Professional Equipment', subtitle: 'The best tools for the best results' },
  { image: gymCardio, title: 'Cardio Paradise', subtitle: 'Burn it all, achieve it all' },
  { image: gymTraining, title: 'Intense Training', subtitle: 'Push past your limits every single day' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent((idx + slides.length) % slides.length)
  }, [current])

  const next = useCallback(() => go(current + 1), [go, current])
  const prev = useCallback(() => go(current - 1), [go, current])

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [next])

  const resetTimer = (fn) => {
    clearInterval(timerRef.current)
    fn()
    timerRef.current = setInterval(next, 5000)
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.6 } }),
  }

  return (
    <section id="gallery" ref={ref} className="py-24 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center"
        >
          <span className="inline-block bg-[#cc0000]/15 border border-[#cc0000]/30 text-[#cc0000] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[2px] uppercase mb-4">
            Gallery
          </span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
            Inside <span className="text-[#cc0000]">Time Gym</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            A glimpse of our world-class facilities and the energy that drives us
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div className="relative aspect-[16/7] overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="font-display text-3xl md:text-5xl tracking-wide mb-2"
                >
                  {slides[current].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                  className="text-white/70 text-sm md:text-base"
                >
                  {slides[current].subtitle}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <button
          onClick={() => resetTimer(prev)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-black/70 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white hover:bg-[#cc0000] hover:border-[#cc0000] transition-all duration-300 z-10 shadow-lg hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => resetTimer(next)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-black/70 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white hover:bg-[#cc0000] hover:border-[#cc0000] transition-all duration-300 z-10 shadow-lg hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => resetTimer(() => go(i))}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-[#cc0000]' : 'w-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
