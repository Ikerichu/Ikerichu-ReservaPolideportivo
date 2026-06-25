function Home() {
  const sports = [
    { name: 'Fútbol', icon: '⚽' },
    { name: 'Tenis', icon: '🎾' },
    { name: 'Baloncesto', icon: '🏀' },
    { name: 'Bádminton', icon: '🏸' },
    { name: 'Pádel', icon: '🏐' },
    { name: 'Voleibol', icon: '🏐' },
  ];

  return (
    <main className="layout-main home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Reserva Polideportivo</h1>
          <p>
            Organiza tus reservas de pistas de forma rápida y sencilla.
            Consulta horarios, selecciona tu deporte y confirma tu reserva en minutos.
          </p>
          <div className="hero-actions">
            <a href="/" className="button primary">🏆 Reservar ahora</a>
            <a href="/about" className="button secondary">→ Cómo funciona</a>
          </div>
        </div>
      </section>

      <section className="features">
        <article>
          <span className="feature-icon">✨</span>
          <h2>Fácil de usar</h2>
          <p>Busca instalaciones, elige tu horario y confirma tu reserva con pocos clics.</p>
        </article>
        <article>
          <span className="feature-icon">📅</span>
          <h2>Horarios claros</h2>
          <p>Visualiza la disponibilidad de las pistas y evita solapamientos.</p>
        </article>
        <article>
          <span className="feature-icon">📊</span>
          <h2>Todo en un lugar</h2>
          <p>Gestiona tus reservas desde un solo panel y mantén tus actividades organizadas.</p>
        </article>
      </section>

      <section className="sports-section">
        <h2>Deportes disponibles</h2>
        <div className="sports-grid">
          {sports.map((sport) => (
            <div key={sport.name} className="sport-card">
              <span className="sport-emoji">{sport.icon}</span>
              <p>{sport.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-number">2,450+</div>
          <p>Reservas realizadas</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">850+</div>
          <p>Usuarios activos</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <p>Disponibilidad</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para reservar tu pista?</h2>
          <p>Únete a cientos de usuarios que ya disfrutan de la plataforma más fácil de usar.</p>
          <a href="/" className="button primary large">Comenzar ahora</a>
        </div>
      </section>
    </main>
  )
}

export default Home
