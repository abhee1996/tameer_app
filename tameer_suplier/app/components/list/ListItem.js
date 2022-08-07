import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import colors from "../../config/colors";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import AppCheckbox from "../AppCheckbox";

function ListItem({ item, onPress, checkPress, sendMessge }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <AppCheckbox style={styles.checkBox} checkPress={checkPress} />
        <View style={styles.textContainer}>
          <AppText style={styles.title} onPress={onPress}>
            {" "}
            {item.name}
          </AppText>
          <AppText style={styles.desc}>{item.address}</AppText>
        </View>
        <View style={styles.imageContainer}>
          <MaterialCommunityIcons
            name="message-outline"
            size={30}
            color="white"
            style={{ transform: [{ rotateY: "180deg" }] }}
            onPress={sendMessge}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    alignItems: "center",
    padding: 10,
  },
  checkBox: {},
  desc: {
    fontSize: 12,
    color: colors.medium,
  },
  imageContainer: {
    backgroundColor: "#68AF15",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "60%",
    margin: 5,
  },
  title: {
    fontWeight: "bold",
    color: "#AF4D28",
    fontSize: 20,
  },
});
export default ListItem;
