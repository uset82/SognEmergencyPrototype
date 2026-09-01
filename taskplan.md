# taskplan.md — Sogn Emergency Coordination (INN524 prototype)

Source of truth for implementation progress. Stack: **Vite + React + TypeScript**, plain CSS (custom properties), no backend, static deploy.

## Phase — WebDesigner visual reset

Following the WebDesigner workflow: frontend-design → frontend-skill → design system → build → anti-slop review → browser QA.

- [x] Read `AGENTS.md`
- [x] Read `docs/frontend-guidelines.md`
- [x] Apply `frontend-design`
- [x] Apply `frontend-skill`
- [x] Write visual thesis — "quiet Nordic exhibition hall on warm paper; dark prototypes as exhibited objects; one thin signal line from ship to civilian"
- [x] Set Variance / Motion / Density — 6/10, 3/10, 4/10
- [x] Approve 6 color tokens — Paper #F4F3EF, Ink #171A1A, Stone #D8D9D4, Fjord #53686B, Pine #31584C, Signal #B83A32 (+ derived paper-deep #ECEAE3, ink-62% secondary). Critique: no gradients added; Pine is the only working accent; Signal only for emergency meaning.
- [x] Approve typography system — Schibsted Grotesk (Norwegian) display+body, IBM Plex Mono for eyebrows/captions only
- [x] Define one signature element — scroll-tracked signal line with SHIP → AGENT → AUTHORITY → CIVILIAN stations
- [x] Audit current UI for generic AI aesthetics — findings: dark-navy SaaS dashboard look, amber banner, glowing pill badges, dark command-centre styling competes with the prototype images
- [x] Remove purple/lilac/blue-gradient styling — none present; removed blue/info accent + amber system entirely
- [x] Rebuild hero — single composition: brand, one headline, one sentence, two CTAs, one dominant visual, INN524·HVL eyebrow
- [x] Rebuild prototype presentation sections — editorial: eyebrow → title → one sentence → large image → lightbox
- [x] Rebuild app showcase — WARN → GUIDE → LOCATE → RESCUE editorial steps with one large phone
- [x] Simplify agent section — typographic hierarchy tree, Main Agent strongest weight
- [x] Run desktop visual QA — browser screenshots at 1280/1440
- [x] Run mobile visual QA — browser screenshots at 390, no horizontal overflow
- [x] Run anti-slop audit — see answers at end of this file
- [x] Run accessibility checks — semantic landmarks, keyboard focus, reduced motion, contrast
- [x] Run production build — `npm run build` verified

### Anti-slop audit answers

1. Purple or lilac? **No** — palette is Paper/Ink/Stone/Fjord/Pine/Signal.
2. Blue-purple gradient? **No** — no gradients at all except a barely-visible paper texture.
3. Generic AI glow effects? **No** — elevation only on lightbox and phone; no glows.
4. Too many things inside cards? **No** — cards removed everywhere except interactive phone/controls.
5. Hero more than one main visual idea? **No** — one composition: headline, sentence, CTAs, one image.
6. Prototype images clearly dominant? **Yes** — large editorial presentation, ~75% visual attention.
7. Looks good with animations disabled? **Yes** — all motion is reveal/transition only.
8. Typography intentional? **Yes** — Norwegian grotesk family + mono captions, weight contrast.
9. Specifically appropriate for Inner Sogn / emergency preparedness? **Yes** — fjord/pine/signal palette, Norwegian typeface, exhibition framing.
10. Could it be reused unchanged for an AI crypto startup? **No** — the exhibition framing, signal-line signature and Norwegian institutional voice are subject-specific.


## Asset status

- [x] Platform prototype image 1 located: `ChatGPT Image Sep 1, 2026, 08_17_00 PM.png` → copied to `src/assets/platform-dashboard.png` (MAIN INCIDENT DASHBOARD)
- [x] Platform prototype image 2 located: `ChatGPT Image Sep 1, 2026, 08_17_07 PM.png` → copied to `src/assets/platform-preimpact.png` (15-MINUTE PRE-IMPACT VIEW)

