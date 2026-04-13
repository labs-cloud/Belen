import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Clases from './components/Clases'
import Presentaciones from './components/Presentaciones'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Clases />
        <Presentaciones />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
