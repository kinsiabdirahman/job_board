from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    applications = db.relationship('Application', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.id}, {self.username}, {self.email}>'

class Application(db.Model, SerializerMixin):
class Application(db.Model, SerializerMixin):
    __tablename__ = 'applications'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    job_id = db.Column(db.Integer, db.ForeignKey('jobs.id'))
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    highest_qualification = db.Column(db.String)
    years_of_experience = db.Column(db.Integer)
    academic_history = db.Column(db.String)
    years_of_experience = db.Column(db.Integer)
    academic_history = db.Column(db.String)
    work_experience = db.Column(db.String)

    def __repr__(self):
        return f'<Application {self.id}, {self.first_name}, {self.last_name}>'

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

    def __repr__(self):
        return f'<Job {self.id}, {self.job_title}>'

# Create tables
# with app.app_context():
#     db.create_all()
