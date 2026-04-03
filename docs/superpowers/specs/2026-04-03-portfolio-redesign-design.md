# Portfolio Redesign — Design Spec

**Date:** 2026-04-03
**Status:** Approved

---

## Overview

Full redesign of kashavpiya.github.io from a dated college-era React portfolio into a professional, production-grade site that reflects Kashav's current identity: AI Associate at Walker Advertising, published first-author researcher, and practitioner of modern AI/automation tooling.

---

## Design Language

| Property | Value |
|---|---|
| Style | Minimal / Editorial |
| Background | White (`#ffffff`) / Near-white (`#fafafa`) |
| Text | Near-black (`#111111`) |
| Accent | Forest Green (`#16a34a`) |
| Muted text | `#555`, `#888`, `#aaa` |
| Border/divider | `#e5e7eb`, `#f0f0f0` |
| Font | Inter (system stack fallback) |
| Border radius | 6–12px on cards |

The accent color is used sparingly: section labels, hover states, underline draws, CTA buttons on hover, and paper tags. Everything else is black and white.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Bundler | Vite | Replaces deprecated CRA; fast HMR |
| Framework | React 18 | Existing familiarity |
| Styling | Tailwind CSS | Utility-first, great for editorial B&W |
| Animations | Framer Motion | Gold standard for scroll + hover animations |
| Email | EmailJS | Already in use, keep existing service |
| Deploy | GitHub Pages | Unchanged (`gh-pages` branch) |

Migration path: delete CRA config, init Vite + React, add Tailwind and Framer Motion, port components one by one.

---

## Animations (Style B — Typed Text + Morphing Lines)

- **Hero headline**: types itself character by character on load with a blinking green cursor
- **Scroll reveals**: every section's content fades in and slides up (`y: 40 → 0, opacity: 0 → 1`) as it enters the viewport, using Framer Motion's `useInView`
- **Staggered cards**: skill cards, paper cards, and project cards animate in sequentially (stagger delay ~0.08s each)
- **Green underline draw**: section headings get an animated green underline that draws left-to-right on scroll entry
- **Hover micro-interactions**: cards lift (`translateY(-4px)`) with a green border tint on hover; buttons smoothly swap to green fill
- No parallax, no 3D — clean and purposeful

---

## Sections (in order)

### 1. Nav
- Fixed, blurred backdrop (`backdrop-filter: blur(10px)`)
- Left: "KP" monogram
- Right: links — About · Skills · Research · Projects · Contact
- Active link highlighted in green on scroll position
- Border-bottom `1px solid #f0f0f0`

### 2. Hero
- Full-viewport height
- Top-left tag: `● Available for opportunities` (green dot, animated pulse)
- `h1`: "Kashav / Piya" — large, 72px+, tight letter spacing, typewriter animation
- Subtitle typed below: "AI Associate at Walker Advertising" (types on load, blinking green cursor)
- Two CTAs: `View Research →` (black filled) · `Get in Touch` (ghost)
- Bottom-left: vertical scroll indicator

### 3. About
- Two-column layout: left = stats + section title, right = bio copy
- Stats (green left border): `2+` published papers · `3+` years experience
- Bio (3 short paragraphs): current role, research background, philosophy on AI + real-world application
- Section label: `ABOUT` in green uppercase tracked text

### 4. Skills / Stack
- Section label: `STACK`
- Title: "What I build with"
- 3×2 grid of skill cards, each with: emoji icon, name, one-sentence description
- Skills: n8n · AI Agents · RAG Systems · Supabase · Claude / Claude Code · Python
- Cards border green on hover with subtle lift

### 5. Research
- Section label: `RESEARCH`
- Title: "Published work"
- Subtitle: first-author publications in IEEE and arXiv
- Two cards side by side, each linking externally:
  - arXiv card → `https://arxiv.org/abs/2301.00646`
  - IEEE card → `https://ieeexplore.ieee.org/abstract/document/9666731/`
- Each card: venue tag (green), paper title, short abstract excerpt, author line, `↗` arrow top-right
- On hover: green border, shadow, arrow shifts up-right

**Paper 1 — arXiv**
- Title: "Addressing the Selection Bias in Voice Assistance: Training Voice Assistance Model in Python with Equal Data Selection"
- Abstract: A voice assistant trained on diverse voice data to mitigate gender and racial bias — recognizing voices regardless of gender, race, or accent.
- Authors: Kashav Piya, Srijal Shrestha, Cameran Frank, Estephanos Jebessa, Tauheed Khan Mohd
- Link: https://arxiv.org/abs/2301.00646

**Paper 2 — IEEE**
- Title: "IoT in Health Care Industry: A Promising Prospect"
- Abstract: Examines IoT integration in healthcare — improving patient care quality while addressing data security and cloud integration challenges. Recommends Zero-trust architecture for evolving data management needs.
- Authors: Kashav Piya, Quynh Anh Au, Srijal Shrestha, Apoorva Singh, Tauheed Khan Mohd
- Link: https://ieeexplore.ieee.org/abstract/document/9666731/

### 6. Projects
- Section label: `PROJECTS`
- Title: "Selected work"
- Two project cards in a 2-col grid:
  - **City of Goose Lake** — municipal website, links to `gooselakeiowa.org`
  - **StarFlower Clinic** — clinic website, links to GitHub + `starflowerclinic.com`
- Each card: image/thumbnail, project name, short description, link buttons
- Cards lift on hover with shadow

### 7. Contact
- Section label: `CONTACT`
- Title: "Let's talk"
- Two-column: left = copy + contact details, right = form
- Contact details: email address, current role
- Form fields: Name · Email · Message · Send button
- EmailJS integration (reuse existing `service_4vo0w8i` / `template_wi872o8` / key)

### 8. Footer
- Single line: copyright left, GitHub + LinkedIn + arXiv links right
- 1px top border

---

## Content

### Bio copy (About section)
> I'm an AI Associate at Walker Advertising, where I integrate AI and automation into day-to-day workflows using tools like n8n, Claude, and Supabase.
>
> I've published research as first author in both IEEE and arXiv, and I build practical AI systems — RAG pipelines, intelligent agents, and workflow automations that actually ship.
>
> I care about the intersection of research and real-world application: turning cutting-edge ideas into tools people use every day.

### Hero subtitle (typed)
"AI Associate at Walker Advertising"

### Skills
| Name | Description |
|---|---|
| n8n | Workflow automation at scale. Connecting APIs, triggers, and AI models into production pipelines. |
| AI Agents | Designing and deploying autonomous agents with tool use, memory, and multi-step reasoning. |
| RAG Systems | Retrieval-Augmented Generation pipelines for grounded, accurate AI responses over private data. |
| Supabase | Postgres-backed vector stores, auth, and real-time data for AI applications. |
| Claude / Claude Code | LLM integration, prompt engineering, and AI-assisted development workflows. |
| Python | Backend logic, data pipelines, ML tooling, and scripting across every project. |

---

## File Structure

```
kashavpiya.github.io/
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Research.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        ← Tailwind directives only
├── public/
│   └── (favicon, profile.jpg, project images)
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

Each component is self-contained. No shared global CSS beyond Tailwind's base layer.

---

## Open Items

- **LinkedIn URL** — footer and contact section link to LinkedIn; need the actual profile URL before implementation
- **Profile photo** — `profile.jpg` exists in assets; will be used in the About section if desired, otherwise stats-only layout

---

## Out of Scope

- No dark mode toggle
- No blog or writing section
- No case studies for company automation work (IP)
- No CMS integration
- No analytics (can be added later)
