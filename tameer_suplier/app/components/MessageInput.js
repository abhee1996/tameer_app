import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import ImagePicker from "react-native-image-crop-picker";
import { Overlay } from "react-native-elements";

function MessageInput({ onSend, props }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [value, setValue] = useState("");

  const pickImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      setModalVisible(false);
      onSend(image.path, "image");
      setValue("");
      Keyboard.dismiss();
    });
  };
  const openCamera = async () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      setModalVisible(false);
      onSend(image.path, "image");
      setValue("");
      Keyboard.dismiss();
    });
  };

  const sendMessage = () => {
    onSend(value, "text");
    setValue("");
    Keyboard.dismiss();
  };

  return (
    <>
      <View style={styles.container} {...props}>
        <TextInput
          multiline={true}
          placeholderTextColor={defaultStyles.colors.medium}
          style={(defaultStyles.text, styles.input)}
          value={value}
          placeholder="Your message here..."
          onChangeText={(text) => setValue(text)}
        />
        <Entypo
          name="attachment"
          size={25}
          color="#da9986"
          onPress={() => setModalVisible(true)}
          style={{ alignSelf: "center" }}
        />
        <MaterialIcons
          onPress={() => {
            sendMessage();
          }}
          name="send"
          size={25}
          color="#0b99d5"
          style={{ marginLeft: 12, alignSelf: "center" }}
        />
      </View>
      <Overlay
        visible={modalVisible}
        transparent={true}
        onBackdropPress={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: 20,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Feather
                name="image"
                size={50}
                color="brown"
                onPress={pickImage}
              />
              <AppText style={{ color: colors.medium }} onPress={pickImage}>
                Media
              </AppText>
            </View>
            <View style={{ alignItems: "center" }}>
              <Feather
                name="camera"
                size={50}
                color="dodgerblue"
                onPress={openCamera}
              />
              <AppText style={{ color: colors.medium }}>Camera</AppText>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Overlay>
      <Overlay visible={imageModalVisible}>
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
          />
        </View>
      </Overlay>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  input: {
    paddingHorizontal: 15,
    maxHeight: Dimensions.get("window").height / 10,
    width: "78%",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 10,
  },
  modal: {
    marginTop: "70%",
    height: 150,
    marginHorizontal: 20,
    marginRight: 10,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default MessageInput;
