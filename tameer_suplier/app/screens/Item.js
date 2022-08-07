import { StackActions } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  Dimensions,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Spinner from "react-native-loading-spinner-overlay";
import config from "../config/config";
import { UserContext } from "../custom_hooks/UserContext";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Input } from "react-native-elements";
import RNFetchBlob from "react-native-fetch-blob";
import Toast from "react-native-simple-toast";
import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "reanimated-bottom-sheet";
import Animated, { color } from "react-native-reanimated";

function Item({ route, navigation }) {
  const { user } = useContext(UserContext);
  const { categoryType, categoryName, categoryId } = route.params;
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  let bs = React.createRef();
  let fall = new Animated.Value(1);

  async function saveItem(
    companyId,
    categoryId,
    type,
    navigation,
    setError,
    name,
    description,
    image
  ) {
    setLoading(true);
    if (name === "") {
      setError("Name is necessary field");
      setLoading(false);
      return;
    }
    if (image === null || image === "" || image === undefined) {
      setError("Image is necessary field");
      setLoading(false);
      return;
    }
    if (description === "") {
      setError("Description is necessary field");
      setLoading(false);
      return;
    }
    let url = config.server + "api/company/addProvider";
    let data = [];
    image.map((img) => {
      let parts = img.image.split("/");
      let file = parts.pop();
      data.push({
        name: "file",
        filename: Date.now() + "-" + file,
        type: "file",
        data: RNFetchBlob.wrap(img.image),
      });
    });
    data.push({
      name: "json",
      data: JSON.stringify({
        categoryType: type,
        companyId: companyId,
        categoryId: categoryId,
        name: name,
        description: description,
      }),
    });
    RNFetchBlob.fetch(
      "POST",
      url,
      {
        "Content-Type": "multipart/form-data",
      },
      data
    )
      .then((response) => {
        setLoading(false);
        if (response.data == "1") {
          const popAction = StackActions.pop(3);

          Toast.show("Saved!");
          navigation.dispatch(popAction);
        } else if (response.data == "0") {
          setError("Could not save, Check connection");
        } else if (response.data == "2") {
          setError("Already exist Item with this name");
        }
        return response;
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  useEffect(() => {
    if (error !== "") ToastAndroid.show(error, ToastAndroid.SHORT);
  }, [error]);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      mediaType: "photo",

      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((img) => {
      setImage([...image, { image: img.path }]);
    });
    bs.current?.snapTo(1);
  };
  const pickImage = async () => {
    setModalVisible(false);
    ImagePicker.openPicker({
      mediaType: "photo",
      multiple: true,
    }).then((pickedImage) => {
      let temp = [];
      if (pickedImage) {
        for (let i = 0; i < pickedImage.length; i++) {
          setImage([...image, { image: pickedImage[i].path, isNew: true }]);
        }
      }
    });
    bs.current.snapTo(1);
  };
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photos</Text>
      </View>
      <TouchableOpacity
        style={[styles.panelButton, { backgroundColor: colors.secondary }]}
        onPressOut={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.panelButton, { backgroundColor: colors.secondary }]}
        onPressOut={pickImage}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.panelButton, { backgroundColor: colors.lightBlack }]}
        onPressOut={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  var imgModal;
  return (
    <Screen>
      <ScrollView>
        <BottomSheet
          ref={bs}
          snapPoints={[330, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        <Animated.View
          style={[
            styles.container,
            { opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)) },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <MaterialIcons
              onPress={() => navigation.goBack()}
              color={colors.medium}
              name="arrow-back"
              size={25}
            />
            <AppText style={styles.text}>Add Product</AppText>
            <AppText></AppText>
          </View>
          <Input
            labelStyle={{ marginTop: 10 }}
            label="Category"
            value={categoryName}
            editable={false}
          />
          <Input
            labelStyle={{ marginTop: 10 }}
            label="Name"
            value={name}
            onChangeText={(val) => setName(val)}
          />
          <Input
            labelStyle={{ marginTop: 10 }}
            label="Description"
            multiline={true}
            value={description}
            onChangeText={(val) => setDescription(val)}
          />
          <AppText
            style={{
              color: "#84939e",
              marginTop: 10,
              marginLeft: 5,
              fontWeight: "bold",
            }}
          >
            {" "}
            Image:{" "}
          </AppText>
          {image ? (
            <ScrollView
              horizontal
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              height={100}
              style={{ marginTop: 10, marginLeft: 10 }}
              contentInset={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 20,
              }}
              contentContainerStyle={{
                paddingRight: Platform.OS === "android" ? 20 : 0,
              }}
            >
              {image.map((img, i) => {
                return (
                  <ImageBackground
                    style={[
                      styles.imageBackground,
                      { marginLeft: i !== 0 ? 15 : 0 },
                    ]}
                    onPress={() => {
                      (imgModal = img.image), setModalVisible(true);
                    }}
                    source={{ uri: img.image }}
                  >
                    <TouchableOpacity
                      style={styles.imageButton}
                      onPress={() => {
                        let temp = [...image];
                        temp.splice(i, 1);
                        if (temp.length === 0) {
                          setImage(null);
                        } else {
                          setImage(temp);
                        }
                        (imgModal = img.image), setModalVisible(true);
                      }}
                    >
                      <AntDesign
                        name="delete"
                        size={25}
                        color={colors.danger}
                        style={styles.imageAddIcon}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                );
              })}
              <TouchableOpacity
                style={[styles.addImgButton, { marginLeft: 15 }]}
                onPress={() => bs.current.snapTo(0)}
              >
                <Ionicons name="add" size={60} color={colors.secondary} />
              </TouchableOpacity>
            </ScrollView>
          ) : (
            <View style={styles.addImgView}>
              <TouchableOpacity
                style={styles.addImgButton}
                onPress={() => bs.current.snapTo(0)}
              >
                <Ionicons name="add" size={60} color={colors.secondary} />
              </TouchableOpacity>
            </View>
          )}

          <AppButton
            title={"SAVE"}
            style={{ alignSelf: "center" }}
            color={colors.green}
            onPress={() => {
              saveItem(
                user.id,
                categoryId,
                categoryType,
                navigation,
                setError,
                name,
                description,
                image
              );
            }}
          />
        </Animated.View>
      </ScrollView>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ backgroundColor: "#000000", flex: 1 }}>
          <View
            style={{
              alignSelf: "flex-start",
              marginLeft: 10,
              marginTop: 20,
              backgroundColor: "#000000",
              flexDirection: "row",
            }}
          >
            <Entypo
              name="cross"
              size={30}
              onPress={() => setModalVisible(false)}
              color={"#ffffff"}
            />
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                flex: 1,
                justifyContent: "flex-end",
                marginRight: 20,
              }}
            ></View>
          </View>

          <Image
            key={"Modl1LastImg"}
            style={{
              width: "100%",
              height: 400,
              marginTop: Dimensions.get("window").height / 2 - 250,
            }}
            source={{ uri: imgModal }}
          />
        </View>
      </Modal>
      <Spinner
        visible={loading}
        textContent={"Saving..."}
        textStyle={styles.spinnerTextStyle}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  addText: {
    alignSelf: "flex-end",
    marginLeft: 15,
    color: colors.orange,
    marginTop: 10,
  },
  spinnerTextStyle: {
    color: colors.secondary,
  },
  container: {
    padding: 15,
    marginBottom: 20,
    flex: 1,
  },
  text: {
    fontSize: 22,
    marginBottom: 40,
    color: colors.primary,
    alignSelf: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  imageBackground: {
    height: 100,
    width: 100,
    flexDirection: "column-reverse",
    alignItems: "flex-end",
  },
  imageButton: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  imageAddIcon: {
    marginRight: 10,
    marginBottom: 10,
  },
  imagePopUpIcon: {
    marginRight: 10,
    marginBottom: 10,
    justifyContent: "center",
    flex: 1,
  },
  addImgView: {
    alignSelf: "center",
    marginTop: 10,
  },
  addImgButton: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#9c9c9c",
    borderWidth: 1,
    borderRadius: 5,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 25,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 5,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    marginBottom: 20,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
export default Item;
