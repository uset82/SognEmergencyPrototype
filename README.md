# Sogn Emergency Coordination — INN524 Concept Prototype

A polished interactive **concept website** for a student innovation project at HVL (INN524).
It explores how a professional emergency coordination platform, a civilian mobile app, and a
network of specialised agents could support preparedness for a possible large-vessel collision
near Flåm / Inner Sogn.

> **This is a fictional student prototype — NOT an operational emergency system.** All zones,
> events, statistics and agent statuses are invented. No real alerts, calls, geofencing or
> authority integrations exist anywhere in this project.

## What's inside

- **Overview** — hero, problem scenario, four design questions
- **Professional Platform** — the two generated prototype images with a full-screen lightbox,
  plus an interactive mini dashboard with a simulated pre-approved playbook demo
- **Agent Network** — clickable map of the 17-agent architecture (Main Agent / Orchestrator in
  the centre) with role / input / output / status / example message per agent
- **Civilian App** — interactive phone mockup with 6 screens (alert, safe route, need help,
  send location, safe, degraded connection)
- **Platform ↔ App** — step-by-step animated round trip showing bidirectional agent-mediated
  communication
- **15-Minute Scenario** — playable T-15 → T-1 incident timeline (play / pause / reset)
- **Presentation Mode** — 6 full-screen slides for showing the project in class

## Tech stack

Vite · React 18 · TypeScript · plain CSS (custom properties). No backend, no extra runtime
dependencies. Deploys as a fully static site.

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server (http://localhost:5173)
npm run build   # type-check + production build → dist/
npm run preview # serve the production build locally
```

## Deployment

`npm run build` produces a self-contained `dist/` folder with relative asset paths
(`base: './'`), so it can be dropped onto any static host (GitHub Pages, Netlify, Vercel,
any web server). No environment variables or secrets are required. Because the site is a
single page with hash-free section navigation done in-page, no server rewrite rules are needed.
