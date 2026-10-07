import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, underlineDraw } from '../lib/motion.js'

const pieces = [
  {
    tag: 'Explainer',
    title: 'Explaining Neural Networks, Simply',
    desc: 'A plain-language breakdown of how neural networks learn — written for someone who has never touched ML.',
    href: '/artifacts/neural-networks',
  },
  {
    tag: 'Newsletter',
    title: 'Byte-Sized AI — Issue 6',
    desc: 'How AI is reshaping legal tech, marketing, and healthcare right now, with real companies and real numbers.',
    href: '/artifacts/byte-sized-newsletter',
  },
  {
    tag: 'Discussion',
    title: 'AI Bias in Legal Services',
    desc: 'What responsible AI looks like in legal marketing when you\'re the only one checking — and the peer conversation it sparked.',
    href: '/artifacts/discussion-post',
  },
]

export default function Writing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="writing" ref={ref} className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          Writing
        </motion.p>
        <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-14" />

        <motion.div variants={stagger} className="flex flex-col gap-4">
          {pieces.map(({ tag, title, desc, href }) => (
            <motion.div key={href} variants={fadeUp}>
              <Link
                to={href}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 border border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-[0_8px_32px_rgba(22,163,74,0.08)] transition-all no-underline"
              >
                <span className="shrink-0 text-[10px] font-bold tracking-[0.15em] uppercase text-green-600 bg-green-50 px-2.5 py-1 rounded w-fit">
                  {tag}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-base text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
                <span className="shrink-0 text-gray-300 group-hover:text-green-500 transition-colors text-lg hidden sm:block">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
