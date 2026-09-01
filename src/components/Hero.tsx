export function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section className="hero" id="overview" aria-labelledby="hero-title">
      <div className="container">
        <span className="pill pill-warning">Student concept prototype — not an operational emergency system</span>
        <h1 id="hero-title">SOGN EMERGENCY COORDINATION</h1>
        <p className="tagline">
          One emergency.
          <br />
          One shared incident picture.
          <br />
          Personal guidance for every person affected.
        </p>
        <p className="support">
          A student innovation concept exploring how a professional emergency platform, a civilian
          mobile app and a connected network of specialised agents could support preparedness for a
          possible large-vessel collision in Inner Sogn. All data, zones and events on this site are
          fictional.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={() => onNavigate('platform')}>
            Explore Platform
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('app')}>
            See Civilian App
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('agents')}>
            View Agent Network
          </button>
        </div>
      </div>
    </section>
  )
}
