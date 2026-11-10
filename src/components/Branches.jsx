import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react'

const branches = [
  {
    num: '01',
    name: 'Time Gym – Nasr City',
    address: '5 Makram Ebeid St, Nasr City, Cairo',
    hours: 'Daily: 6:00 AM – 12:00 AM',
    phone: '+20 100 123 4567',
    maps: 'https://maps.google.com',
  },
  {
    num: '02',
    name: 'Time Gym – Heliopolis',
    address: '12 Baghdad St, Heliopolis, Cairo',
    hours: 'Daily: 6:00 AM – 12:00 AM',
    phone: '+20 100 234 5678',
    maps: 'https://maps.google.com',
  },
  {
    num: '03',
    name: 'Time Gym – Maadi',
    address: '23 Road 9, Maadi, Cairo',
    hours: 'Daily: 6:00 AM – 12:00 AM',
    phone: '+20 100 345 6789',
    maps: 'https://maps.google.com',
  },
  {
    num: '04',
    name: 'Time Gym – 6th of October',
    address: 'Central District, 6th of October City',
    hours: 'Daily: 6:00 AM – 11:00 PM',
    phone: '+20 100 456 7890',
    maps: 'https://maps.google.com',
  },
  {
    num: '05',
    name: 'Time Gym – New Cairo',
    address: '90th Street, 5th Settlement, New Cairo',
    hours: 'Daily: 6:00 AM – 12:00 AM',
    phone: '+20 100 567 8901',
    maps: 'https://maps.google.com',
  },
]

export default function Branches() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="branches" ref={ref} className="relative py-32 bg-[#141414] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cc0000] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16"
        >
          <span className="inline-block bg-[#cc0000]/15 border border-[#cc0000]/30 text-[#cc0000] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[2px] uppercase mb-5">
            Locations
          </span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
            Our <span className="text-[#cc0000]">Branches</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Find your nearest Time Gym and start your transformation today
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -6, borderColor: 'rgba(204,0,0,0.4)' }}
              className="group bg-[#1a1a1a] border border-white/8 rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(204,0,0,0.12)]"
            >
              {/* Header row */}
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-[#cc0000]/20 group-hover:text-[#cc0000]/40 transition-colors leading-none">
                  {branch.num}
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Open Now
                </span>
              </div>

              <h3 className="font-display text-xl tracking-wide leading-tight">{branch.name}</h3>

              {/* Details */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 text-sm text-white/55">
                  <MapPin size={15} className="text-[#cc0000] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{branch.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/55">
                  <Clock size={15} className="text-[#cc0000] flex-shrink-0" />
                  <span>{branch.hours}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/55">
                  <Phone size={15} className="text-[#cc0000] flex-shrink-0" />
                  <span>{branch.phone}</span>
                </div>
              </div>

              {/* Map button */}
              <a
                href={branch.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 border border-[#cc0000]/30 hover:border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white text-sm font-semibold rounded-full transition-all duration-300 mt-auto"
              >
                <MapPin size={15} />
                Get Directions
                <ExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
