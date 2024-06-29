from flask import Flask, request, jsonify
import pickle

# Load trained models
knn_model = pickle.load(open('../qa/models/knn_model.pkl', 'rb'))

app = Flask(__name__)

@app.route('/knn', methods=["POST"])
def  predict():
    
    # Todo: Handle Data Formatting at the nodejs server
    data = request.get_json(force=True)
    attrs = list(data["attributes"].keys())
    numeric_attrs = [float(data["attributes"][attr]) for attr in attrs]
    prediction = knn_model.predict([numeric_attrs])
    print(prediction)
    return str(prediction[0])

if __name__ == "__main__":
    app.run(debug=False, port=5000)