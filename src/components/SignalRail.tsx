import { useEffect, useRef, useState } from 'react'

const stations = [
  { id: 'platform', label: 'SHIP' },
  { id: 'agents', label: 'AGENT' },
  { id: 'flow', label: 'AUTHORITY' },
  { id: 'app', label: 'CIVILIAN' },
]

/**
 * Signature element: a thin route line in the left margin that fills with
 * Pine as the visitor scrolls, with stations that light up as their section
 * passes. Represents information moving SHIP → AGENT → AUTHORITY → CIVILIAN.
 */
export function SignalRail() {
  const fillRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const progress = doc.scrollTop / (doc.scrollHeight - doc.clientHeight)
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${progress})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    stations.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="signal-rail" aria-hidden="true">
      <div className="fill" ref={fillRef} />
      {stations.map((s) => (
        <div
          key={s.id}
          className={`signal-station ${active === s.id ? 'active' : ''}`}
          style={{ top: `${18 + stations.indexOf(s) * 20}%` }}
        >
          <span className="signal-label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
