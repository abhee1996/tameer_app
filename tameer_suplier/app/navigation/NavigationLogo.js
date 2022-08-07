import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import SvgComponent from "../components/SvgComponent";

function NavigationLogo() {
  return (
    <View style={styles.shadow}>
      <SvgComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 60,
    bottom: 15,
    left: -10,
  },
});

export default NavigationLogo;
