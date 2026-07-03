from flask import Flask, g
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from models import Base, Pista
from routes import pistas_bp

# Configurar la aplicación
app = Flask(__name__)
CORS(app)  # Habilitar CORS para acceso desde frontend

# Configurar base de datos
DATABASE_URL = "sqlite:///./polideportivo.db"
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
    echo=True
)

# Crear las tablas
Base.metadata.create_all(bind=engine)

# Crear sesión
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    """Dependencia para obtener la sesión de base de datos."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Middleware para pasar la sesión a las rutas
@app.before_request
def before_request():
    """Inyecta la sesión de BD en cada request."""
    g.db = SessionLocal()


@app.teardown_appcontext
def shutdown_session(exception=None):
    """Cierra la sesión después de cada request."""
    db = g.pop('db', None)
    if db is not None:
        db.close()


# Decorador para inyectar la sesión en las funciones de ruta
def inject_db(f):
    """Decorador para inyectar la sesión en las funciones de ruta."""
    from functools import wraps
    @wraps(f)
    def wrapper(*args, **kwargs):
        return f(*args, db=g.db, **kwargs)
    return wrapper


# Registrar blueprints
app.register_blueprint(pistas_bp)


# Ruta de prueba
@app.route('/api/health', methods=['GET'])
def health():
    """Endpoint de salud de la API."""
    return {'status': 'ok', 'message': 'API funcionando correctamente'}, 200


# Datos de prueba
@app.route('/api/seed', methods=['POST'])
def seed_database():
    """Endpoint para poblar la BD con datos de prueba."""
    db = g.db
    
    try:
        # Verificar si ya existen datos
        if db.query(Pista).first():
            return {'message': 'Base de datos ya tiene datos'}, 200
        
        # Crear pistas de ejemplo
        pistas = [
            Pista(
                nombre='Pista de Fútbol 1',
                tipo='Fútbol',
                capacidad=22,
                precio_por_hora=30.00,
                descripcion='Pista de fútbol 11 con césped natural',
                disponible=True
            ),
            Pista(
                nombre='Pista de Tenis A',
                tipo='Tenis',
                capacidad=4,
                precio_por_hora=25.00,
                descripcion='Pista de tenis con pista de arcilla',
                disponible=True
            ),
            Pista(
                nombre='Pista de Baloncesto',
                tipo='Baloncesto',
                capacidad=12,
                precio_por_hora=20.00,
                descripcion='Pista de baloncesto profesional cubierta',
                disponible=True
            ),
            Pista(
                nombre='Pista de Pádel 1',
                tipo='Pádel',
                capacidad=4,
                precio_por_hora=22.00,
                descripcion='Pista de pádel con iluminación',
                disponible=True
            ),
        ]
        
        db.add_all(pistas)
        db.commit()
        
        return {'message': 'Base de datos poblada con éxito', 'pistas_creadas': len(pistas)}, 201
    except Exception as e:
        db.rollback()
        return {'error': str(e)}, 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
