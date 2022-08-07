import React from "react";
import { useFormikContext } from "formik";

import AppTextArea from "../AppTextArea";
import ErrorMessage from "./ErrorMessage";

function FormTextArea({ name, height, messageString, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextArea
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        height={height}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormTextArea;
