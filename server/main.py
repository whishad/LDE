from flask import Flask, request, jsonify, make_response
import json

app = Flask(__name__)

def configure_cors(obj, domain, methods, heads):
    return ( 
        obj.headers.add("Access-Control-Allow-Origin", domain), 
        obj.headers.add("Access-Control-Allow-Methods", methods), 
        obj.headers.add("Access-Control-Allow-Headers", heads) 
    )

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
        configure_cors(response, "http://localhost:3000", "GET", "Content-Type")
        return response

@app.route("/points/<point_name>", methods = ["GET", "POST"])
def point(point_name):
    points = json.loads(read_file("./storage/points.json"))
    point_identify_arr = list(map(lambda point: point["point_name"] == point_name, points))
    if sum(point_identify_arr):
        messages = json.loads(read_file("./storage/messages.json"))
        if not point_name in messages: messages[point_name] = []
        if request.method == "POST":
            messages[point_name].append(request.json)
            write_file("./storage/messages.json", json.dumps(messages, indent=4))
            post_res = make_response({"message": "Success", "status_code": 200})
            configure_cors(post_res, "http://localhost:3000", "POST", "Content-Type")
            return post_res
        elif request.method == "GET":
            messages_response = jsonify(messages[point_name])
            configure_cors(messages_response, "http://localhost:3000", "GET", "Content-Type")
            return messages_response
    else:
        return "page not found"

if __name__ == "__main__":
    app.run(debug=True)