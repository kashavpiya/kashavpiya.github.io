# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild kashavpiya.github.io from CRA into a minimal editorial portfolio (white + forest green) with Framer Motion animations, showcasing Kashav's AI Associate role, published research, and modern AI/automation stack.

**Architecture:** Single-page React app built with Vite, styled with Tailwind CSS, animated with Framer Motion. Eight self-contained components assembled in App.jsx. EmailJS handles the contact form. Deployed to GitHub Pages via `gh-pages`.

**Tech Stack:** Vite 5, React 18, Tailwind CSS 3, Framer Motion 11, EmailJS, gh-pages

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Vite entry HTML, Inter font import |
| `vite.config.js` | Vite config with base path for GitHub Pages |
| `tailwind.config.js` | Design tokens: green accent, Inter font |
| `postcss.config.js` | Tailwind + autoprefixer |
| `src/main.jsx` | React root mount |
| `src/App.jsx` | Assembles all sections in order |
| `src/index.css` | Tailwind directives only |
| `src/hooks/useTypewriter.js` | Typewriter animation hook |
| `src/components/Nav.jsx` | Fixed nav with scroll-aware active link |
| `src/components/Hero.jsx` | Full-viewport hero with typewriter headline |
| `src/components/About.jsx` | Two-col: stats left, bio right |
| `src/components/Skills.jsx` | 3×2 grid of AI stack cards |
| `src/components/Research.jsx` | Two paper cards linking to arXiv + IEEE |
| `src/components/Projects.jsx` | Two project cards |
| `src/components/Contact.jsx` | Two-col: info left, EmailJS form right |
| `src/components/Footer.jsx` | Copyright + social links |

---

## Task 1: Scaffold Vite + React + Tailwind + Framer Motion

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/index.css`

- [ ] **Step 1: Remove old CRA files**

```bash
cd /Users/kashavpiya/Portfolio/kashavpiya.github.io
rm -rf node_modules src public
```

- [ ] **Step 2: Write package.json**

```json
{
  "name": "kashavpiya-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.0.0",
    "@emailjs/browser": "^4.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "gh-pages": "^6.1.0"
  }
}
```

- [ ] **Step 3: Write vite.config.js**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

- [ ] **Step 4: Write tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          600: '#16a34a',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 5: Write postcss.config.js**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 6: Write index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Kashav Piya — AI Associate at Walker Advertising. Published researcher in IEEE and arXiv. Building with n8n, RAG, and AI agents." />
    <title>Kashav Piya</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Write src/main.jsx**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

- [ ] **Step 8: Write src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f9fafb;
  }
  ::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
  }
}
```

- [ ] **Step 9: Write a stub App.jsx**

```jsx
export default function App() {
  return <div className="font-sans text-gray-900 bg-white">Hello</div>
}
```

- [ ] **Step 10: Copy favicon from old build**

```bash
mkdir -p /Users/kashavpiya/Portfolio/kashavpiya.github.io/public
cp /Users/kashavpiya/Portfolio/favicon.ico /Users/kashavpiya/Portfolio/kashavpiya.github.io/public/
cp /Users/kashavpiya/Portfolio/kashavpiya.github.io/src/assets/profile.jpg /Users/kashavpiya/Portfolio/kashavpiya.github.io/public/ 2>/dev/null || true
```

- [ ] **Step 11: Install dependencies**

```bash
cd /Users/kashavpiya/Portfolio/kashavpiya.github.io
npm install
```

- [ ] **Step 12: Start dev server and verify**

```bash
npm run dev
```

Open http://localhost:5173 — expect to see "Hello" in Inter font with no errors in console.

- [ ] **Step 13: Commit**

```bash
git add -A
git commit -m "feat: scaffold Vite + React + Tailwind + Framer Motion"
```

---

## Task 2: Typewriter Hook + Shared Animation Variants

**Files:**
- Create: `src/hooks/useTypewriter.js`
- Create: `src/lib/motion.js`

- [ ] **Step 1: Write src/hooks/useTypewriter.js**

```js
import { useState, useEffect } from 'react'

/**
 * Types out `text` one character at a time.
 * Returns { displayed, done }.
 * delay: ms between characters (default 45)
 * startDelay: ms before typing begins (default 600)
 */
export function useTypewriter(text, { delay = 45, startDelay = 600 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    let timeout

    const start = setTimeout(() => {
      const tick = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
          timeout = setTimeout(tick, delay)
        } else {
          setDone(true)
        }
      }
      tick()
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearTimeout(timeout)
    }
  }, [text, delay, startDelay])

  return { displayed, done }
}
```

- [ ] **Step 2: Write src/lib/motion.js**

Shared Framer Motion variants reused across all scroll-reveal components.

