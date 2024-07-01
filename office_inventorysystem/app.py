from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)

client = MongoClient('mongodb+srv://CyberXTeam:CybeerXPass@officeinventorysystem.mj2id19.mongodb.net/')

db = client['office_inventory_system']

CORS(app)

@app.route('/')
def index():
    return 'Office Inventory System'

@app.route('/signin', methods=['POST'])
def signin():
    if request.method == 'POST':
        data = request.json
        staffId = data.get('staffId')
        password = data.get('password')
        
        user = db['Users'].find_one({'staffId': staffId, 'password': password})
        
        if user:
            return jsonify({'success': True, 'message': 'Login successful'})
        else:
            return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

if __name__ == "__main__":
    app.debug = True
    app.run()
