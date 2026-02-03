import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb--1"></div>
        <div className="hero-orb hero-orb--2"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Nytt: Version 2.0 är här
        </div>
        
        <h1 className="hero-title">
          Skapa något
          <span className="hero-title-accent"> extraordinärt</span>
        </h1>
        
        <p className="hero-description">
          Libra är den moderna plattformen för utvecklare som vill bygga snabbare, 
          smartare och mer eleganta lösningar. Upplev framtidens verktyg idag.
        </p>
        
        <div className="hero-actions">
          <button className="hero-btn hero-btn--primary">
            <span>Starta gratis</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="hero-btn hero-btn--secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
            </svg>
            <span>Se demo</span>
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">10K+</span>
            <span className="hero-stat-label">Utvecklare</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-number">50M+</span>
            <span className="hero-stat-label">Byggda projekt</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-number">99.9%</span>
            <span className="hero-stat-label">Upptid</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
