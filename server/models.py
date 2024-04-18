from flask_sqlalchemy import SQLAlchemy
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

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    _tablename_ = 'users'


db= SQLAlchemy()


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    applications = db.relationship('Application', backref='user', lazy=True)

    def _repr_(self):
        return f'<User_table {self.id}, {self.username}, {self._password_hash}>'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)  # Ensure email is unique
    password = db.Column(db.String)  # Add password field


class Application(db.Model, SerializerMixin):
    _tablename_ = 'applications'
class Application(db.Model, SerializerMixin):
    __tablename__ = 'applications'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    job_id = db.Column(db.Integer, db.ForeignKey('jobs.id'))
    first_name = db.Column(db.String)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    highest_qualification = db.Column(db.String)
    years_of_experience = db.Column(db.Integer)
    academic_history = db.Column(db.String)
    years_of_experience = db.Column(db.Integer)
    academic_history = db.Column(db.String)
    work_experience = db.Column(db.String)

    def _repr_(self):
        return f'<Application {self.id}, {self.first_name}, {self.last_name}, {self.highest_qualification}, {self.years_of_experience}, {self.academic_history}, {self.work_experience}, {self.job_id}, {self.user_id}>'


class Job(db.Model, SerializerMixin):
    _tablename_ = 'jobs'
class Job(db.Model, SerializerMixin):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    job_title = db.Column(db.String)
    job_description = db.Column(db.String)
    job_title = db.Column(db.String)
    job_description = db.Column(db.String)
    job_responsibilities = db.Column(db.String)
    job_salary = db.Column(db.Integer)
    applications = db.relationship('Application', backref='job', lazy=True)

    def _repr_(self):
        return f'<Job {self.id}, {self.job_title}, {self.job_description}, {self.job_responsibilities}, {self.job_salary}, {self.application_id}>'

# Create tables
#with app.app_context():
#    db.create_all