import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderBottomRightRadius:7,
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
    flexDirection: "row",
    width: "100%",
    padding: 5,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginLeft:10,
    alignSelf:"center"
  },
});

export default AppTextInput;
