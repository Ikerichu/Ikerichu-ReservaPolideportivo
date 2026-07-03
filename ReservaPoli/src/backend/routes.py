from flask import Blueprint, jsonify, g
from models import Pista

pistas_bp = Blueprint('pistas', __name__, url_prefix='/api')


@pistas_bp.route('/pistas', methods=['GET'])
def get_pistas():
    """
    Obtiene todas las pistas disponibles.
    """
    try:
        db = g.db
        pistas = db.query(Pista).all()
        pistas_list = []
        
        for pista in pistas:
            pistas_list.append({
                'id': pista.id,
                'nombre': pista.nombre,
                'tipo': pista.tipo,
                'capacidad': pista.capacidad,
                'precio_por_hora': float(pista.precio_por_hora),
                'descripcion': pista.descripcion,
                'disponible': pista.disponible,
                'created_at': pista.created_at.isoformat() if pista.created_at else None,
                'updated_at': pista.updated_at.isoformat() if pista.updated_at else None,
            })
        
        return jsonify({
            'success': True,
            'data': pistas_list,
            'total': len(pistas_list)
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@pistas_bp.route('/pistas/<int:pista_id>', methods=['GET'])
def get_pista(pista_id: int):
    """
    Obtiene una pista específica por ID.
    """
    try:
        db = g.db
        pista = db.query(Pista).filter(Pista.id == pista_id).first()
        
        if not pista:
            return jsonify({
                'success': False,
                'error': 'Pista no encontrada'
            }), 404
        
        return jsonify({
            'success': True,
            'data': {
                'id': pista.id,
                'nombre': pista.nombre,
                'tipo': pista.tipo,
                'capacidad': pista.capacidad,
                'precio_por_hora': float(pista.precio_por_hora),
                'descripcion': pista.descripcion,
                'disponible': pista.disponible,
                'created_at': pista.created_at.isoformat() if pista.created_at else None,
                'updated_at': pista.updated_at.isoformat() if pista.updated_at else None,
            }
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500
