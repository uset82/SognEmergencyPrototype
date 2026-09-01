import { useEffect, useState } from 'react'
import { timeline } from '../data/scenario'

export function ScenarioTimeline() {
  const [stage, setStage] = useState(-1)
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
      <div className="scenario-head">
        <span className={`scenario-countdown ${started ? '' : 'idle'}`}>{finished ? 'T-0' : currentT}</span>
        <p className="section-intro" style={{ margin: 0, fontSize: 'var(--fs-sm)', maxWidth: '40ch' }}>
          Simulated pre-impact clock — accelerated and not tied to any real system.
        </p>
        <span style={{ flex: 1 }} />
        <div className="flow-controls" style={{ margin: 0 }}>
          <button
            className="btn-line"
            onClick={() => {
              if (finished || stage < 0) setStage(0)
              setPlaying(true)
            }}
          >
            ▶ Play
          </button>
          <button className="btn-line" onClick={() => setPlaying(false)}>
            ⏸ Pause
          </button>
          <button className="btn-line" onClick={reset}>
            ↺ Reset
          </button>
        </div>
      </div>

      <ol className="timeline">
        {timeline.map((s, i) => (
          <li key={s.t} className={`timeline-stage ${started && i <= stage ? 'active' : ''}`}>
            <span className="t">{s.t}</span>
            <div>
              <h3>{s.title}</h3>
              <p className="stage-desc">{s.description}</p>
              <div className="actors">
                {s.actors.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
