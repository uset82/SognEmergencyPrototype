import { useEffect, useState } from 'react'
import dashboardImg from '../assets/platform-dashboard.png'
import preimpactImg from '../assets/platform-preimpact.png'
import overviewImg from '../assets/platform-overview.png'
import agentsImg from '../assets/platform-agents.png'
import publicAlertImg from '../assets/platform-public-alert.png'
import medicalImg from '../assets/platform-medical.png'

const shots = [
  {
    src: dashboardImg,
    title: 'Prototype 1 — Main Incident Dashboard',
    alt: 'Fictional main incident dashboard showing a live map with vessel track, danger, warning and safe zones, connected agent tiles, live updates and quick actions',
    caption:
      'The shared situation picture: simulated map with vessel track, danger / warning / evacuation / safe zones, connected agents, live updates and quick actions for the (fictional) operator.',
    details: [
      'Live fictional map with ship trajectory and possible impact zone',
      'Danger zone, warning zone, evacuation zone and safe zones as pre-approved overlays',
      'People estimated in danger area and evacuation progress',
      'Responder status: police, fire, paramedics, hospitals, helicopters',
      'Connected agents and live incident timeline',
      'Public warning controls and pre-approved playbook actions',
    ],
  },
  {
    src: preimpactImg,
    title: 'Prototype 2 — Risk Map (Pre-Impact)',
    alt: 'Fictional pre-impact dashboard showing ETA to impact zone, vessel information, recommended pre-approved response playbook and quick decision actions',
    caption:
      'The pre-impact decision view: time to possible impact, ship status, the recommended pre-approved playbook and one-tap decision controls.',
    details: [
      'Time to possible impact: 15 minutes (simulated countdown)',
      'Ship status and approach data with impact time marker',
      'Recommended response comes from the pre-approved Flåm evacuation plan',
      'Decision controls: activate response, send public alert, notify medical network',
      'Safe-zone confirmation and responder activation',
      'Estimated time to impact zone, closest approach, harbour status — all simulated',
    ],
  },
  {
    src: agentsImg,
    title: 'Prototype 3 — Agent Orchestration',
    alt: 'Fictional agent orchestration screen showing the full agent tree from human and ship agent through the main orchestrator to twelve specialised agents, with live activity feed and status summary',
    caption:
      'The agent orchestration view: the full agent tree under one Main Agent / Orchestrator, a live agent activity feed and an agent status summary.',
    details: [
      'Human / Captain → Ship Agent → Main Agent / Orchestrator → 12 specialised agents',
      'Per-agent status: Active, Processing, Standby, Connected',
      'Live agent activity feed with timestamps (e.g. evacuation guidance sent to Zone A users)',
      'Operational insights panel: hospital capacity, helicopters, police, risk level',
      'Playbook, routing and activation controls for the fictional operator',
    ],
  },
  {
    src: publicAlertImg,
    title: 'Prototype 4 — Public Alert Management',
    alt: 'Fictional public alert composer showing pre-approved alert templates, official actions, target area selection, multilingual message preview, targeting map and mobile app preview',
    caption:
      'The public alert composer: operators pick a pre-approved template and official actions — the message text itself cannot be freely edited, only reviewed and sent.',
    details: [
      'Pre-approved alert templates (possible vessel collision – evacuate zone)',
      'Official actions as checkboxes: evacuate Zone A, avoid harbour, open safe zones, route north',
      'Multilingual preview (Norsk, English, Español, Deutsch) via the Translation Agent',
      'Targeting map: who receives the alert, estimated people and devices reached',
      'Live mobile app preview showing exactly what citizens will see',
      'Review → Approve & Send workflow with full alert history',
    ],
  },
  {
    src: medicalImg,
    title: 'Prototype 5 — Medical & Rescue Coordination',
    alt: 'Fictional medical and rescue coordination dashboard showing triage zones on a map, hospital capacity table, responder dispatch with ETAs and live updates',
    caption:
      'The medical & rescue view: triage zones, hospital capacity, responder dispatch with ETAs — the data the Medical, Paramedic and Hospital Agents keep in sync.',
    details: [
      'Hospital capacity overview: beds, occupancy, trauma beds per facility',
      'Triage zones on the map with casualty estimates and medical team assignment',
      'Responder dispatch list: ambulances, rescue helicopters, police units with ETAs',
      'Medical supply status and police/security support panels',
      'Live updates feed from the Hospital, Medical, Helicopter and Police Agents',
    ],
  },
]

