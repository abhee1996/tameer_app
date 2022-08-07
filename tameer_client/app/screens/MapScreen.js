import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const MapScreen = ({route, navigation}) => {
  const [initial, setInitial] = useState();
  useEffect(() => {
    setInitial({
      ...route.params?.coordinates,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initial}>
        <MapView.Marker
          coordinate={initial}
          title={route.params?.address}
          description={'Your Destination'}
        />
      </MapView>

      <View
        style={{
          top: '10%',
          left: '80%',
          marginLeft: -24,
          marginTop: -48,
          position: 'absolute',
        }}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.appButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
export default MapScreen;
