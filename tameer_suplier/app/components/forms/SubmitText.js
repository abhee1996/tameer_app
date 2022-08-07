import React from "react";
import { useFormikContext } from "formik";

import AppText from "../AppText";

function SubmitText({ title  ,textStyle}) {
  const { handleSubmit } = useFormikContext();

  return <AppText  style={textStyle} onPress={handleSubmit}>{title}</AppText>;
}

export default SubmitText;
