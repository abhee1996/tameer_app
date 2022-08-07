import React from "react";
import AppTextArea from "./AppTextArea";
import { ErrorMessage } from "./forms";

function MessageTextArea({
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
        {...otherProps}
      />
      {error ? (
        <ErrorMessage error={error} visible={error.length > 0} />
      ) : (
        <></>
      )}
    </>
  );
}

export default MessageTextArea;
