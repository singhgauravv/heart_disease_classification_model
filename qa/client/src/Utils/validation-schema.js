import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  age: Yup.number().required("Age is required"),
  sex: Yup.number().required("Sex is required"),
  cp: Yup.number().required("Chest pain type is required"),
  trestbps: Yup.number().required("Resting blood pressure is required"),
  chol: Yup.number().required("Cholesterol level is required"),
  fbs: Yup.number().required("Fasting blood sugar is required"),
  restecg: Yup.number().required("Resting ECG result is required"),
  thalach: Yup.number().required("Maximum heart rate is required"),
  exang: Yup.number().required("Exercise induced angina is required"),
  oldpeak: Yup.number().required("ST depression is required"),
  slope: Yup.number().required("Slope of peak exercise ST segment is required"),
  ca: Yup.number().required("Number of major vessels colored by fluoroscopy"),
  thal: Yup.number().required("Thalassemia is required"),
});

const initialValues = {
  age: 1,
  sex: 1,
  cp: 1,
  trestbps: 1,
  chol: 1,
  fbs: 1,
  restecg: 1,
  thalach: 1,
  exang: 1,
  oldpeak: 1,
  slope: 1,
  ca: 1,
  thal: 1,
};

export { validationSchema, initialValues };
