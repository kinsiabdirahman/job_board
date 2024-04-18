from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_restful import Resource, Api
from models import db, User, Job, Application
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
import os
import jwt.exceptions

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'secret key'
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'jwt-secret-key')

db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

class UserRegistration(Resource):
    def post(self):
        try:
            data = request.json
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            if not username or not email or not password:
                return {'message': 'Username, email, and password are required'}, 400

            # Check if the username or email already exists
            if User.query.filter_by(username=username).first():
                return {'message': 'Username already exists'}, 400

            if User.query.filter_by(email=email).first():
                return {'message': 'Email already exists'}, 400

            # Hash the password before storing it
            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
            new_user = User(username=username, email=email, password=hashed_password)
            db.session.add(new_user)
            db.session.commit()

            return {'message': 'User created successfully!'}, 201
        except jwt.exceptions.DecodeError as e:
            return {'message': 'Registration failed. Error: {}'.format(str(e))}, 500

class UserLogin(Resource):
    def post(self):
        data = request.json
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            access_token = create_access_token(identity=user.id)
            return {'access_token': access_token}, 200
        else:
            return {'message': 'Invalid username or password'}, 401

class Jobs(Resource):
    def get(self):
        jobs = Job.query.all()
        serialized_jobs = [{'id': job.id, 'job_title': job.job_title, 'job_description': job.job_description, 'job_responsibilities': job.job_responsibilities, 'job_salary': job.job_salary, 'location': job.location} for job in jobs]
        return jsonify(serialized_jobs)


class JobDetails(Resource):
    def get(self, id):
        job = Job.query.get(id)
        if not job:
            return {'message': 'Job not found'}, 404
        serialized_job = {
            'job_title': job.job_title,
            'job_description': job.job_description,
            'job_responsibilities': job.job_responsibilities,
            'job_salary': job.job_salary,
            'location': job.location
        }
        return jsonify(serialized_job)
    
class ApplicationResource(Resource):
    def post(self):
        try:
            data = request.json
            job_id = data.get('job_id')
            user_id = data.get('user_id')
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            highest_qualification = data.get('highest_qualification')
            years_of_experience = data.get('years_of_experience')
            academic_history = data.get('academic_history')
            work_experience = data.get('work_experience')

            # Create a new application instance
            new_application = Application(
                user_id=user_id,
                job_id=job_id,
                first_name=first_name,
                last_name=last_name,
                highest_qualification=highest_qualification,
                years_of_experience=years_of_experience,
                academic_history=academic_history,
                work_experience=work_experience
            )

            # Add the application to the database
            db.session.add(new_application)
            db.session.commit()

            return {'message': 'Application submitted successfully!'}, 201
        except Exception as e:
            return {'message': 'Failed to submit application. Error: {}'.format(str(e))}, 500

api.add_resource(JobDetails, '/job/<int:id>')
api.add_resource(ApplicationResource, '/applications')
api.add_resource(UserRegistration, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(Jobs, '/jobs')



if __name__ == '__main__':
    app.run(debug=True, port=5555)
