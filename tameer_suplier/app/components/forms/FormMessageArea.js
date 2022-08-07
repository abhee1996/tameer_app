import React from "react";
import { useFormikContext } from "formik";

import AppTextArea from "../AppTextArea";
import ErrorMessage from "./ErrorMessage";

function FormTeMessagextArea({
  name,
  messageString,
  setMessageString,
  error,
  onChangeText,
  height,
  ...otherProps
}) {
  return (
    <>
      <AppTextArea
        onChangeText={(msg) => setMessageString(msg)}
        height={height}
        value={messageString}
        onChangeText
        {...otherProps}
      />
      {error && error.length > 0 ? (
        <ErrorMessage error={error} visible={error.length > 0} />
      ) : (
        <></>
      )}
    </>
  );
}

export default FormTeMessagextArea;
