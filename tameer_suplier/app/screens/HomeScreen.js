import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
  ImageBackground,
  RefreshControl,
  Modal,
  ScrollView,
  TouchableOpacity,
  LogBox,
} from "react-native";
import Screen from "../components/Screen";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import MaterialFram from "../components/MaterialFram";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Spinner from "react-native-loading-spinner-overlay";
import { UserContext } from "../custom_hooks/UserContext";
import { Overlay } from "react-native-elements";
import Toast from "react-native-simple-toast";
import { Dimensions } from "react-native";
import { getUserData, removeItemProvider } from "../utility/ServerCalls";
import * as Animatable from "react-native-animatable";
import { startNotifService } from "../Services/notificationService";
import { Screens } from "../utility/Constants";

function HomeScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const [refreshing, setRefreshing] = useState(false);
  const [cons_cat_list, set_cons_cat_List] = useState([]);
  const [mat_cat_list, set_mat_cat_List] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userData, serUserData] = useState("");
  const [imageModal, setImageModal] = useState(false);
  const [imageview, setImageview] = useState(null);
  const [removeItem, setRemoveItem] = useState(null);
  const [imageArr, setImageArr] = useState();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  var i = 1;

  const onRefresh = useCallback(() => {
    Toast.show("Refreshed");
    setRefreshing(false);
    getUserData(user.id)
      .then((data) => {
        set_mat_cat_List(data.materials);
        set_cons_cat_List(data.consultants);
        serUserData(data.company);
      })
      .catch((e) => {
        setError("Network failed to load");
      });
  }, []);
  const handleNotificationOpen = async (notifData) => {
    notifData = notifData.data;
    const params = {
      conversationId: notifData.conversationId,
      receiverId: notifData.senderId,
      senderId: notifData.receiverId,
      title: notifData.title,
      name: notifData.name,
      number: notifData.number,
    };
    const { index, routes } = navigation.dangerouslyGetState();
    if (routes[index].name == "Chat") {
      navigation.replace("Chat", {
        screen: Screens.CHAT,
        params,
      });
    } else {
      navigation.navigate("Chat", {
        screen: Screens.CHAT,
        params,
      });
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["Require cycle: node_modules"]);
    getUserData(user.id)
      .then((data) => {
        set_mat_cat_List(data.materials);
        set_cons_cat_List(data.consultants);
        serUserData(data.company);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError("Network failed to load");
      });

    startNotifService(handleNotificationOpen, navigation);
    const unsubscribe = navigation.addListener("focus", () => {
      setRefreshing(true);
      onRefresh();
    });
    return unsubscribe;
  }, [navigation]);
  var grayScaleImg = require("../img/tameer-log-grayscale.png");
  let getBackImg = userData ? userData.logo : grayScaleImg;
  return (
    <Screen key={"MainScreen"} style={{ backgroundColor: colors.backgroud }}>
      {loading ? (
        <Spinner
          key={"MainSpinner1"}
          visible={loading}
          textContent={""}
          textStyle={styles.spinnerTextStyle}
        />
      ) : (
        <ScrollView
          key={"MainScrllVew1"}
          refreshControl={
            <RefreshControl
              key={"RfrshCntrl"}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <ImageBackground
            key={"MainImgBg"}
            source={{ uri: getBackImg }}
            style={{
              width: "100%",
              height: Dimensions.get("window").height / 3.5,
            }}
          >
            <TouchableWithoutFeedback
              key={"MainImgBtn"}
              onPress={() =>
                navigation.navigate("Portfolio", { userId: user.id })
              }
            >
              <View
                key={"MainView"}
                style={{ backgroundColor: "rgba(0, 0,0, .5)" }}
              >
                <View
                  key={"LogoView"}
                  source={{ uri: userData?.logo }}
                  style={styles.head}
                >
                  <View
                    key={"LogoImgView"}
                    style={[styles.circle, { marginLeft: 10 }]}
                  >
                    {userData.logo !== "" ? (
                      <Image
                        key={"LogoImg1"}
                        style={styles.image}
                        source={{ uri: userData?.logo }}
                      />
                    ) : (
                      <Text
                        style={{
                          fontSize: 35,
                          fontWeight: "bold",
                          color: colors.lightGray,
                          alignSelf: "center",
                          color: colors.secondary,
                        }}
                      >
                        {userData.name
                          .split(" ")
                          .map((n, i) => (i < 3 ? n[0] : ""))}
                      </Text>
                    )}
                  </View>
                  <View
                    key={"UsrNmVew"}
                    style={{ justifyContent: "center", marginLeft: 10 }}
                  >
                    <AppText
                      key={"UsrNmTxt"}
                      keyApp={"AppKey1_3"}
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: colors.white,
                      }}
                    >
                      {userData?.name?.length > 24
                        ? userData?.name?.substr(0, 21) + "..."
                        : userData?.name}
                    </AppText>
                    <AppText
                      key={"UsrEmlTxt"}
                      keyApp={"AppKey1_4"}
                      style={{ fontSize: 12, color: colors.white }}
                    >
                      {userData.email}
                    </AppText>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ImageBackground>
          <Animatable.View
            key={"AnimView1"}
            animation="fadeInUpBig"
            style={styles.body}
          >
            <AppText
              key={"AnimText1"}
              keyApp={"AppKey1_8"}
              style={{
                color: "#999999",
                marginTop: 18,
                fontSize: 24,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Products
            </AppText>
            {mat_cat_list.length > 0 && (
              <>
                <AppText
                  key={"AnimTxt1_1"}
                  keyApp={"AppKey1_5"}
                  style={{
                    color: colors.secondary,
                    fontSize: 18,
                    marginTop: 20,
                    marginBottom: 15,
                    marginLeft: 8,
                  }}
                >
                  Materials:
                </AppText>
                {mat_cat_list[0].images ? (
                  <ScrollView
                    key={"AnimScrlView1"}
                    contentContainerStyle={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginBottom: 20,
                      marginTop: 10,
                    }}
                  >
                    {mat_cat_list.map((item, index) =>
                      item.images[0] ? (
                        <>
                          <MaterialFram
                            key={"Mat" + index}
                            KeyMF={"Mat" + index}
                            name={item.name}
                            image={item.images[0].image}
                            onLongPress={() => {
                              setRemoveItem({
                                id: item.id,
                                category: "material",
                              });
                              setDeleteModalVisible(true);
                            }}
                            onPress={() => {
                              setRemoveItem({
                                id: item.id,
                                category_id: item.material_id,
                                name: item.name,
                                description: item.description,
                                category: "material",
                              });
                              setImageview(item.images[0].image);
                              setImageArr(item.images);
                              setImageModal(true);
                            }}
                          />
                        </>
                      ) : (
                        <></>
                      )
                    )}
                  </ScrollView>
                ) : (
                  <></>
                )}
              </>
            )}
            {cons_cat_list.length > 0 && (
              <>
                <AppText
                  key={"AnimTst1_2"}
                  keyApp={"AppKey1_6"}
                  style={{
                    color: colors.secondary,
                    fontSize: 18,
                    marginTop: 20,
                    marginBottom: 15,
                    marginLeft: 8,
                  }}
                >
                  Constructors:
                </AppText>
                {cons_cat_list[0].images ? (
                  <ScrollView
                    key={"AnimScrlView2"}
                    contentContainerStyle={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginBottom: 20,
                      marginTop: 10,
                    }}
                  >
                    {cons_cat_list.map((item, index) =>
                      item.images[0] ? (
                        <MaterialFram
                          key={"Cons" + index}
                          KeyMF={"Cons" + index}
                          name={item.name}
                          image={item.images[0].image}
                          onLongPress={() => {
                            setRemoveItem({
                              id: item.id,
                              category: "consultant",
                            });
                            setDeleteModalVisible(true);
                          }}
                          onPress={() => {
                            setRemoveItem({
                              id: item.id,
                              category_id: item.consultant_category_id,
                              name: item.name,
                              description: item.description,
                              category: "consultant",
                            });
                            setImageview(item.images[0].image);
                            setImageArr(item.images);

                            setImageModal(true);
                          }}
                        />
                      ) : (
                        <></>
                      )
                    )}
                  </ScrollView>
                ) : (
                  <></>
                )}
              </>
            )}
            {mat_cat_list.length == 0 && cons_cat_list.length === 0 && (
              <View
                key={"ElseView1"}
                style={{ alignItems: "center", marginTop: 100 }}
              >
                <AppText
                  key={"ElseTxt1"}
                  keyApp={"ElseTt1_1"}
                  style={{ color: colors.medium, marginBottom: 20 }}
                >
                  You do not have any product
                </AppText>
                <TouchableOpacity
                  key={"ElseBtn1"}
                  onPress={() => navigation.navigate("Category")}
                  style={[styles.addProduct]}
                >
                  <Text key={"ElseLGd1Txt1"} style={styles.textSign}>
                    Add Products
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  key={"ElseBtn2"}
                  onPress={() =>
                    navigation.navigate("DistributorsAndSalesOffice")
                  }
                  style={[styles.addProduct]}
                >
                  <Text key={"ElseLGd1Txt1"} style={styles.textSign}>
                    Distributors
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Animatable.View>
        </ScrollView>
      )}

      <Modal
        key={"Modal1"}
        animationType="slide"
        visible={imageModal}
        onRequestClose={() => setImageModal(false)}
      >
        <View
          key={"ModalView1"}
          style={{ backgroundColor: "#000000", flex: 1 }}
        >
          <View
            key={"ModalVew1_1"}
            style={{
              alignSelf: "flex-start",
              marginLeft: 10,
              marginTop: 0,
              backgroundColor: "#000000",
              flexDirection: "row",
            }}
          >
            <Entypo
              key={"ModalViw1Icon"}
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
            <View
              key={"ModalVie1_2"}
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                flex: 1,
                justifyContent: "flex-end",
                marginRight: 20,
              }}
            >
              <MaterialIcons
                key={"ModalVi1_2Icon1"}
                name="edit"
                color={colors.light}
                style={{ marginRight: 20 }}
                size={30}
                onPress={() => {
                  setImageModal(false);
                  navigation.navigate("EditProductScreen", {
                    itemId: removeItem.id,
                    category_id: removeItem.category_id,
                    name: removeItem.name,
                    type: removeItem.category,
                    image: imageArr,
                    description: removeItem.description,
                  });
                }}
              />
              <MaterialIcons
                key={"ModalV1_2Icon2"}
                name="delete"
                color={colors.danger}
                size={30}
                onPress={() => {
                  removeItemProvider(
                    user.id,
                    removeItem.id,
                    removeItem.category
                  ).then((result) => {
                    if (result?.status) {
                      if (removeItem.category == "material") {
                        set_mat_cat_List(
                          mat_cat_list.filter((it) => {
                            if (it.id != removeItem.id) return it;
                          })
                        );
                        setDeleteModalVisible(false);
                        setRefreshing(true);
                      } else if (removeItem.category == "consultant") {
                        set_cons_cat_List(
                          cons_cat_list.filter((it) => {
                            if (it.id != removeItem.id) return it;
                          })
                        );
                        setDeleteModalVisible(false);
                        setRefreshing(false);
                      }
                    } else {
                    }
                  });
                  setImageModal(false);
                }}
              />
            </View>
          </View>
          {imageview ? (
            <Image
              key={"Modl1LastImg"}
              style={{
                width: "100%",
                height: 400,
                marginTop: Dimensions.get("window").height / 2 - 250,
              }}
              source={{ uri: imageview }}
            />
          ) : (
            <></>
          )}
        </View>
      </Modal>

      <Overlay
        key={"Overlay1"}
        isVisible={deleteModalVisible ? deleteModalVisible : false}
        onBackdropPress={() => setDeleteModalVisible(false)}
      >
        <TouchableWithoutFeedback
          key={"OverlayBtn1"}
          onPress={() => {
            removeItemProvider(
              user.id,
              removeItem.id,
              removeItem.category
            ).then((result) => {
              setRefreshing(true);

              if (result) {
                if (removeItem.category == "material") {
                  set_mat_cat_List(
                    mat_cat_list.filter((it) => {
                      if (it.id != removeItem.id) return it;
                    })
                  );
                  setDeleteModalVisible(false);
                  setRefreshing(false);
                } else if (removeItem.category == "consultant") {
                  set_cons_cat_List(
                    cons_cat_list.filter((it) => {
                      if (it.id != removeItem.id) return it;
                    })
                  );
                  setDeleteModalVisible(false);
                  setRefreshing(false);
                }
              }
            });
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
    </Screen>
  );
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: colors.secondary,
  },
  head: {
    height: "100%",
    padding: 10,
    paddingTop: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  body: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headingDiv: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderColor: colors.light,
  },
  headingText: {
    fontWeight: "bold",
    color: "#b38670",
    fontSize: 20,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  addProduct: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginBottom: "1%",
    marginTop: "1%",
    backgroundColor: colors.secondary,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    borderRadius: 7,
  },
});
export default HomeScreen;
