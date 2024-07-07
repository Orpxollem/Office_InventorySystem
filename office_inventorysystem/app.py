from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)

# Link to Database
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

@app.route('/add_user', methods=['POST'])
def add_user():
    if request.method == 'POST':
        data = request.json
        employeeName = data.get('employeeName')
        employeeID = data.get('employeeID')
        email = data.get('email')
        phoneNumber = data.get('phoneNumber')
        
        employee = db['Employees'].find_one({'emplName': employeeName, 'emplID': employeeID, 'email': email, 'contact': phoneNumber})
        
        if employee:
            return jsonify({'success': False, 'message': 'User already exists'}), 409
        else:
            db['Employees'].insert_one({'emplName': employeeName, 'emplID': employeeID, 'email': email, 'contact': phoneNumber})
            return jsonify({'success': True, 'message': 'User added successfully'})
        

@app.route('/update_user', methods=['POST'])
def update_user():
    if request.method == 'POST':
        data = request.json
        employeeName = data.get('employeeName')
        employeeID = data.get('employeeID')
        email = data.get('email')
        phoneNumber = data.get('phoneNumber')
        
        employee = db['Employees'].find_one({'emplID': employeeID})
        
        if employee:
            db['Employees'].update_one({'emplID': employeeID}, {'$set': {'emplName': employeeName, 'email': email, 'contact': phoneNumber}})
            return jsonify({'success': True, 'message': 'User updated successfully'})
        else:
            return jsonify({'success': False, 'message': 'User does not exist'}), 404
        
@app.route('/remove_user', methods=['POST'])
def remove_user():
    if request.method == 'POST':
        data = request.json
        employeeName = data.get('employeeName')
        employeeID = data.get('employeeID')
        
        employee = db['Employees'].find_one({'emplID': employeeID, 'emplName': employeeName})

        if employee:
            db['Employees'].delete_one({'emplName': employeeName, 'emplID': employeeID})
            return jsonify({'success': True, 'message': 'User removed successfully'})
        else:
            return jsonify({'success': False, 'message': 'User does not exist'}), 404


@app.route('/employees', methods=['GET'])
def get_employees():
    employees = list(db['Employees'].find())
    for employee in employees:
        employee['_id'] = str(employee['_id'])
    return jsonify(employees)

if __name__ == "__main__":
    app.debug = True
    app.run()

if __name__ == "__main__":
    app.debug = True
    app.run()
