import { useEffect, useState } from 'react'
import { timeline } from '../data/scenario'

export function ScenarioTimeline() {
  const [stage, setStage] = useState(-1) // -1 = not started
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => {
      setStage((s) => {
        if (s >= timeline.length - 1) {
          setPlaying(false)
          return timeline.length - 1
        }
        return s + 1
      })
    }, 2600)
    return () => window.clearInterval(id)
  }, [playing])

  const reset = () => {
    setPlaying(false)
    setStage(-1)
  }

  const started = stage >= 0
  const finished = stage >= timeline.length - 1
  const currentT = started ? timeline[stage].t : 'T-15'

  return (
    <div>
      <div className="scenario-controls" style={{ alignItems: 'center' }}>
        <div className="scenario-countdown" aria-live="off">
          {finished ? 'T-0' : currentT}
        </div>
        <div>
          <strong style={{ color: 'var(--white)' }}>Simulated pre-impact clock</strong>
          <p style={{ margin: 0, fontSize: 'var(--fs-sm)', color: 'var(--slate-400)' }}>
            Fictional demo clock — accelerated and not tied to any real system.
          </p>
        </div>
        <span style={{ flex: 1 }} />
        <button
          className="btn btn-primary btn-small"
          onClick={() => {
            if (finished || stage < 0) setStage(0)
            setPlaying(true)
          }}
        >
          ▶ Play scenario
        </button>
        <button className="btn btn-secondary btn-small" onClick={() => setPlaying(false)}>
          ⏸ Pause
        </button>
        <button className="btn btn-secondary btn-small" onClick={reset}>
          ↺ Reset
        </button>
      </div>

      <ol className="timeline" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {timeline.map((s, i) => (
          <li key={s.t} className={`timeline-stage ${started && i <= stage ? 'active' : ''}`}>
            <div className="t">{s.t}</div>
            <div className="card">
              <h3>{s.title}</h3>
              <p style={{ margin: 0, color: 'var(--slate-300)' }}>{s.description}</p>
              <div className="actors">
                {s.actors.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="agent-note" style={{ marginTop: 'var(--sp-6)' }}>
        This is only a fictional concept scenario for the INN524 student project. It demonstrates
        the full innovation concept in under three minutes and can always be reset.
      </p>
    </div>
  )
}
