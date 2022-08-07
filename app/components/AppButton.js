import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors"; 

function AppButton({ title, onPress, color,style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color},style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    // borderRadius: 25,
    borderBottomRightRadius:7,
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "50%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
