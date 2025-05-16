import sys
import os

# Add the parent of the current file's directory (which is src/)
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from database_Classes.projects import Projects
from flask import request, jsonify
from config import app, db
from datetime import date

@app.route('/projects', methods=['GET'])
def get_projects():
    projects = Projects.query.all()
    json_projects = list(map(lambda project: project.to_json(), projects))
    return jsonify(json_projects), 200

@app.route('/update_project,projects', methods=['PATCH'])
def update_project():
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

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)