import './Features.css'

interface Feature {
  icon: string
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Blixtsnabb',
    description: 'Optimerad för hastighet med hot module replacement och instant builds.',
    color: 'var(--color-warning)'
  },
  {
    icon: '🛡️',
    title: 'Typsäker',
    description: 'Full TypeScript-support med intelligent autokomplettering och felkontroll.',
    color: 'var(--color-accent)'
  },
  {
    icon: '🎨',
    title: 'Modern Design',
    description: 'Vackra komponenter och stilar som följer de senaste designtrenderna.',
    color: 'var(--color-success)'
  },
  {
    icon: '📦',
    title: 'Lätt att använda',
    description: 'Minimal konfiguration med smarta standardinställningar. Börja koda direkt.',
    color: '#8be9fd'
  },
  {
    icon: '🔧',
    title: 'Flexibel',
    description: 'Anpassa allt efter dina behov med kraftfulla plugins och utökningar.',
    color: '#bd93f9'
  },
  {
    icon: '🚀',
    title: 'Produktionsklar',
    description: 'Optimerad build för produktion med code splitting och tree shaking.',
    color: '#ff79c6'
  }
]

function Features() {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <span className="features-label">Funktioner</span>
          <h2 className="features-title">Allt du behöver för att bygga</h2>
          <p className="features-description">
            Kraftfulla verktyg och funktioner som hjälper dig att skapa 
            fantastiska applikationer snabbare än någonsin.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="feature-icon"
                style={{ '--feature-color': feature.color } as React.CSSProperties}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
