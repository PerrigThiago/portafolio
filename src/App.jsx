import { useState } from 'react'
import Navbar from './components/Navbar'
import Inicio from './sections/Inicio'
import SobreMi from './sections/SobreMi'
import Proyectos from './sections/Proyectos'
import Contacto from './sections/Contacto'

export default function App() {
  const [active, setActive] = useState('inicio')

  const handleNavigate = (id) => {
    setActive(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar active={active} onNavigate={handleNavigate} />

      {active === 'inicio'    && <Inicio onNavigate={handleNavigate} />}
      {active === 'sobre-mi' && <SobreMi />}
      {active === 'proyectos' && <Proyectos />}
      {active === 'contacto'  && <Contacto />}
    </>
  )
}