## Phase 1 — Repository inspection

- [x] Read repository instructions (user brief)
- [x] Inspect source tree — repo was empty except 2 generated images
- [x] Identify frontend framework — none existed; scaffolding Vite + React + TS per brief
- [x] Identify styling system — plain CSS with custom properties (no Tailwind present)
- [x] Identify existing assets — 2 generated platform images
- [x] Locate both generated platform prototype images
- [x] Identify existing reusable components — none; create from scratch
- [x] Create `mainidea.md`
- [x] Create `taskplan.md`

## Phase 2 — Information architecture

- [x] Scaffold Vite React TS project
- [x] Navigation structure (5 tabs: Overview / Professional Platform / Agent Network / Civilian App / 15-Minute Scenario + Presentation Mode)
- [x] Define reusable data structures (`src/data/agents.ts`)
- [x] Define fictional scenario data (`src/data/scenario.ts`)
- [x] Define civilian app state data (`src/data/civilian.ts`)

## Phase 3 — Global design system

- [x] Typography, spacing, palette (navy/slate, red=critical, amber=warning, green=safe, blue=info), cards, buttons, alerts, nav, phone mockup, agent-node styles (`src/styles/global.css`)

## Phase 4 — Hero / overview

- [x] Hero with required copy, 3 CTAs, prototype disclaimer banner

## Phase 5 — Professional platform showcase

- [x] Platform gallery (2 images, titles + explanations)
- [x] Lightbox full-screen viewer with keyboard support
- [x] Fictional interactive mini-dashboard (countdown, status tiles, playbook command demo)

## Phase 6 — Agent network visualization

- [x] Interactive agent map (Main Agent center, 16 nodes, click → role/input/output/status/example message)

## Phase 7 — Civilian app mockup

- [x] Interactive phone mockup, 6 screens (alert, safe route, need help, send location, safe, degraded connection), large buttons

## Phase 8 — Platform ↔ app connection

- [x] Animated bidirectional message-flow diagram (platform → agents → phone → help → agents → dashboard), step-by-step play control

## Phase 9 — 15-minute interactive scenario

- [x] T-15 → T-1 timeline with play/pause/reset, progressive stage activation

## Phase 10 — Presentation mode

- [x] Full-screen slide mode: Problem / Platform / Agents / App / Scenario / Discussion questions, ← → controls, exit

## Phase 11 — Responsiveness

- [x] Responsive CSS at 1440 / laptop / tablet / mobile; no horizontal overflow — verified via build + manual CSS review
- [x] Nav adapts to mobile

## Phase 12 — Accessibility

- [x] Semantic HTML, keyboard nav, focus styles, alt text, aria labels, reduced-motion media query, large controls

## Phase 13 — Final polish

- [x] Title/meta/favicon (`Sogn Emergency Coordination — INN524 Concept`)
- [x] Consistent Flåm / Inner Sogn spelling
- [x] Disclaimers on all sections; no claim of real authority connections

## Phase 14 — Verification

- [x] `npm install` succeeds
- [x] `npm run build` (tsc + vite build) succeeds — verified twice, final bundle ~184 kB JS
- [x] Production preview serves the site; title, all sections and both images render (browser-verified at 1280×720)
- [x] Lightbox opens/closes (verified in browser)
- [x] Agent node selection updates detail panel (verified: HOSPITAL AGENT)
- [x] Civilian app screen flow works: route → help → trapped → send signal → offline (verified)
- [x] Scenario play advances clock/stages (T-15→T-13 verified) and reset clears all stages
- [x] Presentation mode: open, next, exit (verified)
- [x] No horizontal overflow at 390px mobile width (scrollWidth check)
- [x] Fix applied during verification: Play button now activates stage T-15 immediately
- BLOCKED: none (in-app browser locator clicks were flaky in the test harness; interactions verified via DOM clicks + one coordinate click — a test-harness quirk, not a site issue)

## Phase 15 — Deployment readiness

- [x] Static build output confirmed (`dist/`)
- [x] Relative base path (`base: './'`) for static hosting
- [x] Deployment documented in `README.md`; no secrets required
