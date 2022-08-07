import React, { useContext, useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  PermissionsAndroid,
  SafeAreaView,
  BackHandler,
} from "react-native";
import { CheckBox } from "react-native-elements";

import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Separator from "../components/Separator";
import DistributorItem from "../components/DistributorItem";
import AppText from "../components/AppText";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Foundation from "react-native-vector-icons/Foundation";
import MapModal from "../components/modals/MapModal";
import * as Yup from "yup";
import { AppForm, FormField, SubmitButton } from "../components/forms";
import GetLocation from "react-native-get-location";

import Spinner from "react-native-loading-spinner-overlay";
import FloatingButton from "../components/AppFloatingButton";
import colors from "../config/colors";
import config from "../config/config";
import FormTextArea from "../components/forms/FormTextArea";

import { UserContext } from "../custom_hooks/UserContext";
import MessageModal from "../components/modals/MessageModal";
import MapView from "react-native-maps";
import LocationEnabler from "react-native-location-enabler";
const {
  PRIORITIES: { HIGH_ACCURACY },
  useLocationSettings,
} = LocationEnabler;
export const addDistributors = async (
  id,
  type,
  companyId,
  name,
  number,
  longitude,
  latitude,
  address
) => {
  const data = {
    id: id,
    type: type,
    companyId: companyId,
    name: name,
    number: number,
    longitude: longitude,
    latitude: latitude,
    address: address,
  };
  const url = config.server + "api/company/addDistributors";
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
export const deleteDistributors = async (ids, setLoading, refreshing) => {
  setLoading(true);

  const url = config.server + "api/company/deleteDistributor";
  if (ids !== null) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(ids),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((JSONdata) => {
        refreshing();

        return JSONdata;
      })
      .catch((error) => {
        setLoading(false);

        console.error("error ", error);
      });
  }
};
export const getDistributors = async (companyId) => {
  var url =
    config.server + "api/company/getDistributors?companyId=" + companyId;
  return fetch(url).then((data) => data.json());
};
var LATITUDE_DELTA = 0.001;
var LONGITUDE_DELTA = 0.001;
function DistributorsAndSalesOffice({ navigation }) {
  const { user } = useContext(UserContext);

  let getType = "distributor";
  const [distType, setDistType] = useState(getType);
  const Tab = createMaterialTopTabNavigator();
  const [distributorModal, setDistributorModal] = useState(false);
  const [mapModal, setMapModal] = useState(false);
  const [longPress, setLongPress] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [initial, setInitial] = useState();
  const [pointer, setPointer] = useState();
  const [loading, setLoading] = useState(true);
  const [modalHeadingText, setModalHeadingText] = useState("");
  const [salesOffices, setSalesOffices] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [distributorMessageModal, setDistributorMessageModal] = useState(false);
  const [myLocation, setmyLocation] = useState();
  const [latLang, setlatLang] = useState("");
  var ftvalues = {
    name: "",
    phone: "",
    address: "",
    type: "",
    latitude: "",
    longitude: "",
  };
  const [formValues, setFormValues] = useState(ftvalues);
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
  const validationSchema = Yup.object().shape({
    number: Yup.string().required().min(11).label("Number"),
    name: Yup.string().required().label("Name"),
    address: Yup.string().required().label("Address"),
  });
  const latlngValid = () => {
    return (
      <Text style={{ color: "red" }}>latitude and longitude is required</Text>
    );
  };
  const handleAllChecked = () => {
    let currtype = distType;
    let tempList;
    if (currtype == "distributor") {
      tempList = distributors;
      setIsCheckedAll(!isCheckedAll);
    } else {
      setIsCheckedAll(!isCheckedAll);

      tempList = salesOffices;
    }

    let checkedAllDistributers = tempList.map((row) => {
      return { ...row, checked: !isCheckedAll };
    });
    let checkedAllSalesOffice = tempList.map((row) => {
      return { ...row, checked: !isCheckedAll };
    });

    if (currtype == "distributor") {
      setDistributors(checkedAllDistributers);
    } else {
      setSalesOffices(checkedAllSalesOffice);
    }
  };
  const handleChecked = (type, id) => {
    let tempList;
    if (type == "distributor") {
      tempList = distributors;
    } else {
      tempList = salesOffices;
    }

    let temp = tempList.map((each) => {
      if (id === each.id) {
        return { ...each, checked: !each.checked };
      }
      return each;
    });
    if (type == "distributor") {
      setDistributors(temp);
    } else {
      setSalesOffices(temp);
    }
  };
  var delIds = [];

  function RemoveDistributor(currtype) {
    let tempList;
    if (currtype == "distributor") {
      tempList = distributors;
    } else {
      tempList = salesOffices;
    }
    delIds = [];
    tempList.map((row) => {
      if (row.checked) {
        delIds.push(row.id);
      }
      deleteDistributors(delIds, setLoading, refreshing);
      //refreshing();
    });
  }
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
        setmyLocation(initialRegion);
        setPointer(initialRegion);
        setInitial(initialRegion);

        setLoading(false);
      })
      .catch((error) => {
        const { code, message } = error;
      });

    setLoading(false);
  }
  const refreshing = () => {
    setLoading(true);
    //get distributors
    getDistributors(user.id).then((resp) => {
      let checkedDistributers = resp.distributors.map((row) => {
        return { ...row, checked: false };
      });
      let checkedSalesOffice = resp.salesOffice.map((row) => {
        return { ...row, checked: false };
      });
      setDistributors(checkedDistributers);
      setSalesOffices(checkedSalesOffice);
      setLoading(false);
    });

    if (initial !== undefined) {
      var initialRegion = {
        latitude: initial.latitude,
        longitude: initial.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      setPointer(initialRegion);
    }
    //get current locations
    getCurrentLocation();
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
  }, []);

  useEffect(() => {
    refreshing();
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();

      navigation.dispatch(StackActions.popToTop());
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
  }, []);

  const handleBackButtonClick = () => {
    navigation.goBack(null);
    return true;
  };

  const SelectAllView = () => {
    return (
      <View
        style={{
          backgroundColor: "#41a6d9",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Ionicons
          name="close"
          size={24}
          color="#ffffff"
          style={{
            paddingTop: "3.5%",
            paddingLeft: "3.5%",
          }}
          onPress={() => {
            setLongPress(false), setIsCheckedAll(false);
            let disList;
            let soffList;

            disList = distributors;
            soffList = salesOffices;
            let disTemp = disList.map((each) => {
              if (each.id) {
                return { ...each, checked: false };
              }
              return each;
            });
            let saloffTemp = soffList.map((each) => {
              if (each.id) {
                return { ...each, checked: false };
              }
              return each;
            });

            setDistributors(disTemp);
            setSalesOffices(saloffTemp);
          }}
        />
        <>
          <MaterialCommunityIcons
            name="delete"
            size={25}
            color="white"
            onPress={() => {
              setLongPress(false), RemoveDistributor(distType);
            }}
            style={{
              flex: 1,
              paddingTop: "3.5%",
              textAlign: "right",
            }}
          />
          <CheckBox
            checked={isCheckedAll}
            checkedColor="white"
            uncheckedColor="white"
            onPress={() => {
              handleAllChecked();
            }}
          />
        </>
      </View>
    );
  };
  const SmallMapBox = ({ mapInitial, pointer }) => {
    var mapLatitude = initial?.latitude;
    var mapLongitude = initial?.longitude;

    const lmiLatitude = mapLatitude;
    const lmiLongitude = mapLongitude;

    return (
      <View
        style={{
          maxHeight: 700,
          position: "relative",
        }}
        onTouchStart={() => setMapModal(true)}
        onTouchMove={() => setMapModal(true)}
        onResponderMove={() => setMapModal(true)}
      >
        <MapView
          style={saleStyle.map}
          initialRegion={{
            latitude: parseFloat(lmiLatitude),
            longitude: parseFloat(lmiLongitude),
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        />
        <TouchableOpacity>
          <View
            style={{
              top: "100%",
              left: "45%",
              position: "relative",
            }}
          >
            <Image
              style={{ height: 35, width: 30 }}
              source={require("../img/map_marker.png")}
            />
          </View>
        </TouchableOpacity>
        <Foundation
          name="arrows-expand"
          size={18}
          color="white"
          onPress={() => setMapModal(true)}
          style={{
            alignSelf: "flex-end",
            bottom: 35,

            borderWidth: 1,
            color: "white",
            width: "9%",
            margin: "3.5%",
            height: "19%",
            padding: "2%",
            backgroundColor: "#41a6d9",
            borderRadius: 5,
          }}
        />
      </View>
    );
  };
  const Distributor = ({ navigation, route }) => {
    useEffect(() => {
      const getDistType = navigation.addListener("tabPress", (e) => {
        setDistType("distributor");
      });
      return getDistType;
    }, []);
    return (
      <SafeAreaView
        style={{
          marginBottom: "8%",
        }}
      >
        <FlatList
          data={distributors}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
          keyExtractor={(distributor) => distributor.id}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={Separator}
          renderItem={({ item, index }) => (
            <View>
              <DistributorItem
                setLongPress={setLongPress}
                longPress={longPress}
                item={item}
                handleAllChecked={handleAllChecked}
                handleChecked={handleChecked}
                onLongPress={() => setLongPress(true)}
                onPress={() => {
                  setDistributorModal(true);
                  setFormValues(item);
                  setModalHeadingText("Edit");
                  setInitial("");
                  setPointer("");
                  setInitial({
                    latitude: item.latitude,
                    longitude: item.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                  });
                }}
              />
            </View>
          )}
        />
      </SafeAreaView>
    );
  };
  const SalesOffice = ({ navigation, route }) => {
    useEffect(() => {
      const getDistType = navigation.addListener("tabPress", (e) => {
        setDistType("sales_office");
      });

      return getDistType;
    }, []);
    return (
      <SafeAreaView
        style={{
          marginBottom: "8%",
        }}
      >
        <FlatList
          data={salesOffices}
          keyExtractor={(salesOffice) => salesOffice.id}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={Separator}
          renderItem={({ item }) => (
            <View>
              <DistributorItem
                name={item.name}
                address={item.address}
                itemList={salesOffices}
                setLongPress={setLongPress}
                longPress={longPress}
                handleAllChecked={handleAllChecked}
                item={item}
                handleChecked={handleChecked}
                onLongPress={() => setLongPress(true)}
                onPress={() => {
                  setDistributorModal(true);
                  setFormValues(item);
                  setModalHeadingText("Edit");
                  setInitial("");
                  setPointer("");
                  setInitial({
                    latitude: item.latitude,
                    longitude: item.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                  });
                }}
              />
            </View>
          )}
        />
      </SafeAreaView>
    );
  };

  return (
    <>
      <Screen style={{ flex: 1 }}>
        {longPress == true ? <SelectAllView /> : <></>}

        <Tab.Navigator
          initialRouteName={distType ? "distributor" : "sales_office"}
          tabBarOptions={{
            indicatorStyle: {
              backgroundColor: colors.secondary,
            },
            labelStyle: {
              fontSize: 14,
              marginTop: 20,
              left: -10,
              fontWeight: "bold",
            },
            tabStyle: { paddingHorizontal: 15, marginHorizontal: 20 },
            style: { backgroundColor: colors.backgroud, position: "relative" },
          }}
        >
          <Tab.Screen
            name="Distributor"
            component={Distributor}
            listeners={({ navigation, route }) => {
              if (route.name == "Distributor") {
                setDistType("distributor");
              }
              ({
                tabPress: (e) => {
                  setDistType("distributor");
                },
              });
            }}
          />
          <Tab.Screen
            name="Sale Office"
            component={SalesOffice}
            listeners={({ navigation, route }) => {
              if (route.name == "Sale Office") {
                setDistType("sales_office");
              }
              ({
                tabPress: (e) => {
                  setDistType("sales_office");
                },
              });
            }}
          />
        </Tab.Navigator>

        <FloatingButton
          style={saleStyle.plusSalesIcon}
          onPress={() => {
            setFormValues({
              name: "",
              number: "",
              latitude: "",
              longitude: "",
              address: "",
              type: distType,
            });
            setModalHeadingText("Add");
            setInitial("");
            setPointer("");

            setInitial({
              latitude: myLocation?.latitude,
              longitude: myLocation?.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            });
            setDistributorModal(true);
          }}
        />

        <Spinner
          visible={loading}
          textContent={"loading..."}
          textStyle={saleStyle.spinnerTextStyle}
        />
      </Screen>
      <Modal
        key={"Modal2"}
        visible={distributorModal}
        style={{ backgroundColor: "blue" }}
        onRequestClose={() => setDistributorModal(false)}
      >
        <ScrollView style={saleStyle.scrollView}>
          <View key={"ModalView3"} style={{ position: "relative" }}>
            <AppForm
              style={{ position: "absolute" }}
              initialValues={formValues}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                if (values) {
                  // new Entry
                  if (values.id == null) {
                    const result = await addDistributors(
                      values.id,
                      values.type,
                      user.id,
                      values.name,
                      values.number,
                      pointer.longitude,
                      pointer.latitude,
                      values.address
                    );

                    if (result.status == 1) {
                      setlatLang(latlngValid);
                      setDistributorModal(false);

                      refreshing();
                    } else if (result.status == 0) {
                    }
                    setlatLang(latlngValid);
                    setDistributorModal(false);

                    refreshing();
                  } else {
                    const result = await addDistributors(
                      values.id,
                      values.type,
                      user.id,
                      values.name,
                      values.number,
                      pointer.longitude,
                      pointer.latitude,
                      values.address
                    );
                    if (result.status == 1) {
                      setlatLang(latlngValid);
                      setDistributorModal(false);
                      refreshing();
                    } else if (result.status == 0) {
                      console.error(result.status);
                    }
                    setlatLang(latlngValid);
                    setDistributorModal(false);
                    refreshing();
                  }
                }
              }}
            >
              <View style={[saleStyle.topText]}>
                <Ionicons
                  name="close"
                  size={24}
                  style={saleStyle.modalBackIcon}
                  color="#ffffff"
                  onPress={() => setDistributorModal(false)}
                />
                <AppText name="distype" style={saleStyle.DistributorTItle}>
                  {`${modalHeadingText} ${
                    distType == `sales_office` ? "Sales Office" : "Distributor"
                  }`}
                </AppText>

                <SubmitButton
                  buttonStyle={saleStyle.saleOfficeModalBtn}
                  iconSize={25}
                  icon="content-save"
                />
              </View>

              <View style={saleStyle.styleModal}>
                <View style={saleStyle.fieldSpacing}>
                  <AppText>Name:</AppText>
                  <FormField
                    name="name"
                    keyboardType="default"
                    placeholder="Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={70}
                    style={{
                      width: "100%",
                      color: "black",
                      fontSize: 16,
                      padding: 10,
                    }}
                  />
                </View>
                <View style={saleStyle.fieldSpacing}>
                  <AppText>Number:</AppText>

                  <FormField
                    name="number"
                    keyboardType="numeric"
                    placeholder="Phone Number (e.g: 03xxxxxxxxx)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={11}
                    style={{
                      width: "100%",
                      color: "black",
                      fontSize: 16,
                      padding: 10,
                    }}
                  />
                </View>

                <View style={saleStyle.fieldSpacing}>
                  <AppText>Address:</AppText>

                  <FormTextArea
                    name="address"
                    keyboardType="default"
                    placeholder="Address"
                    maxLength={700}
                    height={14}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{
                      width: "90%",
                      color: "black",
                      fontSize: 16,
                      maxHeight: 70,
                      top: "5%",
                      paddingTop: "0%",
                    }}
                  />
                </View>
                <View>
                  <MapModal
                    mapModal={mapModal}
                    initial={initial}
                    setInitial={setInitial}
                    setMapModal={setMapModal}
                    pointer={pointer}
                    setPointer={setPointer}
                  />
                </View>

                <SmallMapBox mapInitial={initial} pointer={pointer} />
                <SubmitButton
                  buttonStyle={{
                    alignSelf: "flex-end",
                    width: "20%",
                    height: "8%",
                    padding: 0,
                  }}
                  color={"#41a6d9"}
                  title="Save"
                />
              </View>
            </AppForm>
          </View>
        </ScrollView>
      </Modal>

      <MessageModal
        validationSchema={validationSchema}
        formValues={formValues}
        styles={saleStyle}
        setDistributorMessageModal={setDistributorMessageModal}
        distributorMessageModal={distributorMessageModal}
      />
    </>
  );
}
export default DistributorsAndSalesOffice;

