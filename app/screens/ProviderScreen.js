import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ImageBackground, Text, FlatList} from 'react-native';
import Screen from '../components/Screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from '../components/AppText';
import ListItem from '../components/list/ListItem';
import Separator from '../components/Separator';
import ChatIcon from '../components/ChatIcon';
import config from '../config/config';
import colors from '../config/colors';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import SearchingScreen from './SearchingScreen';
import SearchBar from '../components/SearchBar';

function ProviderScreen({route, navigation}) {
  const {id, type, image_1, name} = route.params;
  const [chkPrsd, setChkPrsd] = useState(false);
  const [chkState, setChkState] = useState([]);
  const [count, setCount] = useState(0);
  const [selectAction, setSelectAction] = useState([
    'Select All',
    'Unselect All',
  ]);
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState();
  const [origCompanies, setOrigCompanies] = useState([]);
  const [origin, setOrigin] = useState();
  const [searchScreen, setSearchScreen] = useState(true);
  let tempList;

  const abcd = async () => {
    let jsonValue = await AsyncStorage.getItem('initialRegion');
    setOrigin({
      longitude: JSON.parse(jsonValue).longitude,
      latitude: JSON.parse(jsonValue).latitude,
    });
  };
  async function getData(id, type) {
    let url = '';
    if (origin) {
      let latitude = origin.latitude;
      let longitude = origin.longitude;

      url =
        config.server +
        'api/' +
        type +
        '/getAllProviders/' +
        id +
        '/' +
        latitude +
        '/' +
        longitude;

      return axios.get(url).then(data => data.data);
    }
  }

  useEffect(() => {
    if (!origin) abcd();

    getData(id, type).then(items => {
      tempList = items;
      if (tempList?.length > 1) {
        for (let i = 0; i < tempList?.length - 1; i++) {
          for (let j = i + 1; j < tempList?.length; j++) {
            if (
              tempList[j].addresses.length > 0 &&
              tempList[i].addresses.length > 0 &&
              tempList[j].addresses[0].distance <
                tempList[i].addresses[0].distance
            ) {
              let a = tempList[i];
              tempList[i] = tempList[j];
              tempList[j] = a;
            }
          }
        }
      }

      setCompanies(tempList);
      setChkState(new Array(tempList?.length).fill(false));
      setOrigCompanies(tempList);
      setLoading(false);
    });
  }, [origin]);

  function filter(text) {
    if (text == '') setCompanies(origCompanies);
    else
      setCompanies(
        origCompanies.filter(comp => {
          if (
            comp.name
              .trim()
              .toLowerCase()
              .indexOf(text.trim().toLowerCase()) !== -1
          )
            return comp;
        }),
      );
  }

  return (
    <>
      <Screen style={{flex: 1}}>
        <View style={styles.toolbar}>
          <ImageBackground source={{uri: image_1}} style={styles.toolbarImage}>
            <View style={{height: '100%', backgroundColor: 'rgba(0, 0,0, .6)'}}>
              <View style={{marginHorizontal: 15, flex: 1}}>
                <SearchBar filter={filter} placeholder="Search" />
              </View>

              <View style={styles.toolbarTextDiv}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={30}
                  color={colors.white}
                  onPress={() => navigation.goBack()}
                />
                <AppText
                  style={{
                    marginLeft: 10,
                    fontSize: 25,
                    color: colors.white,
                    flexWrap: 'wrap',
                  }}
                  numberOfLines={1}>
                  {name}
                </AppText>
                {companies ? (
                  <>
                    <Text style={styles.resultCountText} numberOfLines={1}>
                      {`${companies.length} Results found`}
                    </Text>
                    <ChatIcon
                      style={styles.chatIcon}
                      onPress={() => {
                        const contactList = companies.filter(function (
                          element,
                          index,
                        ) {
                          return chkState[index];
                        });
                        if (contactList.length > 0)
                          navigation.navigate('Request', {
                            contactList: contactList,
                          });
                        else Toast.show('No compnay selected');
                      }}
                    />
                  </>
                ) : (
                  <></>
                )}
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.sortbar}>
          {companies?.length > 0 ? (
            <Text
              style={{flex: 1, color: colors.medium}}
              onPress={() => {
                if (count === 0)
                  setChkState(new Array(chkState.length).fill(true));
                else {
                  setChkState(new Array(chkState.length).fill(false));
                }
                setCount((count + 1) % 2);
              }}>
              {selectAction[count]}
            </Text>
          ) : (
            <Text style={{flex: 1, color: colors.medium}}>No Result Found</Text>
          )}
        </View>

        <Separator style={{backgroundColor: colors.light}} />
        <View style={styles.list}>
          <FlatList
            data={companies}
            keyExtractor={listing => listing.id}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={<Separator />}
            renderItem={({item, index}) => {
              return (
                <ListItem
                  item={item}
                  isChecked={chkState[index]}
                  checkPressed={() => {
                    let temp = [...chkState];
                    temp[index] = !temp[index];
                    setChkState(temp);
                  }}
                  onPress={() => {
                    navigation.navigate('Detail', {
                      id: item.id,
                      companyItem: item,
                    });
                  }}
                  checkPress={() => setChkPrsd(!chkPrsd)}
                  sendMessge={() =>
                    navigation.navigate('Request', {contactList: [item]})
                  }
                />
              );
            }}
          />
        </View>
        <Spinner
          visible={loading}
          textContent={''}
          textStyle={{color: colors.secondary}}
          size="large"
        />
      </Screen>
      {!searchScreen ? (
        <SearchingScreen
          navigation={navigation}
          setSearchScreen={setSearchScreen}
          searchScreen={searchScreen}
        />
      ) : (
        <Text></Text>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  toolbar: {
    height: '30%',
  },
  toolbarImage: {
    flex: 1,
  },
  toolbarTextDiv: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  resultCountText: {
    color: colors.light,
    marginLeft: 5,
    marginBottom: 5,
    flex: 1,
    flexWrap: 'wrap',
  },
  chatIcon: {
    top: 6,
    left: -10,
    paddingTop: '5%',
  },
  search: {
    alignSelf: 'center',
    width: '90%',
    height: 48,
    marginTop: 20,
    borderRadius: 0,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  sortbar: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  list: {
    flex: 1,
  },
  container1: {
    flexDirection: 'row-reverse',
    backgroundColor: colors.white,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    width: '95%',
    height: 55,
    marginVertical: 8,
    marginLeft: 8,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 5,
  },
});
export default ProviderScreen;
