from flask import Flask

app = Flask(__name__)

@app.route("/points", methods = ["GET"])
def points():
    return "<h1> This page will return points json </h1>"

if __name__ == "__main__":
    app.run(debug=True)