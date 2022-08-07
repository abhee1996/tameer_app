import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  LogBox,
  ToastAndroid,
} from "react-native";
import AppText from "../components/AppText";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import colors from "../config/colors";
import config from "../config/config";
import ImagePicker from "react-native-image-crop-picker";
import Spinner from "react-native-loading-spinner-overlay";
import { Overlay } from "react-native-elements";
import * as Yup from "yup";
import RNFetchBlob from "react-native-fetch-blob";
import Toast from "react-native-simple-toast";
import { Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity, Text } from "react-native";
import axios from "axios";
import { color } from "react-native-reanimated";
import VideoPlayer from "react-native-video-controls";
import { createThumbnail } from "react-native-create-thumbnail";
import GetLocation from "react-native-get-location";
import FastImage from "react-native-fast-image";
import LocationEnabler from "react-native-location-enabler";
const {
  PRIORITIES: { HIGH_ACCURACY },
  useLocationSettings,
} = LocationEnabler;
const updateCompany = (userId, user) => {
  return axios
    .post(config.server + "api/company/updateCompnay/" + userId, user)
    .then((rsp) => rsp.data);
};

const updateLogo = async (id, logo, setLogo) => {
  const url = config.server + "api/company/updateLogo";
  RNFetchBlob.fs
    .stat(logo)
    .then((stats) => {
      RNFetchBlob.fetch(
        "POST",
        url,
        {
          "Content-Type": "multipart/form-data",
        },
        [
          {
            name: "file",
            filename: stats.filename,
            type: stats.type,
            data: RNFetchBlob.wrap(logo),
          },
          {
            name: "json",
            data: JSON.stringify({
              companyId: id,
            }),
          },
        ]
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status) {
            setLogo(logo);
            Toast.show("Updated Logo");
          } else {
            Toast.show("Error");
          }
        })
        .catch((error) => {
          console.error(error);
          Toast.show("Error");
        });
    })
    .catch((error) => {
      console.error(error);
      Toast.show("Error");
    });
};

async function getUserData(companyId) {
  const url = config.server + "api/company/getCompnay?id=" + companyId;
  return fetch(url).then((data) => data.json());
}

