#!/usr/bin/env python
# coding: utf-8

# # Predict heart disease using machine learning

# Import tools

# EDA (exploratory data analysis) and plotting libraries
import numpy as np
import pandas as pd
import pickle

# Import models from SciKit-Learn
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier

# Model evaluation
from sklearn.model_selection import train_test_split
from sklearn.model_selection import RandomizedSearchCV, GridSearchCV

df = pd.read_csv('../data/heart-disease.csv')

# Split the data into X and y
X = df.drop("target", axis=1)
y= df["target"]

# Split the data train and test sets
np.random.seed(42)
# Split into train and test
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2)

# Choose an appripriate machine learning model(s). Refer https://scikit-learn.org/stable/tutorial/machine_learning_map/
# 1. Logictic Regression
# 2. K-Nearest Neighbors Classifier
# 3. Random Forest Classifier

# Put models in a dictionary
models = {"Logistic Regression": LogisticRegression(),
         "KNN": KNeighborsClassifier(),
         "Random Forest": RandomForestClassifier()}

# Function to fit and score various models
def fit_and_score(models, X_train, X_test, y_train, y_test):
    """
    Fits and evalustes given machine leanring models.
    models: a dict of different SciKit-Learn machien learning models
    X_train: traning data with no labels
    X_test: testing data with no labels
    y_train: training labels
    y_test: test labels
    """

    # Set random seet
    np.random.seed(42)

    # Make a dict to keep model scores
    model_scores = {}

    # loop through the models and perform actions
    for name, model in models.items():
        # Fit the model to the ddata
        model.fit(X_train, y_train)
        # Evaludate the model and append its score to model_scores
        model_scores[name] = model.score(X_test, y_test)
    
    return model_scores


model_scores = fit_and_score(models=models,
              X_train=X_train,
              X_test=X_test,
              y_train=y_train,
              y_test=y_test)

# ### 6. Fine-tuning classification model performance

# Tuning KNN : n_neighbors=11

# Setup KNN instance
knn = KNeighborsClassifier()
knn.set_params(n_neighbors=11)
knn.fit(X_train, y_train)
print(f"Remove: {knn.score(X_test, y_test)}")

# Tune LogisticRegression() and RandomForestClassifier() using RandomziedSearchCV

# Create a hyperparamter grid for logistic regression
# @logspace() : Return numbers spaced evenly on a log scale.
log_reg_grid = {"C" : np.logspace(-4,4,20),
                "solver": ["liblinear"]}

# Create a hyperparamter grid for RandomForestClassifier
rf_grid = {"n_estimators": np.arange(10,1000,50),
          "max_depth": [None, 3,5,10],
          "min_samples_split": np.arange(2,20,2),
          "min_samples_leaf": np.arange(1,20,2)}


# #### Hyperparameter grids are setup, tune the model using RandomizedSearchCV.

# Tune LogisticRegression

np.random.seed(42)

# Setup random hyperparamter search for LogisticRegression
rs_log_reg = RandomizedSearchCV(LogisticRegression(),
                               param_distributions=log_reg_grid,
                               # perform 5-fold cross-validation
                                cv=5,
                               n_iter=20,
                               verbose=True)

# Fit random hyperparameter search model for LogisticRegression
rs_log_reg.fit(X_train, y_train)

# Evaluate the randomized search LogisticRegression model
print(f"Remove: {rs_log_reg.score(X_test, y_test)}")

# Tune RandomForestClassifier
np.random.seed(42)
rs_rf = RandomizedSearchCV(RandomForestClassifier(),
                          param_distributions=rf_grid,
                          cv=5,
                          n_iter=20,
                          verbose=True)

# Fit random hyperparameter search model for RandomForestClassifier
rs_rf.fit(X_train, y_train)

# Evaluate the randomized search RandomForestClassifier model
print(f"Remove: {rs_rf.score(X_test, y_test)}")


# #### Hyperparameter Tuning with GridSearchCV
# 
# Since Our LogisticRegression Model provides the best score so far, we'll improve it further using GridSearchCV.

# Different hyperparameters for our LogisticRegression model
log_reg_grid = {"C": np.logspace(-4,4,30),
               "solver": ["liblinear"]}

# setup grid hyperparameter search for LogisticRegression
gs_log_reg = GridSearchCV(LogisticRegression(),
                         param_grid=log_reg_grid,
                         cv=5,
                         verbose=True)

# Fit grid hyperparameter search model
gs_log_reg.fit(X_train, y_train)

# Evaludate the grid search LogisticRegression Model
print(f"Remove: {gs_log_reg.score(X_test, y_test)}")

# Make predictions with tuned model
print(f"Remove prediction: {gs_log_reg.predict(X_test)}")

# Save KNN model
with open('models/knn_model.pkl', 'wb') as f:
    pickle.dump(knn, f)

# Save RandomizedSearchCV Logistic Regression model
with open('models/rs_log_reg_model.pkl', 'wb') as f:
    pickle.dump(rs_log_reg, f)

# Save RandomizedSearchCV Random Forest model
with open('models/rs_rf_model.pkl', 'wb') as f:
    pickle.dump(rs_rf, f)

# Save GridSearchCV Logistic Regression model
with open("models/gs_log_reg_model.pkl", "wb") as f:
    pickle.dump(gs_log_reg, f)