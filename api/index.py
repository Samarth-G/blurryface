# from flask import Flask, jsonify

# app = Flask(__name__)

# @app.route("/api/data", methods=['GET'])
# def returnData():
#     return jsonify({
#         'title': "BlurryFace: Blur Faces in Videos",
#         'objects': ["Table", "Chair", "Car"]
#     })

from flask import Flask
app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"