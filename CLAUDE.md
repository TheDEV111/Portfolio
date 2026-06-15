# CLAUDE.md

Personal developer portfolio for Henry Agukwe ("TheDEV111" / "Henryno111"). Single-page-app style multi-route site showcasing projects, skills, and a contact form. Live at https://devhenryno.vercel.app/.

## Stack

- **React 18** + **TypeScript** (strict), built with **Vite 5**
- **Tailwind CSS 3** for styling (dark theme, `zinc` + `emerald` palette)
- **Framer Motion** for animations
- **react-router-dom 6** for routing (lazy-loaded routes)
- **Firebase Firestore** — contact form submissions only (writes to `contacts` collection)
- **lucide-react** + **react-icons** for icons
- shadcn-style UI primitives in `src/components/ui/` (Card, Button, Badge) using `class-variance-authority` + `tailwind-merge`
- Deployed on **Vercel** (`vercel.json`, `.vercel/`); package manager is **pnpm** (`pnpm-lock.yaml`)

## Commands

- `pnpm dev` — dev server on port 3000 (auto-opens)
- `pnpm build` — `tsc` typecheck + `vite build` → `dist/`
- `pnpm preview` / `pnpm serve` — preview build on port 4173
- `pnpm lint` / `pnpm lint:fix` — ESLint (max-warnings 0)
- `pnpm type-check` — `tsc --noEmit`
- `pnpm test` — Vitest (no test files present yet)

## Architecture

Entry: `src/main.tsx` → `src/App.tsx`. `App.tsx` defines 4 lazy-loaded routes under a `Suspense` spinner:

| Route | Page (`src/Pages/`) | Composition |
|-------|---------------------|-------------|
| `/` | `Home.tsx` | Navbar + Hero + ProjectsEnhanced (preview of 4) + Footer |
| `/projects` | `Projects.tsx` | Navbar + ProjectList (full grid + modal) + Footer |
| `/about` | `About.tsx` | Navbar + AboutSection + Footer |
| `/contact` | `Contact.tsx` | Navbar + AnimatedContact (Firebase form) + Footer |

### Components (`src/Components/`, PascalCase folder)
- **NavbarEnhanced** — shared nav, on every page
- **HeroEnhanced** — landing hero
- **ProjectsEnhanced** — home preview; shows first 4 `Full Stack`/`Frontend` non-contribution projects
- **ProjectList** → the full `/projects` view (grid/list toggle, category filter). Renders **OpenSourceCard** for `contribution: true` projects and **ProjectCard** for the rest; both open the shared **ProjectModal** (detail view)
- **OpenSourceCard** — screenshot-free, GitHub-centric card (violet accent) for open-source/contribution projects that have no `public/*.png` screenshot
- **ProjectCard** — image-based card for projects that have a screenshot
- **AboutSection** — bio/skills/experience
- **AnimatedContact** — validated contact form; submits via `addDoc(collection(db, 'contacts'), …)`
- **Footer** — shared footer

> Note: `src/components/ui/` (lowercase) holds shadcn primitives; `src/Components/` (uppercase) holds feature components. Both coexist — mind the casing on imports.

### Data & config
- `src/data/projects.ts` — **single source of truth for all projects** (~21 entries). Exports `projects` and `featuredProjects`. This is the file to edit when adding/updating a project. Each entry conforms to the `Project` interface.
- `src/types/index.ts` — `Project`, `Experience`, `Education`, `ContactFormData`, `SocialLink`, `NavLink`, `ContactInfo`
- `src/constants/social.ts` — social links (GitHub, LinkedIn, Twitter/X, email)
- `src/constants/animations.ts` — shared Framer Motion variants
- `src/config/firebase.ts` — Firebase init from `VITE_FIREBASE_*` env vars; exports Firestore `db`
- `src/lib/utils.ts` — `cn()` clsx + tailwind-merge helper
- `@/` path alias → `src/` (configured in `vite.config.ts` and `tsconfig.json`)
- Project categories: `Blockchain`, `Open Source`, `Frontend`, `Full Stack`. `featured` and `contribution` flags drive filtering.
- Project images live in `public/*.png`; `image` field is a root-relative path (e.g. `/stxworx.png`)

## Conventions

- Functional components typed `React.FC`, default-exported
- Import via `@/` alias, not relative paths
- Heavy Framer Motion usage (animated gradient blobs, scroll transforms, variants)
- Dark theme only: `bg-zinc-950`, `emerald-500` accents

## Build/perf notes

- Vite manual chunks split vendor bundles (react, router, animations, icons, ui-lib) — see `vite.config.ts`
- gzip + brotli compression plugins; bundle stats output to `dist/stats.html`
- `transform-remove-console` strips `console.*` (keeps `error`/`warn`) in production builds
- See `PERFORMANCE_OPTIMIZATION.md` for the optimization writeup

## Setup

Copy `.env.example` → `.env` and fill `VITE_FIREBASE_*` values (required for the contact form to submit).
