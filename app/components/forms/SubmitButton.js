import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton"

function SubmitButton({ title, color  ,buttonStyle}) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} color= {color} style={buttonStyle} onPress={handleSubmit} />;
}

export default SubmitButton;
