import { useState } from 'react'
import { agents } from '../data/agents'

const byId = (id: string) => agents.find((a) => a.id === id)!

interface Tier {
  id: string
  role: string
  desc: string
  status: string
  main?: boolean
}

const tiers: Tier[] = [
  { id: 'ship', role: 'Ship Agent', desc: 'The vessel\'s structured digital voice — turns a radio call into incident data.', status: 'loss of control reported' },
  { id: 'main', role: 'Main Agent / Orchestrator', desc: 'Matches the incident to a pre-approved playbook and coordinates every other agent.', status: 'Flåm scenario F-03 active', main: true },
  { id: 'risk', role: 'Risk Agent', desc: 'Loads pre-approved impact, danger and warning zones.', status: '2,843 people in area' },
  { id: 'response', role: 'Response Agent', desc: 'Notifies and coordinates the fictional emergency network.', status: 'all responders acknowledged' },
  { id: 'public', role: 'Public Agent', desc: 'Prepares pre-approved alerts — never invents warning text.', status: 'alert prepared, 12 languages' },
  { id: 'citizen', role: 'Citizen Agent', desc: 'One per person: personalises guidance and relays help requests.', status: '1,042 citizens guided' },
  { id: 'port', role: 'Port / Kai Agent', desc: 'Harbour-side eyes: quay status, traffic, mooring.', status: 'harbour closed' },
  { id: 'police', role: 'Police Agent', desc: 'Cordons, traffic, evacuation support.', status: '48 units on scene' },
  { id: 'fire', role: 'Fire Agent', desc: 'Fire and rescue coordination.', status: 'rescue teams staged' },
  { id: 'medical', role: 'Medical Agent', desc: 'Receives and triages simulated help requests.', status: '27 requests received' },
  { id: 'paramedic', role: 'Paramedic Agent', desc: 'Ambulance and paramedic coordination.', status: '76 paramedics on scene' },
  { id: 'hospital', role: 'Hospital Agent', desc: 'Simulated receiving capacity per facility.', status: '3 hospitals on standby' },
  { id: 'helicopter', role: 'Helicopter Agent', desc: 'Rescue helicopter availability and landing sites.', status: '2 helicopters ready' },
  { id: 'maritime', role: 'Maritime Rescue Agent', desc: 'Sea-rescue coordination around the vessel.', status: 'boats monitoring approach' },
  { id: 'municipality', role: 'Municipality Agent', desc: 'Shelters, schools, reception centres.', status: 'Flåm School open' },
  { id: 'resource', role: 'Resource Agent', desc: 'Buses, ferries, NGOs, hotels, volunteers.', status: '5 buses + 2 ferries assigned' },
  { id: 'translation', role: 'Translation Agent', desc: 'Approved alerts in every citizen\'s language.', status: '12 languages ready' },
  { id: 'audit', role: 'Audit Agent', desc: 'Logs every agent decision for later review.', status: 'all actions logged' },
]

export function AgentNetwork() {
  const [selected, setSelected] = useState<string | null>(null)
  const detail = selected ? byId(selected) : null

  return (
    <section className="section" id="agents" aria-labelledby="agents-title">
      <div className="container">
        <p className="eyebrow">Exhibition 02 · The agent system</p>
        <h2 id="agents-title">Agents connect the ecosystem</h2>
        <p className="section-intro">
          The platform and the app are human interfaces. Underneath, specialised agents pass
          structured information — always coordinated by one Main Agent, never inventing policy.
          Select a row for its fictional detail.
        </p>

        <div className="agent-tree">
          {tiers.map((t) => (
            <div key={t.id}>
              <button
                className={`agent-tier is-button ${t.main ? 'tier-main' : ''} ${selected === t.id ? 'selected' : ''}`}
                onClick={() => setSelected(selected === t.id ? null : t.id)}
                aria-expanded={selected === t.id}
              >
                <span className="tier-role">{t.role}</span>
                <span className="tier-desc">{t.desc}</span>
                <span className="tier-status">{t.status}</span>
              </button>
              {selected === t.id && detail && (
                <div className="agent-detail-line">
                  <div>
                    <p className="eyebrow">Input</p>
                    <p>{detail.input}</p>
                    <p className="eyebrow">Output</p>
                    <p>{detail.output}</p>
                  </div>
                  <p className="msg">{detail.exampleMessage}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="section-intro" style={{ marginTop: 'var(--sp-8)', fontSize: 'var(--fs-sm)' }}>
          All statuses are fictional, for the demo scenario only. This prototype does not imply any
          real integration with police, fire, medical services or other authorities.
        </p>
      </div>
    </section>
  )
}
