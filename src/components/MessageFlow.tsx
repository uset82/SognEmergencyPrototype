import { useEffect, useState } from 'react'
import { flowSteps } from '../data/scenario'

export function MessageFlow() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => {
      setStep((s) => {
        if (s >= flowSteps.length - 1) {
          setPlaying(false)
          return s
        }
        return s + 1
      })
    }, 1800)
    return () => window.clearInterval(id)
  }, [playing])

  const play = () => {
    if (step >= flowSteps.length - 1) setStep(0)
    setPlaying(true)
  }

  return (
    <div>
      <div className="flow" aria-live="polite">
        {flowSteps.map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={`flow-step side-${s.side} ${i <= step ? 'active' : ''}`}>
              <div className="who">{s.label}</div>
              <p className="msg">{s.text}</p>
            </div>
            {i < flowSteps.length - 1 && (
              <div className="flow-arrow" aria-hidden="true">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flow-controls">
        <button className="btn btn-primary btn-small" onClick={play}>
          ▶ Play round trip
        </button>
        <button className="btn btn-secondary btn-small" onClick={() => setPlaying(false)}>
          ⏸ Pause
        </button>
        <button
          className="btn btn-secondary btn-small"
          onClick={() => {
            setPlaying(false)
            setStep(0)
          }}
        >
          ↺ Reset
        </button>
        <span className="pill pill-info">Step {step + 1} / {flowSteps.length}</span>
      </div>
    </div>
  )
}
