import { useEffect, useState } from 'react'
import dashboardImg from '../assets/platform-dashboard.png'
import preimpactImg from '../assets/platform-preimpact.png'

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
    title: 'Prototype 2 — 15-Minute Pre-Impact View',
    alt: 'Fictional pre-impact dashboard showing ETA to impact zone, vessel information, recommended pre-approved response playbook and quick decision actions',
    caption:
      'The pre-impact decision view: time to possible impact, ship status, the recommended pre-approved playbook and one-tap decision controls.',
    details: [
      'Time to possible impact: 15 minutes (simulated countdown)',
      'Ship status: loss of manoeuvrability, likely',
      'Recommended response comes from the pre-approved Flåm evacuation plan v3.2',
      'Decision controls: activate response, send public alert, notify medical network',
      'Safe-zone confirmation and responder activation',
      'Population at risk, harbour status, visibility — all simulated',
    ],
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
