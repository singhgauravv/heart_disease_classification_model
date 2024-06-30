import React from "react";
import { Field as FormikField, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

const FormField = ({ label, fieldName }) => {
  return (
    <div className="form-group row mb-3">
      <label className="col-sm-4 col-form-label">{label}</label>
      <div className="col-sm-8">
        <FormikField className="form-control" type="number" name={fieldName} />
        <ErrorMessage
          name={fieldName}
          component="div"
          className="text-danger"
        />
      </div>
    </div>
  );
};

export default FormField;
