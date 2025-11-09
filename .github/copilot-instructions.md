## Purpose
Short, actionable guidance for AI code contributors working on this React + Vite portfolio project (Meet-Kizito).

## Quick start (what to run)
- npm install
- npm run dev       # start Vite dev server (hot reload)
- npm run build     # production build via `vite build`
- npm run preview   # preview the production build locally
- npm run lint      # run ESLint across the repo

Files to check first: `package.json`, `src/main.jsx`, `src/App.jsx`.

## Big picture / architecture
- Frontend-only single-page React app built with Vite. No backend or API calls in this repo.
- Entrypoint: `src/main.jsx` mounts `<App />` into `#root`.
- `src/App.jsx` composes the top-level UI from small component files in `src/components/` (Navbar, Hero, About, Skills, Projects, Contact, Footer).
- Styles are plain CSS files colocated in `src/styles/` and globally imported from `src/App.jsx` (one CSS file per component). Example: `src/components/Skills.jsx` imports `../styles/Skills.css`.
- Data/state: mostly local component state and local static arrays (e.g., `storyChapters` inside `Skills.jsx`). There is no central store or remote data fetching.

## Project-specific conventions and patterns
- Components use PascalCase and are default exports (e.g., `Skills.jsx` exports default `Skills`). Keep that pattern when adding components.
- CSS is kept in `src/styles/` and imported by `App.jsx` (global) or by the component itself. When adding CSS, prefer a same-name file under `src/styles/` and import it where used.
- Anchor navigation uses fragment IDs (see `Navbar.jsx` links: `#hero`, `#about`, `#projects`, `#contact`). When adding sections, ensure the `id` matches the nav link.
- Animations: multiple libraries used across components — AOS (`AOS.init()` in `Navbar` & `Hero`), `framer-motion` for element animations in `Skills`, and occasionally `lenis` / `locomotive-scroll` patterns may appear elsewhere. Avoid conflicting scroll/animation managers unless you update all relevant initializers.
- Icons and fonts: icons come from `react-icons`; fonts are loaded with `@fontsource/*` packages (see imports in `Navbar.jsx` and `package.json`). If you add a font, also add it to `package.json` and import it where needed.

## Integration points / notable dependencies
- Vite (dev server & build)
- React 19
- framer-motion (motion components)
- AOS (scroll-triggered animations)
- @splinetool/react-spline, lenis, locomotive-scroll, tsparticles, swiper — these are present in `package.json` and may be used for 3D, smooth scrolling, particles, or carousels. Search the codebase before changing scroll or animation behaviors.

## Cross-platform caution
- Repository was developed on Windows. Some filenames in `src/styles/` show inconsistent capitalization (example: `SKills.css` exists in the workspace while `App.jsx` imports `./styles/Skills.css`). On case-sensitive systems (Linux/macOS CI) this will break. When renaming/adding files, use consistent casing (prefer `Skills.css`).

## Editing guidance for AI agents (concrete rules)
- Keep component default exports and relative imports intact. If you rename a component, update every import in `src/`.
- Update or add CSS in `src/styles/` rather than embedding styles inline unless requested.
- When adding dependencies, update `package.json` and mention `npm install` in the PR description. Small changes to animations often require adjusting AOS or framer-motion initialization — search for `AOS.init` and `motion` usage.
- Preserve fragment IDs used for navigation. Example: `Hero` section id is `hero` and Navbar links to `#hero`.
- If you change structured arrays (like `storyChapters` in `src/components/Skills.jsx`), ensure all keys used by render logic remain (id, chapter, title, skills[], atmosphereClass, accentColor).

## What to look at for examples
- Layout and composition: `src/App.jsx`
- Mounting/entry: `src/main.jsx`
- Navigation: `src/components/Navbar.jsx`
- Hero + per-letter animation: `src/components/Hero.jsx` (the title is split into many spans)
- Skills data-driven sections: `src/components/Skills.jsx` (example of local data -> UI mapping)
- Styles folder: `src/styles/*` (one CSS file per component convention)

## Linting / PR checks
- Run `npm run lint` locally and fix ESLint issues before making a PR. There are no automated tests in the repo; rely on visual/manual checks.

If anything in these notes looks incorrect or you want a different focus (tests, CI, or Windows vs Linux casing fixes), tell me which section to expand and I'll iterate.
