models_list = [
{"name": "Logistic Regression", "model": LogisticRegression()},
{"name": "KNN", "model": KNeighborsClassifier()},
{"name": "Random Forest", "model": RandomForestClassifier()},
{"name": "Tuned KNN", "model": knn}, # KNN with n_neighbors=11
{"name": "RandomizedSearchCV Logistic Regression", "model": rs_log_reg},
{"name": "RandomizedSearchCV Random Forest", "model": rs_rf},
{"name": "GridSearchCV Logistic Regression", "model": gs_log_reg}
]

# Create an environment `python3 -m venv <env name>`

# Activate the env `<env name>\Scripts\activate`

# Install dependencies `pip install numpy pandas scikit-learn`

# Deactivate the env `deactivate`
