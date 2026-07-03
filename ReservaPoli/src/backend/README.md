# Backend - Reserva Polideportivo

## Descripción

Backend de la aplicación Reserva Polideportivo construido con Flask y SQLAlchemy.

## Instalación

1. Navega al directorio del backend:
```bash
cd src/backend
```

2. Crea un entorno virtual (opcional pero recomendado):
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instala las dependencias:
```bash
pip install -r requirements.txt
```

## Ejecución

Para iniciar el servidor Flask:

```bash
python app.py
```

El servidor estará disponible en `http://localhost:5000`

## Endpoints

### Salud de la API

- **GET** `/api/health`
  - Verifica que la API esté funcionando

### Pistas

- **GET** `/api/pistas`
  - Obtiene todas las pistas disponibles
  - Respuesta: Lista de pistas con sus detalles

- **GET** `/api/pistas/<id>`
  - Obtiene una pista específica por ID
  - Parámetro: `id` (integer)
  - Respuesta: Detalles de la pista

### Seed (Datos de Prueba)

- **POST** `/api/seed`
  - Puebla la base de datos con datos de ejemplo
  - Nota: Solo funciona si la BD está vacía

## Estructura

- `app.py` - Archivo principal de la aplicación Flask
- `models.py` - Modelos de base de datos (User, Pista)
- `routes.py` - Rutas y endpoints de la API
- `requirements.txt` - Dependencias de Python
