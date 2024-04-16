from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class User_table(db.Model):
    __tablename__ = 'user_tables'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Coulmn(db.String)


class Application(db.Model):
    __tablename__ = 'applications'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.column(db.String)
    last_name = db.Column(db.String)
    highest_qualification = db.Column(db.String)
    years_of_experience = db.Coulmn(db.Integer)
    acdemic_qulification = db.Column(db.String)
    work_experience = db.Column(db.String)

class Jobs(db.Model):
    __table__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    job_tittle = db.Column(db.String)
    job_description = db.Coulmn(db.String)
    job_responsibilities = db.Column(db.String)
    job_salary = db.Column(db.Integer)
    


