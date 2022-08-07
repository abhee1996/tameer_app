import GetLocation from "react-native-get-location";
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "../config/colors";

const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

const MapScreen = ({ route, navigation }) => {
  const { userId, longitude, latitude } = route.params;
  const { addressIndex } = route.params;
  const [initial, setInitial] = useState();
  const [loading, setLoading] = useState(true);

  // Now for Current location=> first useEffect functionality

  useEffect(() => {
    setLoading(true);

    if (route.params.latitude) {
      var initialRegion = {
        latitude: route.params.latitude,
        longitude: route.params.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      setInitial(initialRegion);
      setLoading(false);
    } else {
      getCurrentLocation();
    }
  }, []);
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
        setInitial(initialRegion);
        setLoading(false);
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
        setLoading(false);
      });
  }
  const onChangeValue = (region) => {
    setInitial(region);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initial}
        onRegionChangeComplete={onChangeValue}
      />
      <View
        style={{
          top: "50%",
          left: "50%",
          marginLeft: -24,
          marginTop: -48,
          position: "absolute",
        }}
      >
        <Image
          style={{ height: 48, width: 48, position: "absolute" }}
          source={require("../img/map_marker.png")}
        />
      </View>

      <View
        style={{
          top: "10%",
          left: "80%",
          marginLeft: -24,
          marginTop: -48,
          position: "absolute",
        }}
      >
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() =>
            navigation.navigate("Portfolio", {
              userId: userId,
              region: initial,
              addressIndex: addressIndex,
            })
          }
        >
          <Text style={styles.appButtonText}>Select</Text>
        </TouchableOpacity>
      </View>
      <Spinner
        visible={loading}
        textContent={"Loading map..."}
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  spinnerTextStyle: {
    color: colors.secondary,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default MapScreen;
