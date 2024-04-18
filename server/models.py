#from flask import Flask
#from flask_sqlalchemy import SQLAlchemy
#from sqlalchemy_serializer import SerializerMixin

#from app import db 

#app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#db = SQLAlchemy(app)

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin


db= SQLAlchemy()


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)  # Ensure email is unique
    password = db.Column(db.String)  # Add password field


class Application(db.Model, SerializerMixin):
    __tablename__ = 'applications'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    highest_qualification = db.Column(db.String)
    years_of_experience = db.Column(db.Integer)
    academic_history = db.Column(db.String)
    work_experience = db.Column(db.String)

class Job(db.Model, SerializerMixin):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    job_title = db.Column(db.String)
    job_description = db.Column(db.String)
    job_responsibilities = db.Column(db.String)
    job_salary = db.Column(db.Integer)

# Create tables
#with app.app_context():
#    db.create_all()
