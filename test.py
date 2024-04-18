#from flask import Flask, jsonify, request
#from flask_jwt_extended import JWTManager, jwt_required, create_access_token
#from flask_sqlalchemy import SQLAlchemy
#from flask_restful import Resource, Api
#from flask_cors import CORS
#import bcrypt
#from models import User
#from flask_migrate import Migrate

#app = Flask(__name__)
#CORS(app) 
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#app.config['SECRET_KEY'] = 'your-secret-key'
#app.config['JWT_SECRET_KEY'] = 'jwt-secret-key'

#jwt = JWTManager(app)
#db = SQLAlchemy(app)
#migrate = Migrate(app, db)

#db.init_app(app)

#api = Api(app)

from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate
from flask_restful import Resource, Api
from models import db, User
#from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token,unset_jwt_cookies
from flask_cors import CORS, cross_origin
from flask_bcrypt import Bcrypt



app = Flask(__name__)
CORS(app, origins='http://localhost:3000')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.json.compact = False

app.secret_key = 'secret key'
app.config['JWT_SECRET_KEY'] = "b'\x03\xa3\x8c\xb3\n\xf4}\x16aFh\xc5'"

db.init_app(app)

migrate = Migrate(app, db)
api = Api(app)
#jwt = JWTManager(app)
#bcrypt = Bcrypt(app)


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
            #hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
            new_user = User(username=username, email=email, password=password)
            db.session.add(new_user)
            db.session.commit()

            return {'message': 'User created successfully!'}, 201
        except Exception as e:
            return {'message': 'Registration failed. Error: {}'.format(str(e))}, 500

#  UserLogin 
class UserLogin(Resource):
    def post(self):
        data = request.json
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()
        if not user or not bcrypt.checkpw(password.encode('utf-8'), user.password):
            return {'message': 'Invalid username or password'}, 401
        # if not user or not bcrypt.checkpw(password.encode('utf-8'), user.password):
        #     return {'message': 'Invalid username or password'}, 401

        #access_token = create_access_token(identity=user.id)
        #return {'access_token': access_token}, 200


api.add_resource(UserRegistration, '/register')
api.add_resource(UserLogin, '/login')

if __name__ == '__main__':
    app.run(debug=True, port=5555)
