import React from "react";
import AppPickerTextInput from "./AppPickerTextInput";
import { ErrorMessage } from "./forms";

function DistPicketField({ name, val, error, onPressInput, ...otherProps }) {
  return (
    <>
      <AppPickerTextInput
        value={val}
        onPressInput={onPressInput}
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

export default DistPicketField;
