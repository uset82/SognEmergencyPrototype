import { useState } from 'react'
import { agents } from '../data/agents'
import type { Agent } from '../data/agents'

const shipRow: string[] = ['ship']
const orchestratorRow: string[] = ['main']
const secondRow: string[] = ['risk', 'response', 'public']
const citizenRow: string[] = ['citizen']
const responderRow = ['port', 'police', 'fire', 'medical', 'paramedic', 'hospital', 'helicopter']
const supportRow = ['maritime', 'municipality', 'resource', 'translation', 'audit']

const byId = (id: string): Agent => agents.find((a) => a.id === id)!

function Node({
  id,
  selected,
  onSelect,
}: {
  id: string
  selected: string | null
  onSelect: (id: string) => void
}) {
  const agent = byId(id)
  const isMain = id === 'main'
  return (
    <button
      className={
        'agent-node' +
        (isMain ? ' node-main' : '') +
        (id === 'medical' || id === 'ship' ? ' node-critical' : '')
      }
      aria-pressed={selected === id}
      onClick={() => onSelect(id)}
    >
      {agent.name}
    </button>
  )
}

function Connector() {
  return <div className="connector" aria-hidden="true" />
}

export function AgentNetwork() {
  const [selected, setSelected] = useState<string | null>('main')
  const agent = selected ? byId(selected) : null

  return (
    <section id="agents" aria-labelledby="agents-title">
      <div className="container">
        <p className="kicker">Agent network</p>
        <h2 id="agents-title">Agents connect the entire ecosystem</h2>
        <p className="section-intro">
          The professional platform and the civilian app are human interfaces. Underneath, a network
          of specialised agents is coordinated by one Main Agent / Orchestrator. Select any agent to
          see its fictional role, inputs, outputs and an example message.
        </p>

        <div className="agent-layout" style={{ marginTop: 'var(--sp-8)' }}>
          <div className="agent-map" role="group" aria-label="Agent architecture map">
            <div className="agent-row">
              <span className="pill pill-info">👤 Human / Captain</span>
            </div>
            <Connector />
            <div className="agent-row">
              {shipRow.map((id) => (
                <Node key={id} id={id} selected={selected} onSelect={setSelected} />
              ))}
            </div>
            <Connector />
            <div className="agent-row">
              {orchestratorRow.map((id) => (
                <Node key={id} id={id} selected={selected} onSelect={setSelected} />
              ))}
            </div>
            <Connector />
            <div className="agent-row">
              {secondRow.map((id) => (
                <Node key={id} id={id} selected={selected} onSelect={setSelected} />
              ))}
            </div>
            <Connector />
            <div className="agent-row">
              {citizenRow.map((id) => (
                <Node key={id} id={id} selected={selected} onSelect={setSelected} />
              ))}
            </div>
            <Connector />
            <div className="agent-row" aria-label="Response branch agents">
              {responderRow.map((id) => (
                <Node key={id} id={id} selected={selected} onSelect={setSelected} />
              ))}
            </div>
            <div className="agent-row" aria-label="Support agents" style={{ marginTop: 'var(--sp-2)' }}>
              {supportRow.map((id) => (
                <Node key={id} id={id} selected={selected} onSelect={setSelected} />
              ))}
            </div>
          </div>

          <div className="agent-detail card" aria-live="polite">
            {agent && (
              <>
                <h3>{agent.name}</h3>
                <p style={{ color: 'var(--slate-300)' }}>{agent.role}</p>
                <dl>
                  <dt>Input</dt>
                  <dd>{agent.input}</dd>
                  <dt>Output</dt>
                  <dd>{agent.output}</dd>
                  <dt>Status</dt>
                  <dd>
                    <span className="pill pill-safe">{agent.status}</span>
                  </dd>
                  <dt className="sr-only">Example message</dt>
                  <dd className="example">{agent.exampleMessage}</dd>
                </dl>
                <p className="agent-note">
                  Fictional status for the demo scenario only. This prototype does not imply any
                  real integration with police, fire, medical services or other authorities.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
