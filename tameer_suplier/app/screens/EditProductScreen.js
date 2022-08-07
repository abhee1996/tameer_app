import { StackActions } from "@react-navigation/native";
import React, { useState, useContext, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  FlatList,
  ToastAndroid,
  TouchableHighlight,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import config from "../config/config";
import { UserContext } from "../custom_hooks/UserContext";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import ImagePicker from "react-native-image-crop-picker";
import { TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import Separator from "../components/Separator";
import { Input } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import RNFetchBlob from "react-native-fetch-blob";
import Toast from "react-native-simple-toast";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

async function getCategories(categoryId, type) {
  let url = "";
  if (type == "material") {
    url =
      config.server +
      "api/material/findAllMaterialFromMaterialId?materialId=" +
      categoryId;
  } else if (type == "consultant") {
    url = config.server + "api/consultant/findAll";
  }
  return fetch(url).then((data) => data.json());
}
const showToastWithGravityAndOffset = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Updted!",
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    150
  );
};

function EditProductScreen({ route, navigation }) {
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const { categoryType, categoryName, categoryId } = route.params;

  const [name, setName] = useState(route.params.name);
  const [description, setDescription] = useState(route.params.description);
  const [image, setImage] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [pickerModal, setPickerModal] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const [deletedImages, setDeletedImages] = useState([]);
  const [imageChanged, setImageChanged] = useState(false);
  let bs = React.createRef();
  let fall = new Animated.Value(1);
  useEffect(() => {
    getCategories(route.params.category_id, route.params.type).then(
      (result) => {
        if (route.params.type == "consultant") {
          setCategories(result);
          const obj = result.filter((item) => {
            if (item.id == route.params.category_id) return item;
          });
          setImage(
            route.params.image.map((curImg) => ({
              image: curImg.image,
              isNew: false,
            }))
          );
          setSelectedCat({ name: obj[0].name, id: route.params.category_id });
        } else {
          setCategories(result.categories);
          setImage(
            route.params.image.map((curImg) => ({
              image: curImg.image,
              isNew: false,
            }))
          );
          setSelectedCat({
            name: result.material_name,
            id: route.params.category_id,
          });
        }
        setLoading(false);
      }
    );
  }, []);
  useEffect(() => {
    if (error !== "") ToastAndroid.show(error, ToastAndroid.SHORT);
  }, [error]);
  //save item
  async function saveItem(
    id,
    categoryId,
    type,
    navigation,
    setError,
    name,
    description
  ) {
    let productImages = image;
    setLoading(true);
    //if else conditional validitions
    if (name === "") {
      setError("Name is necessary field");
      setLoading(false);
      return;
    }
    if (
      productImages === null ||
      productImages === "" ||
      productImages === undefined
    ) {
      setError("Product image is necessary field");
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
    if (imageChanged) {
      productImages.forEach((img) => {
        if (img.isNew) {
          let parts = img.image.split("/");
          let file = parts.pop();
          data.push({
            name: "file",
            filename: Date.now() + "-" + file,
            type: "file",
            data: RNFetchBlob.wrap(img.image),
          });
        }
      });
    } else {
      data.push({ name: "file", filename: "", type: "", data: "" });
    }
    const itemData = JSON.stringify({
      id: id,
      categoryType: type,
      companyId: user.id,
      categoryId: categoryId,
      name: name,
      description: description,
      deletedImages: deletedImages.map((img) => {
        let parts = img.image.split("/");
        let imageName = parts.pop();
        return imageName;
      }),
    });
    data.push({
      name: "json",
      data: itemData,
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
  //open camera
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      mediaType: "photo",
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((img) => {
      if (image && Array.isArray(image)) {
        setImage([...image, { image: img.path, isNew: true }]);
      } else {
        setImage([{ image: img.path, isNew: true }]);
      }
      setImageChanged(true);
    });
    bs.current?.snapTo(1);
  };
  //pick image from liberary
  const pickImage = async () => {
    setModalVisible(false);
    ImagePicker.openPicker({
      mediaType: "photo",
      multiple: true,
    }).then((pickedImage) => {
      if (pickedImage) {
        if (image && Array.isArray(image)) {
          setImage([...image, { image: pickedImage[0].path, isNew: true }]);
        } else {
          setImage([{ image: pickedImage[0].path, isNew: true }]);
        }
        setImageChanged(true);
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
  const ImageViewer = () => {
    return (
      <>
        <AppText
          style={{
            color: "#84939e",
            marginTop: 10,
            marginLeft: 5,
            fontWeight: "bold",
          }}
        >
          Image:
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
                  key={i}
                  source={{ uri: img.image }}
                >
                  <TouchableOpacity
                    style={styles.imageButton}
                    onPress={() => {
                      setDeletedImages([...deletedImages, img]);
                      let temp = [...image];
                      temp.splice(i, 1);
                      if (temp.length === 0) {
                        setImage(null);
                      } else {
                        setImage(temp);
                      }
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
      </>
    );
  };
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
          <View style={styles.container}>
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
              <AppText style={styles.text}>Update Product</AppText>
              <AppText></AppText>
            </View>
            <AppText
              style={{ color: "#84939e", marginLeft: 5, fontWeight: "bold" }}
            >
              {" "}
              Category:{" "}
            </AppText>
            <TouchableOpacity onPress={() => setPickerModal(true)}>
              <View
                style={{
                  height: 50,
                  width: "100%",
                  marginHorizontal: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  borderBottomColor: "#84939e",
                  borderBottomWidth: 1,
                  paddingBottom: 5,
                  marginBottom: 20,
                }}
              >
                {selectedCat ? (
                  <AppText style={{ fontSize: 18, paddingHorizontal: 7 }}>
                    {selectedCat.name}
                  </AppText>
                ) : (
                  <AppText>Select Category</AppText>
                )}
                <Entypo
                  style={{ marginRight: 10 }}
                  name="chevron-down"
                  size={20}
                />
              </View>
            </TouchableOpacity>
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

            <ImageViewer />
            <AppText
              style={{ color: "red", fontSize: 12, alignSelf: "center" }}
            >
              {error}
            </AppText>
            <AppButton
              title={"SAVE"}
              style={{ marginTop: 10, alignSelf: "center" }}
              color={colors.green}
              onPress={() => {
                saveItem(
                  route.params.itemId,
                  selectedCat.id,
                  route.params.type,
                  navigation,
                  setError,
                  name,
                  description
                );
              }}
            />
          </View>
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
            >
              <MaterialIcons
                name="edit"
                color={colors.light}
                style={{ marginRight: 20 }}
                size={30}
                onPress={pickImage}
              />
              <MaterialIcons
                name="delete"
                color={colors.danger}
                size={30}
                onPress={() => {
                  setModalVisible(false);
                  setImage(null);
                }}
              />
            </View>
          </View>
          <Image
            source={{ uri: image }}
            style={{
              alignSelf: "center",
              width: "100%",
              height: 400,
              marginTop: 50,
            }}
          />
        </View>
      </Modal>

      <Overlay
        isVisible={pickerModal ? pickerModal : false}
        onBackdropPress={() => setPickerModal(false)}
      >
        <View style={{ width: 300, height: 400, padding: 20 }}>
          <AppText style={{ color: colors.medium, marginBottom: 10 }}>
            Select Category
          </AppText>
          <FlatList
            data={categories}
            keyExtractor={(category) => category.id}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (route.params.type == "material")
                      setSelectedCat({ name: item.name, id: item.id });
                    else setSelectedCat({ name: item.name, id: item.id });
                    setPickerModal(false);
                  }}
                >
                  <View style={{ marginVertical: 20 }}>
                    <AppText>{item.name}</AppText>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Overlay>
      <Spinner
        visible={loading}
        textContent={"..."}
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
  addImgButton: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#9c9c9c",
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    marginBottom: 40,
    color: colors.primary,
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
export default EditProductScreen;
