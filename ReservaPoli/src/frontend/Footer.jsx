function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-column">
            <h3>Reserva Polideportivo</h3>
            <p>La plataforma para reservar tus pistas deportivas de forma sencilla.</p>
          </div>
          
          <div className="footer-column">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/reservas">Mis Reservas</a></li>
              <li><a href="/instalaciones">Instalaciones</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacidad</a></li>
              <li><a href="/terms">Términos</a></li>
              <li><a href="/cookies">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Reserva Polideportivo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
