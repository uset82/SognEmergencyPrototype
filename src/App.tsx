import { useState } from 'react'
import { Hero } from './components/Hero'
import { PlatformShowcase } from './components/PlatformShowcase'
import { AgentNetwork } from './components/AgentNetwork'
import { CivilianApp } from './components/CivilianApp'
import { MessageFlow } from './components/MessageFlow'
import { ScenarioTimeline } from './components/ScenarioTimeline'
import { PresentationMode } from './components/PresentationMode'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'platform', label: 'Professional Platform' },
  { id: 'agents', label: 'Agent Network' },
  { id: 'app', label: 'Civilian App' },
  { id: 'scenario', label: '15-Minute Scenario' },
]

export default function App() {
  const [active, setActive] = useState('overview')
  const [presenting, setPresenting] = useState(false)

  const navigate = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (presenting) {
    return <PresentationMode onExit={() => setPresenting(false)} />
  }

  return (
    <>
      <div className="prototype-banner">
        STUDENT CONCEPT PROTOTYPE · NOT AN OPERATIONAL EMERGENCY SYSTEM · ALL DATA IS FICTIONAL
      </div>

      <header className="site-header">
        <div className="container">
          <span className="brand">
            <span className="brand-badge" aria-hidden="true">⚓</span>
            Sogn Emergency Coordination
          </span>
          <nav className="main-nav" aria-label="Main navigation">
            {tabs.map((t) => (
              <button
                key={t.id}
                aria-current={active === t.id}
                onClick={() => navigate(t.id)}
              >
                {t.label}
              </button>
            ))}
          </nav>
          <button className="presence-btn" onClick={() => setPresenting(true)}>
            🖥 Presentation Mode
          </button>
        </div>
      </header>

      <main>
        <Hero onNavigate={navigate} />
        <PlatformShowcase />
        <AgentNetwork />
        <CivilianApp />

        <section id="connection" aria-labelledby="connection-title">
          <div className="container">
            <p className="kicker">Platform ↔ App</p>
            <h2 id="connection-title">How the platform and the app talk through agents</h2>
            <p className="section-intro">
              Communication is always bidirectional and always agent-mediated. Follow one complete
              round trip: a fictional operator command becomes a personal warning — and a citizen's
              help tap becomes a dispatch decision on the professional dashboard.
            </p>
            <div style={{ marginTop: 'var(--sp-8)' }}>
              <MessageFlow />
            </div>
          </div>
        </section>

        <section id="scenario" aria-labelledby="scenario-title">
          <div className="container">
            <p className="kicker">Fictional demo scenario</p>
            <h2 id="scenario-title">The 15-minute pre-impact timeline</h2>
            <p className="section-intro">
              A large passenger vessel has lost manoeuvrability while approaching Flåm harbour.
              Estimated collision risk window: 15 minutes. Play the timeline to see how the concept
              unfolds from ship warning to final pre-impact alert.
            </p>
            <div style={{ marginTop: 'var(--sp-8)' }}>
              <ScenarioTimeline />
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <div className="container">
            <p className="kicker">Design thinking / prototype status</p>
            <h2 id="about-title">What this is — and what it is not</h2>
            <div className="grid-2" style={{ marginTop: 'var(--sp-6)' }}>
              <div className="card">
                <h3>This prototype</h3>
                <ul style={{ color: 'var(--slate-300)' }}>
                  <li>Communicates an innovation concept for a student project (INN524, HVL)</li>
                  <li>Uses one consistent fictional scenario: Flåm / Inner Sogn</li>
                  <li>Shows how agents could personalise pre-approved information</li>
                  <li>Is meant to be tested and discussed with classmates and stakeholders</li>
                </ul>
              </div>
              <div className="card">
                <h3>This is not</h3>
                <ul style={{ color: 'var(--slate-300)' }}>
                  <li>An operational emergency system</li>
                  <li>Connected to any real authority, hospital, port or rescue service</li>
                  <li>Capable of real alerts, real geofencing or real emergency calls</li>
                  <li>Using any real personal or location data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            <strong>Disclaimer:</strong> Sogn Emergency Coordination is a fictional student concept
            prototype created for the INN524 innovation course at HVL (Western Norway University of
            Applied Sciences). All zones, events, response plans, agent statuses and statistics on
            this site are invented for demonstration purposes. This website is not an emergency
            service and is not affiliated with any authority. In a real emergency, always call the
            official emergency number in your country.
          </p>
        </div>
      </footer>
    </>
  )
}
