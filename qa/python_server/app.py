from flask import Flask, request, jsonify
import pickle

# Load trained models.
knn_model = pickle.load(open("../models/knn_model.pkl", "rb"))
gs_log_regression_model = pickle.load(open("../models/gs_log_reg_model.pkl", "rb"))
rs_log_regression_model = pickle.load(open("../models/rs_log_reg_model.pkl", "rb"))
rs_random_forest_model = pickle.load(open("../models/rs_rf_model.pkl", "rb"))

app = Flask(__name__)


# Path to handle knn prediction.
@app.route("/python/knn", methods=["POST"])
def predict_knn():
    data = request.get_json(force=True)
    try:
        # Ensure the data is a list of appropriate length
        required_num_of_features = 13
        if len(data) != required_num_of_features:
            return (
                jsonify(
                    {
                        "error": f"Expected {required_num_of_features} features, got {len(data)}"
                    }
                ),
                400,
            )

        prediction = knn_model.predict([data])
        print(prediction[0])
        return str(prediction[0])

    except Exception as e:
        return jsonify({"error": "Error processing data", "details": str(e)}), 400


# Path to handle gridsearch logistic regression prediction.
@app.route("/python/logistic/gs", methods=["POST"])
def predict_log_gs():
    data = request.get_json(force=True)
    try:
        # Ensure the data is a list of appropriate length
        required_num_of_features = 13
        if len(data) != required_num_of_features:
            return (
                jsonify(
                    {
                        "error": f"Expected {required_num_of_features} features, got {len(data)}"
                    }
                ),
                400,
            )

        prediction = gs_log_regression_model.predict([data])
        print(prediction[0])
        return str(prediction[0])

    except Exception as e:
        return jsonify({"error": "Error processing data", "details": str(e)}), 400


# Path to handle random forest logistic regression prediction.
@app.route("/python/logistic/rs", methods=["POST"])
def predict_log_rs():
    data = request.get_json(force=True)
    try:
        # Ensure the data is a list of appropriate length
        required_num_of_features = 13
        if len(data) != required_num_of_features:
            return (
                jsonify(
                    {
                        "error": f"Expected {required_num_of_features} features, got {len(data)}"
                    }
                ),
                400,
            )

        prediction = rs_log_regression_model.predict([data])
        print(prediction[0])
        return str(prediction[0])

    except Exception as e:
        return jsonify({"error": "Error processing data", "details": str(e)}), 400


# Path to handle random forest randomized search prediction.
@app.route("/python/randomforest/rs", methods=["POST"])
def predict_ran_search():
    data = request.get_json(force=True)
    try:
        # Ensure the data is a list of appropriate length
        required_num_of_features = 13
        if len(data) != required_num_of_features:
            return (
                jsonify(
                    {
                        "error": f"Expected {required_num_of_features} features, got {len(data)}"
                    }
                ),
                400,
            )

        prediction = rs_random_forest_model.predict([data])
        print(prediction[0])
        return str(prediction[0])

    except Exception as e:
        return jsonify({"error": "Error processing data", "details": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=False, port=5000)
