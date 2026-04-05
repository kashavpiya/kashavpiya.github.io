import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, cardItem, underlineDraw } from '../lib/motion.js'

const papers = [
  {
    venue: 'arXiv · 2023',
    title: 'Addressing the Selection Bias in Voice Assistance: Training Voice Assistance Model in Python with Equal Data Selection',
    abstract:
      'A voice assistant trained on diverse voice data to mitigate gender and racial bias — recognizing voices regardless of gender, race, or accent.',
    authors: 'Kashav Piya, Srijal Shrestha, Cameran Frank, Estephanos Jebessa, Tauheed Khan Mohd',
    href: 'https://arxiv.org/abs/2301.00646',
  },
  {
    venue: 'IEEE · 2021',
    title: 'IoT in Health Care Industry: A Promising Prospect',
    abstract:
      'Examines IoT integration in healthcare — improving patient care quality while addressing data security and cloud integration challenges. Recommends Zero-trust architecture.',
    authors: 'Kashav Piya, Quynh Anh Au, Srijal Shrestha, Apoorva Singh, Tauheed Khan Mohd',
    href: 'https://ieeexplore.ieee.org/abstract/document/9666731/',
  },
]

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="research" ref={ref} className="max-w-5xl mx-auto px-8 py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          Research
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
          Published work
        </motion.h2>
        <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-4" />
        <motion.p variants={fadeUp} className="text-gray-500 text-base mb-14 max-w-lg">
          First-author publications in IEEE and arXiv covering AI bias and IoT systems.
        </motion.p>

        <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {papers.map(({ venue, title, abstract, authors, href }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardItem}
              initial={{ borderColor: '#e5e7eb' }}
              whileHover={{ y: -4, borderColor: '#16a34a' }}
              className="group relative block border border-gray-200 rounded-xl p-8 transition-shadow hover:shadow-[0_12px_40px_rgba(22,163,74,0.1)] no-underline"
            >
              {/* Arrow */}
              <span className="absolute top-8 right-8 text-gray-300 text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green-600">
                ↗
              </span>

              {/* Venue tag */}
              <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-green-600 bg-green-50 px-2.5 py-1 rounded mb-4">
                {venue}
              </span>

              <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 pr-8">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{abstract}</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wide uppercase">
                {authors}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
