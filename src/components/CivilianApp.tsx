import { useEffect, useState } from 'react'
import readyImg from '../assets/app-ready.png'
import alertImg from '../assets/app-alert.png'
import findSafetyImg from '../assets/app-find-safety.png'
import evacuateImg from '../assets/app-evacuate.png'

const screens = [
  {
    no: '01',
    word: 'Ready',
    title: 'Prepared before something happens',
    expl: 'SOGN SAFE normally stays quiet. Residents and visitors can see nearby safe places, keep essential emergency information available offline and choose their preferred language.',
    src: readyImg,
    alt: 'SOGN SAFE app in its normal state: SAFE status, nearby safe places on an approximate local map, emergency readiness, offline information, language setting and downloaded emergency information',
  },
  {
    no: '02',
    word: 'Alert',
    title: 'Understand the danger immediately',
    expl: 'If the user is inside the affected area, the app reduces the emergency to one clear message and two actions: move toward safety or request help.',
    src: alertImg,
    alt: 'SOGN SAFE emergency alert: possible vessel collision near Flåm harbor, you are inside the affected area, about 15 minutes, with GO TO SAFETY and I NEED HELP as the two dominant actions',
    flip: true,
  },
  {
    no: '03',
    word: 'Find safety',
    title: 'Turn official information into personal guidance',
    expl: 'The app identifies a confirmed safe location and shows only what matters to the civilian: where they are, what area to avoid and where they should go.',
    src: findSafetyImg,
    alt: 'SOGN SAFE nearest safe area screen: Flåm School, 650 m, 8 min walk, open and confirmed, with an approximate map showing the affected area, blocked waterfront, Safe Zone B and C, and START SAFE ROUTE',
  },
  {
    no: '04',
    word: 'Evacuate',
    title: 'One instruction at a time',
    expl: 'During evacuation, navigation becomes intentionally simple: the next movement, the safe destination and the danger area to avoid — with help available throughout.',
    src: evacuateImg,
    alt: 'SOGN SAFE evacuation navigation: continue north, turn left in 120 m, destination Flåm School safe area, 520 m and 6 minutes remaining, safe area open, map with safe zone, affected area and blocked waterfront, do not return toward the waterfront, and a persistent I NEED HELP button',
    flip: true,
  },
]

const chain = [
  'Professional platform',
  'Public Agent',
  'Citizen Agent',
  'SOGN SAFE',
  'Civilian',
]

export function CivilianApp() {
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section className="section" id="app" aria-labelledby="app-title">
      <div className="container">
        <p className="eyebrow">Exhibition 03 · Civilian app — SOGN SAFE</p>
        <h2 id="app-title">Simple for the civilian, robust underneath</h2>
        <p className="section-intro">
          The civilian app is for ordinary people: residents, tourists, students, workers, families
          — anyone, including someone unfamiliar with the area or the language. They should never
          need to understand the professional emergency system. The prototype follows one journey:
        </p>
        <p className="section-intro" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', letterSpacing: '0.08em' }}>
          READY → ALERT → FIND SAFETY → EVACUATE
        </p>

        {screens.map((s) => (
          <figure className={`journey-step reveal ${s.flip ? 'flip' : ''}`} key={s.no}>
            <div>
              <div className="step-head">
                <span className="step-no">{s.no} /</span>
                <h3>{s.word}</h3>
              </div>
              <p className="step-title">{s.title}</p>
              <p className="step-expl">{s.expl}</p>
            </div>
            <div className="journey-media">
              <button
                className="prototype-frame"
                onClick={() => setOpen(screens.indexOf(s))}
                aria-label={`Enlarge: Screen ${s.no} — ${s.word}`}
              >
                <img src={s.src} alt={s.alt} loading="lazy" />
              </button>
            </div>
          </figure>
        ))}

        <div className="concept-statement reveal">
          <p className="statement">Professional complexity becomes civilian simplicity.</p>
          <p className="section-intro" style={{ marginBottom: 'var(--sp-6)' }}>
            The professional platform may coordinate ships, police, hospitals, paramedics,
            helicopters, municipalities and specialised agents. The civilian should not see that
            complexity — SOGN SAFE translates the official incident state into personal actions.
          </p>
          <p className="flow-words">
            <span className="hot">WARN</span> <span className="dim">→</span>{' '}
            <span className="hot">GUIDE</span>{' '}
            <span className="next">→ LOCATE → RESCUE</span>
            <span className="dim"> · </span>
            <span className="next">LOCATE / RESCUE screens arrive with the next prototype iteration</span>
          </p>        </div>

        <div className="reveal">
          <p className="eyebrow">Where the information comes from</p>
          <div className="agent-chain" aria-label="Information path from professional platform to civilian">
            {chain.map((node, i) => (
              <div key={node} style={{ display: 'contents' }}>
                <span className={`chain-node ${i === chain.length - 1 ? 'end' : ''}`}>{node}</span>
                {i < chain.length - 1 && (
                  <span className="chain-arrow" aria-hidden="true">▼</span>
                )}
              </div>
            ))}
          </div>
          <p className="section-intro" style={{ marginTop: 'var(--sp-8)', fontSize: 'var(--fs-sm)' }}>
            The civilian never talks to the professional platform directly — agents translate the
            official incident state into one personal instruction at a time. All screens shown are
            fictional prototype concepts; the app transmits no real data.
          </p>
        </div>
      </div>

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Screen ${screens[open].no} — ${screens[open].word}`}
          onClick={() => setOpen(null)}
        >
          <button className="lightbox-close" aria-label="Close full-screen view" onClick={() => setOpen(null)}>
            ×
          </button>
          <img src={screens[open].src} alt={screens[open].alt} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption">
            SOGN SAFE — screen {screens[open].no} ({screens[open].word}) · fictional prototype ·
            click anywhere or press Escape to close
          </p>
        </div>
      )}
    </section>
  )
}
