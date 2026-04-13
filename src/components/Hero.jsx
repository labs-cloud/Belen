import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />
      <div className="hero__particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__particle hero__particle--${i + 1}`} />
        ))}
      </div>

      {/* Ballet silhouettes */}
      <div className="hero__ballerina hero__ballerina--left" aria-hidden="true">
        <svg viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Arabesque pose */}
          <circle cx="105" cy="68" r="22" fill="rgba(233,30,123,0.12)" stroke="rgba(233,30,123,0.25)" strokeWidth="1.5"/>
          <path d="M105 90 C105 90 103 130 104 160" stroke="rgba(233,30,123,0.2)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M104 160 C104 180 100 220 85 260" stroke="rgba(233,30,123,0.2)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M104 160 C108 200 115 240 130 260" stroke="rgba(233,30,123,0.18)" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Arms */}
          <path d="M104 110 C85 95 60 85 35 90" stroke="rgba(233,30,123,0.18)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M104 110 C125 95 155 80 175 60" stroke="rgba(233,30,123,0.18)" strokeWidth="2" strokeLinecap="round"/>
          {/* Extended leg back */}
          <path d="M104 160 C120 155 155 140 185 115" stroke="rgba(233,30,123,0.15)" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Tutu hint */}
          <ellipse cx="104" cy="162" rx="28" ry="8" fill="rgba(233,30,123,0.06)" stroke="rgba(233,30,123,0.12)" strokeWidth="1"/>
          {/* Ballet slipper ribbons */}
          <path d="M82 258 C80 262 78 268 82 272" stroke="rgba(233,30,123,0.12)" strokeWidth="1" strokeLinecap="round"/>
          <path d="M88 258 C86 264 84 270 88 274" stroke="rgba(233,30,123,0.12)" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="hero__ballerina hero__ballerina--right" aria-hidden="true">
        <svg viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* En pointe / relevé pose */}
          <circle cx="95" cy="55" r="20" fill="rgba(233,30,123,0.1)" stroke="rgba(233,30,123,0.2)" strokeWidth="1.5"/>
          <path d="M95 75 C95 75 94 115 94 150" stroke="rgba(233,30,123,0.18)" strokeWidth="3" strokeLinecap="round"/>
          {/* Arms raised (5th position) */}
          <path d="M94 105 C78 85 72 65 80 45" stroke="rgba(233,30,123,0.15)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M94 105 C110 85 118 65 110 45" stroke="rgba(233,30,123,0.15)" strokeWidth="2" strokeLinecap="round"/>
          {/* Tutu */}
          <ellipse cx="94" cy="152" rx="30" ry="10" fill="rgba(233,30,123,0.05)" stroke="rgba(233,30,123,0.1)" strokeWidth="1"/>
          {/* Standing leg en pointe */}
          <path d="M94 152 C94 180 93 220 92 260 C92 268 90 275 90 280" stroke="rgba(233,30,123,0.18)" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Pointed foot on pointe */}
          <path d="M90 278 L90 290" stroke="rgba(233,30,123,0.2)" strokeWidth="2" strokeLinecap="round"/>
          {/* Passé leg */}
          <path d="M94 190 C105 185 112 175 108 162" stroke="rgba(233,30,123,0.12)" strokeWidth="2" strokeLinecap="round"/>
          {/* Slipper ribbons */}
          <path d="M87 270 C84 275 82 280 86 284" stroke="rgba(233,30,123,0.1)" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Aerial silk visual */}
      <div className="hero__silk hero__silk--1" aria-hidden="true">
        <svg viewBox="0 0 60 400" fill="none">
          <path d="M30 0 C25 80 15 120 25 200 C35 280 20 340 30 400" stroke="rgba(233,30,123,0.08)" strokeWidth="2" fill="none"/>
          <path d="M30 0 C35 80 45 120 35 200 C25 280 40 340 30 400" stroke="rgba(233,30,123,0.06)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <div className="hero__silk hero__silk--2" aria-hidden="true">
        <svg viewBox="0 0 60 400" fill="none">
          <path d="M30 0 C20 100 40 150 25 250 C10 350 35 380 30 400" stroke="rgba(233,30,123,0.06)" strokeWidth="2" fill="none"/>
          <path d="M30 0 C40 100 20 150 35 250 C50 350 25 380 30 400" stroke="rgba(233,30,123,0.04)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="hero__content">
        <p className="hero__tag">Avant Estudio de Ballet y Danza Aérea</p>
        <h1 className="hero__title">
          Donde la danza<br />
          se vuelve un <span className="hero__accent">vínculo</span>
        </h1>
        <p className="hero__description">
          Ballet, danza aérea, acrobacia y pilates para todas las edades en Cuenca, Ecuador.
          Un espacio donde cada movimiento construye confianza, fuerza y comunidad.
        </p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={() => scrollTo('contacto')}>
            Inscríbete ahora
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={() => scrollTo('clases')}>
            Ver clases
          </button>
        </div>
        <div className="hero__scroll-hint">
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  )
}
