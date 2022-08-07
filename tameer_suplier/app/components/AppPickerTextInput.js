import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableItem } from "react-native-tab-view";

const AppPickerTextInput = ({
  icon,
  containerStyle,
  textStyle,
  onPressInput,
  ...otherProps
}) => {
  return (
    <TouchableItem onPress={onPressInput}>
      <View style={[styles.container, containerStyle]}>
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={[defaultStyles.text, textStyle]}
          {...otherProps}
          onKeyPress={onPressInput}
        />
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            onPress={onPressInput}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
      </View>
    </TouchableItem>
  );
};
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

export default AppPickerTextInput;
