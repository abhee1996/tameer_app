import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FloatingButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View
        style={{
          backgroundColor: "#41a6d9",
          width: 65,
          height: 65,
          borderRadius: 45,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome5 name="user-plus" size={17} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  plusIcon: {
    flex: 1,
    position: "absolute",
    bottom: "37%",
    right: "40%",
  },
});
export default FloatingButton;
