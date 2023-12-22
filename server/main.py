from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import json

app = Flask(__name__)

CORS(app, resources={
    r"/points/*": {
        "origins" : "http://localhost:3000", 
        "methods": ["GET, POST, OPTIONS"],
        "allow_headers": "Content-Type"
    }
})

def read_file(direct):
    with open(direct, "r") as file:
        return file.read()

def write_file(direct, content):
    with open(direct, "w") as file:
        return file.write(content)

@app.route("/points", methods = ["GET"])
def points():
    if request.method == "GET":
        points = json.loads(read_file("./storage/points.json"))
        response = jsonify(points)
        return response

@app.route("/points/<point_name>", methods = ["GET", "POST", "OPTIONS"])
def point(point_name):
    points = json.loads(read_file("./storage/points.json"))
    point_identify_arr = list(map(lambda point: point["point_name"] == point_name, points))
    if sum(point_identify_arr):
        messages = json.loads(read_file("./storage/messages.json"))
        if not point_name in messages: messages[point_name] = []
        if request.method == "POST":
            messages[point_name].append(request.json)
            write_file("./storage/messages.json", json.dumps(messages, indent=4))
            post_res = make_response({"status_code": 200})
            return post_res
        elif request.method == "GET":
            messages_response = jsonify(messages[point_name])
            return messages_response
        elif request.method == "OPTIONS":
            options_res = make_response()
            return options_res
    else:
        return "page not found"

if __name__ == "__main__":
    app.run(debug=True)