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
                <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="420" rx="20" fill="#FDF2F8"/>
                  {/* Decorative arch */}
                  <path d="M50 400 C50 200 150 50 150 50 C150 50 250 200 250 400" stroke="#FCE7F3" strokeWidth="30" fill="none" strokeLinecap="round"/>
                  {/* Ballerina in croisé pose */}
                  {/* Head with bun */}
                  <circle cx="150" cy="105" r="18" fill="#E91E7B" opacity="0.15"/>
                  <circle cx="150" cy="105" r="18" stroke="#E91E7B" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <circle cx="150" cy="92" r="7" fill="#E91E7B" opacity="0.1" stroke="#E91E7B" strokeWidth="1" />
                  {/* Neck */}
                  <path d="M150 123 L150 140" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
                  {/* Torso */}
                  <path d="M150 140 C150 140 148 170 148 195" stroke="#E91E7B" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
                  {/* Arms - graceful port de bras */}
                  <path d="M150 150 C132 138 110 130 88 140" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                  <path d="M88 140 C82 142 78 146 80 150" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
                  <path d="M150 150 C168 135 192 118 210 105" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                  <path d="M210 105 C214 102 218 100 220 102" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
                  {/* Tutu */}
                  <ellipse cx="148" cy="200" rx="42" ry="12" fill="#E91E7B" opacity="0.08"/>
                  <ellipse cx="148" cy="200" rx="42" ry="12" stroke="#E91E7B" strokeWidth="1" fill="none" opacity="0.2"/>
                  <ellipse cx="148" cy="197" rx="36" ry="8" fill="#E91E7B" opacity="0.05"/>
                  <ellipse cx="148" cy="197" rx="36" ry="8" stroke="#E91E7B" strokeWidth="0.8" fill="none" opacity="0.15"/>
                  {/* Standing leg */}
                  <path d="M148 200 C148 230 146 270 145 310" stroke="#E91E7B" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
                  {/* En pointe foot */}
                  <path d="M145 310 C145 318 144 325 144 332" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
                  <path d="M142 330 L146 335 L144 330" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                  {/* Développé leg extended */}
                  <path d="M150 210 C165 205 190 195 220 178" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                  <path d="M220 178 C224 176 228 175 230 176" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
                  {/* Ribbon details on slippers */}
                  <path d="M142 320 C138 315 134 318 136 322" stroke="#E91E7B" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
                  <path d="M147 320 C150 316 153 319 151 323" stroke="#E91E7B" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
                  {/* Floor reflection */}
                  <ellipse cx="150" cy="345" rx="50" ry="5" fill="#E91E7B" opacity="0.04"/>
                  {/* Sparkle accents */}
                  <circle cx="90" cy="160" r="2" fill="#E91E7B" opacity="0.15"/>
                  <circle cx="210" cy="130" r="1.5" fill="#E91E7B" opacity="0.12"/>
                  <circle cx="120" cy="240" r="1.5" fill="#E91E7B" opacity="0.1"/>
                  <circle cx="195" cy="220" r="2" fill="#E91E7B" opacity="0.1"/>
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
