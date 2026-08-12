import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, cardItem, underlineDraw } from '../lib/motion.js'

const papers = [
  {
    venue: 'SSRN · 2026',
    title: "From Deep Learning to Real-World Surveillance: A Case Study of Flock Safety's Automated License Plate Recognition Network",
    abstract:
      "Examines how CNNs power Flock Safety's nationwide ALPR network, then documents three governance failures — unauthorized federal immigration use, officer stalking, and weak transparency — and the wave of contract cancellations that followed.",
    authors: 'Kashav Piya',
    href: 'https://dx.doi.org/10.2139/ssrn.7240498',
    peerReviewed: false,
  },
  {
    venue: 'arXiv · 2023',
    title: 'Addressing the Selection Bias in Voice Assistance: Training Voice Assistance Model in Python with Equal Data Selection',
    abstract:
      'Training voice AI on balanced, diverse data to eliminate gender and racial bias — so the technology works equally well for everyone.',
    authors: 'Kashav Piya, Srijal Shrestha, Cameran Frank, Estephanos Jebessa, Tauheed Khan Mohd',
    href: 'https://arxiv.org/abs/2301.00646',
    peerReviewed: false,
  },
  {
    venue: 'ICDSST · 2023',
    title: 'Are the Internet Connections at Augustana College Good Enough for Student Productivity?',
    abstract:
      'Evaluating campus internet infrastructure quality and its impact on student productivity, presented at the 9th International Conference on Decision Support System Technology.',
    authors: 'Kashav Piya',
    href: 'https://icdsst2023.wordpress.com/wp-content/uploads/2023/05/actes_imt_icdsst2023_v3.pdf',
    peerReviewed: true,
  },
  {
    venue: 'ARSSS Conference · 2022',
    title: 'Virtual Reality: The Answer to the Future of Gaming',
    abstract:
      'Explores the trajectory of virtual reality as a transformative force in gaming — examining current capabilities, immersive experience design, and VR\'s potential to redefine how players interact with digital worlds.',
    authors: 'Tauheed Khan Mohd, Kashav Piya, Noah Rettig',
    href: 'https://www.worldresearchlibrary.org/up_proc/pdf/4687-164758589014-18.pdf',
    peerReviewed: true,
  },
  {
    venue: 'IEEE · 2021',
    title: 'IoT in Health Care Industry: A Promising Prospect',
    abstract:
      'Examines IoT integration in healthcare with a focus on patient safety and data trust — recommending Zero-trust architecture to protect sensitive health data.',
    authors: 'Kashav Piya, Quynh Anh Au, Srijal Shrestha, Apoorva Singh, Tauheed Khan Mohd',
    href: 'https://ieeexplore.ieee.org/abstract/document/9666731/',
    peerReviewed: true,
  },
]

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="research" ref={ref} className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          Research
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
          Published work
        </motion.h2>
        <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-4" />
        <motion.p variants={fadeUp} className="text-gray-500 text-base mb-14 max-w-lg">
          Peer-reviewed publications spanning AI equity, IoT, VR, and network infrastructure.
        </motion.p>

        <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {papers.map(({ venue, title, abstract, authors, href, peerReviewed }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardItem}
              initial={{ borderColor: '#e5e7eb' }}
              whileHover={{ y: -4, borderColor: '#16a34a' }}
              className="group relative block border border-gray-200 rounded-xl p-6 sm:p-8 transition-shadow hover:shadow-[0_12px_40px_rgba(22,163,74,0.1)] no-underline"
            >
              {/* Arrow */}
              <span className="absolute top-8 right-8 text-gray-300 text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green-600">
                ↗
              </span>

              {/* Venue tag + peer-reviewed badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-green-600 bg-green-50 px-2.5 py-1 rounded">
                  {venue}
                </span>
                {peerReviewed && (
                  <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    Peer-Reviewed
                  </span>
                )}
              </div>

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
