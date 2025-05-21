from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/Projects'
app.config['JWT_SECRET_KEY'] = 'super-secret-key'  # was 'JwT_SECRET_KEY'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#db.init_app(app)
db = SQLAlchemy(app)
jwt = JWTManager(app)
