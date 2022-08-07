import React from "react";
import { Text, Image } from "react-native";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function MessageBubble({ message }) {
  return (
    <View
      style={[
        styles.container,
        message.mine == "1" ? styles.mine_container : styles.not_mine_container,
      ]}
    >
      {message.message_type == "text" ? (
        <View
          style={[
            styles.message,
            message.mine == "1" ? styles.mine_message : styles.not_mine_messgae,
          ]}
        >
          <AppText style={{ padding: 10 }}>{message.message}</AppText>
        </View>
      ) : null}
      {message.message_type == "image" ? (
        <View style={[styles.image_container]}>
          {message?.message ? (
            <Image style={styles.image} source={{ uri: message.message }} />
          ) : (
            <></>
          )}
        </View>
      ) : null}
      <Text
        style={[
          styles.date,
          message.mine == "1" ? styles.mine_date : styles.not_mine_date,
        ]}
      >
        {message.created_ts}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  mine_container: {
    marginRight: 20,
    marginLeft: 45,
    alignSelf: "flex-end",
    borderRadius: 5,
  },
  not_mine_container: {
    marginLeft: 20,
    marginRight: 5,
    alignSelf: "flex-start",
  },
  message: {
    borderRadius: 5,
  },
  mine_message: {
    backgroundColor: colors.white,
  },
  not_mine_messgae: {
    backgroundColor: colors.primary,
  },
  mine_date: {
    alignSelf: "flex-end",
  },
  not_mine_date: {},
  date: {
    marginHorizontal: 10,
    color: colors.medium,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    flexWrap: "wrap",
  },
  image_container: {
    width: 250,
    height: 250,
    flexWrap: "wrap",
  },
});

export default MessageBubble;
