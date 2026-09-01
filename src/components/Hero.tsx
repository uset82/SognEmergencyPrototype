import overviewImg from '../assets/platform-overview.png'

export function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section className="hero" id="overview" aria-labelledby="hero-title">
      <div className="container">
        <p className="eyebrow">INN524 · HVL · STUDENT CONCEPT — NOT AN OPERATIONAL EMERGENCY SYSTEM</p>
        <hr className="hero-rule" />
        <h1 id="hero-title">Sogn Emergency Coordination</h1>
        <p className="subtitle">Platform + App Concept Prototype</p>
        <p className="support">
          A student innovation concept exploring how a professional emergency platform, a civilian
          app and a connected network of agents could support preparedness for a possible
          large-vessel collision in Inner Sogn. All data is fictional.
        </p>
        <div className="hero-ctas">
          <a
            className="cta-link"
            href="#platform"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('platform')
            }}
          >
            Explore platform <span className="arr">→</span>
          </a>
          <a
            className="cta-link"
            href="#app"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('app')
            }}
          >
            See civilian app <span className="arr">→</span>
          </a>
        </div>

        <figure className="hero-figure reveal">
          <button
            className="prototype-frame"
            onClick={() => onNavigate('platform')}
            aria-label="Go to the platform prototype exhibition"
            style={{ padding: 0 }}
          >
            <img
              src={overviewImg}
              alt="Concept overview board: the five professional platform screens — incident dashboard, risk map, agent orchestration, public alert management and medical coordination"
            />
          </button>
          <figcaption className="hero-caption">
            <span>Fig. 0 — Complete platform concept</span>
            <span>Inner Sogn, Norway · Fictional scenario</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
