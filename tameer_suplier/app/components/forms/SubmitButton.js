import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, color, iconStyle, buttonStyle, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      color={color}
      style={buttonStyle}
      iconStyle={iconStyle}
      onPress={handleSubmit}
      {...otherProps}
    />
  );
}

export default SubmitButton;