async function deleteSelectedImage(imageId) {
  const url = config.server + "api/company/deleteImage?imageId=" + imageId;
  return fetch(url, { method: "GET" })
    .then((response) => {
      response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

async function deleteCompanyVideo(id) {
  const url = config.server + "api/company/deleteVideo?companyId=" + id;
  return fetch(url, { method: "GET" })
    .then((response) => {
      response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error("video deleting error", error);
    });
}
var LATITUDE_DELTA = 0.001;
var LONGITUDE_DELTA = 0.001;
function Protfolio({ route, navigation }) {
  const { userId } = route.params;

  const nameRef = useRef();

  const [user, setUser] = useState();
  const [imageId, setImageId] = useState("");
  const [images, setImages] = useState([]);

  const [logo, setLogo] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [delVideoModal, setdelVideoModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [viewImage, setViewImage] = useState(null);
  const [checkAddressIs, setCheckAddressIs] = useState(false);
  const [borderColorChange, setBorderColor] = useState({
    name: "#bfbfbf",
    email: "#bfbfbf",
    number: "#bfbfbf",
    address: "#bfbfbf",
    website: "#bfbfbf",
    description: "#bfbfbf",
    twitter: "#bfbfbf",
    facebook: "#bfbfbf",
    youtube: "#bfbfbf",
    instagram: "#bfbfbf",
  });
  //video states
  const [videos, setVideos] = useState("");
  const [viewVideo, setViewVideo] = useState("");

  //external video

  const videoPlayer = useRef(null);
  const [paused, setPaused] = useState(true);
  const [videoThumbnail, setvideoThumbnail] = useState("");
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("name"),
    email: Yup.string().required().label("email"),
    number: Yup.string().required().min(11).label("number"),
    address: Yup.string().required().label("address"),
  });
  //location enabler state
  const [enabled, requestResolution] = useLocationSettings(
    {
      priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
      alwaysShow: true, // default false
      needBle: true, // default false
    },
    false /* optional: default undefined */
  );
  useEffect(() => {
    if (!enabled) {
      requestResolution();
    }
  }, []);

  useEffect(() => {
    if (enabled) {
      getCurrentLocation();
    }
  }, [enabled]);
  async function getCurrentLocation() {
    setLoading(true);
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        var initialRegion = {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };

        setLoading(false);
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn("location error", code, message);
      });

    setLoading(false);
  }
  const addCompanyImage = async (id, image) => {
    const url = config.server + "api/company/addImage";
    RNFetchBlob.fs
      .stat(image)
      .then((stats) => {
        RNFetchBlob.fetch(
          "POST",
          url,
          {
            "Content-Type": "multipart/form-data",
          },
          [
            {
              name: "file",
              filename: stats.filename,
              type: stats.type,
              data: RNFetchBlob.wrap(image),
            },
            {
              name: "json",
              data: JSON.stringify({
                companyId: id,
              }),
            },
          ]
        )
          .then((response) => {
            if (response.data == "1") {
              Toast.show("Saved!");
              setImages([
                ...images,
                { id: Math.floor(Math.random() * 106660) + 1000, image: image },
              ]);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const addCompanyVideo = async (id, video) => {
    const url = config.server + "api/company/addVideo";
    setSaving(true);
    RNFetchBlob.fs
      .stat(video)
      .then((stats) => {
        RNFetchBlob.fetch(
          "POST",
          url,
          {
            "Content-Type": "multipart/form-data",
          },
          [
            {
              name: "file",
              filename: stats.filename,
              type: stats.type,
              data: RNFetchBlob.wrap(video),
            },
            {
              name: "json",
              data: JSON.stringify({
                companyId: id,
              }),
            },
          ]
        )
          .then((response) => {
            if (response.data == "1") {
              Toast.show("Saved!");
            }
            setSaving(false);
          })
          .catch((error) => {
            setSaving(false);
          });
      })
      .catch((error) => {
        setSaving(false);
      });
  };
  const pickLogoImage = async () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      updateLogo(userId, image.path, setLogo);
    });
  };

  const pickImage = async () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      addCompanyImage(userId, image.path, setImages);
    });
  };
  const pickVideo = async () => {
    ImagePicker.openPicker({
      mediaType: "video",
      maxWidth: "100%",
      maxHeight: "100%",
    }).then((video) => {
      setVideos(video.path);
    });
  };

  useEffect(() => {
    if (user) {
      let addressIndex = route.params?.addressIndex;
      if (addressIndex >= 0) {
        let latitudeArray = [...user?.latitude];
        let longitudeArray = [...user?.longitude];
        latitudeArray[addressIndex] = route?.params?.region?.latitude;
        longitudeArray[addressIndex] = route?.params?.region?.longitude;
        setUser({
          ...user,
          longitude: [...longitudeArray],
          latitude: [...latitudeArray],
        });
      }
    }
  }, [route?.params?.region]);

  LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  const refreshData = () => {
    if (!user) {
      getUserData(userId)
        .then((data) => {
          setImages(data.images);
          setUser(data.company);
          setLogo(data.company.logo);
          setVideos(data.company.video);
          setViewVideo(data.company.video);
          setLoading(false);
          createThumbnail({
            url: data.company.video,
            timeStamp: 5000,
          })
            .then((response) => {
              setvideoThumbnail(response);
            })
            .catch((err) => console.log("thumbnail error", { err }));
        })
        .catch((e) => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    refreshData();
  }, []);
  const VideoDeleteIcon = () => {
    return (
      <View
        onTouchStart={() => setdelVideoModal(true)}
        style={{
          position: "absolute",
          right: "85%",
          top: "-2%",
          width: "10%",
          height: "13%",
          margin: 10,
        }}
      >
        <MaterialIcons
          name="delete"
          color="red"
          size={30}
          onPress={() => setdelVideoModal(true)}
          style={{
            position: "absolute",
          }}
        />
      </View>
    );
  };

  //videos section
  return (
    <Screen>
      {loading ? (
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
      ) : (
        <>
          <ScrollView>
            <View style={styles.head}>
              <TouchableWithoutFeedback onPress={pickLogoImage}>
                <View style={styles.circle}>
                  <>
                    {logo !== "" ? (
                      <Image
                        style={styles.image}
                        resizeMode={"cover"}
                        source={{ uri: logo }}
                      />
                    ) : (
                      <Image
                        style={styles.image}
                        source={require("../img/default-logo.png")}
                      />
                    )}
                    <View
                      style={{
                        position: "absolute",
                        top: "70%",
                        left: "82%",
                        backgroundColor: "lightgray",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialIcons
                        color={colors.secondary}
                        name="edit"
                        size={20}
                      />
                    </View>
                  </>
                </View>
              </TouchableWithoutFeedback>
            </View>

            <View style={{ padding: 20 }}>
              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.name },
                ]}
              >
                <FontAwesome
                  name="user-o"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />
                <TextInput
                  name="name"
                  placeholder="Name"
                  placeholderTextColor="#666666"
                  value={user?.name}
                  onChangeText={(text) => setUser({ ...user, name: text })}
                  style={{
                    flex: 1,
                    marginTop: 1,
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      name: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({ ...borderColorChange, name: "#bfbfbf" })
                  }
                  autoCapitalize="none"
                  ref={nameRef}
                />

                {user?.name.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{ paddingVertical: 20, height: 1 }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.email },
                ]}
              >
                <FontAwesome
                  name="envelope-o"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />
                <TextInput
                  type="text"
                  name="email"
                  placeholder="Email"
                  placeholderTextColor="#666666"
                  value={user?.email}
                  onChangeText={(text) => setUser({ ...user, email: text })}
                  style={{
                    flex: 1,
                    marginTop: 1,
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      email: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({ ...borderColorChange, email: "#bfbfbf" })
                  }
                  autoCapitalize="none"
                  ref={nameRef}
                />
                {user?.email.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{ paddingVertical: 20, height: 1 }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.number },
                ]}
              >
                <Feather
                  name="phone"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />
                <TextInput
                  type="text"
                  name="number"
                  placeholder="Phone"
                  placeholderTextColor="#666666"
                  value={user?.number}
                  onChangeText={(text) => setUser({ ...user, number: text })}
                  style={{
                    flex: 1,
                    marginTop: 1,
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      number: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({ ...borderColorChange, number: "#bfbfbf" })
                  }
                  autoCapitalize="none"
                  ref={nameRef}
                />
                {user?.number.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{ paddingVertical: 20, height: 1 }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View style={{ marginBottom: 20, marginTop: 30 }}>
                <View style={{ marginBottom: 20, width: 100 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.secondary,
                      width: 100,
                      marginBottom: -10,
                    }}
                    onPress={() => {
                      setUser({
                        ...user,
                        address: [...user?.address, ""],
                        latitude: [...user?.latitude, 0],
                        longitude: [...user?.longitude, 0],
                      });
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      + Address
                    </Text>
                  </TouchableOpacity>
                </View>
                {user?.address.map((adrs, i) => (
                  <View key={"UsrView" + i} style={styles?.inputContainer}>
                    <View
                      key={"UsrInnrView" + i}
                      style={[
                        styles.formViewStyle,
                        { borderBottomColor: borderColorChange.address },
                      ]}
                    >
                      <FontAwesome
                        key={"UsrInnrViewIcon" + i}
                        name="address-book-o"
                        style={styles.fontStyle}
                        color={colors.secondary}
                        size={25}
                      />
                      <TextInput
                        key={"UsrInnrViewTxt" + i}
                        type="text"
                        name="address"
                        placeholder="Address"
                        placeholderTextColor="#666666"
                        value={user?.address[i]}
                        onChangeText={(text) => {
                          let tempAddressArray = [...user?.address];
                          let tempAddressVar = tempAddressArray[i];
                          tempAddressVar = text;
                          tempAddressArray[i] = text;

                          setUser({ ...user, address: tempAddressArray });
                        }}
                        style={{
                          flex: 1,
                          marginTop: 1,
                          paddingTop: 18,
                          paddingLeft: 10,
                          color: "#05375a",
                          fontSize: 16,
                        }}
                        onFocus={() =>
                          setBorderColor({
                            ...borderColorChange,
                            address: colors.secondary,
                          })
                        }
                        onBlur={() =>
                          setBorderColor({
                            ...borderColorChange,
                            address: "#bfbfbf",
                          })
                        }
                        autoCapitalize="none"
                        multiline={true}
                        ref={nameRef}
                      />

                      {user?.address[i].length > 0 ? (
                        <Animatable.View
                          key={"UsrInnrViewAnimView" + i}
                          animation="bounceIn"
                          style={{ paddingVertical: 20, height: 1 }}
                        >
                          <Feather
                            key={"UsrInnrViewAnimViewIcon" + i}
                            name="check-circle"
                            color={"green"}
                            size={20}
                          />
                        </Animatable.View>
                      ) : (
                        <Animatable.View
                          key={"UsrInnrViewAnimView" + i}
                          animation="bounceIn"
                          style={{ paddingVertical: 20, height: 1 }}
                        >
                          <Feather
                            key={"UsrInnrViewAnimViewIcon" + i}
                            name="check-circle"
                            color={checkAddressIs ? "red" : "green"}
                            size={20}
                          />
                        </Animatable.View>
                      )}
                    </View>
                    <MaterialCommunityIcons.Button
                      key={"UsrInnrViewAnotherIcon" + i}
                      name="google-maps"
                      size={25}
                      style={styles.map}
                      backgroundColor={"#dbdbdb"}
                      color={colors.primary}
                      onPress={() =>
                        navigation.navigate("MapScreen", {
                          userId: userId,
                          addressIndex: i,
                          latitude: user?.latitude[i],
                          longitude: user?.longitude[i],
                        })
                      }
                    >
                      <Text
                        key={"UsrInnrViewAnotherTxt" + i}
                        style={{
                          fontFamily: "Arial",
                          fontSize: 15,
                          paddingLeft: 50,
                        }}
                      >
                        Lat={user?.latitude[i]} Long={user?.longitude[i]}
                      </Text>
                    </MaterialCommunityIcons.Button>

                    <TouchableOpacity
                      key={"UsrInnrViewBtn" + i}
                      style={{
                        marginTop: 10,
                        backgroundColor: colors.danger,
                        width: 70,
                        borderRadius: 5,
                        alignSelf: "flex-end",
                      }}
                      onPress={() => {
                        let tempAddress = user?.address;
                        tempAddress.splice(i, 1);
                        setUser({ ...user, address: tempAddress });
                      }}
                    >
                      <MaterialCommunityIcons
                        key={"UsrInnrViwBtnIcon" + i}
                        name="delete-circle-outline"
                        size={30}
                        style={{ alignSelf: "center" }}
                      ></MaterialCommunityIcons>
                    </TouchableOpacity>
                  </View>
                ))}
                {checkAddressIs ? (
                  <Text style={{ color: "red" }}>
                    *Atleast one address required
                  </Text>
                ) : (
                  <Text>
                    {checkAddressIs == false ? <Text> </Text> : <Text> </Text>}
                  </Text>
                )}
              </View>

              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.description },
                ]}
              >
                <FontAwesome
                  name="info-circle"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />
                <TextInput
                  type="text"
                  name="description"
                  placeholder="Description"
                  placeholderTextColor="#666666"
                  value={user?.description}
                  onChangeText={(text) =>
                    setUser({ ...user, description: text })
                  }
                  style={{
                    flex: 1,
                    marginTop: 1,
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      description: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({
                      ...borderColorChange,
                      description: "#bfbfbf",
                    })
                  }
                  autoCapitalize="none"
                  multiline={true}
                  ref={nameRef}
                />
                {user?.description.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{ paddingVertical: 20, height: 1 }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.website },
                ]}
              >
                <FontAwesome
                  name="internet-explorer"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />
                <TextInput
                  type="text"
                  name="website"
                  placeholder="Website"
                  placeholderTextColor="#666666"
                  value={user?.website}
                  onChangeText={(text) => setUser({ ...user, website: text })}
                  style={{
                    flex: 1,
                    marginTop: 1,
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      website: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({ ...borderColorChange, website: "#bfbfbf" })
                  }
                  autoCapitalize="none"
                  ref={nameRef}
                />
                {user?.website.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{ paddingVertical: 20, height: 1 }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.twitter },
                ]}
              >
                <FontAwesome
                  name="twitter"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />
                <TextInput
                  type="text"
                  name="twitter"
                  placeholder="Twitter"
                  placeholderTextColor="#666666"
                  value={user?.twitter}
                  onChangeText={(text) => setUser({ ...user, twitter: text })}
                  style={{
                    flex: 1,
                    marginTop: 1,
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      twitter: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({ ...borderColorChange, twitter: "#bfbfbf" })
                  }
                  autoCapitalize="none"
                  ref={nameRef}
                />
                {user?.twitter.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{ paddingVertical: 20, height: 1 }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.facebook },
                ]}
              >
                <FontAwesome
                  name="facebook-official"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />
                <TextInput
                  type="text"
                  name="facebook"
                  placeholder="Facebook"
                  value={user?.facebook}
                  onChangeText={(text) => setUser({ ...user, facebook: text })}
                  placeholderTextColor="#666666"
                  style={{
                    flex: 1,
                    marginTop: 1,
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      facebook: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({
                      ...borderColorChange,
                      facebook: "#bfbfbf",
                    })
                  }
                  autoCapitalize="none"
                  ref={nameRef}
                />
                {user?.facebook.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{ paddingVertical: 20, height: 1 }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.youtube },
                ]}
              >
                <FontAwesome
                  name="youtube-play"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />
                <TextInput
                  type="text"
                  name="youtube"
                  placeholder="Youtube"
                  value={user?.youtube}
                  onChangeText={(text) => setUser({ ...user, youtube: text })}
                  placeholderTextColor="#666666"
                  style={{
                    flex: 1,
                    marginTop: 1,
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      youtube: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({ ...borderColorChange, youtube: "#bfbfbf" })
                  }
                  autoCapitalize="none"
                  ref={nameRef}
                />
                {user?.youtube.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{ paddingVertical: 20, height: 1 }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View
                style={[
                  styles.formViewStyle,
                  { borderBottomColor: borderColorChange.instagram },
                ]}
              >
                <FontAwesome
                  name="instagram"
                  style={styles.fontStyle}
                  color={colors.secondary}
                  size={25}
                />

                <TextInput
                  type="text"
                  name="instagram"
                  placeholder="Instagram"
                  value={user?.instagram}
                  onChangeText={(text) => setUser({ ...user, instagram: text })}
                  placeholderTextColor="#666666"
                  autoCapitalize="none"
                  style={{
                    marginTop: 1,
                    width: "100%",
                    paddingTop: 18,
                    paddingLeft: 10,
                    color: "#05375a",
                    fontSize: 16,
                  }}
                  onFocus={() =>
                    setBorderColor({
                      ...borderColorChange,
                      instagram: colors.secondary,
                    })
                  }
                  onBlur={() =>
                    setBorderColor({
                      ...borderColorChange,
                      instagram: "#bfbfbf",
                    })
                  }
                  ref={nameRef}
                />
                {user?.instagram.length > 0 ? (
                  <Animatable.View
                    animation="bounceIn"
                    style={{
                      paddingVertical: 20,
                      height: 1,
                      backgroundColor: colors.black,
                    }}
                  >
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>

              <View style={[styles.editProfileSaveBtnViewFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    if (user?.address[0].length == 0) {
                      setCheckAddressIs(true);
                    } else {
                      setCheckAddressIs(false);
                      setSaving(true);
                      updateCompany(userId, user).then((rsp) => {
                        if (rsp) {
                          setSaving(false);
                          ToastAndroid.show("Saved", ToastAndroid.SHORT);
                        }
                      });
                    }
                  }}
                >
                  <Text style={styles.editProfileSaveBtn}>Save</Text>
                </TouchableOpacity>
              </View>
              <>
                <AppText style={styles.imagelable}>Images:</AppText>
                <View
                  style={{
                    width: "100%",
                    maxeight: 400,
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <FlatList
                    numColumns={2}
                    key={2}
                    contentContainerStyle={{ alignSelf: "center" }}
                    refreshing={refresh}
                    data={[...images, { id: 1212, image: "plus" }]}
                    keyExtractor={(image) => image.id}
                    renderItem={({ item, index }) => {
                      if (item.image == "plus")
                        return (
                          <View
                            key={"Image1View1" + index}
                            style={{
                              backgroundColor: "#eae9e0",
                              width: 150,
                              height: 150,
                              margin: 5,
                              borderRadius: 10,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <TouchableWithoutFeedback
                              key={"Image1View1Btn1" + index}
                              onPress={pickImage}
                            >
                              <Entypo
                                key={"Image1View1Btn1Icon1" + index}
                                name="images"
                                color="white"
                                size={70}
                              />
                            </TouchableWithoutFeedback>
                          </View>
                        );
                      else {
                        return (
                          <TouchableWithoutFeedback
                            key={"Image1View1BtnAnother" + index}
                            onPress={() => {
                              setViewImage(item.image);
                              setImageModal(true);
                            }}
                            onLongPress={() => {
                              setImageId(item.id);
                              setDeleteModalVisible(true);
                            }}
                          >
                            <Image
                              key={"Image1View1BtnAnotherImg" + index}
                              style={{
                                width: 150,
                                height: 150,
                                margin: 5,
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: "white",
                              }}
                              source={{ uri: item.image }}
                            />
                          </TouchableWithoutFeedback>
                        );
                      }
                    }}
                  />
                </View>
              </>
              <AppText style={styles.imagelable}>Video:</AppText>
              <View
                style={{
                  width: "100%",
                  maxeight: 400,
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <>
                  {!videos || videos.length == 0 ? (
                    <View
                      style={{
                        width: "100%",
                        height: "30%",
                      }}
                    >
                      <View
                        key={"Video123View1"}
                        style={{
                          backgroundColor: "#eae9e0",
                          width: 150,
                          height: 150,
                          marginTop: 5,
                          borderRadius: 10,
                          borderWidth: 2,
                          borderColor: "white",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <TouchableWithoutFeedback
                          key={"Video1View1Btn1"}
                          onPress={() => {
                            pickVideo();
                          }}
                        >
                          <Entypo
                            key={"Video1View1Btn1Icon1"}
                            name="video"
                            color="white"
                            size={70}
                          />
                        </TouchableWithoutFeedback>
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        width: "95%",
                        height: "100%",
                        marginVertical: "10%",
                        margin: 5,
                      }}
                    >
                      <TouchableOpacity key={"Video1View1BtnAnother"}>
                        <VideoPlayer
                          source={{
                            uri: videos,
                          }}
                          videoWidth={1600}
                          videoHeight={2600}
                          seekColor={"#50A5F4"}
                          paused={paused}
                          controlAnimationTiming={300}
                          scrubbing={1000}
                          disableBack={true}
                          tapAnywhereToPause={true}
                          ref={videoPlayer}
                        />

                        {viewVideo !== "" ? (
                          <>
                            <VideoDeleteIcon />
                            <>
                              {paused && (
                                <View
                                  style={{
                                    flex: 1,
                                    position: "absolute",
                                    resizeMode: "cover",
                                    zIndex: 1,

                                    height: "99.99%",
                                    width: "99.99%",
                                  }}
                                >
                                  {!videoThumbnail?.path ? (
                                    <>
                                      <View
                                        style={{
                                          height: "99.99%",
                                          width: "99.99%",
                                          backgroundColor: "lightgray",
                                          zIndex: 10,
                                        }}
                                      >
                                        <VideoDeleteIcon />
                                        <FastImage
                                          key={"Image132View1BtnAImg"}
                                          style={{
                                            height: "40%",
                                            width: "40%",
                                            padding: 11,
                                            paddingBottom: 13,
                                            flexDirection: "row",
                                            top: 55,
                                            position: "absolute",
                                            backgroundColor: "lightgray",
                                            alignSelf: "center",
                                            zIndex: 30,
                                          }}
                                          source={require("../img/giphyloading2.gif")}
                                        />
                                      </View>
                                    </>
                                  ) : (
                                    <>
                                      <Image
                                        key={"Image1View1Btnthumbnail"}
                                        style={{
                                          height: "100%",
                                          width: "100%",
                                        }}
                                        source={{ uri: videoThumbnail.path }}
                                      />
                                      <VideoDeleteIcon />

                                      <FontAwesome
                                        name="play"
                                        style={{
                                          position: "absolute",
                                          alignSelf: "center",
                                          justifyContent: "center",
                                          top: 65,
                                        }}
                                        color={colors.secondary}
                                        size={55}
                                        onPress={() => {
                                          setPaused(false);
                                        }}
                                      />
                                    </>
                                  )}
                                </View>
                              )}
                            </>
                          </>
                        ) : (
                          <></>
                        )}
                      </TouchableOpacity>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          width: "100%",
                        }}
                      >
                        {viewVideo ? (
                          <></>
                        ) : (
                          <>
                            <TouchableOpacity
                              style={styles.editProfileSaveBtnView}
                              onPress={() => {
                                if (viewVideo) {
                                  addCompanyVideo(userId, videos);
                                  refreshData();
                                } else {
                                  addCompanyVideo(userId, videos);
                                  refreshData();
                                }
                              }}
                            >
                              <Text style={styles.SaveVideoBtn}>upload</Text>
                            </TouchableOpacity>
                          </>
                        )}
                      </View>
                    </View>
                  )}
                </>
              </View>
            </View>
            <Spinner
              visible={saving}
              textContent={"Saving..."}
              textStyle={styles.spinnerTextStyle}
            />
          </ScrollView>
          {/* Image delete overlay */}
          <Overlay
            isVisible={deleteModalVisible ? deleteModalVisible : false}
            onBackdropPress={() => setDeleteModalVisible(false)}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                deleteSelectedImage(imageId).then((result) => {
                  // if (result.status) {
                  setImages(
                    images.filter((image) => {
                      if (image.id != imageId) return image;
                    })
                  );
                  setDeleteModalVisible(false);
                  setRefresh(true);
                  //}
                });
              }}
            >
              <View>
                <MaterialIcons
                  name="delete-outline"
                  size={30}
                  style={{ alignSelf: "center", color: "red" }}
                />
                <AppText style={{ fontSize: 20 }}>Delete</AppText>
              </View>
            </TouchableWithoutFeedback>
          </Overlay>
          {/* video delete overlay */}

          <Overlay
            key={"Overlay1"}
            isVisible={delVideoModal ? delVideoModal : false}
            onBackdropPress={() => setdelVideoModal(false)}
          >
            <TouchableWithoutFeedback
              key={"OverlayBtn1"}
              onPress={() => {
                deleteCompanyVideo(userId).then((result) => {
                  refreshData();
                  setViewVideo("");
                  setVideos("");
                });

                setdelVideoModal(false);
              }}
            >
              <View key={"OverlayView1"}>
                <MaterialIcons
                  key={"OverlayViewIcon1"}
                  name="delete-outline"
                  size={30}
                  style={{ alignSelf: "center", color: "red" }}
                />
                <AppText
                  key={"SpeciallTxt"}
                  keyApp={"AppKey1_2"}
                  style={{ fontSize: 20 }}
                >
                  Remove
                </AppText>
              </View>
            </TouchableWithoutFeedback>
          </Overlay>
        </>
      )}
      <Modal animationType="slide" visible={imageModal}>
        <View style={{ backgroundColor: "#000000", flex: 1 }}>
          <Entypo
            style={{
              alignSelf: "flex-start",
              marginLeft: 10,
              marginTop: 20,
              backgroundColor: "#000000",
            }}
            name="cross"
            size={30}
            onPress={() => setImageModal(false)}
            color={"#ffffff"}
          />
          <Image
            style={{
              alignSelf: "center",
              width: "100%",
              height: 400,
              marginTop: Dimensions.get("window").height / 2 - 250,
            }}
            source={{ uri: viewImage }}
          />
        </View>
      </Modal>
    </Screen>
  );
}
const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  spinnerTextStyle: {
    color: colors.secondary,
  },
  videospinnerTextStyle: {
    color: colors.black,
  },
  map: {
    borderRadius: 20,
    flexDirection: "row-reverse",
  },
  imagelable: {
    fontSize: 20,
    marginTop: 15,
    marginVertical: 10,
    alignSelf: "flex-start",
    color: colors.medium,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  lable: {
    fontSize: 16,
    color: colors.medium,
  },
  head: {
    flex: 1,
    height: "30%",
    padding: 10,
    paddingTop: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    justifyContent: "center",
  },
  textStyle: {
    padding: 20,
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "white",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderColor: "white",
    borderWidth: 2,
    overflow: "hidden",
  },
  Videocontainer: {
    flex: 10,
    backgroundColor: colors.lightBlack,
  },
  videoStyle: {
    alignSelf: "center",
    width: "100%",
    height: 500,

    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "50%",
    marginVertical: 10,
    alignSelf: "center",
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  editProfileSaveBtn: {
    color: colors.white,
    marginLeft: 1,
    fontSize: 20,
    textAlign: "center",
  },
  SaveVideoBtn: {
    color: colors.white,
    marginLeft: 1,
    fontSize: 20,
    textAlign: "center",
  },
  editProfileSaveBtnViewFirst: {
    height: 30,
    width: "30%",
    backgroundColor: colors.secondary,
    marginLeft: Dimensions.get("window").width / 1.65,
    marginTop: 10,
    borderRadius: 7,
  },
  editProfileSaveBtnView: {
    height: 30,
    width: "30%",
    backgroundColor: colors.secondary,
    marginTop: 10,
    borderRadius: 7,
  },

  formViewStyle: {
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 4,
    borderBottomWidth: 1,

    paddingBottom: 3,
  },
  fontStyle: {
    paddingRight: 1,
    marginTop: 20,
    marginRight: 10,
  },
});
export default Protfolio;
