import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, cardItem, underlineDraw } from '../lib/motion.js'

const projects = [
  {
    emoji: '🏙️',
    name: 'City of Goose Lake',
    desc: 'Full municipal website for the City of Goose Lake, Iowa. Live and actively used by the community.',
    links: [{ label: 'Live Site ↗', href: 'https://www.gooselakeiowa.org', primary: true }],
  },
  {
    emoji: '⭐',
    name: 'StarFlower Clinic',
    desc: 'Website for StarFlower Clinic — design, development, and deployment.',
    links: [
      { label: 'Code', href: 'https://github.com/kashavpiya/Star-Flower', primary: false },
      { label: 'Live Site ↗', href: 'https://www.starflowerclinic.com', primary: true },
    ],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="max-w-5xl mx-auto px-8 py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          Projects
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
          Selected work
        </motion.h2>
        <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-4" />
        <motion.p variants={fadeUp} className="text-gray-500 text-base mb-14 max-w-lg">
          Client projects and independent builds.
        </motion.p>

        <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map(({ emoji, name, desc, links }) => (
            <motion.div
              key={name}
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Thumbnail */}
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                {emoji}
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-bold text-base text-gray-900 mb-2">{name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                <div className="flex gap-3">
                  {links.map(({ label, href, primary }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-semibold px-4 py-2 rounded-md border transition-colors ${
                        primary
                          ? 'bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600'
                          : 'text-gray-700 border-gray-200 hover:border-green-600 hover:text-green-600'
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
