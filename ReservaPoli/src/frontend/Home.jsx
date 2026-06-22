function Home() {
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
            <a href="/" className="button primary">Reservar ahora</a>
            <a href="/about" className="button secondary">Cómo funciona</a>
          </div>
        </div>
      </section>

      <section className="features">
        <article>
          <h2>Fácil de usar</h2>
          <p>Busca instalaciones, elige tu horario y confirma tu reserva con pocos clics.</p>
        </article>
        <article>
          <h2>Horarios claros</h2>
          <p>Visualiza la disponibilidad de las pistas y evita solapamientos.</p>
        </article>
        <article>
          <h2>Todo en un lugar</h2>
          <p>Gestiona tus reservas desde un solo panel y mantén tus actividades organizadas.</p>
        </article>
      </section>
    </main>
  )
}

export default Home
