from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/points", methods = ["GET"])
def points():
    if request.method == "GET":
        points = [
            {
                "point_name": "point1",
                "id": "1"
            },
            {
                "point_name": "point2",
                "id": "2"
            },
        ]
        response = jsonify(points)
        return response

if __name__ == "__main__":
    app.run(debug=True)