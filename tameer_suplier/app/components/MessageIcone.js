import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import config from "../config/config";
import { UserContext } from "../custom_hooks/UserContext";

async function getCount(id) {
  const url = config.server + "api/message/getMessageCount?userId=" + id;
  return fetch(url).then((data) => data.json());
}

function MessageIcone({ color, size, messageStyle }) {
  const { user } = useContext(UserContext);
  const [messageCount, setMessageCount] = useState("0");
  useEffect(() => {
    const interval = setInterval(() => {
      getCount(user.id).then((obj) => {
        setMessageCount(obj.count);
      });
    }, 3000);
  }, []);
  return (
    <>
      <View style={messageStyle.MessageTabBarStyle}>
        <Feather name="message-square" size={30} color={color} />
        <View style={messageStyle.circle}>
          <Text style={messageStyle.text}>{messageCount}</Text>
        </View>
      </View>
    </>
  );
}

export default MessageIcone;