const saleStyle = StyleSheet.create({
  saleOfficeModalBtn: {
    width: "20%",
    alignSelf: "flex-start",
    alignContent: "flex-end",
    color: "green",
    marginLeft: "4%",
    paddingLeft: "4%",
    marginTop: "-1%",
    padding: "1%",

    marginVertical: "1%",
  },
  fieldSpacing: {
    paddingTop: "2%",
  },
  modalBackIcon: {
    height: "50%",
    marginLeft: "-3.5%",
  },
  scrollView: {
    height: "100%",
    marginBottom: 0,
  },
  spinnerTextStyle: {
    color: colors.secondary,
  },
  modalSaveButton: {
    alignSelf: "flex-start",

    borderWidth: 1,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
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
    paddingLeft: "6%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#41a6d9",
    height: "12%",
    justifyContent: "space-around",
  },
  styleModal: {
    paddingHorizontal: "5%",
    paddingVertical: "2%",
  },
  DistributorTItle: {
    fontSize: 25,
    marginBottom: "20%",
    alignSelf: "center",
    marginLeft: "13%",
    paddingLeft: "4%",
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
  logo: {
    flex: 1,
    alignItems: "center",
  },
  Image: {
    width: "65%",
    height: "100%",
  },
  heading: {
    color: colors.brown,
    marginBottom: 15,
    fontSize: 18,
  },
});
