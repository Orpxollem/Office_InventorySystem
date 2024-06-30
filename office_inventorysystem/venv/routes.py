from flask import Flask
from app import app
from venv.models import Staff

@app.route("/signin")
def signin():
    return Staff().signin()