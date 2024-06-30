import React from "react";
import { Formik, Form } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import "./knn.css";
import Text from "./Text";
import FormField from "./FormField";
import { useState } from "react";
import { validationSchema, initialValues } from "../../Utils/validation-schema";
import handleFormSubmit from "../../Utils/make-request-on-submit";

const Knn = () => {
  const [prediction, setPrediction] = useState("");

  const onSubmit = async (values) => {
    const responseData = await handleFormSubmit(values, "post", "knn");

    if (responseData == 0) {
      setPrediction("Hurray!!! You have got good heart health...");
    } else if (responseData == 1) {
      setPrediction("Time to be a health-conscious");
    }
  };

  return (
    <>
      <Text />
      <div className="knn-page">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form-container">
              <div className="row">
                <div className="col-sm-4">
                  <FormField label="age" fieldName="age" />
                  <FormField label="sex" fieldName="sex" />
                  <FormField label="cp" fieldName="cp" />
                  <FormField label="trestbps" fieldName="trestbps" />
                </div>
                <div className="col-sm-4">
                  <FormField label="chol" fieldName="chol" />
                  <FormField label="fbs" fieldName="fbs" />
                  <FormField label="restecg" fieldName="restecg" />
                  <FormField label="thalach" fieldName="thalach" />
                </div>
                <div className="col-sm-4">
                  <FormField label="exang" fieldName="exang" />
                  <FormField label="oldpeak" fieldName="oldpeak" />
                  <FormField label="slope" fieldName="slope" />
                  <FormField label="ca" fieldName="ca" />
                </div>
                <FormField label="thal" fieldName="thal" />
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    Predict
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {prediction && (
        <h1 className="text-container text-center">{prediction}</h1>
      )}
    </>
  );
};

export default Knn;
