# Artifacts & Chat Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an `/artifacts` route with a card that opens an AI chat embed at `/artifacts/chat`, wired to a streaming n8n agent.

**Architecture:** Install `react-router-dom`, wrap the app in `BrowserRouter`, restructure `App.jsx` as a router, extract home page content to `src/pages/Home.jsx`, and add two new page components. Nav gets a route-aware "Artifacts" link alongside the existing hash links.

**Tech Stack:** React 18, Vite, Tailwind CSS, framer-motion, react-router-dom v6

## Global Constraints

- All working directory commands run from `kashavpiya.github.io/`
- Follow existing Tailwind class patterns (`max-w-5xl mx-auto px-8`, green-600 accent, gray-900 text)
- Use framer-motion variants from `src/lib/motion.js` — do not define new variants inline
- No new dependencies beyond `react-router-dom`
- n8n chat URL: `https://n8n.piyakashav.xyz/webhook/03cd5250-354b-4d09-99c0-bfccafdb7932/chat`

---

### Task 1: Install react-router-dom and configure BrowserRouter

**Files:**
- Modify: `package.json` (via npm install)
- Modify: `src/main.jsx`

**Interfaces:**
- Produces: `BrowserRouter` wrapping the entire app — all subsequent tasks depend on this

- [ ] **Step 1: Install the package**

```bash
cd kashavpiya.github.io
npm install react-router-dom
```

Expected: package added to `dependencies` in `package.json`, no errors.

- [ ] **Step 2: Wrap the app in BrowserRouter**

Replace the entire contents of `src/main.jsx` with:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

- [ ] **Step 3: Verify dev server starts without errors**

```bash
npm run dev
```

Expected: server starts at `http://localhost:5173`, home page renders normally, no console errors.

- [ ] **Step 4: Commit**

```bash
git add src/main.jsx package.json package-lock.json
git commit -m "feat: install react-router-dom and wrap app in BrowserRouter"
```

---

### Task 2: Extract home content to src/pages/Home.jsx and set up routes in App.jsx

**Files:**
- Create: `src/pages/Home.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `BrowserRouter` from Task 1
- Produces: `<Routes>` with `/`, `/artifacts`, `/artifacts/chat` paths — Tasks 3–5 rely on `/artifacts` and `/artifacts/chat` being registered

- [ ] **Step 1: Create src/pages/Home.jsx**

```bash
mkdir -p src/pages
```

Create the file `src/pages/Home.jsx` with:

```jsx
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Research from '../components/Research.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

const Divider = () => (
  <div className="max-w-5xl mx-auto px-8">
    <div className="h-px bg-gray-100" />
  </div>
)

