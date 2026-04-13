import { useEffect, useRef } from 'react'
import './Presentaciones.css'

const proxima = {
  titulo: 'La Sirenita',
  fecha: '3 de julio de 2025',
  descripcion: 'Nuestras bailarinas traen a la vida la magia del océano en esta hermosa puesta en escena. Un espectáculo lleno de color, emoción y talento que no te puedes perder.',
}

const pasadas = [
  {
    titulo: 'Show de San Valentín',
    lugar: 'Milenium Plaza Cuenca',
    descripcion: 'Una noche de amor y danza donde nuestras alumnas encantaron al público con coreografías llenas de pasión y elegancia.',
  },
  {
    titulo: 'Talleres Comunitarios',
    lugar: 'Corporación Días Mejores',
    descripcion: 'Llevamos la danza a la comunidad, compartiendo talleres inclusivos que inspiran alegría y conexión a través del movimiento.',
  },
]

export default function Presentaciones() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="presentaciones" className="section presentaciones" ref={sectionRef}>
      <div className="container">
        <div className="accent-line fade-in" />
        <h2 className="section-title fade-in">Presentaciones</h2>
        <p className="section-subtitle fade-in">
          Cada espectáculo es una celebración del talento y la dedicación de nuestras bailarinas
        </p>

        <div className="presentaciones__proxima fade-in">
          <div className="presentaciones__proxima-badge">Próximo espectáculo</div>
          <div className="presentaciones__proxima-content">
            <div className="presentaciones__proxima-visual">
              <div className="presentaciones__proxima-icon">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="38" stroke="#E91E7B" strokeWidth="2" opacity="0.3"/>
                  <circle cx="40" cy="40" r="28" stroke="#E91E7B" strokeWidth="1.5" opacity="0.2"/>
                  <path d="M40 20 C30 25 25 35 30 45 C35 55 45 55 50 45 C55 35 50 25 40 20Z" fill="#FDF2F8" stroke="#E91E7B" strokeWidth="1.5"/>
                  <path d="M35 50 Q40 60 45 50" stroke="#E91E7B" strokeWidth="1.5" fill="none"/>
                  <circle cx="40" cy="35" r="3" fill="#E91E7B" opacity="0.5"/>
                </svg>
              </div>
              <div className="presentaciones__proxima-date">
                <span className="presentaciones__proxima-day">3</span>
                <span className="presentaciones__proxima-month">JUL</span>
                <span className="presentaciones__proxima-year">2025</span>
              </div>
            </div>
            <div className="presentaciones__proxima-info">
              <h3>{proxima.titulo}</h3>
              <p className="presentaciones__proxima-fecha">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {proxima.fecha}
              </p>
              <p className="presentaciones__proxima-desc">{proxima.descripcion}</p>
              <button
                className="presentaciones__proxima-btn"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Reserva tu lugar
              </button>
            </div>
          </div>
        </div>

        <h3 className="presentaciones__past-title fade-in">Presentaciones anteriores</h3>
        <div className="presentaciones__past-grid">
          {pasadas.map((p, i) => (
            <div
              key={p.titulo}
              className="presentaciones__past-card fade-in"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="presentaciones__past-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
              </div>
              <h4>{p.titulo}</h4>
              <p className="presentaciones__past-lugar">{p.lugar}</p>
              <p className="presentaciones__past-desc">{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
