import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { fadeUp, stagger, underlineDraw } from '../lib/motion.js'

const EMAILJS_SERVICE  = 'service_4vo0w8i'
const EMAILJS_TEMPLATE = 'template_wi872o8'
const EMAILJS_KEY      = 'uoM9ushoeBXEVbAaS'

const DISCORD_WEBHOOK  = '

function sendDiscord(name, email, message) {
  return fetch(DISCORD_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      embeds: [{
        title: '📬 New Portfolio Contact',
        color: 0x16a34a,
        fields: [
          { name: 'Name',    value: name,    inline: true },
          { name: 'Email',   value: email,   inline: true },
          { name: 'Message', value: message, inline: false },
        ],
        timestamp: new Date().toISOString(),
      }],
    }),
  }).catch(() => {})
}

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(formRef.current)
    const name    = data.get('name')    ?? ''
    const email   = data.get('email')   ?? ''
    const message = data.get('msg')     ?? ''
    try {
      await Promise.all([
        emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY),
        sendDiscord(name, email, message),
      ])
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="max-w-5xl mx-auto px-8 py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          Contact
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
          Let's talk
        </motion.h2>
        <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Have a project in mind, a research collaboration, or just want to connect? Reach out.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:kashavpiya23@gmail.com"
                  className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
                >
                  kashavpiya23@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Currently</p>
                <p className="text-sm font-semibold text-gray-900">AI Associate · Walker Advertising</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/kashavpiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
                >
                  linkedin.com/in/kashavpiya
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeUp}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              required
              className="px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-colors font-sans"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Your email"
              required
              className="px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-colors font-sans"
            />
            <textarea
              name="msg"
              placeholder="Your message"
              aria-label="Your message"
              rows={5}
              required
              className="px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-colors resize-none font-sans"
            />
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="self-start px-7 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'idle'    && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent'    && 'Message Sent ✓'}
              {status === 'error'   && 'Try Again'}
            </button>
            {status === 'error' && (
              <p className="text-xs text-red-500">Something went wrong. Email me directly at kashavpiya23@gmail.com</p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
