import React, { useState, useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity, LogBox, Linking } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MessageInput from "../components/MessageInput";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import config from "../config/config";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RNFetchBlob from "react-native-fetch-blob";
import Toast from "react-native-simple-toast";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import AppCheckbox from "../components/AppCheckbox";
import Spinner from "react-native-loading-spinner-overlay";
import { Dimensions } from "react-native";
import PushNotification from "react-native-push-notification";

async function getChat(conversation_id, userId) {
  const url = `${config.server}api/message/getChat?conversationId=${conversation_id}&userId=${userId}&name=receiver`;
  return fetch(url).then((data) => data.json());
}

const formateToGiftedDate = (date) => {
  var m = new Date(date);
  var dateFormated =
    m.getFullYear() +
    "-" +
    ("0" + m.getDate()).slice(-2) +
    "-" +
    ("0" + (m.getMonth() + 1)).slice(-2) +
    " " +
    ("0" + m.getHours()).slice(-2) +
    ":" +
    ("0" + m.getMinutes()).slice(-2) +
    ":" +
    ("0" + m.getSeconds()).slice(-2);
  return date;
};
const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      textStyle={{
        right: {
          color: "#696969",
        },
        left: {
          color: "#696969",
        },
      }}
      wrapperStyle={{
        left: {
          backgroundColor: "white",
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
          borderBottomLeftRadius: 7,
          borderBottomRightRadius: 7,
          marginLeft: 10,
          paddingRight: 20,
        },
        right: {
          backgroundColor: "#69d7fa",
          marginRight: 10,
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
          borderBottomLeftRadius: 7,
          borderBottomRightRadius: 7,
          paddingRight: 20,
        },
      }}
    />
  );
};

function createMessage(message) {
  if (message.message_type == "image") {
    if (message.mine == "1") {
      return {
        _id: message.id,
        createdAt: message.created_ts,
        image: message.message,
        received: message.is_seen === "0" ? false : true,
        sent: true,
        pending: false,
        user: {
          _id: message.mine,
        },
      };
    } else {
      return {
        _id: message.id,
        createdAt: message.created_ts,
        image: message.message,
        user: {
          _id: message.mine,
        },
      };
    }
  } else {
    return {
      _id: message.id,
      text: message.message,
      createdAt: formateToGiftedDate(message.created_ts),
      received: message.is_seen === "0" ? false : true,
      sent: true,
      pending: false,
      user: {
        _id: message.mine,
      },
    };
  }
}

