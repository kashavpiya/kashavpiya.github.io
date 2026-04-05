import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter.js'

export default function Hero() {
  const { displayed, done } = useTypewriter('AI Associate at Walker Advertising', {
    delay: 45,
    startDelay: 700,
  })

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-8 w-full relative">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(56px,10vw,96px)] font-extrabold leading-none tracking-[-0.04em] text-gray-900 mb-6"
        >
          Kashav<br />Piya
        </motion.h1>

        {/* Typed subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-xl text-gray-500 font-normal mb-10 h-8 flex items-center"
        >
          <span>{displayed}</span>
          <span
            className={`inline-block w-0.5 h-5 bg-green-600 ml-0.5 ${
              done ? 'animate-pulse' : 'animate-[blink_0.8s_step-end_infinite]'
            }`}
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 items-center"
        >
          <a
            href="#research"
            className="px-7 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            View Research →
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-gray-200 text-gray-900 text-sm font-semibold rounded-lg hover:border-green-600 hover:text-green-600 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 flex items-center gap-3 text-gray-400">
          <div className="w-px h-10 bg-gray-200" />
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
