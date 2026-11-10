import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Send } from 'lucide-react'
import { IconFacebook, IconInstagram, IconYouTube } from './SocialIcons'

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '+20 100 123 4567', href: 'tel:+201001234567' },
  { icon: Mail, label: 'Email', value: 'info@timegym.com', href: 'mailto:info@timegym.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+20 100 123 4567', href: 'https://wa.me/201001234567' },
  { icon: MapPin, label: 'Main Branch', value: '5 Makram Ebeid St, Nasr City, Cairo', href: null },
]

const socials = [
  { icon: IconFacebook, label: 'Facebook', href: '#' },
  { icon: IconInstagram, label: 'Instagram', href: '#' },
  { icon: IconYouTube, label: 'YouTube', href: '#' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.firstName || !form.email) return
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const inputClass = "w-full bg-[#0e0e0e] border border-white/10 focus:border-[#cc0000] focus:ring-2 focus:ring-[#cc0000]/20 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-all duration-300"

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-[#0e0e0e] overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] text-white/[0.018] whitespace-nowrap tracking-widest">TIME GYM</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">

          {/* Left – Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-[#cc0000]/15 border border-[#cc0000]/30 text-[#cc0000] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[2px] uppercase mb-5">
              Contact Us
            </span>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] mb-5 leading-tight">
              Let's Start Your <span className="text-[#cc0000]">Journey</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-10">
              Ready to transform? Reach out and one of our team members will get back to you within 24 hours.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-5 mb-10">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#cc0000]/12 border border-[#cc0000]/25 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#cc0000]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-white text-sm font-medium hover:text-[#cc0000] transition-colors">{value}</a>
                      : <p className="text-white text-sm font-medium">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -4, backgroundColor: '#cc0000', borderColor: '#cc0000' }}
                  className="w-11 h-11 bg-white/5 border border-white/12 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#141414] border border-white/8 rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-display text-2xl tracking-wide mb-8">Send Us a Message</h3>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-semibold">First Name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange}
                    className={inputClass} placeholder="Ahmed" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-semibold">Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange}
                    className={inputClass} placeholder="Mohamed" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  className={inputClass} placeholder="your@email.com" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                  className={inputClass} placeholder="+20 100 000 0000" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold">I'm Interested In</label>
                <select name="interest" value={form.interest} onChange={handleChange}
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  <option value="">Select an option...</option>
                  <option value="membership">Membership Plan</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="group-classes">Group Classes</option>
                  <option value="nutrition">Nutrition Coaching</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  className={`${inputClass} resize-none min-h-[110px]`}
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#cc0000] hover:bg-[#ff1a1a] disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(204,0,0,0.35)]"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    Sending...
                  </span>
                ) : (
                  <><Send size={17} /> Send Message</>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3.5 text-sm"
                >
                  ✅ Message sent! We'll get back to you within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
