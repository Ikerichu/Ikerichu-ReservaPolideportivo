function Instalaciones() {
  return (
    <main className="layout-main">
      <section className="content-section">
        <h1>Instalaciones</h1>
        <p>
          Aquí encontrarás todas las instalaciones disponibles para reservar.
          Puedes ver detalles de cada una, horarios disponibles y precios.
        </p>
        
        <div className="installations-list">
          <div className="installation-item">
            <h2>Polideportivo Centro</h2>
            <p>Ubicación: Calle Principal, 123 - Madrid</p>
            <p>Descripción: Instalación completa con pistas de fútbol, tenis, baloncesto y pádel.</p>
          </div>
          
          <div className="installation-item">
            <h2>Polideportivo Norte</h2>
            <p>Ubicación: Avenida del Norte, 456 - Madrid</p>
            <p>Descripción: Centro deportivo moderno con piscina y pistas cubiertas.</p>
          </div>
          
          <div className="installation-item">
            <h2>Polideportivo Sur</h2>
            <p>Ubicación: Plaza del Sur, 789 - Madrid</p>
            <p>Descripción: Instalación especializada en tenis, pádel y bádminton.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Instalaciones
