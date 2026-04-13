import { useEffect, useRef } from 'react'
import './Nosotros.css'

export default function Nosotros() {
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

    const elements = sectionRef.current?.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="section nosotros" ref={sectionRef}>
      <div className="container">
        <div className="accent-line fade-in" />
        <h2 className="section-title fade-in">Nuestro Estudio</h2>
        <p className="section-subtitle fade-in">
          Un espacio donde la danza transforma vidas y crea lazos que perduran
        </p>

        <div className="nosotros__grid">
          <div className="nosotros__story fade-in-left">
            <div className="nosotros__image-placeholder">
              <div className="nosotros__image-inner">
                <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="260" rx="16" fill="#FDF2F8"/>
                  <circle cx="100" cy="90" r="35" fill="#FCE7F3"/>
                  <path d="M100 130 C60 130 50 180 50 210 L150 210 C150 180 140 130 100 130Z" fill="#FCE7F3"/>
                  <circle cx="100" cy="90" r="20" stroke="#E91E7B" strokeWidth="2" fill="none" opacity="0.5"/>
                  <path d="M85 200 L100 170 L115 200" stroke="#E91E7B" strokeWidth="2" fill="none" opacity="0.5"/>
                </svg>
                <span className="nosotros__image-label">Fundadora & Maestra</span>
              </div>
            </div>
          </div>

          <div className="nosotros__text fade-in-right">
            <h3 className="nosotros__heading">La historia de Avant</h3>
            <p>
              Avant nació del sueño de crear un espacio en Cuenca donde la danza sea mucho más que
              técnica y movimiento. Fundado por una instructora joven y apasionada, nuestro estudio
              se ha convertido en un hogar para bailarinas de todas las edades que buscan expresarse,
              crecer y conectar.
            </p>
            <p>
              Cada clase es una oportunidad de descubrir la fuerza interior, la gracia del movimiento
              y la belleza de compartir con otras. Nuestra maestra conecta profundamente con cada una
              de sus alumnas, guiándolas no solo en la técnica sino en su desarrollo personal.
            </p>

            <div className="nosotros__values">
              <div className="nosotros__value">
                <div className="nosotros__value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div>
                  <strong>Confianza</strong>
                  <p>Cada movimiento fortalece la seguridad en ti misma</p>
                </div>
              </div>
              <div className="nosotros__value">
                <div className="nosotros__value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <strong>Comunidad</strong>
                  <p>Un vínculo que se construye entre cada bailarina</p>
                </div>
              </div>
              <div className="nosotros__value">
                <div className="nosotros__value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <strong>Fuerza</strong>
                  <p>Descubre tu poder a través de la danza y el movimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
