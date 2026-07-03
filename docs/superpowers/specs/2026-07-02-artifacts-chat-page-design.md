# Artifacts & Chat Page — Design Spec
**Date:** 2026-07-02

## Overview

Add an `/artifacts` route to the portfolio with a single card that opens an AI chat page at `/artifacts/chat`. The chat embeds an n8n streaming agent that answers questions about Kashav's professional background.

## Architecture

- Install `react-router-dom` (no router currently exists in the project).
- Wrap the app in `BrowserRouter` in `src/main.jsx`.
- Define routes directly in `src/App.jsx` using `<Routes>` / `<Route>`:
  - `/` → existing portfolio single-page content
  - `/artifacts` → `Artifacts` page component
  - `/artifacts/chat` → `Chat` page component

## Components

### `src/pages/Artifacts.jsx`
- Layout: `max-w-5xl mx-auto px-8 py-28` matching existing sections.
- Section label: green uppercase tracking text "Artifacts".
- Heading: bold large text, green underline `div` (matching Research/Projects pattern).
- Single card styled identically to Projects cards:
  - Thumbnail area: `h-40 bg-gray-50` with `💬` emoji centered.
  - Body: title "Ask me anything", subtitle "Powered by an AI agent trained on my professional background."
  - Primary button: "Open Chat →" navigates to `/artifacts/chat` via `react-router-dom` `<Link>`.
- Uses `framer-motion` `fadeUp`, `stagger`, `cardItem`, `underlineDraw` from `src/lib/motion.js` (same as Projects).
- `Nav` is rendered above (shared layout).

### `src/pages/Chat.jsx`
- Sticky top bar: same height/padding as `Nav`, white background, border-bottom. Contains:
  - Back arrow link (`←`) navigating to `/artifacts` via `<Link>`.
  - Title: "Ask me anything" centered or left-aligned.
- Below the bar: `<iframe>` set to `width: 100%`, `height: calc(100vh - 64px)` (64px = top bar height), no border, embedding `https://n8n.piyakashav.xyz/webhook/03cd5250-354b-4d09-99c0-bfccafdb7932/chat`.
- `allow="microphone"` on iframe in case n8n chat uses it; `title` for accessibility.

### `src/components/Nav.jsx` (updated)
- Add "Artifacts" to the nav links array as a route link (`href: '/artifacts'`).
- Existing hash links (`#about`, `#skills`, etc.) remain `<a>` tags.
- "Artifacts" renders as a `<Link to="/artifacts">` from `react-router-dom`.
- Active state: highlight when `location.pathname === '/artifacts'` using `useLocation`.
- On the `/artifacts` or `/artifacts/chat` routes, the scroll-based section highlighting is inactive (no sections to track), so the hash links show as neutral gray.

## GitHub Pages SPA Routing Fix

GitHub Pages returns 404 for unknown paths (`/artifacts`, `/artifacts/chat`). Fix with the standard [spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect trick:
- `public/404.html`: contains a script that encodes the current path (`/artifacts`) into a query param (`?/artifacts`) and redirects to the root (`/`). Vite copies `public/` to `dist/` on build.
- `index.html`: contains a companion script in `<head>` that reads the encoded query param on load and uses `history.replaceState` to restore the real URL before React boots, so the router sees `/artifacts` correctly.
- No changes needed to `vite.config.js` (`base: '/'` is already correct).

## Data Flow

- No state shared between Artifacts and Chat pages.
- Chat is entirely self-contained in the iframe; n8n handles streaming internally.
- No new API calls from the React app itself.

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react-router-dom` | `^6` | Client-side routing |

## File Changes Summary

| File | Change |
|---|---|
| `package.json` | Add `react-router-dom` |
| `src/main.jsx` | Wrap with `BrowserRouter` |
| `src/App.jsx` | Wrap routes with `Routes`/`Route` |
| `src/components/Nav.jsx` | Add Artifacts link, use `useLocation` |
| `src/pages/Artifacts.jsx` | New — Artifacts page |
| `src/pages/Chat.jsx` | New — Chat embed page |
| `public/404.html` | New — GH Pages SPA redirect |
| `index.html` | Add redirect script for GH Pages |
