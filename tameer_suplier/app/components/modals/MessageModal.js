import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { UserContext } from "../../custom_hooks/UserContext";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import TabModal from "./TabModal";
import Ionicons from "react-native-vector-icons/Ionicons";
import config from "../../config/config";
import AppButton from "../AppButton";
import MessageTextArea from "../MessageTextArea";
import DistPicketField from "../DistPickerField";
import Toast from "react-native-simple-toast";

const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

const messageToDistributor = async (
  companyId,
  distributorid,
  conversationid,
  customer_number,
  subject,
  newmessage,
  created_dt
) => {
  const data = {
    company_id: companyId,
    distributor_id: distributorid,
    conversation_id: conversationid,
    customer_number: customer_number,
    subject: subject,
    message: newmessage,
    created_dt: created_dt,
  };
  const url = config.server + "api/message/messageToDistributor";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((JSONdata) => {
      return JSONdata;
    })
    .catch((error) => {
      console.error(error);
    });
};

const openWhatsApp = (newmessage, customer_number) => {
  let msg = newmessage;
  let number = customer_number.replace(/[0]/, 92);

  if (number) {
    if (msg) {
      let whatsappUrl = `https://api.whatsapp.com/send?text="${msg}"&phone="${number}"`;
      Linking.openURL(whatsappUrl)
        .then((data) => {
          console.info("data", data);
        })
        .catch((err) => {
          console.error("err", err);
        });
    }
  }
};
//get distributors
const getDistributors = async (conversationId, companyId) => {
  var url =
    config.server +
    "api/company/getClosestDistributors?companyId=" +
    companyId +
    "&conversationId=" +
    conversationId;
  var closestDistributors = await fetch(url).then((data) => data.json());
  return closestDistributors;
};