```js
/** Fade up on scroll entry */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Container that staggers children */
export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

/** Single card item used inside stagger container */
export const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Green underline draw (scaleX 0→1) */
export const underlineDraw = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
}
```

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useTypewriter.js src/lib/motion.js
git commit -m "feat: add typewriter hook and shared motion variants"
```

---

## Task 3: Nav Component

**Files:**
- Create: `src/components/Nav.jsx`

- [ ] **Step 1: Write src/components/Nav.jsx**

```jsx
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = links.map(l => document.querySelector(l.href))
      const current = sections.findLast(el => el && el.getBoundingClientRect().top <= 120)
      setActive(current ? '#' + current.id : '')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
        <a href="#" className="font-extrabold text-lg tracking-tight text-gray-900 hover:text-green-600 transition-colors">
          KP
        </a>
        <div className="flex gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                active === href
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Mount Nav in App.jsx**

```jsx
import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <div style={{ height: '200vh' }} />
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Open http://localhost:5173 — expect:
- "KP" monogram top-left
- 5 nav links top-right in gray
- Nav background appears (white, blurred) after scrolling 20px

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.jsx src/App.jsx
git commit -m "feat: add fixed nav with scroll-aware active state"
```

---

## Task 4: Hero Component

**Files:**
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Write src/components/Hero.jsx**

```jsx
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
```

- [ ] **Step 2: Add `blink` keyframe to index.css**

```css
@layer utilities {
  @keyframes blink {
    50% { opacity: 0; }
  }
}
```

- [ ] **Step 3: Update App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
    </div>
  )
}
```

- [ ] **Step 4: Verify in browser**

Open http://localhost:5173 — expect:
- Green pulsing dot + "AVAILABLE FOR OPPORTUNITIES" text
- "Kashav / Piya" in large bold text, animates in
- Subtitle types character by character, blinking cursor at end
- Two buttons below, "View Research →" dark → green on hover
- Scroll indicator bottom-left

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.jsx src/index.css src/App.jsx
git commit -m "feat: add hero section with typewriter animation"
```

---

## Task 5: About Component

**Files:**
- Create: `src/components/About.jsx`

- [ ] **Step 1: Write src/components/About.jsx**

```jsx
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
```

- [ ] **Step 2: Add divider + About to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

const Divider = () => <div className="max-w-5xl mx-auto px-8"><div className="h-px bg-gray-100" /></div>

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Divider />
      <About />
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll down past hero — expect:
- "ABOUT" label in green
- "Building the future with AI" heading fades up, green underline draws across
- Two stats with green left borders animate in
- Bio text on the right fades in

- [ ] **Step 4: Commit**

```bash
git add src/components/About.jsx src/App.jsx
git commit -m "feat: add about section with scroll-reveal animations"
```

---

## Task 6: Skills Component

**Files:**
- Create: `src/components/Skills.jsx`

- [ ] **Step 1: Write src/components/Skills.jsx**

```jsx
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
        <motion.div variants={underlineDraw} className="h-0.5 w-16 bg-green-600 mb-4" />
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
```

- [ ] **Step 2: Add Skills to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'

const Divider = () => <div className="max-w-5xl mx-auto px-8"><div className="h-px bg-gray-100" /></div>

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Skills — expect:
- "STACK" label in green
- Heading + underline draw in
- 6 cards stagger in one by one
- Each card lifts and gets green border on hover

- [ ] **Step 4: Commit**

```bash
git add src/components/Skills.jsx src/App.jsx
git commit -m "feat: add skills section with staggered card animations"
```

---

## Task 7: Research Component

**Files:**
- Create: `src/components/Research.jsx`

- [ ] **Step 1: Write src/components/Research.jsx**

```jsx
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
        <motion.div variants={underlineDraw} className="h-0.5 w-16 bg-green-600 mb-4" />
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
              whileHover={{ y: -4, borderColor: '#16a34a' }}
              className="relative block border border-gray-200 rounded-xl p-8 transition-shadow hover:shadow-[0_12px_40px_rgba(22,163,74,0.1)] no-underline"
            >
              {/* Arrow */}
              <motion.span
                whileHover={{ x: 2, y: -2 }}
                className="absolute top-8 right-8 text-gray-300 text-lg"
              >
                ↗
              </motion.span>

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
```

- [ ] **Step 2: Add Research to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Research from './components/Research.jsx'

const Divider = () => <div className="max-w-5xl mx-auto px-8"><div className="h-px bg-gray-100" /></div>

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Research />
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Research — expect:
- "RESEARCH" label, heading, green underline draw
- Two cards stagger in
- Cards lift + green border on hover
- Arrow moves up-right on hover
- Clicking opens arXiv / IEEE in a new tab

- [ ] **Step 4: Commit**

```bash
git add src/components/Research.jsx src/App.jsx
git commit -m "feat: add research section with paper cards"
```

---

## Task 8: Projects Component

**Files:**
- Create: `src/components/Projects.jsx`

- [ ] **Step 1: Write src/components/Projects.jsx**

```jsx
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
        <motion.div variants={underlineDraw} className="h-0.5 w-16 bg-green-600 mb-4" />
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
```

- [ ] **Step 2: Add Projects to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'

