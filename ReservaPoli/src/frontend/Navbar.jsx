import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">Reserva Poli</Link>
      <nav className="navbar__nav">
        <div className="navbar__left">
          <Link to="/">Inicio</Link>
          <Link to="/instalaciones">Instalaciones</Link>
          <Link to="#">Reservas</Link>
        </div>
        <div className="navbar__right">
          {isLoggedIn ? (
            <Link className="navbar__auth" to="#">👤 Perfil</Link>
          ) : (
            <>
              <Link className="navbar__auth" to="#">Iniciar sesión</Link>
              <Link className="navbar__auth navbar__auth--primary" to="#">Registrarse</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