const MessageModal = ({
  distributorMessageModal,
  setDistributorMessageModal,
  styles,
  distQuotation,
  setDistQuotation,
}) => {
  const [messageFieldError, setMessageFieldError] = useState("");
  const [distPickerError, setDistPickerError] = useState("");

  const [tabOpen, setTabOpen] = useState(false);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [salesOffices, setSalesOffices] = useState([]);
  const [distributors, setDistributors] = useState([]);

  const [messageloading, setmessageloading] = useState(true);
  const [messageString, setMessageString] = useState("");
  const [tabValue, setTabValue] = useState({ number: "", name: "", id: "" });

  let distributorName = tabValue?.name;

  useEffect(() => {
    if (distQuotation !== undefined) {
      setmessageloading(true);
      setDistPickerError("");
      setMessageFieldError("");
      getClientChat();
      getDistributer();
      setTabValue({
        name: distQuotation?.distributor_name,
        id: distQuotation?.distributor_id,
        number: distQuotation?.number,
      });
    }
  }, [distQuotation]);

  // get client messages from server
  const getClientChat = async () => {
    let url = `${config.server}api/message/getAllClientChat?conversationId=${distQuotation?.id}`;
    let response = await fetch(url);
    let messages = await response.json();

    let newmessages = messages?.map((item) => {
      return "> " + item + "\n";
    });
    newmessages = newmessages?.toString()?.replace(/,/g, "");
    let msgString = `📢📢  "CUSTOMER REQUEST"\n\nWe got request from the customer ${distQuotation?.number}. Kindly handle the client request.\n\nSubject: "${distQuotation?.title}"\n\nCustomer Queries:\n${newmessages}`;
    setMessageString("" + "\n" + msgString);
    setmessageloading(false);
  };

  //  get all distributers of the company
  const getDistributer = async () => {
    setLoading(true);
    getDistributors(distQuotation?.id, user?.id).then((resp) => {
      let checkedDistributers = resp?.distributors.map((row) => {
        return { ...row, checked: false };
      });
      let checkedSalesOffice = resp?.salesOffice.map((row) => {
        return { ...row, checked: false };
      });
      setDistributors(checkedDistributers);
      setSalesOffices(checkedSalesOffice);
    });

    setLoading(false);
  };

  const handleSendMessage = async () => {
    //validation
    if (distributorName == "") {
      setDistPickerError("❗ Distributor field can not left emply.");
      setMessageFieldError("");
      if (messageString == "") {
        setMessageFieldError("❗ Message field can not left emply.");
      }
    } else if (messageString == "") {
      setMessageFieldError("❗ Message field can not left emply.");
      setDistPickerError("");
    } else {
      setMessageFieldError("");
      setDistPickerError("");
      //Now Message Will Send  and WhatsApp Will Open
      if (messageString.length > 0 && tabValue) {
        Toast.show("sending...", Toast.SHORT, Toast.MIDDLE);
        const result = await messageToDistributor(
          tabValue.company_id,
          tabValue.id, //distributer id
          distQuotation.id, // conversation id
          distQuotation.number, //conversation number
          distQuotation.title, // conversation subject
          messageString, //
          distQuotation.createddate
        );

        const waResult = await openWhatsApp(messageString, tabValue.number);
        setLoading(false);
        setTabValue("");

        setDistributorMessageModal(false);
        if (result.status == 1) {
          Toast.show("message has been sent...", Toast.LONG, Toast.CENTER);
          Toast.show(
            "Chat on Whatsapp messager ...",
            Toast.SHORT,
            Toast.CENTER
          );
        } else if (result.status == 0) {
          Toast.show("message sending failed...", Toast.LONG, Toast.CENTER);
          Toast.show(
            "Whatsapp messager failed to open...",
            Toast.SHORT,
            Toast.CENTER
          );
        }
      }
    }
  };
  return (
    <>
      <Modal key={"Modal4"} visible={distributorMessageModal}>
        <View>
          <View key={"ModalView3"} style={messagestyles.styleModal}>
            <ScrollView>
              <View style={messagestyles.topText}>
                <View
                  style={{
                    padding: "1%",
                    marginBottom: "3%",
                  }}
                  onPress={() => {
                    setTabValue("");
                    setDistributorMessageModal(false);
                  }}
                >
                  <Ionicons
                    name="close"
                    size={22}
                    color="white"
                    onPress={() => {
                      setTabValue("");
                      setDistributorMessageModal(false);
                    }}
                  />
                </View>
                <AppText
                  name="whatsappMessage"
                  style={messagestyles.headingTitle}
                >
                  <Text>Message to Distributor</Text>
                </AppText>
                <AppButton
                  style={messagestyles.saleOfficeModalBtn}
                  iconSize={25}
                  icon="send"
                  onPress={handleSendMessage}
                />
              </View>
              <View style={messagestyles.modalbody}>
                <View style={messagestyles.fieldSpacing}>
                  <AppText>
                    Write a message to distributor about the order.
                  </AppText>
                </View>
                <View style={messagestyles.fieldSpacing}>
                  <AppText>To:</AppText>
                  <DistPicketField
                    val={distributorName}
                    error={distPickerError}
                    keyboardType="default"
                    placeholder="Select Distributor"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={false}
                    maxLength={70}
                    onPressInput={() => setTabOpen(true)}
                    style={{
                      width: "90%",
                      color: "black",
                      fontSize: 16,
                      padding: 10,
                    }}
                  />
                </View>
                <View style={messagestyles.fieldSpacing}>
                  <AppText>Message:</AppText>
                  <MessageTextArea
                    name="distributor_msg"
                    messageString={messageString}
                    setMessageString={setMessageString}
                    error={messageFieldError}
                    keyboardType="default"
                    placeholder="Message"
                    maxLength={700}
                    height={14}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{
                      width: "90%",
                      color: "black",
                      fontSize: 16,
                      paddingTop: "0%",
                      maxHeight: 330,
                      top: "5%",
                    }}
                  />
                </View>
                <AppButton
                  style={{
                    alignSelf: "flex-end",
                    width: "20%",
                    height: "10%",
                    padding: 0,
                    backgroundColor: "#41a6d9",
                  }}
                  iconStyle={{ color: "#fff", width: "100%" }}
                  iconSize={30}
                  icon="send"
                  onPress={handleSendMessage}
                />
              </View>
            </ScrollView>

            <Spinner
              visible={loading}
              textContent={"loading..."}
              textStyle={messagestyles.spinnerTextStyle}
            />
            <Spinner
              visible={messageloading}
              textContent={"Loading Chat..."}
              textStyle={{ color: colors.secondary }}
              size="large"
            />

            <TabModal
              loading={loading}
              setLoading={setLoading}
              tabValue={tabValue}
              distQuotation={distQuotation}
              setDistQuotation={setDistQuotation}
              setTabValue={setTabValue}
              distributors={distributors}
              salesOffices={salesOffices}
              tabOpen={tabOpen}
              styles={styles}
              setTabOpen={setTabOpen}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
const messagestyles = StyleSheet.create({
  container: {
    position: "absolute",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  spinnerTextStyle: {
    color: "#009BDD",
  },
  topText: {
    paddingTop: "8%",
    paddingLeft: "2%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#41a6d9",
    height: "12%",
    justifyContent: "space-evenly",
  },
  saleOfficeModalBtn: {
    width: "20%",
    alignSelf: "flex-start",
    alignContent: "flex-end",
    left: "5%",

    color: "green",
    marginBottom: "4%",
    marginVertical: "0%",
  },
  headingTitle: {
    fontSize: 22,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: "20%",
    left: "3%",

    marginTop: "-1.5%",
    color: "#fff",
  },
  styleModal: {
    backgroundColor: "#fff",
  },
  modalbody: {
    padding: "5%",
  },
  fieldSpacing: {
    margin: "1%",
  },
});

export default MessageModal;
