import { useState } from 'react'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__brand">Reserva Poli</div>
      <nav className="navbar__nav">
        <div className="navbar__left">
          <a href="#">Inicio</a>
          <a href="#">Pistas</a>
          <a href="#">Reservas</a>
        </div>
        <div className="navbar__right">
          {isLoggedIn ? (
            <a href="#">Perfil</a>
          ) : (
            <>
              <a href="#">Login</a>
              <a href="#">Registro</a>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
