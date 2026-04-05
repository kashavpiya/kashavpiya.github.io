import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, cardItem, underlineDraw } from '../lib/motion.js'

const skills = [
  {
    icon: '⚡',
    name: 'n8n',
    desc: 'Workflow automation at scale. Connecting APIs, triggers, and AI models into production pipelines.',
  },
  {
    icon: '🤖',
    name: 'AI Agents',
    desc: 'Designing and deploying autonomous agents with tool use, memory, and multi-step reasoning.',
  },
  {
    icon: '📚',
    name: 'RAG Systems',
    desc: 'Retrieval-Augmented Generation pipelines for grounded, accurate AI responses over private data.',
  },
  {
    icon: '🗄️',
    name: 'Supabase',
    desc: 'Postgres-backed vector stores, auth, and real-time data layers for AI applications.',
  },
  {
    icon: '✦',
    name: 'Claude / Claude Code',
    desc: 'LLM integration, prompt engineering, and AI-assisted development workflows.',
  },
  {
    icon: '🐍',
    name: 'Python',
    desc: 'Backend logic, data pipelines, ML tooling, and scripting across every project.',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="max-w-5xl mx-auto px-8 py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          Stack
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
          What I build with
        </motion.h2>
        <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-4" />
        <motion.p variants={fadeUp} className="text-gray-500 text-base mb-14 max-w-lg">
          Day-to-day tools at the intersection of AI engineering and automation.
        </motion.p>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map(({ icon, name, desc }) => (
            <motion.div
              key={name}
              variants={cardItem}
              initial={{ borderColor: '#e5e7eb' }}
              whileHover={{ y: -4, borderColor: '#16a34a' }}
              className="border border-gray-200 rounded-xl p-6 cursor-default transition-shadow hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)]"
            >
              <div className="text-2xl mb-3">{icon}</div>
              <div className="font-bold text-sm text-gray-900 mb-1">{name}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
