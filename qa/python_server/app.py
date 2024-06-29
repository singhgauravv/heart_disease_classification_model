from flask import Flask, request, jsonify
import pickle

# Load trained models.
knn_model = pickle.load(open("../models/knn_model.pkl", "rb"))
gs_log_regression_model = pickle.load(open("../models/gs_log_reg_model.pkl", "rb"))
rs_log_regression_model = pickle.load(open("../models/rs_log_reg_model.pkl", "rb"))
rs_random_forest_model = pickle.load(open("../models/rs_rf_model.pkl", "rb"))

app = Flask(__name__)


def getNumericAttrs(data):
    attrs = list(data["attributes"].keys())
    numeric_attrs = [float(data["attributes"][attr]) for attr in attrs]
    return numeric_attrs


# Path to handle knn prediction.
@app.route("/knn", methods=["POST"])
def predictknn():
    # Todo: Handle Data Formatting at the nodejs server
    data = request.get_json(force=True)
    prediction = knn_model.predict([getNumericAttrs(data)])
    return str(prediction[0])


# Path to handle gridsearch logistic regression prediction.
@app.route("/logistic/gs", methods=["POST"])
def predict_log_gs():
    # Todo: Handle Data Formatting at the nodejs server
    data = request.get_json(force=True)
    prediction = gs_log_regression_model.predict([getNumericAttrs(data=data)])
    return str(prediction[0])


# Path to handle random forest logistic regression prediction.
@app.route("/logistic/rf", methods=["POST"])
def predict_log_rs():
    data = request.get_json(force=True)
    prediction = rs_log_regression_model.predict([getNumericAttrs(data=data)])
    return str(prediction[0])


# Path to handle random forest randomized search prediction.
@app.route("/randsearch/rf", methods=["POST"])
def predict_ran_search():
    data = request.get_json(force=True)
    prediction = rs_random_forest_model.predict([getNumericAttrs(data=data)])
    return str(prediction[0])


if __name__ == "__main__":
    app.run(debug=False, port=5000)
