import { useState } from 'react'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="navbar">
      <a href="#" className="navbar__brand">Reserva Poli</a>
      <nav className="navbar__nav">
        <div className="navbar__left">
          <a href="#">Inicio</a>
          <a href="#">Pistas</a>
          <a href="#">Reservas</a>
        </div>
        <div className="navbar__right">
          {isLoggedIn ? (
            <a className="navbar__auth" href="#">👤 Perfil</a>
          ) : (
            <>
              <a className="navbar__auth" href="#">Iniciar sesión</a>
              <a className="navbar__auth navbar__auth--primary" href="#">Registrarse</a>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
