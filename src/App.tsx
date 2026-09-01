import { useEffect, useState } from 'react'
import { Hero } from './components/Hero'
import { SignalRail } from './components/SignalRail'
import { PlatformShowcase } from './components/PlatformShowcase'
import { AgentNetwork } from './components/AgentNetwork'
import { CivilianApp } from './components/CivilianApp'
import { MessageFlow } from './components/MessageFlow'
import { ScenarioTimeline } from './components/ScenarioTimeline'
import { PresentationMode } from './components/PresentationMode'

const navItems = [
  { id: 'platform', label: 'Platform' },
  { id: 'agents', label: 'Agents' },
  { id: 'app', label: 'App' },
  { id: 'scenario', label: '15 minutes' },
]

export default function App() {
  const [presenting, setPresenting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('shown')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (presenting) {
    return <PresentationMode onExit={() => setPresenting(false)} />
  }

  return (
    <>
      <SignalRail />

      <header className="site-header">
        <div className="container">
          <span className="wordmark">
            Sogn<em>·</em>EC
          </span>
          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(t.id)
                }}
              >
                {t.label}
              </a>
            ))}
          </nav>
          <button className="btn-line" style={{ fontSize: 'var(--fs-xs)' }} onClick={() => setPresenting(true)}>
            Presentation mode ↗
          </button>
        </div>
      </header>

      <main>
        <Hero onNavigate={navigate} />

        <section className="section" id="problem" aria-labelledby="problem-title">
          <div className="container">
            <div className="problem-grid">
              <div>
                <p className="eyebrow">The problem</p>
                <h2 id="problem-title">A ship that cannot turn, approaching a small harbour</h2>
                <p className="section-intro">
                  A large passenger vessel approaching a kai in Inner Sogn may lose manoeuvrability.
                  In the minutes that follow, sea and land, professionals and civilians, authorities
                  and volunteers all need the same picture — and rarely have it.
                </p>
                <p className="section-intro">
                  The concept: one professional platform, one civilian app, and a network of agents
                  that connects them. This site exhibits the prototype concepts for that idea.
                </p>
              </div>
              <div>
                <p className="eyebrow">Who is involved</p>
                <ul className="actors-list">
                  <li>Ship crew</li>
                  <li>Port / kai</li>
                  <li>Municipality</li>
                  <li>Police</li>
                  <li>Fire and rescue</li>
                  <li>Paramedics</li>
                  <li>Hospitals</li>
                  <li>Rescue helicopters</li>
                  <li>Maritime rescue</li>
                  <li>Public authorities</li>
                  <li>Transport companies</li>
                  <li>NGOs and volunteers</li>
                  <li>Tourists and residents</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <PlatformShowcase />
        <AgentNetwork />
        <CivilianApp />

        <section className="section" id="flow" aria-labelledby="flow-title">
          <div className="container">
            <p className="eyebrow">How it connects</p>
            <h2 id="flow-title">One round trip through the agents</h2>
            <p className="section-intro">
              Communication is bidirectional and always agent-mediated: an operator's command
              becomes a personal warning — and a citizen's help tap becomes a dispatch decision.
            </p>
            <div style={{ marginTop: 'var(--sp-12)' }}>
              <MessageFlow />
            </div>
          </div>
        </section>

        <section className="section" id="scenario" aria-labelledby="scenario-title">
          <div className="container">
            <p className="eyebrow">The scenario</p>
            <h2 id="scenario-title">Fifteen minutes, T-15 to T-1</h2>
            <p className="section-intro">
              A large passenger vessel has lost manoeuvrability while approaching Flåm harbour.
              Play the fictional timeline to see the concept unfold.
            </p>
            <div style={{ marginTop: 'var(--sp-12)' }}>
              <ScenarioTimeline />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p className="foot-brand">Sogn Emergency Coordination</p>
          <p>
            <strong>Disclaimer.</strong> A fictional student concept prototype created for the
            INN524 innovation course at HVL (Western Norway University of Applied Sciences). All
            zones, events, response plans, agent statuses and statistics are invented for
            demonstration. This website is not an emergency service and is not affiliated with any
            authority. In a real emergency, always call the official emergency number in your
            country.
          </p>
        </div>
      </footer>
    </>
  )
}
