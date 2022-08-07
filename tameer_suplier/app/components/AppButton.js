import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppButton({
  icon,
  title,
  onPress,
  color,
  style,
  iconStyle,
  iconSize,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title ? (
          title
        ) : (
          <>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={iconSize ? iconSize : 20}
                style={[styles.icon, iconStyle]}
              />
            )}
          </>
        )}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
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
  icon: {
    marginRight: 10,
    marginLeft: 10,
    alignSelf: "center",
  },
});

export default AppButton;