function ChatScreen({ route, navigation }) {
  const [messages, setMessages] = useState();
  const { conversationId, receiverId, senderId, title, name, number } =
    route.params;
  const [isSeenData, setIsSeenData] = useState();
  const [chatRange, setChatRange] = useState(20);
  const [msgIds, setMsgIds] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);

  const getFurtherMessages = () => {
    getChat(conversationId, senderId).then((data) => {
      setMessages(
        data.map((item) => {
          setShowSpinner(false);
          return createMessage(item);
        })
      );
    });
  };

  useEffect(() => {
    if (route.name === "ChatScreen")
      PushNotification.removeAllDeliveredNotifications();
    if (messages && isSeenData[0]?.is_seen) {
      setMessages(
        messages.map((msg, i) => {
          return {
            ...msg,
            received: isSeenData[i]?.is_seen === "1" ? true : false,
            sent: true,
            pending: false,
          };
        })
      );
    }
  }, [isSeenData]);

  useEffect(() => {
    LogBox.ignoreLogs(["Animated.event now requires a second argument"]);
    if (messages === undefined) {
      getFurtherMessages();
    }

    const interval = setInterval(() => {
      const url =
        config.server +
        "api/message/getNewMessagesForChat?conversationId=" +
        conversationId +
        "&userId=" +
        senderId;
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          // append new  messages
          data.forEach((message) => {
            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, createMessage(message))
            );
          });
        });
    }, 3000);

    const interval2 = setInterval(() => {
      const seen_url =
        config.server +
        "api/message/getMessagesStatus?conversationId=" +
        conversationId +
        "&userId=" +
        senderId;
      fetch(seen_url)
        .then((data) => data.json())
        .then((data) => {
          setIsSeenData(data);
        });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  const onSend = useCallback((message = [], type) => {
    const url = config.server + "api/message/sendMessage";
    var m = new Date();
    var created_ts =
      m.getFullYear() +
      "-" +
      ("0" + (m.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + m.getDate()).slice(-2) +
      " " +
      ("0" + m.getHours()).slice(-2) +
      ":" +
      ("0" + m.getMinutes()).slice(-2) +
      ":" +
      ("0" + m.getSeconds()).slice(-2);
    if (type == "text") {
      RNFetchBlob.fetch(
        "POST",
        url,
        {
          "Content-Type": "multipart/form-data",
        },
        [
          { name: "file", filename: "", type: "", data: "" },
          {
            name: "json",
            data: JSON.stringify({
              conversationId: conversationId,
              userId: senderId,
              receiverId: receiverId,
              message: message,
              message_type: "text",
              receiver_type: true,
              date: created_ts,
            }),
          },
        ]
      )
        .then((response) => {
          let result = JSON.parse(response.data);
          if (result?.status === "1") {
            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, {
                _id: Math.round(Math.random() * 1000000),
                text: message,
                sent: false,
                received: false,
                pending: true,
                createdAt: formateToGiftedDate(created_ts),
                user: {
                  _id: "1",
                },
              })
            );
          } else {
            Toast.show("❗ could not send");
          }
        })
        .catch((error) => {
          Toast.show("Exception! could not send");
          console.error(error);
        });
    } else if (type == "image") {
      Toast.show("sending...");
      RNFetchBlob.fs
        .stat(message)
        .then((stats) => {
          const fileName = Date.now() + "-" + stats.filename;
          RNFetchBlob.fetch(
            "POST",
            url,
            {
              "Content-Type": "multipart/form-data",
            },
            [
              {
                name: "file",
                filename: fileName,
                type: stats.type,
                data: RNFetchBlob.wrap(message),
              },
              {
                name: "json",
                data: JSON.stringify({
                  conversationId: conversationId,
                  userId: senderId,
                  receiverId: receiverId,
                  message: fileName,
                  message_type: "image",
                  receiver_type: true,
                  date: created_ts,
                }),
              },
            ]
          )
            .then((response) => {
              let result = JSON.parse(response.data);
              if (result?.status === "1") {
                setMessages((previousMessages) =>
                  GiftedChat.append(previousMessages, {
                    _id: Math.round(Math.random() * 1000000),
                    image: message,
                    createdAt: formateToGiftedDate(created_ts),
                    sent: false,
                    received: false,
                    pending: true,
                    user: {
                      _id: "1",
                    },
                  })
                );
              } else {
                Toast.show("❗ Image not send");
              }
            })
            .catch((error) => {
              Toast.show("❗ Image not send");
              console.error(error);
            });
        })
        .catch((error) => {
          Toast.show("❗ Image not send");
          console.error(error);
        });
    }
  }, []);

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={30} color="#333" />;
  };

  const isCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToTop = 80;
    return (
      contentSize.height - layoutMeasurement.height - paddingToTop <=
      contentOffset.y
    );
  };

  const deleteMessages = () => {
    const url =
      config.server +
      "api/message/deleteMessages/" +
      conversationId +
      "/receiver";

    axios.get(url, msgIds).then((rsp) => {
      if (rsp.data) {
        getFurtherMessages();
        setShowDelete(false);
        setMsgIds([]);
      }
    });
  };
  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.header}>
        <Ionicons
          name="md-arrow-back"
          size={24}
          color="#767676"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.headingBox}>
          {name != "" ? (
            <AppText style={styles.senderName}>{name}</AppText>
          ) : (
            <AppText style={styles.senderName}>{number}</AppText>
          )}
          <AppText style={styles.subject}>{title}</AppText>
        </View>
        <TouchableWithoutFeedback
          style={styles.imageContainer}
          onPress={(e) => {
            Linking.openURL(
              Platform.OS === "android"
                ? `tel:${number}`
                : `telprompt:${number}`
            );
          }}
        >
          <Feather name="phone" size={24} color="white" />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 1, backgroundColor: "#f1f1f1", marginBottom: 55 }}>
        {showDelete ? (
          <>
            <View style={styles.showDeleteView}>
              <TouchableOpacity
                style={[
                  styles.showDeletButton,
                  { backgroundColor: colors.lightGray },
                ]}
                onPress={() => {
                  setMsgIds([]);
                  setShowDelete(false);
                }}
              >
                <MaterialCommunityIcons name="cancel" size={22} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.showDeletButton,
                  { backgroundColor: colors.danger },
                ]}
                onPress={() => deleteMessages()}
              >
                <AntDesign name="delete" size={22} />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <></>
        )}
        {messages ? (
          <>
            <GiftedChat
              messages={
                chatRange > messages?.length
                  ? messages
                  : messages?.slice(0, chatRange)
              }
              renderInputToolbar={() => <MessageInput onSend={onSend} />}
              onSend={(messages) => onSend(messages, "text")}
              scrollToBottom
              scrollToBottomComponent={scrollToBottomComponent}
              onLongPress={(context, message) => {
                let temp = [...msgIds];
                temp.push(message._id);
                setMsgIds(temp);
                setShowDelete(true);
              }}
              renderAvatar={null}
              renderBubble={renderBubble}
              listViewProps={{
                scrollEventThrottle: 400,
                onScroll: ({ nativeEvent }) => {
                  if (isCloseToTop(nativeEvent)) {
                    setChatRange(chatRange + 20);
                  }
                },
              }}
              user={{
                _id: "1",
              }}
            />
          </>
        ) : (
          <></>
        )}
      </View>

      <Spinner
        visible={showSpinner}
        textContent={"Loading..."}
        textStyle={{ color: colors.secondary }}
        size="large"
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#009bdd",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  header: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
    height: Dimensions.get("window").height / 12,
    flexDirection: "row",
    alignItems: "center",
  },
  senderName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#767676",
  },
  subject: {
    fontSize: 12,
    color: "#767676",
  },
  headingBox: {
    marginLeft: 15,
    flex: 1,
  },
  showDeleteView: {
    backgroundColor: colors.backgroud,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showDeletButton: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
