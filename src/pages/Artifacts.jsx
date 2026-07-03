import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { fadeUp, stagger, cardItem, underlineDraw } from '../lib/motion.js'

export default function Artifacts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <section ref={ref} className="max-w-5xl mx-auto px-8 py-28 pt-40">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
            Artifacts
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
            Interactive tools
          </motion.h2>
          <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-4" />
          <motion.p variants={fadeUp} className="text-gray-500 text-base mb-14 max-w-lg">
            AI-powered experiences built on top of my professional background.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Thumbnail */}
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                💬
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-bold text-base text-gray-900 mb-2">Ask me anything</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Powered by an AI agent trained on my professional background.
                </p>
                <Link
                  to="/artifacts/chat"
                  className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
                >
                  Open Chat →
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>
      <Footer />
    </div>
  )
}
