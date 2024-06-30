from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/signin', methods=['POST'])
def signin():
    if request.is_json:
        data = request.get_json()
        staff = {
            'staffId': data.get('staffId'),
            'password': data.get('password')
        }
        return jsonify(staff), 200
    return {"error": "Request must be JSON"}, 415

if __name__ == "__main__":
    app.run(port=5000, debug=True)
