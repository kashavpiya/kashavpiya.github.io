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
    <section id="about" ref={ref} className="max-w-5xl mx-auto px-8 py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        {/* Label */}
        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: title + stats */}
          <div>
            <motion.h2 variants={fadeUp} className="text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
              Building the<br />future with AI
            </motion.h2>

            {/* Green underline */}
            <motion.div variants={underlineDraw} className="h-0.5 w-16 bg-green-600 mb-12" />

            <div className="flex gap-16">
              {stats.map(({ num, label }) => (
                <motion.div key={num} variants={fadeUp} className="border-l-2 border-green-600 pl-5">
                  <div className="text-4xl font-extrabold tracking-[-0.03em] text-gray-900">{num}</div>
                  <div className="text-sm text-gray-500 mt-1 whitespace-pre-line leading-snug">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <motion.div variants={fadeUp} className="text-gray-500 text-base leading-relaxed space-y-4 pt-2">
            <p>
              I'm an AI Associate at Walker Advertising, where I integrate AI and automation into
              day-to-day workflows using tools like n8n, Claude, and Supabase.
            </p>
            <p>
              I've published research as first author in both IEEE and arXiv, and I build practical
              AI systems — RAG pipelines, intelligent agents, and workflow automations that actually ship.
            </p>
            <p>
              I care about the intersection of research and real-world application: turning
              cutting-edge ideas into tools people use every day.
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