export default function Home() {
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

- [ ] **Step 2: Replace App.jsx with the router**

Replace the entire contents of `src/App.jsx` with:

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Artifacts from './pages/Artifacts.jsx'
import Chat from './pages/Chat.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artifacts" element={<Artifacts />} />
      <Route path="/artifacts/chat" element={<Chat />} />
    </Routes>
  )
}
```

Note: `Artifacts` and `Chat` don't exist yet — the dev server will error until Tasks 4 and 5 create them. Create stub files now so the router can import them.

Create `src/pages/Artifacts.jsx` with:

```jsx
export default function Artifacts() {
  return <div>Artifacts</div>
}
```

Create `src/pages/Chat.jsx` with:

```jsx
export default function Chat() {
  return <div>Chat</div>
}
```

- [ ] **Step 3: Verify home page still works**

Open `http://localhost:5173` — full portfolio should render identically to before. Navigate to `http://localhost:5173/artifacts` — should show "Artifacts" text. No console errors.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx src/pages/Home.jsx src/pages/Artifacts.jsx src/pages/Chat.jsx
git commit -m "feat: extract Home page and set up react-router routes"
```

---

### Task 3: Update Nav to add Artifacts link with route-aware active state

**Files:**
- Modify: `src/components/Nav.jsx`

**Interfaces:**
- Consumes: `useLocation`, `Link` from `react-router-dom` (available after Task 1)
- Produces: Nav with "Artifacts" link — Artifacts and Chat pages (Tasks 4–5) render this Nav

- [ ] **Step 1: Replace Nav.jsx**

Replace the entire contents of `src/components/Nav.jsx` with:

```jsx
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const hashLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const sectionEls = useRef([])
  const rafId = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) return
    sectionEls.current = hashLinks.map(l => document.querySelector(l.href))

    const onScroll = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
        const current = sectionEls.current.findLast(
          el => el && el.getBoundingClientRect().top <= 120
        )
        setActive(current ? '#' + current.id : '')
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [isHome])

  // Non-home pages always show nav background (no hero underneath)
  const showBg = !isHome || scrolled
  const isArtifactsActive = location.pathname.startsWith('/artifacts')

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showBg ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
        <a href="/" className="font-extrabold text-lg tracking-tight text-gray-900 hover:text-green-600 transition-colors">
          KP
        </a>
        <div className="flex gap-8">
          {hashLinks.map(({ label, href }) => (
            <a
              key={href}
              href={isHome ? href : `/${href}`}
              className={`text-sm font-medium tracking-wide transition-colors ${
                active === href
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {label}
            </a>
          ))}
          <Link
            to="/artifacts"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isArtifactsActive
                ? 'text-green-600'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Artifacts
          </Link>
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Verify Nav behaviour**

- On `http://localhost:5173`: scroll-based highlighting still works for all sections. "Artifacts" is gray.
- On `http://localhost:5173/artifacts`: Nav has white background immediately (no transparent phase). "Artifacts" is green. Hash links point to `/#about` etc.
- Click "KP" logo from `/artifacts` → navigates to `/`.

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.jsx
git commit -m "feat: add Artifacts nav link with route-aware active state"
```

---

### Task 4: Create Artifacts page

**Files:**
- Modify: `src/pages/Artifacts.jsx` (replace stub)

**Interfaces:**
- Consumes: `Nav`, `Footer` components; `fadeUp`, `stagger`, `cardItem`, `underlineDraw` from `src/lib/motion.js`; `Link` from `react-router-dom`
- Produces: `/artifacts` route renders a card that links to `/artifacts/chat`

- [ ] **Step 1: Replace Artifacts.jsx stub with full implementation**

Replace the entire contents of `src/pages/Artifacts.jsx` with:

```jsx
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { fadeUp, stagger, cardItem, underlineDraw } from '../lib/motion.js'

export default function Artifacts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <section ref={ref} className="max-w-5xl mx-auto px-8 py-28 pt-40">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">
            Artifacts
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-3">
            Interactive tools
          </motion.h2>
          <motion.div variants={underlineDraw} style={{ originX: 0 }} className="h-0.5 w-16 bg-green-600 mb-4" />
          <motion.p variants={fadeUp} className="text-gray-500 text-base mb-14 max-w-lg">
            AI-powered experiences built on top of my professional background.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Thumbnail */}
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 text-5xl">
                💬
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-bold text-base text-gray-900 mb-2">Ask me anything</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Powered by an AI agent trained on my professional background.
                </p>
                <Link
                  to="/artifacts/chat"
                  className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
                >
                  Open Chat →
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 2: Verify Artifacts page**

Open `http://localhost:5173/artifacts`:
- Nav shows with white background, "Artifacts" link is green.
- Section animates in: green "ARTIFACTS" label, bold heading, green underline, subtext, card with 💬 thumbnail.
- Card matches Projects card style (same border, rounded-xl, hover shadow + lift).
- "Open Chat →" button navigates to `/artifacts/chat` (stub page).

- [ ] **Step 3: Commit**

```bash
git add src/pages/Artifacts.jsx
git commit -m "feat: add Artifacts page with Ask me anything card"
```

---

### Task 5: Create Chat page

**Files:**
- Modify: `src/pages/Chat.jsx` (replace stub)

**Interfaces:**
- Consumes: `Link` from `react-router-dom`
- Produces: `/artifacts/chat` renders full-viewport iframe with n8n chat

- [ ] **Step 1: Replace Chat.jsx stub with full implementation**

Replace the entire contents of `src/pages/Chat.jsx` with:

```jsx
import { Link } from 'react-router-dom'

export default function Chat() {
  return (
    <div className="font-sans text-gray-900 bg-white h-screen flex flex-col">
      {/* Top bar */}
      <div className="h-16 flex-shrink-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm flex items-center px-8">
        <Link
          to="/artifacts"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Back
        </Link>
        <span className="mx-4 text-gray-200">|</span>
        <span className="text-sm font-semibold text-gray-900">Ask me anything</span>
      </div>

      {/* n8n chat embed */}
      <iframe
        src="https://n8n.piyakashav.xyz/webhook/03cd5250-354b-4d09-99c0-bfccafdb7932/chat"
        title="AI Chat — Ask me anything about Kashav's professional background"
        className="flex-1 w-full border-none"
        allow="microphone"
      />
    </div>
  )
}
```

- [ ] **Step 2: Verify Chat page**

Open `http://localhost:5173/artifacts/chat`:
- Top bar shows "← Back" on the left and "Ask me anything" title.
- Clicking "← Back" navigates to `/artifacts`.
- iframe fills the remaining viewport height with no scrollbar gap.
- n8n chat loads inside the iframe and streaming responses work.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Chat.jsx
git commit -m "feat: add Chat page with n8n iframe embed"
```

---

### Task 6: GitHub Pages SPA routing fix

**Files:**
- Create: `public/404.html`
- Modify: `index.html`

**Interfaces:**
- Produces: Direct URL loads and browser refreshes on `/artifacts` and `/artifacts/chat` work on the live GitHub Pages site

- [ ] **Step 1: Create public/404.html**

Create the file `public/404.html` with:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Kashav Piya</title>
    <script>
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1).join('/') + '/?/' +
        l.pathname.slice(1).split('/').join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

This script converts `/artifacts/chat` → `/?/artifacts/chat` so GitHub Pages serves `index.html` instead of 404ing.

- [ ] **Step 2: Add companion redirect script to index.html**

In `index.html`, add the following script block **inside `<head>`, before the closing `</head>` tag**:

```html
    <!-- GitHub Pages SPA redirect: restores path encoded by 404.html -->
    <script>
      (function(l) {
        if (l.search[1] === '/') {
          var decoded = l.search.slice(1).split('&').map(function(s) {
            return s.replace(/~and~/g, '&');
          });
          window.history.replaceState(
            null, null,
            l.pathname.slice(0, -1) + decoded[0] +
            (decoded.slice(1).join('&') ? '?' + decoded.slice(1).join('&') : '') +
            l.hash
          );
        }
      }(window.location));
    </script>
```

This runs before React boots and converts `/?/artifacts/chat` back to `/artifacts/chat` in the browser history, so react-router sees the correct path.

- [ ] **Step 3: Verify build includes 404.html**

```bash
npm run build
ls dist/404.html
```

Expected: `dist/404.html` exists.

- [ ] **Step 4: Commit**

```bash
git add public/404.html index.html
git commit -m "feat: add GitHub Pages SPA routing fix for /artifacts routes"
```

---

### Task 7: Deploy and verify live site

**Files:** No code changes — deploy and test.

- [ ] **Step 1: Deploy to GitHub Pages**

```bash
npm run deploy
```

Expected: builds to `dist/`, pushes to `gh-pages` branch, no errors. Wait ~60 seconds for GitHub Pages to update.

- [ ] **Step 2: Verify on live site (piyakashav.xyz)**

- `https://piyakashav.xyz` → home page loads, scroll nav works, "Artifacts" link visible.
- `https://piyakashav.xyz/artifacts` → Artifacts page loads with card.
- Click "Open Chat →" → `/artifacts/chat` loads, iframe shows n8n chat.
- Refresh browser on `/artifacts/chat` → page loads correctly (not 404).
- Direct URL `https://piyakashav.xyz/artifacts` in a new tab → loads correctly.
- Click "← Back" from chat → returns to `/artifacts`.
- Click "KP" logo from `/artifacts` → returns to `/`.
