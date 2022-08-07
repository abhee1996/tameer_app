import Ionicons from "react-native-vector-icons/Ionicons";
import GetLocation from "react-native-get-location";
import React, { useEffect } from "react";
import {
  View,
  Modal,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = 0.09;

const MapModal = ({
  mapModal,
  setMapModal,
  initial,
  setInitial,
  pointer,
  setPointer,
}) => {
  useEffect(() => {
    if (initial) {
      var initialRegion = {
        latitude: initial?.latitude,
        longitude: initial?.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      setPointer(initialRegion);
    } else {
      GetLocation.getCurrentPosition({
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
          setPointer(initialRegion);
        })
        .catch((error) => {
          const { code, message } = error;
          console.warn(code, message);
        });
    }
  }, []);

  let lmiLatitude = initial?.latitude;
  let lmiLongitude = initial?.longitude;

  const handleLocationSelect = () => {
    setInitial(pointer);
    setMapModal(false);
  };
  const onChangeValue = (region) => {
    setPointer(region);
  };
  return (
    <Modal
      key={"Modal2"}
      visible={mapModal}
      onRequestClose={() => setMapModal(false)}
    >
      <View style={{ paddingTop: "8%", paddingLeft: "5%" }}>
        <Ionicons
          name="close"
          size={24}
          color="#767676"
          onPress={() => setMapModal(false)}
        />
      </View>
      <View>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(lmiLatitude),
              longitude: parseFloat(lmiLongitude),
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
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
              source={require("../../img/map_marker.png")}
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
            onTouchStart={handleLocationSelect}
          >
            <TouchableOpacity
              onPress={handleLocationSelect}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
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
    backgroundColor: "#41a6d9",

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
export default MapModal;
