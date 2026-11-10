import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, Target } from 'lucide-react'

const plans = [
  {
    icon: '⚡',
    name: 'Starter',
    price: '299',
    desc: 'Perfect for beginners starting their fitness journey',
    features: [
      { text: 'Full Gym Access', included: true },
      { text: '2 Group Classes / Week', included: true },
      { text: 'Locker Room Access', included: true },
      { text: 'Free Fitness Assessment', included: true },
      { text: 'Personal Training Sessions', included: false },
      { text: 'Nutrition Plan', included: false },
    ],
    popular: false,
  },
  {
    icon: '🏆',
    name: 'Champion',
    price: '599',
    desc: 'Our most popular plan for serious fitness enthusiasts',
    features: [
      { text: 'Full Gym Access', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Locker Room + Sauna', included: true },
      { text: 'Free Fitness Assessment', included: true },
      { text: '4 Personal Training Sessions', included: true },
      { text: 'Custom Nutrition Plan', included: true },
    ],
    popular: true,
  },
  {
    icon: '👑',
    name: 'Elite',
    price: '999',
    desc: 'The ultimate package for those who demand the best',
    features: [
      { text: 'All Branches Access', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'VIP Locker + Sauna + Pool', included: true },
      { text: 'Priority Fitness Assessment', included: true },
      { text: 'Unlimited Personal Training', included: true },
      { text: 'Nutrition + Supplement Plan', included: true },
    ],
    popular: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  }),
}

export default function Offers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="offers" ref={ref} className="relative py-32 bg-[#141414] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cc0000] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16"
        >
          <span className="inline-block bg-[#cc0000]/15 border border-[#cc0000]/30 text-[#cc0000] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[2px] uppercase mb-5">
            Membership Plans
          </span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
            Best Seller <span className="text-[#cc0000]">Offers</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Choose the plan that fits your goals. All plans include access to our premium facilities.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative flex flex-col rounded-3xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#cc0000]/15 to-[#1a1a1a] border-[#cc0000] shadow-[0_0_40px_rgba(204,0,0,0.2)] scale-105'
                  : 'bg-[#1a1a1a] border-white/8 hover:border-[#cc0000]/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#cc0000] text-white text-xs font-bold px-6 py-2 rounded-full shadow-lg tracking-wider">
                  🔥 BEST SELLER
                </div>
              )}

              <div className="mb-6">
                <span className="text-4xl mb-3 block">{plan.icon}</span>
                <h3 className="font-display text-2xl tracking-wide mb-2">{plan.name}</h3>
                <p className="text-white/50 text-sm">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-7 pb-7 border-b border-white/10">
                <span className="text-[#cc0000] font-bold text-lg">EGP</span>
                <span className="font-display text-6xl leading-none">{plan.price}</span>
                <span className="text-white/40 text-sm">/month</span>
              </div>

              <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                {plan.features.map(({ text, included }) => (
                  <li key={text} className={`flex items-center gap-3 text-sm ${included ? 'text-white/80' : 'text-white/25'}`}>
                    {included
                      ? <Check size={16} className="text-[#cc0000] flex-shrink-0" />
                      : <X size={16} className="text-white/25 flex-shrink-0" />
                    }
                    {text}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3.5 rounded-full font-semibold text-sm text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#cc0000] hover:bg-[#ff1a1a] text-white shadow-[0_4px_20px_rgba(204,0,0,0.4)] hover:shadow-[0_6px_30px_rgba(255,26,26,0.5)]'
                    : 'bg-transparent border-2 border-white/20 hover:border-[#cc0000]/60 text-white hover:bg-[#cc0000]/10'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Deal Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#cc0000]/15 to-[#cc0000]/5 border border-[#cc0000]/30 rounded-3xl p-8"
        >
          <div className="flex items-center gap-5">
            <Target size={48} className="text-[#cc0000] flex-shrink-0" />
            <div>
              <p className="font-bold text-lg mb-1">LIMITED TIME OFFER</p>
              <p className="text-white/60 text-sm">
                Get your first month <span className="text-[#cc0000] font-bold">50% OFF</span> when you sign up before November 30th!
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-3.5 bg-[#cc0000] hover:bg-[#ff1a1a] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(204,0,0,0.4)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            Claim Offer
          </a>
        </motion.div>
      </div>
    </section>
  )
}
