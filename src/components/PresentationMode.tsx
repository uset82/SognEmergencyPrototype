import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import dashboardImg from '../assets/platform-dashboard.png'

const slides: { title: string; body: ReactNode }[] = [
  {
    title: '1. The problem',
    body: (
      <ul>
        <li>A large passenger ship approaching Flåm may lose manoeuvrability — a collision risk.</li>
        <li>Sea, land, emergency actors, authorities and civilians may not share the same picture at the same time.</li>
        <li>In a major accident: crew, port, municipality, police, fire, paramedics, hospitals, helicopters, NGOs, tourists and residents all need to coordinate.</li>
        <li>Our question: can one platform + one civilian app + a network of agents close that gap?</li>
      </ul>
    ),
  },
  {
    title: '2. The professional platform',
    body: (
      <div>
        <img
          src={dashboardImg}
          alt="Fictional main incident dashboard concept image"
          style={{ maxWidth: '100%', borderRadius: 12, border: '1px solid var(--border)' }}
        />
        <ul>
          <li>One shared incident picture: map, ship trajectory, danger / warning / safe zones.</li>
          <li>Responder status, hospital capacity, evacuation progress, live timeline.</li>
          <li>A pre-approved playbook — the operator says one sentence, agents do the coordination.</li>
        </ul>
      </div>
    ),
  },
  {
    title: '3. The agent network',
    body: (
      <ul>
        <li>Agents connect the entire ecosystem; the platform and app are human interfaces.</li>
        <li>One Main Agent / Orchestrator coordinates specialised agents: ship, risk, response, public, citizen, police, fire, medical, paramedic, hospital, helicopter, maritime rescue, municipality, resource, translation and audit.</li>
        <li>Important constraint: agents personalise and coordinate pre-approved information — they never invent emergency policy.</li>
      </ul>
    ),
  },
  {
    title: '4. The civilian app',
    body: (
      <ul>
        <li>WARN → GUIDE → LOCATE → RESCUE.</li>
        <li>Answers four questions: Am I in danger? Where should I go? How do I get there? What if I am injured or trapped?</li>
        <li>Large buttons, simple language, multilingual, works in degraded connectivity.</li>
        <li>One tap sends a help signal with simulated location to responders.</li>
      </ul>
    ),
  },
  {
    title: '5. The 15-minute scenario',
    body: (
      <ul>
        <li>T-15: loss of control reported → Ship Agent structures the incident.</li>
        <li>T-13: Main Agent activates the pre-approved Flåm scenario; Risk Agent loads zones.</li>
        <li>T-11 to T-9: emergency network acknowledges; pre-approved public alert is prepared.</li>
        <li>T-7 to T-6: phones show evacuation warning and safe routes.</li>
        <li>T-5 to T-1: help requests triaged, resources moved, evacuation progress, final warning.</li>
        <li>Full walkthrough: open the “15-Minute Scenario” tab and press Play.</li>
      </ul>
    ),
  },
  {
    title: '6. Discussion questions',
    body: (
      <ul>
        <li>Which agents add the most value — and which could be merged?</li>
        <li>How much should AI be allowed to personalise safety information?</li>
        <li>What would it take to earn public trust in a civilian emergency app?</li>
        <li>What happens when connectivity degrades — is our offline concept enough?</li>
        <li>Which stakeholders should we test this concept with next?</li>
      </ul>
    ),
  },
]

export function PresentationMode({ onExit }: { onExit: () => void }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, slides.length - 1))
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0))
      if (e.key === 'Escape') onExit()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onExit])

  return (
    <div className="presentation" role="dialog" aria-modal="true" aria-label="Presentation mode">
      <div className="proto-note">
        Student concept prototype — INN524 · All data is fictional · Not an operational emergency system
      </div>
      <div className="presentation-slide">
        <p className="kicker">Sogn Emergency Coordination</p>
        <h2>{slides[index].title}</h2>
        {slides[index].body}
      </div>
      <div className="presentation-controls">
        <button
          className="btn-line"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
        >
          ← Previous
        </button>
        <span className="step-count">
          {index + 1} / {slides.length}
        </span>
        <button
          className="btn-line"
          onClick={() => setIndex((i) => Math.min(i + 1, slides.length - 1))}
          disabled={index === slides.length - 1}
        >
          Next →
        </button>
        <button className="btn-line" onClick={onExit}>
          Exit Presentation
        </button>
      </div>
    </div>
  )
}
