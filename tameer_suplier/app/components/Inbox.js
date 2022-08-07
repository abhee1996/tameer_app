import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "../config/colors";
import config from "../config/config";
import { UserContext } from "../custom_hooks/UserContext";
import MessageItem from "./MessageItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import MessageModal from "../components/modals/MessageModal";
import * as Yup from "yup";

import Separator from "./Separator";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

async function getConversations(id, setConversations) {
  const url =
    config.server + "api/message/getAllCompanyConversations?userId=" + id;
  await fetch(url)
    .then((data) => data.json())
    .then((data) => {
      setConversations(data);
    });
}
async function deleteConversation(
  convoToDelete,
  chkState,
  setChkState,
  setShowDelete
) {
  convoToDelete.forEach((convo) => {
    let conversationId = convo.id;
    const url =
      config.server +
      "api/message/deleteConversations/receiver/" +
      conversationId;
    axios.get(url).then((data) => {
      if (data.data) {
        setChkState(new Array(chkState.length).fill(false));
        setShowDelete(false);
      }
    });
  });
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  number: Yup.string().required().min(11).label("Number"),
  subject: Yup.string().required().label("Subject"),
  message: Yup.string().required().label("Message"),
});
function Inbox({ navigation, route }) {
  const [conversations, setConversations] = useState([]);
  const [convId, setConvId] = useState("");
  const { user } = useContext(UserContext);
  const [showSpinner, setShowSpinner] = useState(true);
  const [chkState, setChkState] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [distributorMessageModal, setDistributorMessageModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [distQuotation, setDistQuotation] = useState();

  const refreshing = () => {
    setLoading(true);
    getConversations(user.id, setConversations);

    let interval = setInterval(async () => {
      const url =
        config.server +
        "api/message/getAllCompanyConversations?companyId=" +
        user.id;
      await fetch(url)
        .then((data) => data.json())
        .then((data) => {
          if (chkState === []) {
            setChkState(new Array(data.length).fill(false));
          }
          setConversations(data);
          if (data) {
            setShowSpinner(false);
          }
        });
    }, 3000);
    setLoading(false);

    return function cleanup() {
      clearInterval(interval);
    };
  };

  useEffect(() => {
    refreshing();
  }, []);
  const onLongPress = (index) => {
    let temp = [...chkState];
    temp[index] = true;
    setChkState(temp);
    setShowDelete(true);
  };
  const deleteConversationfunction = () => {
    let convoToDelete = conversations.filter(function (element, index) {
      return chkState[index];
    });
    deleteConversation(convoToDelete, chkState, setChkState, setShowDelete);
  };

  return (
    <View style={{ flex: 1, marginBottom: "4%" }}>
      {showDelete ? (
        <>
          <View style={styles.showDeleteView}>
            <TouchableOpacity
              style={[
                styles.showDeletButton,
                { backgroundColor: colors.lightGray },
              ]}
              onPress={() => {
                setChkState(new Array(chkState.length).fill(false));
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
              onPress={() => deleteConversationfunction()}
            >
              <AntDesign name="delete" size={22} />
            </TouchableOpacity>
          </View>
          <View style={styles.selectAllView}>
            <Text
              style={styles.selectAllText}
              onPress={() => setChkState(new Array(chkState.length).fill(true))}
            >
              Select All
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}

      <FlatList
        data={conversations}
        keyExtractor={(listing) => listing.id}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Separator}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <MessageItem
              item={item}
              msgStyles={saleStyle}
              setDistQuotation={setDistQuotation}
              setShowDistributorModal={setDistributorMessageModal}
              loading={loading}
              setLoading={setLoading}
              setConvId={setConvId}
              onPress={() => {
                navigation.navigate("Chat", {
                  screen: "ChatScreen",
                  params: {
                    conversationId: item.id,
                    receiverId: item.sender_id,
                    senderId: user.id,
                    title: item.title,
                    name: item.name,
                    number: item.number,
                  },
                });
              }}
              onLongPress={() => onLongPress(index)}
              isChecked={chkState[index]}
              checkPressed={() => {
                let temp = [...chkState];
                temp[index] = !temp[index];
                setChkState(temp);
              }}
              showCheckBox={showDelete}
            />
          </View>
        )}
      />
      <MessageModal
        validationSchema={validationSchema}
        distQuotation={distQuotation}
        styles={saleStyle}
        setDistributorMessageModal={setDistributorMessageModal}
        distributorMessageModal={distributorMessageModal}
      />
      <Spinner
        visible={showSpinner}
        textContent={"Loading..."}
        textStyle={{ color: colors.secondary }}
        size="large"
      />
    </View>
  );
}

export default Inbox;

const styles = StyleSheet.create({
  showDeleteView: {
    backgroundColor: colors.backgroud,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showDeletButton: {
    backgroundColor: colors.lightGray,
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  selectAllView: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    marginTop: 10,
  },
  selectAllText: { flex: 1, color: colors.secondary },
});
const saleStyle = StyleSheet.create({
  saleOfficeModalBtn: {
    width: "20%",
    alignSelf: "flex-end",
  },
  spinnerTextStyle: {
    color: colors.secondary,
  },

  endIcons: {
    justifyContent: "space-evenly",

    marginRight: "8%",
  },

  plusIcon: {
    flex: 1,
    position: "absolute",
    bottom: "5%",
    right: "11%",
  },
  plusSalesIcon: {
    flex: 1,
    position: "absolute",
    bottom: "6%",
    right: "8%",
    color: "#000",
  },
  toolbar: {
    height: 40,
    paddingTop: 10,
    paddingLeft: 15,
  },
  topText: {
    paddingTop: "8%",
    paddingLeft: "5%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#41a6d9",
    height: "13%",
  },
  styleModal: {
    padding: "5%",
    backgroundColor: "#fff",
    flex: 0.9,
  },
  DistributorTItle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: "20%",
    marginLeft: "25%",
    marginTop: "-2%",
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 10,
  },
  loginCard: {
    backgroundColor: colors.white,
    flex: 1.5,
    alignItems: "center",
    padding: 10,
    paddingTop: 35,
    alignItems: "center",
    borderRadius: 3,
  },
});
