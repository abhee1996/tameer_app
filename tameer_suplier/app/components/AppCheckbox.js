import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import colors from "../config/colors";

function AppCheckbox({ style, isChecked, checkPress, ...otherprops }) {
  return (
    <CheckBox
      checked={isChecked}
      size={20}
      style={style}
      checkedColor={colors.secondary}
      onPress={() => {
        checkPress();
      }}
      {...otherprops}
    />
  );
}

export default AppCheckbox;
