from flask import Flask, request, jsonify

app = Flask(__name__)

def configure_cors(obj, domain, methods, heads):
    return ( 
        obj.headers.add("Access-Control-Allow-Origin", domain), 
        obj.headers.add("Access-Control-Allow-Methods", methods), 
        obj.headers.add("Access-Control-Allow-Headers", heads) 
    )

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
        configure_cors(response, "http://localhost:3000", "GET", "Content-Type")
        return response

if __name__ == "__main__":
    app.run(debug=True)