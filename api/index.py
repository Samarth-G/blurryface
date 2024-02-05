from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/data")
def returnData():
    return jsonify({
        'title': "BlurryFace: Blur Faces in Videos",
        'objects': ["Table", "Chair", "Car"]
    })