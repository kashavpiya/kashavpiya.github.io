import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, underlineDraw } from '../lib/motion.js'

const stats = [
  { num: '2+', label: 'Published papers\nas first author' },
  { num: '3+', label: 'Years of\nexperience' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        {/* Label */}
        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: title + stats */}
          <div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
              AI that serves<br />people first
            </motion.h2>

            {/* Green underline */}
            <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-10 sm:mb-12" />

            <div className="flex gap-10 sm:gap-16">
              {stats.map(({ num, label }) => (
                <motion.div key={num} variants={fadeUp} className="border-l-2 border-green-600 pl-5">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-gray-900">{num}</div>
                  <div className="text-sm text-gray-500 mt-1 whitespace-pre-line leading-snug">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <motion.div variants={fadeUp} className="text-gray-500 text-base leading-relaxed space-y-4 pt-2">
            <p>
              I'm an AI Associate building automation and AI systems that augment how people work —
              not replace them. Tools like n8n, Claude, and Supabase are means to an end: less
              friction, more focus on what humans do best.
            </p>
            <p>
              I've published research as first author in IEEE and arXiv — including work on
              mitigating bias in voice AI and responsible IoT design in healthcare. I bring that
              same grounding to the systems I build: RAG pipelines, intelligent agents, and
              workflow automations that are explainable and purposeful.
            </p>
            <p>
              I believe AI is most valuable when it's built with intention — solving real problems
              transparently, with humans staying in the loop.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-sm font-semibold text-gray-900 border-b border-green-600 hover:text-green-600 transition-colors pb-0.5"
            >
              Let's talk →
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
