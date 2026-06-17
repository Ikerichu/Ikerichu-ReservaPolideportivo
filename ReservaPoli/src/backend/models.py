from sqlalchemy import Boolean, Column, DateTime, Integer, String, Text, func, Numeric, relationship
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), nullable=False, unique=True, index=True)
    email = Column(String(255), nullable=False, unique=True, index=True)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, nullable=False, default=True)
    is_superuser = Column(Boolean, nullable=False, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
    pista = relationship("Pista", backref="user", uselist=False)

    def serialize(self):
        return f"<User(id={self.id}, username={self.username}, email={self.email}, pista={self.pista})>"


class Pista(Base):
    __tablename__ = "pistas"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(100), nullable=False, index=True)
    tipo = Column(String(50), nullable=False)
    capacidad = Column(Integer, nullable=True)
    precio_por_hora = Column(Numeric(10, 2), nullable=False)
    descripcion = Column(Text, nullable=True)
    disponible = Column(Boolean, nullable=False, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)


    def serialize(self):
        return f"<Pista(id={self.id}, nombre={self.nombre}, tipo={self.tipo})>"
