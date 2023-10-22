from flask import Flask, request, jsonify
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

@app.route("/points", methods = ["GET"])
def points():
    if request.method == "GET":
        points = json.loads(read_file("./storage/points.json"))
        response = jsonify(points)
        configure_cors(response, "http://localhost:3000", "GET", "Content-Type")
        return response

if __name__ == "__main__":
    app.run(debug=True)