export function PlatformShowcase() {
  const [open, setOpen] = useState<number | null>(null)
  const [overviewOpen, setOverviewOpen] = useState(false)

  useEffect(() => {
    if (open === null && !overviewOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setOverviewOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, overviewOpen])

  return (
    <section id="platform" aria-labelledby="platform-title">
      <div className="container">
        <p className="kicker">Professional platform</p>
        <h2 id="platform-title">One shared incident picture for authorised professionals</h2>
        <p className="section-intro">
          The professional web platform gives police, fire, medical, port and municipal coordinators
          the same live picture — and lets a pre-configured playbook do the heavy lifting so the
          operator does not have to type everything during an emergency. Both images below are
          fictional concept visualisations. Click to enlarge.
        </p>

        <figure className="platform-figure" style={{ marginBottom: 'var(--sp-8)' }}>
          <button
            onClick={() => setOverviewOpen(true)}
            style={{ padding: 0, background: 'none', border: 'none', display: 'block', width: '100%' }}
            aria-label="Enlarge image: Concept overview board"
          >
            <img
              className="platform-shot"
              src={overviewImg}
              alt="Fictional concept overview board titled One Platform. Every Response. Safer Together, showing all five platform screens: incident dashboard, risk map, agent orchestration, public alert management and medical rescue coordination"
              loading="lazy"
            />
          </button>
          <figcaption>
            <strong style={{ color: 'var(--white)' }}>Concept overview board</strong>
            <br />
            The five professional platform screens at a glance — incident dashboard, pre-impact
            risk map, agent orchestration, public alert management and medical &amp; rescue
            coordination. Fictional concept visualisation; click to enlarge.
          </figcaption>
        </figure>

        <div className="platform-grid" style={{ marginTop: 'var(--sp-8)' }}>
          {shots.map((shot, i) => (
            <figure className="platform-figure" key={shot.title}>
              <button
                onClick={() => setOpen(i)}
                style={{ padding: 0, background: 'none', border: 'none', display: 'block', width: '100%' }}
                aria-label={`Enlarge image: ${shot.title}`}
              >
                <img className="platform-shot" src={shot.src} alt={shot.alt} loading="lazy" />
              </button>
              <figcaption>
                <strong style={{ color: 'var(--white)' }}>{shot.title}</strong>
                <br />
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid-2" style={{ marginTop: 'var(--sp-8)' }}>
          {shots.map((shot) => (
            <div className="card" key={shot.title}>
              <h3>{shot.title}</h3>
              <ul>
                {shot.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <MiniDashboard />
      </div>

      {overviewOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Concept overview board"
          onClick={() => setOverviewOpen(false)}
        >
          <button className="lightbox-close" aria-label="Close full-screen view" onClick={() => setOverviewOpen(false)}>
            ×
          </button>
          <img
            src={overviewImg}
            alt="Fictional concept overview board showing all five professional platform screens"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-caption">
            Concept overview board — fictional concept visualisation. Click anywhere or press Escape to close.
          </p>
        </div>
      )}

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={shots[open].title}
          onClick={() => setOpen(null)}
        >
          <button className="lightbox-close" aria-label="Close full-screen view" onClick={() => setOpen(null)}>
            ×
          </button>
          <img
            src={shots[open].src}
            alt={shots[open].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-caption">
            {shots[open].title} — fictional concept visualisation. Click anywhere or press Escape to close.
          </p>
        </div>
      )}
    </section>
  )
}

const playbookLog = [
  { agent: 'SHIP AGENT', text: 'Loss of manoeuvrability reported, 1.9 nm from Flåm harbour.' },
  { agent: 'MAIN AGENT', text: 'Flåm collision-risk scenario F-03 activated from pre-approved playbook.' },
  { agent: 'RISK AGENT', text: 'Impact, danger and warning zones loaded. ~2,843 people in area (simulated).' },
  { agent: 'RESPONSE AGENT', text: 'Police, fire, medical, hospital, helicopter agents notified.' },
  { agent: 'HOSPITAL AGENT', text: '3 hospitals on standby — 215 beds freed (simulated).' },
  { agent: 'PUBLIC AGENT', text: 'Pre-approved evacuation alert prepared in 12 languages.' },
  { agent: 'AUDIT AGENT', text: 'All actions logged with timestamps.' },
]

function MiniDashboard() {
  const [secondsLeft, setSecondsLeft] = useState(15 * 60)
  const [running, setRunning] = useState(false)
  const [logCount, setLogCount] = useState(0)

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      setSecondsLeft((s) => (s <= 0 ? 0 : s - 5)) // accelerated simulated clock: 1s = 5s
    }, 1000)
    return () => window.clearInterval(id)
  }, [running])

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      setLogCount((c) => (c >= playbookLog.length ? c : c + 1))
    }, 1200)
    return () => window.clearInterval(id)
  }, [running])

  const reset = () => {
    setRunning(false)
    setSecondsLeft(15 * 60)
    setLogCount(0)
  }

  const mmss = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
  const evacPct = Math.min(96, Math.round(((15 * 60 - secondsLeft) / (15 * 60)) * 130))

  return (
    <div className="mini-dash" aria-label="Interactive mini dashboard demonstration">
      <div className="mini-dash-bar">
        <span>⚠ POSSIBLE SHIP COLLISION — FICTIONAL DEMO</span>
        <span className="countdown">Time to possible impact: {mmss(secondsLeft)}</span>
      </div>
      <div className="mini-dash-body">
        <div className="stat-tiles">
          <div className="stat-tile">
            <div className="label">Incident severity</div>
            <div className="value value-critical">CRITICAL</div>
          </div>
          <div className="stat-tile">
            <div className="label">People in danger zone</div>
            <div className="value value-critical">2,843</div>
          </div>
          <div className="stat-tile">
            <div className="label">Evacuation progress</div>
            <div className="value value-safe">{evacPct}%</div>
            <div className="progress" aria-hidden="true">
              <div style={{ width: `${evacPct}%` }} />
            </div>
          </div>
          <div className="stat-tile">
            <div className="label">Hospitals on standby</div>
            <div className="value value-safe">3</div>
          </div>
          <div className="stat-tile">
            <div className="label">Helicopters available</div>
            <div className="value value-safe">2</div>
          </div>
          <div className="stat-tile">
            <div className="label">Responders on scene</div>
            <div className="value">128</div>
          </div>
        </div>
        <div className="command-demo">
          <div>
            <strong style={{ color: 'var(--white)' }}>Fictional operator command</strong>
            <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--slate-400)', marginBottom: 'var(--sp-2)' }}>
              One sentence activates a pre-approved playbook. Nothing here is real.
            </p>
          </div>
          <code>&quot;Boat alert. Possible collision. 15 minutes. Activate Flåm scenario.&quot;</code>
          <button
            className="btn btn-primary btn-small"
            onClick={() => {
              reset()
              setRunning(true)
            }}
          >
            ▶ Run pre-approved playbook (simulated)
          </button>
          <button className="btn btn-secondary btn-small" onClick={reset}>
            Reset
          </button>
          <ul className="orchestr-log" aria-live="polite">
            {playbookLog.slice(0, logCount).map((l) => (
              <li key={l.agent}>
                <strong>{l.agent}</strong> — {l.text}
              </li>
            ))}
            {logCount === 0 && <li>Waiting for command…</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
