import { useEffect, useRef } from 'react'
import './Galeria.css'

/* Each gallery item gets a unique ballet-themed SVG illustration */
function BalletScene({ type }) {
  const scenes = {
    ballet: (
      <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="galeria__svg">
        <rect width="300" height="400" fill="#FDF2F8"/>
        {/* Ballerina in arabesque */}
        <circle cx="140" cy="130" r="16" fill="#FCE7F3" stroke="#E91E7B" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="140" cy="118" r="6" fill="#E91E7B" opacity="0.1"/>
        <path d="M140 146 L140 200" stroke="#E91E7B" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M140 170 C120 155 95 150 75 158" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.3"/>
        <path d="M140 170 C160 152 185 135 210 125" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.3"/>
        <ellipse cx="140" cy="203" rx="32" ry="9" fill="#E91E7B" opacity="0.06" stroke="#E91E7B" strokeWidth="1" opacity="0.15"/>
        <path d="M140 203 C140 230 138 265 136 295" stroke="#E91E7B" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M140 210 C165 200 195 185 225 165" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        {/* Barre */}
        <line x1="20" y1="220" x2="280" y2="220" stroke="#E91E7B" strokeWidth="1.5" opacity="0.1"/>
        {/* Mirror reflection hint */}
        <rect x="30" y="80" width="240" height="180" rx="4" stroke="#E91E7B" strokeWidth="0.5" opacity="0.08" fill="none"/>
        {/* Sparkles */}
        <circle cx="80" cy="120" r="2" fill="#E91E7B" opacity="0.12"/>
        <circle cx="220" cy="150" r="2.5" fill="#E91E7B" opacity="0.1"/>
        <circle cx="190" cy="280" r="1.5" fill="#E91E7B" opacity="0.08"/>
      </svg>
    ),
    aerial: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="galeria__svg">
        <rect width="400" height="200" fill="#FDF2F8"/>
        {/* Aerial silks from top */}
        <path d="M180 0 C175 40 165 60 170 90 C175 120 160 150 170 200" stroke="#E91E7B" strokeWidth="3" opacity="0.15" fill="none"/>
        <path d="M220 0 C225 40 235 60 230 90 C225 120 240 150 230 200" stroke="#E91E7B" strokeWidth="3" opacity="0.15" fill="none"/>
        {/* Dancer wrapped in silks */}
        <circle cx="200" cy="75" r="12" fill="#E91E7B" opacity="0.12" stroke="#E91E7B" strokeWidth="1.5" opacity="0.3"/>
        <path d="M200 87 L200 120" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M200 100 C185 90 175 85 168 90" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M200 100 C215 88 228 78 232 72" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M200 120 C195 140 188 155 180 170" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M200 120 C208 138 218 148 228 150" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        {/* Fabric draping around */}
        <path d="M175 50 C185 70 195 85 188 110 C180 135 190 155 185 180" stroke="#E91E7B" strokeWidth="2" opacity="0.1" fill="none"/>
        {/* Small sparkles */}
        <circle cx="160" cy="60" r="1.5" fill="#E91E7B" opacity="0.15"/>
        <circle cx="245" cy="95" r="2" fill="#E91E7B" opacity="0.1"/>
        <circle cx="150" cy="140" r="1.5" fill="#E91E7B" opacity="0.08"/>
      </svg>
    ),
    studio: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="galeria__svg">
        <rect width="200" height="200" fill="#FDF2F8"/>
        {/* Studio interior - barre and mirror */}
        <rect x="15" y="30" width="170" height="110" rx="3" stroke="#E91E7B" strokeWidth="1" opacity="0.12" fill="#FCE7F3"/>
        {/* Barre */}
        <line x1="10" y1="105" x2="190" y2="105" stroke="#E91E7B" strokeWidth="2.5" opacity="0.2" strokeLinecap="round"/>
        <line x1="30" y1="105" x2="30" y2="150" stroke="#E91E7B" strokeWidth="1.5" opacity="0.12"/>
        <line x1="170" y1="105" x2="170" y2="150" stroke="#E91E7B" strokeWidth="1.5" opacity="0.12"/>
        {/* Floor */}
        <line x1="0" y1="165" x2="200" y2="165" stroke="#E91E7B" strokeWidth="0.5" opacity="0.1"/>
        {/* Small dancer at barre */}
        <circle cx="100" cy="82" r="8" fill="#E91E7B" opacity="0.1" stroke="#E91E7B" strokeWidth="1" opacity="0.2"/>
        <path d="M100 90 L100 115" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M100 105 L115 100" stroke="#E91E7B" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
        <path d="M100 115 L95 140" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M100 115 L108 138" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        {/* Window light */}
        <rect x="140" y="40" width="30" height="40" rx="2" fill="#E91E7B" opacity="0.03"/>
      </svg>
    ),
    community: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="galeria__svg">
        <rect width="200" height="200" fill="#FDF2F8"/>
        {/* Group of dancers */}
        {[60, 100, 140].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={75 + i * 5} r={9 - i} fill="#E91E7B" opacity={0.08 + i * 0.03} stroke="#E91E7B" strokeWidth="1" opacity="0.2"/>
            <path d={`M${x} ${85 + i * 5} L${x} ${115 + i * 3}`} stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
            <path d={`M${x} ${100 + i * 4} L${x - 12} ${92 + i * 4}`} stroke="#E91E7B" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
            <path d={`M${x} ${100 + i * 4} L${x + 12} ${92 + i * 4}`} stroke="#E91E7B" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
            <path d={`M${x} ${115 + i * 3} L${x - 8} ${145 + i * 2}`} stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
            <path d={`M${x} ${115 + i * 3} L${x + 8} ${145 + i * 2}`} stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
          </g>
        ))}
        {/* Connecting arcs */}
        <path d="M70 95 C80 85 90 85 100 95" stroke="#E91E7B" strokeWidth="0.8" fill="none" opacity="0.1"/>
        <path d="M110 100 C120 90 130 90 140 100" stroke="#E91E7B" strokeWidth="0.8" fill="none" opacity="0.1"/>
        {/* Hearts */}
        <path d="M100 60 C97 55 90 55 90 60 C90 65 100 72 100 72 C100 72 110 65 110 60 C110 55 103 55 100 60Z" fill="#E91E7B" opacity="0.08"/>
      </svg>
    ),
    acrobatics: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="galeria__svg">
        <rect width="400" height="200" fill="#FDF2F8"/>
        {/* Handstand figure */}
        <circle cx="150" cy="155" r="10" fill="#E91E7B" opacity="0.1" stroke="#E91E7B" strokeWidth="1.5" opacity="0.25"/>
        <path d="M150 145 L150 100" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M150 100 L140 70" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M150 100 L160 70" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M140 70 L138 58" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M160 70 L162 58" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M150 120 L135 115" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M150 120 L165 115" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        {/* Acro pair */}
        <circle cx="260" cy="140" r="10" fill="#E91E7B" opacity="0.1" stroke="#E91E7B" strokeWidth="1" opacity="0.2"/>
        <path d="M260 150 L260 180" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
        <path d="M260 165 L245 158" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
        <path d="M260 165 L275 155" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
        {/* Person on top */}
        <circle cx="260" cy="105" r="8" fill="#E91E7B" opacity="0.08" stroke="#E91E7B" strokeWidth="1" opacity="0.18"/>
        <path d="M260 113 L260 132" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
        <path d="M260 120 L248 112" stroke="#E91E7B" strokeWidth="1" strokeLinecap="round" opacity="0.15"/>
        <path d="M260 120 L272 112" stroke="#E91E7B" strokeWidth="1" strokeLinecap="round" opacity="0.15"/>
        {/* Motion lines */}
        <path d="M120 90 C125 85 130 88" stroke="#E91E7B" strokeWidth="0.8" fill="none" opacity="0.1"/>
        <path d="M175 85 C180 80 185 83" stroke="#E91E7B" strokeWidth="0.8" fill="none" opacity="0.1"/>
      </svg>
    ),
    performance: (
      <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="galeria__svg">
        <rect width="300" height="400" fill="#FDF2F8"/>
        {/* Stage curtains */}
        <path d="M0 0 C10 50 5 100 15 150 C25 200 10 250 20 300 L0 300 Z" fill="#E91E7B" opacity="0.04"/>
        <path d="M300 0 C290 50 295 100 285 150 C275 200 290 250 280 300 L300 300 Z" fill="#E91E7B" opacity="0.04"/>
        <path d="M0 0 L300 0 L280 30 C200 50 100 50 20 30 Z" fill="#E91E7B" opacity="0.05"/>
        {/* Spotlight */}
        <path d="M150 30 L100 350 L200 350 Z" fill="#E91E7B" opacity="0.02"/>
        {/* Dancer on stage */}
        <circle cx="150" cy="180" r="14" fill="#E91E7B" opacity="0.12" stroke="#E91E7B" strokeWidth="1.5" opacity="0.3"/>
        <circle cx="150" cy="168" r="5" fill="#E91E7B" opacity="0.08"/>
        <path d="M150 194 L150 245" stroke="#E91E7B" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
        <path d="M150 215 C130 200 110 195 95 202" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.25"/>
        <path d="M150 215 C170 198 192 188 210 180" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.25"/>
        <ellipse cx="150" cy="248" rx="35" ry="10" fill="#E91E7B" opacity="0.06" stroke="#E91E7B" strokeWidth="1" opacity="0.12"/>
        <path d="M150 248 L145 310" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M150 260 C170 250 188 240 200 228" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.25"/>
        {/* Stage sparkles */}
        <circle cx="80" cy="250" r="2" fill="#E91E7B" opacity="0.15"/>
        <circle cx="220" cy="230" r="2.5" fill="#E91E7B" opacity="0.12"/>
        <circle cx="130" cy="320" r="1.5" fill="#E91E7B" opacity="0.1"/>
        <circle cx="180" cy="160" r="1.5" fill="#E91E7B" opacity="0.1"/>
      </svg>
    ),
    kids: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="galeria__svg">
        <rect width="200" height="200" fill="#FDF2F8"/>
        {/* Two small dancers */}
        {/* Dancer 1 */}
        <circle cx="75" cy="70" r="11" fill="#E91E7B" opacity="0.1" stroke="#E91E7B" strokeWidth="1.2" opacity="0.25"/>
        <path d="M75 81 L75 115" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M75 95 L62 88" stroke="#E91E7B" strokeWidth="1.2" strokeLinecap="round" opacity="0.22"/>
        <path d="M75 95 L88 85" stroke="#E91E7B" strokeWidth="1.2" strokeLinecap="round" opacity="0.22"/>
        <ellipse cx="75" cy="117" rx="18" ry="5" fill="#E91E7B" opacity="0.06"/>
        <path d="M75 117 L70 150" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.28"/>
        <path d="M75 117 L82 148" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.28"/>
        {/* Dancer 2 */}
        <circle cx="130" cy="75" r="10" fill="#E91E7B" opacity="0.08" stroke="#E91E7B" strokeWidth="1.2" opacity="0.22"/>
        <path d="M130 85 L130 118" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.28"/>
        <path d="M130 100 L118 92" stroke="#E91E7B" strokeWidth="1.2" strokeLinecap="round" opacity="0.2"/>
        <path d="M130 100 L142 90" stroke="#E91E7B" strokeWidth="1.2" strokeLinecap="round" opacity="0.2"/>
        <ellipse cx="130" cy="120" rx="16" ry="5" fill="#E91E7B" opacity="0.05"/>
        <path d="M130 120 L125 152" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.25"/>
        <path d="M130 120 L138 150" stroke="#E91E7B" strokeWidth="1.8" strokeLinecap="round" opacity="0.25"/>
        {/* Stars and joy */}
        <path d="M100 55 L102 50 L104 55 L109 55 L105 58 L107 63 L102 60 L97 63 L99 58 L95 55 Z" fill="#E91E7B" opacity="0.1"/>
        <circle cx="55" cy="100" r="1.5" fill="#E91E7B" opacity="0.12"/>
        <circle cx="155" cy="65" r="1.5" fill="#E91E7B" opacity="0.1"/>
      </svg>
    ),
    pilates: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="galeria__svg">
        <rect width="200" height="200" fill="#FDF2F8"/>
        {/* Mat */}
        <rect x="30" y="130" width="140" height="8" rx="4" fill="#E91E7B" opacity="0.08" stroke="#E91E7B" strokeWidth="1" opacity="0.12"/>
        {/* Figure in pilates pose (bridge) */}
        <circle cx="80" cy="100" r="10" fill="#E91E7B" opacity="0.1" stroke="#E91E7B" strokeWidth="1.2" opacity="0.25"/>
        <path d="M80 110 C80 115 85 120 95 122 C105 124 120 124 130 128" stroke="#E91E7B" strokeWidth="2" strokeLinecap="round" opacity="0.3" fill="none"/>
        <path d="M130 128 L140 130" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M95 122 L88 130" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        <path d="M95 122 L100 130" stroke="#E91E7B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
        {/* Arms */}
        <path d="M88 115 L75 125" stroke="#E91E7B" strokeWidth="1.2" strokeLinecap="round" opacity="0.22"/>
        {/* Decorative circles for zen */}
        <circle cx="160" cy="60" r="20" stroke="#E91E7B" strokeWidth="0.8" fill="none" opacity="0.06"/>
        <circle cx="160" cy="60" r="14" stroke="#E91E7B" strokeWidth="0.6" fill="none" opacity="0.05"/>
        <circle cx="160" cy="60" r="8" stroke="#E91E7B" strokeWidth="0.5" fill="none" opacity="0.04"/>
      </svg>
    ),
  }

  return scenes[type] || scenes.ballet
}

const galleryItems = [
  { id: 1, aspect: 'tall', label: 'En escena', desc: 'Ballet clásico', scene: 'ballet' },
  { id: 2, aspect: 'wide', label: 'Danza aérea', desc: 'Telas y aro', scene: 'aerial' },
  { id: 3, aspect: 'square', label: 'Nuestro estudio', desc: 'Cuenca, Ecuador', scene: 'studio' },
  { id: 4, aspect: 'square', label: 'Comunidad', desc: 'Lazos que perduran', scene: 'community' },
  { id: 5, aspect: 'wide', label: 'Acrobacia', desc: 'Fuerza y equilibrio', scene: 'acrobatics' },
  { id: 6, aspect: 'tall', label: 'Presentaciones', desc: 'Momentos mágicos', scene: 'performance' },
  { id: 7, aspect: 'square', label: 'Pequeñas bailarinas', desc: 'Ballet infantil', scene: 'kids' },
  { id: 8, aspect: 'square', label: 'Pilates', desc: 'Cuerpo y mente', scene: 'pilates' },
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
                <BalletScene type={item.scene} />
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
