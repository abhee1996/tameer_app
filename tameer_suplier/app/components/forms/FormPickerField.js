import React from "react";
import { useFormikContext } from "formik";

import AppPickerTextInput from "../AppPickerTextInput";
import ErrorMessage from "./ErrorMessage";

function FormPickerField({ name, val, onPressInput, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppPickerTextInput
        onBlur={() => setFieldTouched(val)}
        value={val}
        onPressInput={onPressInput}
        {...otherProps}
      />
      <ErrorMessage error={errors[val]} visible={touched[val]} />
    </>
  );
}

export default FormPickerField;
