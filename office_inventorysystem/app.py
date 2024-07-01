from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)

client = MongoClient('mongodb+srv://CyberXTeam:CybeerXPass@officeinventorysystem.mj2id19.mongodb.net/')

db = client['office_inventory_system']

CORS(app)

@app.route('/')
def index():
    return 'Office Inventory System Runnig...'

@app.route('/signin', methods=['POST'])
def signin():
    if request.method == 'POST':
        data = request.json
        staffId = data.get('staffId')
        password = data.get('password')
        
        user = db['Users'].find_one({'staffId': staffId, 'password': password})
        
        if user:
            return jsonify({'success': True, 'message': 'Login successful', 'userId': str(user['_id'])})
        else:
            return jsonify({'success': False, 'message': 'Invalid credentials'}), 401
        
@app.route('/user/<id>', methods=['GET'])
def get_user(id):
    user = db['Users'].find_one({'_id': ObjectId(id)})
    if user:
        return jsonify({'name': user['name'], 'staffId': user['staffId']})
    else:
        return jsonify({'error': 'User not found'}), 404

if __name__ == "__main__":
    app.debug = True
    app.run()

if __name__ == "__main__":
    app.debug = True
    app.run()
