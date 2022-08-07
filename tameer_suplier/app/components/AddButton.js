import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import colors from "../config/colors";

function AddButton({ color }) {
  return (
    <View style={styles.container}>
      <Entypo name="plus" size={35} color={colors.secondary} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
  },
});
export default AddButton;
