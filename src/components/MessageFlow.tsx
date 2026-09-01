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
          <div key={i} className={`flow-step side-${s.side} ${i <= step ? 'active' : ''}`}>
            <div className="who">{s.label}</div>
            <p className="msg">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="flow-controls">
        <button className="btn-line" onClick={play}>
          ▶ Play the round trip
        </button>
        <button className="btn-line" onClick={() => setPlaying(false)}>
          ⏸ Pause
        </button>
        <button
          className="btn-line"
          onClick={() => {
            setPlaying(false)
            setStep(0)
          }}
        >
          ↺ Reset
        </button>
        <span className="flow-step-note">
          step {step + 1} / {flowSteps.length}
        </span>
      </div>
    </div>
  )
}
