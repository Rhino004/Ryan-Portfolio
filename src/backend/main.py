import sys
import os
# Add the parent of the current file's directory (which is src/)
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from database.projects import Projects
from database.user import User
from flask import request, jsonify
from config import app, db
from datetime import date
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash,  generate_password_hash

#projects calls
@app.route('/projects', methods=['GET'])
def get_projects():
    projects = Projects.query.all()
    json_projects = list(map(lambda project: project.to_json(), projects))
    return jsonify(json_projects), 200

@app.route('/update_project,projects', methods=['PATCH'])
def update_project():
    identity = get_jwt_identity()
    if not identity['is_admin']:
        return jsonify({'error': 'Unauthorized'}), 403
    data = request.get_json()
    project = Projects.query.filter_by(id=data['id']).first()
    if not project:
        return jsonify({'error': 'Project not found'}), 404

    project.name = data.get('name', project.name)
    project.description = data.get('description', project.description)
    project.program_language = data.get('program_language', project.program_language)
    project.personal = data.get('personal', project.personal)
    project.team = data.get('team', project.team)
    project.start_date = date.fromisoformat(data.get('start_date', project.start_date.isoformat()))
    project.end_date = date.fromisoformat(data.get('end_date', project.end_date.isoformat())) if data.get('end_date') else None
    project.status = data.get('status', project.status)

    db.session.commit()
    return jsonify(project.to_json()), 200

@app.route('/add_project', methods=['POST'])
def add_project():
    identity = get_jwt_identity()
    if not identity['is_admin']:
        return jsonify({'error': 'Unauthorized'}), 403
    data = request.get_json()
    new_project = Projects(
        name=data['name'],
        description=data['description'],
        program_language=data['program_language'],
        personal=data['personal'],
        team=data['team'],
        start_date=date.fromisoformat(data['start_date']),
        end_date=date.fromisoformat(data['end_date']) if data.get('end_date') else None,
        status=data['status']
    )
    db.session.add(new_project)
    db.session.commit()
    return jsonify(new_project.to_json()), 201
#user calls
@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()
    new_user = User(
        username=data['username'],
        password_hash=generate_password_hash(data['password']),
        is_admin=data['is_admin']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.to_json()), 201

@app.route('/update_user', methods=['PATCH'])
def update_user():
    data = request.get_json()
    user = User.query.filter_by(id=data['id']).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404

    user.username = data.get('username', user.username)
    user.password_hash = data.get('password_hash', user.password_hash)
    user.is_admin = data.get('is_admin', user.is_admin)

    db.session.commit()
    return jsonify(user.to_json()), 200

@app.route('/delete_user', methods=['DELETE'])
def delete_user():
    data = request.get_json()
    user = User.query.filter_by(id=data['id']).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'}), 200

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    json_users = list(map(lambda user: user.to_json(), users))
    return jsonify(json_users), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password_hash, data['password']):
        access_token = create_access_token(identity={'id': user.id, 'is_admin': user.is_admin})
        return jsonify(access_token=access_token), 200
    return jsonify({'msg': 'Invalid credentials'}), 401

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)