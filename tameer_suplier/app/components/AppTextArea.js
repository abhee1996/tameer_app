import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextArea({
  icon,
  containerStyle,
  height,
  textStyle,
  messageString,
  ...otherProps
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        multiline={true}
        numberOfLines={height}
        textAlignVertical="top"
        style={[defaultStyles.text, textStyle]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    flexDirection: "row-reverse",
    width: "100%",
    paddingBottom: 18,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    marginLeft: "4%",
  },
});

export default AppTextArea;
