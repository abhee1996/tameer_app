import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AppCheckbox from "./AppCheckbox";
import { CheckBox } from "react-native-elements";
var paddingValue = 20;

function DistributorItem({
  onPress,
  handleChecked,
  onLongPress,
  longPress,
  item,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.container}>
        {longPress == true ? (
          <>
            <CheckBox
              containerStyle={styles.checkBoxContainer}
              checked={item.checked}
              onPress={() => handleChecked(item.type, item.id)}
            />
          </>
        ) : (
          <></>
        )}

        <View style={styles.textContainer}>
          <AppText style={styles.name}>{item.name}</AppText>
          <AppText style={styles.message}>{item.address}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: paddingValue,
  },
  checkBoxContainer: {
    padding: 0,
  },
  rightContainer: {
    alignSelf: "flex-end",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  countContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  textContainer: {
    width: "85%",
    paddingVertical: 10,
  },
  count: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 8,
  },
  name: {
    fontSize: 23,
    color: colors.primary,
    marginBottom: 2,
    fontWeight: "bold",
  },
  message: {
    fontSize: 13,
    color: colors.medium,
  },
  date: {
    fontSize: 12,
    color: colors.medium,
    marginRight: 20,
    marginTop: 3,
  },
});

export default DistributorItem;
