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