const Divider = () => <div className="max-w-5xl mx-auto px-8"><div className="h-px bg-gray-100" /></div>

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Research />
      <Divider />
      <Projects />
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Projects — expect:
- Two cards with emoji thumbnails
- Cards lift on hover with shadow
- Buttons turn green on hover

- [ ] **Step 4: Commit**

```bash
git add src/components/Projects.jsx src/App.jsx
git commit -m "feat: add projects section"
```

---

## Task 9: Contact Component

**Files:**
- Create: `src/components/Contact.jsx`

- [ ] **Step 1: Write src/components/Contact.jsx**

```jsx
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { fadeUp, stagger, underlineDraw } from '../lib/motion.js'

// EmailJS credentials (existing account)
const EMAILJS_SERVICE  = 'service_4vo0w8i'
const EMAILJS_TEMPLATE = 'template_wi872o8'
const EMAILJS_KEY      = 'uoM9ushoeBXEVbAaS'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY)
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="max-w-5xl mx-auto px-8 py-28">
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

        <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
          Contact
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
          Let's talk
        </motion.h2>
        <motion.div variants={underlineDraw} className="h-0.5 w-16 bg-green-600 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Have a project in mind, a research collaboration, or just want to connect? Reach out.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:kashavpiya23@gmail.com"
                  className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
                >
                  kashavpiya23@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Currently</p>
                <p className="text-sm font-semibold text-gray-900">AI Associate · Walker Advertising</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/kashavpiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
                >
                  linkedin.com/in/kashavpiya
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeUp}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-colors font-sans"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-colors font-sans"
            />
            <textarea
              name="msg"
              placeholder="Your message"
              rows={5}
              required
              className="px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-colors resize-none font-sans"
            />
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="self-start px-7 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'idle'    && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent'    && 'Message Sent ✓'}
              {status === 'error'   && 'Try Again'}
            </button>
            {status === 'error' && (
              <p className="text-xs text-red-500">Something went wrong. Email me directly at kashavpiya23@gmail.com</p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Add Contact to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const Divider = () => <div className="max-w-5xl mx-auto px-8"><div className="h-px bg-gray-100" /></div>

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Research />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Contact — expect:
- Two-column layout: info left, form right
- All three fields focus with green border
- Submit button says "Sending..." during submit, "Message Sent ✓" on success

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.jsx src/App.jsx
git commit -m "feat: add contact section with EmailJS form"
```

---

## Task 10: Footer Component

**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Write src/components/Footer.jsx**

```jsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Kashav Piya</p>
        <div className="flex gap-6">
          {[
            { label: 'GitHub',   href: 'https://github.com/kashavpiya' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kashavpiya/' },
            { label: 'arXiv',   href: 'https://arxiv.org/abs/2301.00646' },
            { label: 'IEEE',    href: 'https://ieeexplore.ieee.org/abstract/document/9666731/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-green-600 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Add Footer to App.jsx (final version)**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const Divider = () => (
  <div className="max-w-5xl mx-auto px-8">
    <div className="h-px bg-gray-100" />
  </div>
)

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Research />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </div>
  )
}
```

- [ ] **Step 3: Verify complete page in browser**

Scroll the full page end-to-end:
- All 7 sections render with no console errors
- Each section animates in on scroll
- Nav active link updates as you scroll through sections
- Footer shows year, 4 external links all work

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.jsx src/App.jsx
git commit -m "feat: add footer and complete full-page assembly"
```

---

## Task 11: Production Build + GitHub Pages Deploy

**Files:**
- Modify: `vite.config.js` (verify base path)
- Modify: `package.json` (verify deploy script)

- [ ] **Step 1: Run production build**

```bash
cd /Users/kashavpiya/Portfolio/kashavpiya.github.io
npm run build
```

Expected: `dist/` directory created, no build errors.

- [ ] **Step 2: Preview the production build locally**

```bash
npm run preview
```

Open http://localhost:4173 — verify the full page looks identical to dev, all animations work, no 404s.

- [ ] **Step 3: Add CNAME file to public/**

GitHub Pages needs the custom domain file (if any). The repo had a CNAME — check it:

```bash
cat /Users/kashavpiya/Portfolio/CNAME
```

If it contains a custom domain, copy it:

```bash
cp /Users/kashavpiya/Portfolio/CNAME /Users/kashavpiya/Portfolio/kashavpiya.github.io/public/CNAME
```

If it's empty or just `kashavpiya.github.io`, skip this step.

- [ ] **Step 4: Connect to GitHub remote**

```bash
cd /Users/kashavpiya/Portfolio/kashavpiya.github.io
git remote add origin https://github.com/kashavpiya/kashavpiya.github.io.git
git branch -M main
```

- [ ] **Step 5: Deploy to GitHub Pages**

```bash
npm run deploy
```

Expected output ends with: `Published`

- [ ] **Step 6: Push source to main branch**

```bash
git push -u origin main
```

- [ ] **Step 7: Verify live site**

Open https://kashavpiya.github.io — expect the new portfolio live within 1-2 minutes of deploy.
