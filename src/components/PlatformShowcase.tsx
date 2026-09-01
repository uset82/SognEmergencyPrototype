import { useEffect, useState } from 'react'
import dashboardImg from '../assets/platform-dashboard.png'
import preimpactImg from '../assets/platform-preimpact.png'
import overviewImg from '../assets/platform-overview.png'
import agentsImg from '../assets/platform-agents.png'
import publicAlertImg from '../assets/platform-public-alert.png'
import medicalImg from '../assets/platform-medical.png'

const concepts = [
  {
    no: '00',
    src: overviewImg,
    title: 'Complete platform concept',
    expl: 'The five professional screens at a glance — the whole ecosystem on one board.',
    alt: 'Concept overview board showing the five platform screens: incident dashboard, risk map, agent orchestration, public alert management and medical coordination',
  },
  {
    no: '01',
    src: dashboardImg,
    title: 'Shared incident picture',
    expl: 'Every responding agency works from one live map — vessel track, zones, agents, hospitals, police, paramedics, helicopters.',
    alt: 'Main incident dashboard with a live map, danger and safe zones, connected agent tiles, live updates and quick actions',
  },
  {
    no: '02',
    src: preimpactImg,
    title: 'The fifteen minutes before impact',
    expl: 'Time to possible impact, ship status and a pre-approved playbook — so the operator decides once, and agents coordinate the rest.',
    alt: 'Pre-impact risk map with ETA to impact zone, vessel information, recommended response playbook and decision actions',
  },
  {
    no: '03',
    src: agentsImg,
    title: 'Agents under one orchestrator',
    expl: 'Twelve specialised agents coordinated by one Main Agent — with a live feed of every action taken.',
    alt: 'Agent orchestration screen with the agent tree from captain through main orchestrator to specialised agents, live activity feed and status summary',
  },
  {
    no: '04',
    src: publicAlertImg,
    title: 'Pre-approved public alerts',
    expl: 'Operators choose a template and official actions; the text itself is never freely written by AI, only translated and personalised.',
    alt: 'Public alert composer with pre-approved templates, official actions, multilingual preview, targeting map and mobile app preview',
  },
  {
    no: '05',
    src: medicalImg,
    title: 'Medical and rescue coordination',
    expl: 'Triage zones, hospital capacity and responder dispatch with ETAs — kept in sync by the Medical, Paramedic and Hospital Agents.',
    alt: 'Medical and rescue dashboard with triage zones on a map, hospital capacity table, responder dispatch with ETAs and live updates',
  },
]

export function PlatformShowcase() {
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
    <section className="section" id="platform" aria-labelledby="platform-title">
      <div className="container">
        <p className="eyebrow">Exhibition 01 · Professional platform</p>
        <h2 id="platform-title">One shared incident picture</h2>
        <p className="section-intro">
          Concept screens for the professionals' platform — police, fire, medical, port and
          municipal coordinators working from the same picture. The screens are the exhibit;
          click any of them to inspect it full-screen.
        </p>

        {concepts.map((c, i) => (
          <figure className="concept reveal" key={c.no}>
            <div className="concept-head">
              <div>
                <p className="eyebrow">
                  Professional platform / Concept <span className="concept-no">{c.no}</span>
                </p>
                <h3>{c.title}</h3>
              </div>
              <p className="expl">{c.expl}</p>
            </div>
            <button
              className="prototype-frame"
              onClick={() => setOpen(i)}
              aria-label={`Enlarge: ${c.title}`}
            >
              <img src={c.src} alt={c.alt} loading="lazy" />
            </button>
          </figure>
        ))}
      </div>

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={concepts[open].title}
          onClick={() => setOpen(null)}
        >
          <button className="lightbox-close" aria-label="Close full-screen view" onClick={() => setOpen(null)}>
            ×
          </button>
          <img src={concepts[open].src} alt={concepts[open].alt} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption">
            {concepts[open].title} — fictional concept visualisation · click anywhere or press Escape to close
          </p>
        </div>
      )}
    </section>
  )
}
