from flask import Flask, jsonify, request

class Staff:
    def signin():
        data = request.get_json()
        staff = {
            'staffId': data.get('staffId'),
            'password': data.get('password')
        }
        return jsonify(staff), 200