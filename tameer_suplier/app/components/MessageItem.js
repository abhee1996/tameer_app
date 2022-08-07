import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AppCheckbox from "./AppCheckbox";

function MessageItem({
  item,
  setDistQuotation,
  setShowDistributorModal,
  onPress,
  onLongPress,
  checkPressed,
  isChecked,
  showCheckBox,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.container}>
        {showCheckBox ? (
          <AppCheckbox
            style={styles.checkBox}
            isChecked={isChecked}
            checkPress={checkPressed}
          />
        ) : (
          <></>
        )}
        <View style={styles.textContainer}>
          <View>
            <AppText style={styles.name}>{item.title}</AppText>
            {item.message_type === "image" ? (
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="image" size={20} color={"gray"} />
                <AppText style={{ color: "gray" }}> Photo</AppText>
              </View>
            ) : (
              <Text
                style={styles.message}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.message}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.rightContainer}>
          {item.count > 0 && (
            <View style={styles.countContainer}>
              <Text style={styles.count}>{item.count}</Text>
            </View>
          )}

          <AppText style={styles.date}>{item.created_ts}</AppText>
        </View>

        <View
          style={{ padding: "4%" }}
          onPress={() => {
            setDistQuotation(item);
            setShowDistributorModal(true);
          }}
        >
          {item.assigned_to > 0 ? (
            <FontAwesome5
              name="user-check"
              size={18}
              style={styles.assignColor}
              onPress={() => {
                setDistQuotation(item);
                setShowDistributorModal(true);
              }}
            />
          ) : (
            <FontAwesome5
              name="user-check"
              size={18}
              style={styles.messageIcon}
              color="gray"
              onPress={() => {
                setDistQuotation(item);
                setShowDistributorModal(true);
              }}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
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
    width: "50%",
    paddingLeft: 0,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  count: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 2,
  },
  message: {
    fontSize: 14,

    fontWeight: "bold",
    color: colors.medium,
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.medium,
    marginRight: 20,
    marginTop: 3,
  },
  assignColor: {
    fontSize: 18,
    color: "#009BDD",
    borderRadius: 5,
  },
  endIcons: {
    alignItems: "center",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingRight: "1%",
    paddingLeft: "1%",
    width: "18%",
    backgroundColor: "orange",
    borderRadius: 5,
  },
  messageIcon: {
    alignSelf: "center",
    paddingTop: "0%",
  },
});
export default MessageItem;
