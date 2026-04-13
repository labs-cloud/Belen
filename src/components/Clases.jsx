import { useEffect, useRef } from 'react'
import './Clases.css'

const clases = [
  {
    nombre: 'Ballet',
    descripcion: 'Clases de ballet clásico para niñas y adultas. Desarrolla gracia, postura y disciplina a través de la técnica más hermosa de la danza.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="10" r="5"/>
        <path d="M24 15 L24 30"/>
        <path d="M18 22 L30 22"/>
        <path d="M24 30 L18 42"/>
        <path d="M24 30 L30 38"/>
        <path d="M16 42 L20 42"/>
      </svg>
    ),
    edades: 'Niñas y adultas',
  },
  {
    nombre: 'Danza Aérea',
    descripcion: 'Desafía la gravedad con telas y aro aéreo. Combina fuerza, flexibilidad y arte en cada figura suspendida en el aire.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4 L24 16"/>
        <path d="M20 16 Q24 28 28 16"/>
        <circle cx="24" cy="22" r="4"/>
        <path d="M20 26 L16 38"/>
        <path d="M28 26 L32 38"/>
        <path d="M22 16 C18 20 16 32 18 42"/>
        <path d="M26 16 C30 20 32 32 30 42"/>
      </svg>
    ),
    edades: 'Todas las edades',
  },
  {
    nombre: 'Acrobacia',
    descripcion: 'Parada de manos, acrobacia grupal y figuras que desafían el equilibrio. Trabaja fuerza, coordinación y confianza en equipo.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="38" r="4"/>
        <path d="M24 34 L24 22"/>
        <path d="M18 28 L30 28"/>
        <path d="M20 22 L28 22"/>
        <path d="M22 22 L18 14"/>
        <path d="M26 22 L30 14"/>
        <path d="M16 14 L20 14"/>
        <path d="M28 14 L32 14"/>
      </svg>
    ),
    edades: 'Todas las edades',
  },
  {
    nombre: 'Pilates',
    descripcion: 'Fortalece tu centro, mejora tu postura y encuentra equilibrio entre cuerpo y mente. Ideal como complemento a la danza.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="12" r="4"/>
        <path d="M24 16 L24 28"/>
        <path d="M16 20 L32 24"/>
        <path d="M24 28 L18 40"/>
        <path d="M24 28 L30 40"/>
        <ellipse cx="24" cy="42" rx="14" ry="2" opacity="0.3"/>
      </svg>
    ),
    edades: 'Adultas',
  },
]

const horarios = [
  { dia: 'Martes', hora: '10h00 - 12h00' },
  { dia: 'Jueves', hora: '10h00 - 12h00' },
  { dia: 'Sábado', hora: '15h00 - 17h00' },
]

const precios = [
  { plan: '1 día/semana', precio: '$25', detalle: 'por mes' },
  { plan: '2 días/semana', precio: '$35', detalle: 'por mes', popular: true },
  { plan: '3 días/semana', precio: '$40', detalle: 'por mes' },
  { plan: 'Clase suelta', precio: '$8', detalle: 'por clase' },
]

export default function Clases() {
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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="clases" className="section clases" ref={sectionRef}>
      <div className="container">
        <div className="accent-line fade-in" />
        <h2 className="section-title fade-in">Nuestras Clases</h2>
        <p className="section-subtitle fade-in">
          Todas nuestras clases son multinivel — cada alumna avanza a su propio ritmo
        </p>

        <div className="clases__grid">
          {clases.map((clase, i) => (
            <div
              key={clase.nombre}
              className="clases__card fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="clases__card-icon">
                {clase.icon}
              </div>
              <h3>{clase.nombre}</h3>
              <p className="clases__card-desc">{clase.descripcion}</p>
              <span className="clases__card-badge">{clase.edades}</span>
            </div>
          ))}
        </div>

        <div className="clases__info fade-in">
          <div className="clases__horarios">
            <h3>Horarios</h3>
            <div className="clases__horarios-list">
              {horarios.map(h => (
                <div key={h.dia} className="clases__horario-item">
                  <span className="clases__horario-dia">{h.dia}</span>
                  <span className="clases__horario-hora">{h.hora}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="clases__precios">
            <h3>Precios</h3>
            <div className="clases__precios-grid">
              {precios.map(p => (
                <div key={p.plan} className={`clases__precio-card ${p.popular ? 'clases__precio-card--popular' : ''}`}>
                  {p.popular && <span className="clases__precio-badge">Más popular</span>}
                  <p className="clases__precio-plan">{p.plan}</p>
                  <p className="clases__precio-amount">{p.precio}</p>
                  <p className="clases__precio-detail">{p.detalle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
