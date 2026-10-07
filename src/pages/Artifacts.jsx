import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { fadeUp, stagger, cardItem, underlineDraw } from '../lib/motion.js'

const HOW_IT_WORKS = [
  {
    label: 'What is n8n?',
    body: 'n8n is an open-source workflow automation platform — a self-hostable alternative to Zapier. It lets you connect services and build logic visually using nodes, each representing a trigger or an action.',
  },
  {
    label: 'The workflow',
    body: 'Four nodes wired together: a Chat Trigger that exposes a public webhook and streams responses in real time → an AI Agent node (LangChain-powered) that processes each message → Claude Haiku 4.5 as the language model → a Simple Memory buffer that keeps the last few exchanges so the agent has conversation context.',
  },
  {
    label: 'What went into it',
    body: "A detailed system prompt covering my full professional background, career narrative, skills, projects, and publications. Hard behavioral guardrails lock the agent to career-related questions only — general knowledge, coding help, and off-topic requests get a polite decline. Streaming is enabled on both the trigger and the agent so responses appear word-by-word.",
  },
  {
    label: 'How it\'s embedded',
    body: "The chat page sends a POST request to the n8n webhook with the user's message and a session ID. n8n streams back newline-delimited JSON — each line is a text chunk. The React frontend reads the stream and appends each chunk to the message as it arrives, giving the real-time typing effect.",
  },
]

const TLDR_SECTIONS = [
  {
    label: 'What it covers',
    body: 'A case study on Flock Safety — the largest automated license plate recognition (ALPR) provider in the U.S. — as a real-world application of deep learning. The paper explains how convolutional neural networks power the system, then examines what has actually happened since its nationwide rollout.',
  },
  {
    label: 'The three ethical failures',
    body: 'Local camera data used for federal immigration enforcement without city knowledge or consent. At least 21 documented cases of officers using the system to stalk romantic partners. Oversight so weak that most abuses only surfaced because victims went looking themselves — not because anyone was watching.',
  },
  {
    label: 'The pushback',
    body: 'Over 50 municipalities have cancelled or rejected Flock contracts. Lawsuits are working through state and federal courts. Some residents have resorted to physically destroying cameras — and in an irony the paper notes, Flock\'s own network has been used to identify the people doing it.',
  },
  {
    label: 'The conclusion',
    body: 'The core deep learning model does its job well. The failures here are failures of governance, not of the underlying AI. Any powerful system — license plate readers or large language models — requires accountability designed in from the start, not bolted on after the damage is done.',
  },
]


export default function Artifacts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [showModal, setShowModal] = useState(false)
  const [showTldr, setShowTldr] = useState(false)

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <section ref={ref} className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-28 pt-32 sm:pt-40">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
            Artifacts
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
            Things I've built &amp; written
          </motion.h2>
          <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-4" />
          <motion.p variants={fadeUp} className="text-gray-500 text-base mb-14 max-w-lg">
            AI-powered experiences and written work built on top of my professional background.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

            {/* Artifact 1 — Ask me anything */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                💬
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Artifact 1</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-green-700">Interactive</span>
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">Ask me anything</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Powered by an AI agent trained on my professional background.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to="/artifacts/chat"
                    className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
                  >
                    Open Chat →
                  </Link>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-xs font-medium text-gray-400 hover:text-green-600 transition-colors"
                  >
                    Curious how it works?
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Artifact 2 — Flock Safety Case Study */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                📷
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Artifact 2</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700">Research</span>
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">Deep Learning &amp; Surveillance Ethics</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  A case study on Flock Safety's AI-powered license plate recognition network — the tech, the misuse, and the backlash.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to="/artifacts/flock-safety"
                    className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
                  >
                    Read Report →
                  </Link>
                  <button
                    onClick={() => setShowTldr(true)}
                    className="text-xs font-medium text-gray-400 hover:text-green-600 transition-colors"
                  >
                    TLDR?
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Artifact 3 — Explaining Neural Networks, Simply */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                🧠
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Artifact 3</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700">Writing</span>
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">Explaining Neural Networks, Simply</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  A plain-language breakdown of how neural networks learn — written for someone who's never touched ML.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to="/artifacts/neural-networks"
                    className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Artifact 5 — Byte-Sized AI Newsletter */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                📰
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Artifact 5</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700">Writing</span>
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">Byte-Sized AI Newsletter</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Issue 6 — how AI is reshaping legal tech, marketing, and healthcare right now, with real companies and real numbers.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to="/artifacts/byte-sized-newsletter"
                    className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Artifact 6 — kas-4b */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                🤖
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Artifact 6</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-green-700">Model</span>
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">kas-4b — Decision Index Submission</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  A fine-tuned 4B language model that ranks #1 on CRUXEval+ and #2 on Habermas Machine+ out of 112 global entries on the Decision Index 0.3 benchmark.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to="/artifacts/kas-4b"
                    className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
                  >
                    View Results →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Artifact 4 — AI Bias in Legal Services */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                ⚖️
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Artifact 4</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700">Discussion</span>
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">AI Bias in Legal Services</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  What responsible AI looks like in legal marketing when you're the only one checking — and the peer conversation it sparked.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to="/artifacts/discussion-post"
                    className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Modal — How it works (Artifact 1) */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
                onClick={() => setShowModal(false)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-600 mb-1">Behind the scenes</p>
                      <h3 className="text-xl font-extrabold tracking-tight text-gray-900">How it works</h3>
                    </div>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-900 transition-colors text-lg leading-none mt-1"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {HOW_IT_WORKS.map(({ label, body }) => (
                      <div key={label}>
                        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">{label}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                      </div>
                    ))}
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-3">Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {['n8n', 'Claude Haiku 4.5', 'LangChain Agent', 'Window Memory', 'Streaming Webhook', 'React'].map(tag => (
                          <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TLDR Modal (Artifact 2) */}
          <AnimatePresence>
            {showTldr && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
                onClick={() => setShowTldr(false)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-600 mb-1">Case Study</p>
                      <h3 className="text-xl font-extrabold tracking-tight text-gray-900">TLDR</h3>
                    </div>
                    <button
                      onClick={() => setShowTldr(false)}
                      className="text-gray-400 hover:text-gray-900 transition-colors text-lg leading-none mt-1"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {TLDR_SECTIONS.map(({ label, body }) => (
                      <div key={label}>
                        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">{label}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                      </div>
                    ))}
                    <p className="text-[11px] text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
                      Summary generated by AI.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>


        </motion.div>
      </section>
      <Footer />
    </div>
  )
}
