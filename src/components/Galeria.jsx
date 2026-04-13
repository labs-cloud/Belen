import { useEffect, useRef } from 'react'
import './Galeria.css'

const galleryItems = [
  { id: 1, aspect: 'tall', label: 'En escena', desc: 'Ballet clásico' },
  { id: 2, aspect: 'wide', label: 'Danza aérea', desc: 'Telas y aro' },
  { id: 3, aspect: 'square', label: 'Nuestro estudio', desc: 'Cuenca, Ecuador' },
  { id: 4, aspect: 'square', label: 'Comunidad', desc: 'Lazos que perduran' },
  { id: 5, aspect: 'wide', label: 'Acrobacia', desc: 'Fuerza y equilibrio' },
  { id: 6, aspect: 'tall', label: 'Presentaciones', desc: 'Momentos mágicos' },
  { id: 7, aspect: 'square', label: 'Pequeñas bailarinas', desc: 'Ballet infantil' },
  { id: 8, aspect: 'square', label: 'Pilates', desc: 'Cuerpo y mente' },
]

export default function Galeria() {
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
    <section id="galeria" className="section galeria" ref={sectionRef}>
      <div className="container">
        <div className="accent-line fade-in" />
        <h2 className="section-title fade-in">Galería</h2>
        <p className="section-subtitle fade-in">
          Momentos que capturan la esencia de Avant
        </p>

        <div className="galeria__grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`galeria__item galeria__item--${item.aspect} fade-in`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="galeria__placeholder">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#FDF2F8"/>
                  <circle cx="50" cy="40" r="15" fill="#FCE7F3"/>
                  <path d="M50 58 C35 58 25 70 25 85 L75 85 C75 70 65 58 50 58Z" fill="#FCE7F3"/>
                  <circle cx="50" cy="40" r="8" stroke="#E91E7B" strokeWidth="1" fill="none" opacity="0.4"/>
                </svg>
                <div className="galeria__overlay">
                  <p className="galeria__label">{item.label}</p>
                  <p className="galeria__desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="galeria__instagram fade-in">
          <p>Síguenos para más momentos</p>
          <a
            href="https://instagram.com/avantestudio.cue"
            target="_blank"
            rel="noopener noreferrer"
            className="galeria__instagram-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @avantestudio.cue
          </a>
        </div>
      </div>
    </section>
  )
}
