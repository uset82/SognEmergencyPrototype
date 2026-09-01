import { useState } from 'react'
import { helpOptions } from '../data/civilian'
import type { ScreenId } from '../data/civilian'

const steps = [
  {
    word: 'Warn',
    text: 'A civilian receives an immediate emergency alert — clear danger level, simple language, loud-alarm concept.',
    screen: 'alert' as ScreenId,
  },
  {
    word: 'Guide',
    text: 'The app identifies the nearest approved safe area, the distance, and the walking time.',
    screen: 'route' as ScreenId,
  },
  {
    word: 'Locate',
    text: 'An injured or trapped person can conceptually send their position with one tap.',
    screen: 'location' as ScreenId,
  },
  {
    word: 'Rescue',
    text: 'Responders receive the simulated help request on the shared picture — and the person can confirm they are safe.',
    screen: 'safe' as ScreenId,
  },
]

function PhoneScreen({ screen, onNavigate }: { screen: ScreenId; onNavigate: (s: ScreenId) => void }) {
  switch (screen) {
    case 'alert':
      return (
        <>
          <div className="app-alert">
            <h3>Emergency alert</h3>
            <p>Possible vessel collision near Flåm harbour.</p>
          </div>
          <p className="app-screen-title">You are inside the affected area</p>
          <button className="app-btn app-btn-primary" onClick={() => onNavigate('route')}>
            Go to safety
          </button>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('help')}>
            I need help
          </button>
          <p className="app-footer">Loud alarm + vibration concept · simulated alert, 14:45</p>
        </>
      )
    case 'route':
      return (
        <>
          <h3 className="app-screen-title">You → safe area</h3>
          <div className="app-map" role="img" aria-label="Simplified fictional map showing you, a danger zone and a safe route to Flåm School">
            <div className="road" style={{ left: 0, right: 0, top: 84, height: 6 }} />
            <div className="road" style={{ top: 0, bottom: 0, left: 200, width: 6 }} />
            <div className="danger" />
            <div className="route" style={{ left: 66, top: 110, width: 190, transform: 'rotate(-38deg)' }} />
            <div className="you" style={{ left: 60, top: 108 }} />
            <div className="safe-point" style={{ left: 240, top: 24 }} />
            <span className="map-label" style={{ left: 32, top: 126 }}>YOU</span>
            <span className="map-label" style={{ left: 186, top: 6 }}>FLÅM SCHOOL</span>
            <span className="map-label" style={{ left: 18, top: 158 }}>DANGER — AVOID</span>
          </div>
          <p className="app-meta">
            Nearest safe area: <strong>Flåm School</strong>
            <br />
            Distance: <strong>650 m</strong> · Walking: <strong>8 min</strong>
          </p>
          <button className="app-btn" onClick={() => onNavigate('safe')}>
            Start safe route
          </button>
          <p className="app-footer">Route from the pre-approved evacuation plan (fictional)</p>
        </>
      )
    case 'help':
      return (
        <>
          <h3 className="app-screen-title">I need help</h3>
          <p className="app-meta">Choose one — large buttons, minimal reading.</p>
          {helpOptions.map((o) => (
            <button key={o.id} className="app-btn app-btn-primary" onClick={() => onNavigate('location')}>
              {o.label}
            </button>
          ))}
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('alert')}>
            Back
          </button>
        </>
      )
    case 'location':
      return (
        <>
          <h3 className="app-screen-title">Send your location?</h3>
          <p className="app-meta">
            Your <strong>simulated</strong> location would be shared with the fictional coordination
            system. No real data is transmitted.
          </p>
          <div className="app-map" role="img" aria-label="Fictional map showing your simulated position">
            <div className="you" style={{ left: 140, top: 76 }} />
            <span className="map-label" style={{ left: 106, top: 96 }}>SIMULATED POSITION</span>
          </div>
          <button className="app-btn app-btn-primary" onClick={() => onNavigate('offline')}>
            Send help signal
          </button>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('help')}>
            Cancel
          </button>
          <p className="app-footer">This prototype never places real emergency calls</p>
        </>
      )
    case 'safe':
      return (
        <>
          <div className="app-alert" style={{ background: 'var(--pine)' }}>
            <h3>You are outside the danger area</h3>
            <p>Follow instructions from on-site personnel.</p>
          </div>
          <p className="app-meta">
            Latest update: <strong>14:48</strong>
          </p>
          <button className="app-btn app-btn-safe" onClick={() => onNavigate('route')}>
            I am safe — confirm
          </button>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('help')}>
            I need help
          </button>
          <p className="app-footer">Your confirmation updates the shared picture (simulated)</p>
        </>
      )
    case 'offline':
      return (
        <>
          <div className="app-alert" style={{ background: 'var(--fjord)' }}>
            <h3>Connection limited</h3>
            <p>Last verified update: 14:47.</p>
          </div>
          <p className="app-meta" style={{ textAlign: 'left' }}>
            Follow your last confirmed evacuation route unless instructed otherwise. Help signals
            are queued and sent automatically when connectivity returns.
          </p>
          <button className="app-btn app-btn-secondary" onClick={() => onNavigate('alert')}>
            Back to alert
          </button>
          <p className="app-footer">Offline-tolerant design concept · simulated state</p>
        </>
      )
  }
}

export function CivilianApp() {
  const [screen, setScreen] = useState<ScreenId>('alert')

  return (
    <section className="section" id="app" aria-labelledby="app-title">
      <div className="container">
        <p className="eyebrow">Exhibition 03 · Civilian app</p>
        <h2 id="app-title">Four answers, nothing else</h2>
        <p className="section-intro">
          The civilian app is for residents, tourists, workers and passengers. Under stress it must
          be extremely simple — so the whole concept fits in four words.
        </p>

        <div className="app-section-grid">
          <div className="app-steps">
            {steps.map((s) => (
              <button
                key={s.word}
                className="app-step"
                style={{ background: 'none', border: 'none', borderBottom: '1px solid var(--stone)', textAlign: 'left', cursor: 'pointer', font: 'inherit', color: 'inherit', width: '100%', padding: 0 }}
                onClick={() => setScreen(s.screen)}
                aria-label={`Show the ${s.word} screen on the phone`}
              >
                <span className="step-word">{s.word}</span>
                <p>{s.text}</p>
              </button>
            ))}
            <p className="section-intro" style={{ marginTop: 'var(--sp-8)', fontSize: 'var(--fs-sm)' }}>
              Try it: each step drives the phone. The app also handles degraded connectivity with
              queued help signals, and every screen is a simulation — no real location or calls.
            </p>
          </div>

          <div>
            <div className="screen-tabs" role="group" aria-label="Choose app screen">
              {(['alert', 'route', 'help', 'location', 'safe', 'offline'] as ScreenId[]).map((id) => (
                <button key={id} aria-pressed={screen === id} onClick={() => setScreen(id)}>
                  {id}
                </button>
              ))}
            </div>
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-statusbar">
                  <span>14:45</span>
                  <span>SOGN SAFE — SIMULATED</span>
                  <span>▮▮▮</span>
                </div>
                <PhoneScreen screen={screen} onNavigate={setScreen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
