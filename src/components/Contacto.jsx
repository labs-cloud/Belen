import { useEffect, useRef, useState } from 'react'
import './Contacto.css'

export default function Contacto() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="section contacto" ref={sectionRef}>
      <div className="container">
        <div className="accent-line fade-in" />
        <h2 className="section-title fade-in">Contáctanos</h2>
        <p className="section-subtitle fade-in">
          Estamos listas para recibirte en nuestro estudio
        </p>

        <div className="contacto__grid">
          <div className="contacto__info fade-in">
            <a
              href="https://wa.me/593999999999?text=Hola%2C%20me%20interesa%20información%20sobre%20las%20clases%20en%20Avant"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto__whatsapp"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>

            <div className="contacto__details">
              <div className="contacto__detail">
                <div className="contacto__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <strong>Ubicación</strong>
                  <p>Cuenca, Ecuador</p>
                </div>
              </div>

              <div className="contacto__detail">
                <div className="contacto__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <strong>Horarios de atención</strong>
                  <p>Martes, jueves y sábado</p>
                </div>
              </div>

              <div className="contacto__detail">
                <div className="contacto__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <strong>Instagram</strong>
                  <a href="https://instagram.com/avantestudio.cue" target="_blank" rel="noopener noreferrer" className="contacto__link">
                    @avantestudio.cue
                  </a>
                </div>
              </div>
            </div>

            <div className="contacto__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63832.24889498463!2d-79.04600484!3d-2.90055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd18095fc7e881%3A0xafd08fd090de6f38!2sCuenca%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Avant Estudio en Cuenca, Ecuador"
              />
            </div>
          </div>

          <div className="contacto__form-wrapper fade-in">
            <h3>Envíanos un mensaje</h3>
            {sent ? (
              <div className="contacto__success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <p>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                <button className="contacto__success-btn" onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contacto__form" onSubmit={handleSubmit}>
                <div className="contacto__field">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    value={form.nombre}
                    onChange={e => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="contacto__field">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="contacto__field">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    placeholder="Cuéntanos en qué clases estás interesada..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="contacto__submit">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
