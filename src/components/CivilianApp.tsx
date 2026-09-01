import { useState } from 'react'
import { screens, helpOptions } from '../data/civilian'
import type { ScreenId } from '../data/civilian'

function PhoneScreen({ screen, onNavigate }: { screen: ScreenId; onNavigate: (s: ScreenId) => void }) {
  switch (screen) {
    case 'alert':
      return (
        <>
          <div className="app-alert">
            <h3>🚨 EMERGENCY ALERT</h3>
            <p style={{ margin: 0 }}>Possible vessel collision near Flåm harbour.</p>
          </div>
          <p className="app-screen-title" style={{ fontWeight: 800, color: 'var(--warning)' }}>
            YOU ARE INSIDE THE AFFECTED AREA
          </p>
          <button className="app-btn app-btn-primary" onClick={() => onNavigate('route')}>
            GO TO SAFETY
          </button>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('help')}>
            I NEED HELP
          </button>
          <p className="app-footer">Loud alarm + vibration concept. Simulated alert, 14:45.</p>
        </>
      )
    case 'route':
      return (
        <>
          <h3 className="app-screen-title">YOU → SAFE AREA</h3>
          <div className="app-map" role="img" aria-label="Simplified fictional map showing you, a danger zone, and a safe route to Flåm School">
            <div className="road" style={{ left: 0, right: 0, top: 90, height: 8 }} />
            <div className="road" style={{ top: 0, bottom: 0, left: 200, width: 8 }} />
            <div className="danger" />
            <div className="you" style={{ left: 60, top: 120 }} />
            <div className="safe-point" style={{ left: 240, top: 30 }} />
            <span className="map-label" style={{ left: 34, top: 140 }}>YOU</span>
            <span className="map-label" style={{ left: 190, top: 10 }}>🏫 FLÅM SCHOOL</span>
            <span className="map-label" style={{ left: 20, top: 165, color: '#ff8a92' }}>DANGER ZONE — AVOID</span>
          </div>
          <p className="app-meta">
            Nearest safe area: <strong>Flåm School</strong>
            <br />
            Distance: <strong>650 m</strong> · Walking: <strong>8 min</strong>
          </p>
          <button className="app-btn app-btn-info" onClick={() => onNavigate('safe')}>
            START SAFE ROUTE
          </button>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('help')}>
            I NEED HELP
          </button>
          <p className="app-footer">Route follows the pre-approved evacuation plan (fictional).</p>
        </>
      )
    case 'help':
      return (
        <>
          <h3 className="app-screen-title">I NEED HELP</h3>
          <p className="app-meta">Choose one — large buttons, minimal reading.</p>
          {helpOptions.map((o) => (
            <button key={o.id} className="app-btn app-btn-primary" onClick={() => onNavigate('location')}>
              {o.icon} {o.label}
            </button>
          ))}
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('alert')}>
            ← BACK
          </button>
        </>
      )
    case 'location':
      return (
        <>
          <h3 className="app-screen-title">SEND YOUR LOCATION?</h3>
          <p className="app-meta">
            Your <strong>simulated</strong> location will be shared with the fictional emergency
            coordination system. No real data is transmitted.
          </p>
          <div className="app-map" role="img" aria-label="Fictional map showing your simulated position">
            <div className="you" style={{ left: 140, top: 80 }} />
            <span className="map-label" style={{ left: 120, top: 100 }}>SIMULATED POSITION</span>
          </div>
          <button className="app-btn app-btn-primary" onClick={() => onNavigate('offline')}>
            📡 SEND HELP SIGNAL
          </button>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('help')}>
            CANCEL
          </button>
          <p className="app-footer">This prototype never places real emergency calls.</p>
        </>
      )
    case 'safe':
      return (
        <>
          <div className="app-alert" style={{ background: 'var(--safe)', color: 'var(--navy-900)' }}>
            <h3 style={{ color: 'var(--navy-900)' }}>✓ YOU ARE OUTSIDE THE DANGER AREA</h3>
          </div>
          <p className="app-meta">
            Follow instructions from on-site personnel.
            <br />
            Latest update: <strong>14:48</strong>
          </p>
          <button className="app-btn app-btn-safe" onClick={() => onNavigate('route')}>
            I AM SAFE — CONFIRM
          </button>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('help')}>
            I NEED HELP
          </button>
          <p className="app-footer">Your confirmation updates the shared incident picture (simulated).</p>
        </>
      )
    case 'offline':
      return (
        <>
          <div className="app-alert" style={{ background: 'var(--warning)', color: 'var(--navy-900)' }}>
            <h3 style={{ color: 'var(--navy-900)' }}>⚠ CONNECTION LIMITED</h3>
          </div>
          <p className="app-meta">
            Last verified update: <strong>14:47</strong>
          </p>
          <p className="app-meta" style={{ textAlign: 'left' }}>
            Follow your last confirmed evacuation route unless instructed otherwise. Help signals
            are queued and sent automatically when connectivity returns.
          </p>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('alert')}>
            ← BACK TO ALERT
          </button>
          <p className="app-footer">Offline-tolerant design concept. Simulated state.</p>
        </>
      )
  }
}

export function CivilianApp() {
  const [screen, setScreen] = useState<ScreenId>('alert')

  return (
    <section id="app" aria-labelledby="app-title">
      <div className="container">
        <p className="kicker">Civilian app</p>
        <h2 id="app-title">WARN → GUIDE → LOCATE → RESCUE</h2>
        <p className="section-intro">
          The civilian app is for residents, tourists, workers, students and passengers. Under
          stress it must be extremely simple. It answers four questions — try the interactive
          prototype on the left.
        </p>

        <div className="four-questions">
          <div className="card">
            <p className="q">1. Am I in danger?</p>
            Clear danger level, simple language, loud-alarm concept.
          </div>
          <div className="card">
            <p className="q">2. Where should I go?</p>
            Nearest safe zone, distance and estimated walking time.
          </div>
          <div className="card">
            <p className="q">3. How do I get there?</p>
            A safe route and the areas to avoid, updated as zones change.
          </div>
          <div className="card">
            <p className="q">4. What if I am injured or trapped?</p>
            One tap sends a help signal with your simulated location to responders.
          </div>
        </div>

        <div className="app-layout" style={{ marginTop: 'var(--sp-12)' }}>
          <div>
            <div className="screen-tabs" role="group" aria-label="Choose app screen">
              {screens.map((s) => (
                <button
                  key={s.id}
                  aria-pressed={screen === s.id}
                  onClick={() => setScreen(s.id)}
                >
                  {s.navLabel}
                </button>
              ))}
            </div>
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-statusbar">
                  <span>14:4{screens.findIndex((s) => s.id === screen) + 3}</span>
                  <span>SOGN SAFE — SIMULATED</span>
                  <span>▮▮▮</span>
                </div>
                <PhoneScreen screen={screen} onNavigate={setScreen} />
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Designed for the worst minute</h3>
              <ul style={{ color: 'var(--slate-300)' }}>
                <li>Emergency notification with loud-alarm concept</li>
                <li>Large buttons, minimal reading required</li>
                <li>Multilingual support via the Translation Agent</li>
                <li>Latest-update timestamp always visible</li>
                <li>Offline / degraded connectivity state with queued help signals</li>
                <li>Help flow: I NEED HELP · I AM INJURED · I AM TRAPPED · I CANNOT WALK · I AM WITH OTHER PEOPLE · I AM SAFE</li>
              </ul>
            </div>
            <p className="agent-note">
              Every screen is a simulation. The prototype never transmits a real location, never
              places a real emergency call and is not connected to any authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
