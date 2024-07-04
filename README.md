# Predict heart disease using machine learning

### Define Problem Statement

> Given clinical attributes of a patient, predict whether they have heart disease or not?

### Accuracy Achieved: 88 %

models_list = [
{"name": "Logistic Regression", "model": LogisticRegression()},
{"name": "KNN", "model": KNeighborsClassifier()},
{"name": "Random Forest", "model": RandomForestClassifier()},
{"name": "Tuned KNN", "model": knn}, # KNN with n_neighbors=11
{"name": "RandomizedSearchCV Logistic Regression", "model": rs_log_reg},
{"name": "RandomizedSearchCV Random Forest", "model": rs_rf},
{"name": "GridSearchCV Logistic Regression", "model": gs_log_reg}
]

### Features

**Create data dictionary**

- **age:** The person’s age in years
- **sex:** The person’s sex (1 = male, 0 = female)
- **cp:** Chest pain type
  - Value 0: asymptomatic
  - Value 1: atypical angina
  - Value 2: non-anginal pain
  - Value 3: typical angina
- **trestbps:** The person’s resting blood pressure (mm Hg on admission to the hospital)
- **chol:** The person’s cholesterol measurement in mg/dl
- **fbs:** The person’s fasting blood sugar (> 120 mg/dl, 1 = true; 0 = false)
- **restecg:** Resting electrocardiographic results
  - Value 0: showing probable or definite left ventricular hypertrophy by Estes’ criteria
  - Value 1: normal
  - Value 2: having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)
- **thalach:** The person’s maximum heart rate achieved
- **exang:** Exercise-induced angina (1 = yes; 0 = no)
- **oldpeak:** ST depression induced by exercise relative to rest
- **slope:** The slope of the peak exercise ST segment
  - Value 0: downsloping
  - Value 1: flat
  - Value 2: upsloping
- **ca:** The number of major vessels (0–3)
- **thal:** A blood disorder called thalassemia
  - Value 0: NULL (dropped from the dataset previously)
  - Value 1: fixed defect (no blood flow in some part of the heart)
  - Value 2: normal blood flow
  - Value 3: reversible defect (a blood flow is observed but it is not normal)
- **target:** Heart disease (1 = no, 0 = yes)

To run this app locally:

1. Run `npm run dev` in client dir.
1. Run `npm start` in node_server dir.
1. Run `python app.py` in python_server dir.
