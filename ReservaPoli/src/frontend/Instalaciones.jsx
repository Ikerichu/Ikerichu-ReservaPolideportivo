function Instalaciones() {
  const instalaciones = [
    {
      nombre: 'Polideportivo Centro',
      ubicacion: 'Calle Principal, 123 - Madrid',
      descripcion: 'Instalación completa con pistas de fútbol, tenis, baloncesto y pádel.',
      tipo: 'Multiuso',
      precio: '30 €/h',
      disponible: true,
      servicios: ['Vestuario', 'Parking', 'Cafetería'],
    },
    {
      nombre: 'Polideportivo Norte',
      ubicacion: 'Avenida del Norte, 456 - Madrid',
      descripcion: 'Centro deportivo moderno con piscina y pistas cubiertas.',
      tipo: 'Indoor',
      precio: '35 €/h',
      disponible: true,
      servicios: ['Piscina', 'Spa', 'Salas de fitness'],
    },
    {
      nombre: 'Polideportivo Sur',
      ubicacion: 'Plaza del Sur, 789 - Madrid',
      descripcion: 'Instalación especializada en tenis, pádel y bádminton.',
      tipo: 'Raqueta',
      precio: '25 €/h',
      disponible: false,
      servicios: ['Iluminación nocturna', 'Alquiler de material'],
    },
  ]

  return (
    <main className="layout-main instalaciones-page">
      <section className="content-section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Instalaciones</span>
            <h1>Elige tu pista ideal</h1>
            <p>
              Explora las instalaciones disponibles y selecciona el espacio que mejor
              se adapte a tu deporte y horario.
            </p>
          </div>
          <div className="section-actions">
            <button className="button secondary">Filtrar</button>
            <button className="button primary">Ver disponibilidad</button>
          </div>
        </div>

        <div className="installations-grid">
          {instalaciones.map((instalacion) => (
            <article key={instalacion.nombre} className="installation-card">
              <div className="installation-card__header">
                <div>
                  <h2>{instalacion.nombre}</h2>
                  <p className="installation-location">{instalacion.ubicacion}</p>
                </div>
                <span className={`badge ${instalacion.disponible ? 'badge--available' : 'badge--unavailable'}`}>
                  {instalacion.disponible ? 'Disponible' : 'No disponible'}
                </span>
              </div>

              <p className="installation-description">{instalacion.descripcion}</p>

              <div className="installation-meta">
                <span>{instalacion.tipo}</span>
                <span>{instalacion.precio}</span>
              </div>

              <div className="installation-tags">
                {instalacion.servicios.map((servicio) => (
                  <span key={servicio} className="tag">{servicio}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Instalaciones
