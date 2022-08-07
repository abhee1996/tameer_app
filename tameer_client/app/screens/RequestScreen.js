import React, {useEffect, useState, useContext} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GetLocation from 'react-native-get-location';

import Screen from '../components/Screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../config/colors';
import AppText from '../components/AppText';
import Separator from '../components/Separator';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import config from '../config/config';
import {StackActions} from '@react-navigation/native';
import {UserContext} from '../custom_hooks/UserContext';
import {KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';
import {Overlay} from 'react-native-elements';
import MapView from 'react-native-maps';
// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import LocationEnabler from 'react-native-location-enabler';
const {
  requestResolutionSettings,
  PRIORITIES: {HIGH_ACCURACY},
  useLocationSettings,
} = LocationEnabler;

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
async function sendRequestQuot(
  userId,
  message,
  subject,
  initial,
  contactList,
  setError,
) {
  var ids = '';
  if (message === '' || subject === '') {
    setError('Message and subject are required fields');
    return;
  }
  for (var i = 0; i < contactList.length; i++) {
    ids = ids + contactList[i].id + ',';
  }
  ids = ids.slice(0, -1);
  var m = new Date();
  var created_ts =
    m.getFullYear() +
    '-' +
    ('0' + (m.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + m.getDate()).slice(-2) +
    ' ' +
    ('0' + m.getHours()).slice(-2) +
    ':' +
    ('0' + m.getMinutes()).slice(-2) +
    ':' +
    ('0' + m.getSeconds()).slice(-2);
  const url =
    config.server +
    'api/message/sendRequestQout?message=' +
    message +
    '&subject=' +
    subject +
    '&userId=' +
    userId +
    '&ids=' +
    ids +
    '&date=' +
    created_ts +
    '&sender_latitude=' +
    initial?.latitude +
    '&sender_longitude=' +
    initial?.longitude;
  return fetch(url).then(data => data.json());
}

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');
function RequestScreen({route, navigation}) {
  const {contactList} = route.params;
  const [items, setItems] = useState(contactList);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModelVisible] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const [error, setError] = useState('');
  const [initial, setInitial] = useState();
  const [pointer, setPointer] = useState();

  //location enabler state
  const [enabled, requestResolution] = useLocationSettings(
    {
      priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
      alwaysShow: true, // default false
      needBle: true, // default false
    },
    false /* optional: default undefined */,
  );

  const {user} = useContext(UserContext);
  const sendRquest = () => {
    setShowSpinner(true);
    sendRequestQuot(user.id, message, subject, initial, items, setError).then(
      status => {
        if (!status) {
          console.info('error status', status);
        } else {
          if (initial) {
            navigation.navigate('MessagingStack', {
              screen: 'Messaging',
              params: {tabName: 'Sent'},
            });
            console.info('Success Entry Add', status);
          } else {
          }
          console.error('success status', status);
        }
        setShowSpinner(false);
      },
    );
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      e.preventDefault();
      navigation.dispatch(StackActions.popToTop());
    });
    return unsubscribe;
  }, [navigation]);

  async function getCurrentLocation() {
    setShowSpinner(true);
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        var initialRegion = {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        setInitial(initialRegion);
        setPointer(initialRegion);
        setShowSpinner(false);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
        setShowSpinner(false);
      });
  }
  // Now get Current location
  const fetchCurrentLocation = () => {
    if (initial) {
      var initialRegion = {
        latitude: initial.latitude,
        longitude: initial.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      setPointer(initialRegion);
    } else {
      getCurrentLocation();
    }
  };

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

  const onChangeValue = region => {
    setInitial(region);
  };
  const handleLocationSelect = () => {
    setPointer(initial);
    setOpenMap(false);
  };

  return (
    <Screen style={{flex: 1, height: '70%'}}>
      <View style={styles.toolbar}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color={colors.lightBlack}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.toolbarHeading}>Request Quote</Text>
        <MaterialCommunityIcons
          name="send"
          size={24}
          color="dodgerblue"
          onPress={sendRquest}
        />
      </View>
      <Text style={{alignSelf: 'center', color: 'red', marginBottom: 2}}>
        {error}
      </Text>
      <View style={styles.body}>
        <View style={styles.to}>
          <AppText
            style={{
              fontSize: 16,
              color: colors.lightGray,
              marginRight: 5,
              marginTop: 5,
            }}>
            TO:
          </AppText>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '85%'}}>
            {items.map(item => (
              <View style={styles.contactcontainer} key={item.id}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Entypo
                  name="cross"
                  size={20}
                  style={{marginLeft: 5}}
                  onPress={() => {
                    setItems(
                      items.filter(it => {
                        if (item.id != it.id) return it;
                      }),
                    );
                  }}
                />
              </View>
            ))}
          </View>
          <TouchableWithoutFeedback
            style={{marginRight: 20}}
            onPress={() => {
              setModelVisible(true);
              setItems(items);
            }}>
            <MaterialCommunityIcons name="dots-vertical" size={24} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.subject}>
          <AppText
            style={{
              fontSize: 16,
              color: colors.lightGray,
              marginRight: 5,
              width: '100%',
            }}>
            SUBJECT:
          </AppText>
          <TextInput
            numberOfLines={1}
            value={subject}
            onChangeText={val => setSubject(val)}
            style={{
              flexWrap: 'wrap',
              fontSize: 16,
              flex: 1,
              color: colors.lightBlack,
            }}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.addLocation}>
            <View style={{justifyContent: 'flex-start'}}>
              <Text>
                {initial == undefined || null
                  ? `SITE LOCATION `
                  : `SITE LOCATION: \n Lat: ${parseFloat(
                      initial?.latitude,
                    ).toFixed(5)}, Long: ${parseFloat(
                      initial?.longitude,
                    ).toFixed(5)}`}
              </Text>
            </View>

            <TouchableWithoutFeedback
              style={{
                maxWidth: 300,
                height: '130%',
                padding: '0.5%',
                alignSelf: 'center',
                top: 5,
                left: 8,
              }}
              onPress={() => {
                setOpenMap(true);
              }}>
              <View
                onTouchStart={() => {
                  setOpenMap(true);
                }}
                style={{
                  flexDirection: 'row',
                  width: '70%',
                  padding: '0.5%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: 'dodgerblue',
                    borderBottomWidth: 1,

                    borderBottomColor: 'dodgerblue',
                  }}>
                  {!initial?.latitude ? 'change' : 'change'}
                </Text>
                <Ionicons
                  onPress={() => {
                    setOpenMap(true);
                  }}
                  name="location"
                  size={20}
                  color={colors.danger}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.message}>
            <TextInput
              placeholder="Your Message Here..."
              multiline={true}
              onChangeText={value => setMessage(value)}
              style={{fontSize: 16, color: colors.lightBlack}}></TextInput>
          </View>
        </KeyboardAvoidingView>
      </View>

      <Overlay
        isVisible={modalVisible}
        onBackdropPress={() => setModelVisible(false)}>
        <View style={styles.modal}>
          <View style={styles.modalCard}>
            <View style={styles.modalToolbar}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={25}
                onPress={() => {
                  setModelVisible(false);
                }}
              />
              <AppText
                style={{
                  marginLeft: 10,
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: colors.medium,
                }}>
                Sending To
              </AppText>
            </View>
            <FlatList
              data={items}
              ItemSeparatorComponent={Separator}
              ListFooterComponent={<Separator />}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Text style={{flex: 1, color: colors.medium, fontSize: 16}}>
                    {item.name}
                  </Text>
                  <Entypo
                    name="cross"
                    size={20}
                    style={{alignSelf: 'flex-end'}}
                    onPress={() =>
                      setItems(
                        items.filter(it => {
                          if (it.id != item.id) return it;
                        }),
                      )
                    }
                  />
                </View>
              )}
            />
          </View>
        </View>
      </Overlay>
      <Modal visible={openMap} onRequestClose={() => setOpenMap(false)}>
        <View style={{paddingTop: '8%', paddingLeft: '0%'}}>
          <View
            style={{
              width: '100%',
              height: '15%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                bottom: '5%',
                left: '8%',
                width: '30%',
                marginLeft: -24,
                marginTop: -48,
                justifyContent: 'flex-start',
                position: 'absolute',
              }}>
              <Ionicons
                name="close"
                size={28}
                color="#767676"
                onPress={() => setOpenMap(false)}
              />
            </View>
          </View>
          <View>
            <View style={[styles.mapContainer]}>
              <MapView
                style={styles.map}
                initialRegion={initial}
                onRegionChangeComplete={onChangeValue}
              />
              <View
                style={{
                  top: '50%',
                  left: '50%',
                  marginLeft: -24,
                  marginTop: -48,
                  position: 'absolute',
                }}>
                <Image
                  style={{height: 50, width: 50, position: 'absolute'}}
                  source={require('../img/map_marker.png')}
                />
              </View>
              <View
                style={{
                  top: '9%',
                  left: '73%',
                  width: '28%',
                  marginLeft: -24,
                  marginTop: -48,
                  justifyContent: 'flex-end',
                  position: 'absolute',
                }}
                onTouchStart={handleLocationSelect}>
                <TouchableOpacity
                  onPressIn={handleLocationSelect}
                  style={styles.appButtonContainer}>
                  <Text style={styles.appButtonText}>Select</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Spinner
        visible={showSpinner}
        textContent={'Sending...'}
        textStyle={{color: colors.secondary}}
        size="large"
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    padding: 20,
  },
  mapContainer: {
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
    width: '100%',
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
  toolbarHeading: {
    marginLeft: 15,
    fontSize: 20,
    color: colors.lightBlack,
    flex: 1,
  },
  body: {
    flex: 1,

    marginBottom: 20,
    paddingHorizontal: 20,
  },
  to: {
    borderBottomWidth: 1,
    borderColor: colors.veryligthgray,
    flexDirection: 'row',
  },
  subject: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.veryligthgray,
    flexDirection: 'row',
    marginTop: 5,
    paddingVertical: 5,
  },
  message: {},
  addLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '2%',
    borderBottomWidth: 1,
    borderColor: colors.veryligthgray,

    height: 50,
  },
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modelView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalCard: {
    width: ScreenWidth * 0.75,
    height: ScreenHeight * 0.7,
    backgroundColor: 'white',
  },
  modal: {
    height: ScreenHeight * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  modalToolbar: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  contactcontainer: {
    alignSelf: 'center',
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 14,
    color: colors.lightBlack,
  },
  appButtonContainer: {
    elevation: 30,
    backgroundColor: '#41a6d9',
    borderWidth: 1,
    borderRadius: 10,
    // right: 18,
    marginVertical: '1%',
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
export default RequestScreen;
