import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppIconButton({ icon, containerStyle, textStyle, ...otherProps }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Button
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, textStyle]}
        {...otherProps}
      >
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
      </Button>
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
    flexDirection: "row",
    width: "100%",
    padding: 5,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
    alignSelf: "center",
  },
});

export default AppIconButton;
