import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Star } from 'lucide-react'
import { IconInstagram } from './SocialIcons'
import coach1 from '../assets/coach_1.png'
import coach2 from '../assets/coach_2.png'
import coach3 from '../assets/coach_3.png'

const coaches = [
  {
    image: coach1,
    name: 'Coach Ahmed Kamal',
    specialty: '💪 Strength & Powerlifting',
    bio: '10+ years of professional coaching. National powerlifting champion and certified strength coach.',
    stats: [{ label: 'Years', value: '10+' }, { label: 'Clients', value: '500+' }, { label: 'Rating', value: '4.9' }],
    featured: false,
  },
  {
    image: coach2,
    name: 'Coach Sara Mahmoud',
    specialty: '🏃 Cardio & Transformation',
    bio: 'Expert in body transformation and female fitness. International certified nutrition coach with a passion for empowerment.',
    stats: [{ label: 'Years', value: '8+' }, { label: 'Clients', value: '800+' }, { label: 'Rating', value: '5.0' }],
    featured: true,
  },
  {
    image: coach3,
    name: 'Coach Omar Fawzy',
    specialty: '🥊 Functional & HIIT',
    bio: 'Functional training specialist and HIIT expert. Former national team athlete turned elite coach.',
    stats: [{ label: 'Years', value: '7+' }, { label: 'Clients', value: '400+' }, { label: 'Rating', value: '4.8' }],
    featured: false,
  },
]

export default function Coaches() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="coaches" ref={ref} className="py-32 bg-[#0e0e0e] relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#cc0000]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16"
        >
          <span className="inline-block bg-[#cc0000]/15 border border-[#cc0000]/30 text-[#cc0000] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[2px] uppercase mb-5">
            Our Team
          </span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
            Best Seller <span className="text-[#cc0000]">Coaches</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Train with the best. Our certified coaches are dedicated to your transformation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-3 ${
                coach.featured
                  ? 'border-[#cc0000] shadow-[0_0_40px_rgba(204,0,0,0.2)]'
                  : 'border-white/8 hover:border-[#cc0000]/40 hover:shadow-[0_0_30px_rgba(204,0,0,0.12)]'
              } bg-[#1a1a1a]`}
            >
              {coach.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#cc0000] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  <Star size={12} fill="white" /> Top Coach
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with social icons */}
                <div className="absolute inset-0 bg-[#cc0000]/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400 backdrop-blur-sm">
                  <motion.a
                    href="#"
                    aria-label="Instagram"
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                  >
                    <IconInstagram size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    aria-label="WhatsApp"
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                  >
                    <MessageCircle size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-[#cc0000] text-xs font-semibold tracking-wider uppercase mb-2">{coach.specialty}</p>
                <h3 className="font-display text-xl tracking-wide mb-2">{coach.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{coach.bio}</p>

                {/* Stats */}
                <div className="flex border-t border-white/8 pt-4">
                  {coach.stats.map(({ label, value }, si) => (
                    <div key={label} className={`flex-1 text-center ${si < coach.stats.length - 1 ? 'border-r border-white/8' : ''}`}>
                      <p className="font-bold text-[#cc0000] text-base">{value}{label === 'Rating' ? '⭐' : ''}</p>
                      <p className="text-white/40 text-xs mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
