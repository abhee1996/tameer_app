import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Screen from '../components/Screen';
import ProfessionalFram from '../components/ProfessionalFram';
import colors from '../config/colors';
import AppText from '../components/AppText';
import config from '../config/config';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialDoubleFram from '../components/MaterialDoubleFram';
import GetLocation from 'react-native-get-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchingScreen from './SearchingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {startNotifService} from '../Services/notificationService';
import {Screens} from '../utility/Constants';
import {Dimensions} from 'react-native';

async function get_categories() {
  var url = config.server + 'api/categories/findAll';
  return fetch(url).then(data => data.json());
}
function HomeScreen({navigation}) {
  const [cons_cat_list, set_cons_cat_List] = useState([]);
  const [mat_cat_list, set_mat_cat_List] = useState([]);
  const [loading, setLoading] = useState(true);

  const LATITUDE_DELTA = 0.009;
  const LONGITUDE_DELTA = 0.009;
  const [searchScreen, setSearchScreen] = useState(false);
  const getPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Tameer',
          message: 'Tameer has access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
        })
          .then(async location => {
            var initialRegion = {
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            };
            try {
              const jsonValue = JSON.stringify(initialRegion);
              await AsyncStorage.setItem('initialRegion', jsonValue);
            } catch (error) {}
          })
          .catch(error => {
            const {code, message} = error;
          });
      } else {
        alert('Location permission denied');
      }
    } catch (err) {
      alert('Error:', err);
    }
  };

  const handleNotificationOpen = async notifData => {
    notifData = notifData.data;
    const params = {
      conversationId: notifData.conversationId,
      receiverId: notifData.senderId,
      senderId: notifData.receiverId,
      title: notifData.title,
      name: notifData.name,
      number: notifData.number,
    };
    const {index, routes} = navigation.dangerouslyGetState();
    if (routes[index].name == 'Chat') {
      navigation.replace('Chat', {
        screen: Screens.CHAT,
        params,
      });
    } else {
      navigation.navigate('Chat', {
        screen: Screens.CHAT,
        params,
      });
    }
  };

  useEffect(() => {
    getPermission();
    startNotifService(handleNotificationOpen, navigation);
    get_categories()
      .then(data => {
        let arrays = [],
          size = 2;
        while (data.material_categories.length > 0) {
          arrays.push(data.material_categories.splice(0, size));
        }
        set_mat_cat_List(arrays);
        set_cons_cat_List(data.consultant_categories);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!searchScreen ? (
        <Screen style={{backgroundColor: colors.backgroud, flex: 1}}>
          {!loading ? (
            <ScrollView
              style={{marginTop: 5}}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={styles.container1}>
                <TouchableOpacity
                  style={styles.input}
                  onPress={() => setSearchScreen(!searchScreen)}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginTop: 15,
                      marginLeft: 10,
                      maxWidth: 100,
                    }}>
                    Search
                  </Text>
                </TouchableOpacity>
                <Ionicons
                  name="search-outline"
                  size={25}
                  color={colors.medium}
                  style={{
                    marginTop: 15,
                    marginRight: 10,
                  }}
                />
              </View>
              <View style={styles.headingDiv}>
                <AppText style={styles.headingText}>Materials</AppText>
              </View>
              <ScrollView
                style={{
                  height: '40%',
                  width: '95%',
                  marginBottom: 15,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {mat_cat_list.map(item => (
                  <MaterialDoubleFram
                    key={item[0].id}
                    item={item}
                    onPress={id =>
                      navigation.navigate('MaterialStack', {
                        screen: 'Material',
                        params: {categoryId: id},
                      })
                    }
                  />
                ))}
              </ScrollView>
              <View style={styles.advertismentContainer}>
                <Text> Advertisment Here</Text>
              </View>
              <View style={styles.headingDiv}>
                <AppText style={styles.headingText}>
                  Professional Contacts
                </AppText>
              </View>
              <ScrollView
                style={{
                  height: '20%',
                  width: '95%',
                  marginBottom: 20,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {cons_cat_list.map(consultant_catagory => (
                  <ProfessionalFram
                    key={consultant_catagory.id}
                    data={consultant_catagory}
                    onPress={() =>
                      navigation.navigate('Provider', {
                        screen: 'Providers',
                        params: {
                          id: consultant_catagory.id,
                          type: 'consultant',
                          image_1: consultant_catagory.image,
                          name: consultant_catagory.name,
                        },
                      })
                    }
                  />
                ))}
              </ScrollView>
            </ScrollView>
          ) : (
            <View></View>
          )}
          <Spinner
            visible={loading}
            textContent={''}
            textStyle={{color: colors.secondary}}
          />
        </Screen>
      ) : (
        <SearchingScreen
          navigation={navigation}
          setSearchScreen={setSearchScreen}
          searchScreen={searchScreen}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  toolbar: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  headingDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  headingText: {
    color: colors.brown,
    fontSize: 20,
    marginBottom: 10,
  },
  advertismentContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    width: '95%',
    height: '8.5%',
    marginTop: 15,
  },
  icon: {
    marginLeft: 10,
    marginRight: 8,
    alignSelf: 'flex-end',
    alignSelf: 'center',
  },
  input: {
    flexGrow: 1,
    paddingLeft: 5,
  },
});
export default HomeScreen;
