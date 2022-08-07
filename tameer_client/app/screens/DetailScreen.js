import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
  Dimensions,
  LogBox,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from '../components/Screen';
import ChatIcon from '../components/ChatIcon';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ImageSlider from '../components/ImageSlider';
import {SocialIcon} from 'react-native-elements';
import config from '../config/config';
import MaterialFram from '../components/MaterialFram';
import Spinner from 'react-native-loading-spinner-overlay';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {Linking} from 'react-native';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageView from 'react-native-image-view';
import {ImageBackground} from 'react-native';
import Video from 'react-native-video';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createThumbnail} from 'react-native-create-thumbnail';

LogBox.ignoreLogs(['Method has been deprecated.']);
const OpenURLButton = ({url, text}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Toast.show('Could not open');
    }
  }, [url]);
  return (
    <Text onPress={handlePress} style={styles.link}>
      {text}
    </Text>
  );
};
const OpenURLIcon = ({url, text}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Toast.show('Could not open');
    }
  }, [url]);
  return (
    <Text onPress={handlePress} style={styles.link}>
      {text}
    </Text>
  );
};

function DetailScreen({route, navigation}) {
  const {id, companyItem} = route.params;
  const [addressesList, setAddressesList] = useState([]);
  const [company, setCompany] = useState();
  const [images, setImages] = useState([]);
  const [expandConList, setExpandConList] = useState(true);
  const [expandMatList, setExpandMatList] = useState(true);
  const [materials, setMaterials] = useState([]);
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(true);
  const [origin, setOrigin] = useState();
  const [product, setProduct] = useState();
  const [videos, setvideos] = useState('');
  const [videoThumbnail, setvideoThumbnail] = useState('');

  const [modalVisible, setModalVisible] = useState(
    route.params?.product ? true : false,
  );
  const [currentImage, setCurrentImage] = useState({
    isVisible: false,
    image: null,
    name: '',
  });
  let imageToView = [
    {
      source: {
        uri: currentImage.image,
      },
      title: currentImage.name,
      width: 800,
      height: 1200,
    },
  ];

  async function getData(id) {
    if (origin) {
      let latitude = origin.latitude;
      let longitude = origin.longitude;
      let url =
        config.server +
        'api/company/getCompanyDetails/' +
        id +
        '/' +
        latitude +
        '/' +
        longitude;
      return axios.get(url).then(data => data.data);
    }
  }
  const abcd = async () => {
    let jsonValue = await AsyncStorage.getItem('initialRegion');
    setOrigin({
      longitude: JSON.parse(jsonValue).longitude,
      latitude: JSON.parse(jsonValue).latitude,
    });
  };

  useEffect(() => {
    if (!origin) abcd();

    getData(id).then(result => {
      if (result) {
        setvideos(result.companyVideo.video);
        setAddressesList(result.address);
        setCompany(result.company);
        setMaterials(result.materials);
        setConsultants(result.consultants);
        setImages(result.images);
        setLoading(false);
        if (result.consultants.length > 3) setExpandConList(false);
        if (result.materials.length > 3) setExpandMatList(false);

        createThumbnail({
          url: result.companyVideo.video,
          timeStamp: 10000,
        })
          .then(response => {
            setvideoThumbnail(response);
          })
          .catch(err => console.log('thumbnail error', {err}));
      }
    });
  }, [origin]);

  const ProductFooterMaximize = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 10,
        }}>
        <Text style={{color: 'gray'}}>view more</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          style={{marginTop: 3}}
          size={30}
          color={colors.secondary}
        />
      </View>
    );
  };

  const companyAddresses = () => {
    // companyItem?.addresses.filter();
    companyItem?.addresses.map((a, i) => {
      return (
        <Text
          style={{
            color: '#000',
          }}
          key={i}>
          {a}
        </Text>
      );
    });
  };
  const renderMap = () => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          marginTop: 8,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MapScreen', {
              address: addressesList?.address,
              coordinates: {
                latitude: addressesList?.latitude,
                longitude: addressesList?.longitude,
              },
            });
          }}>
          <MaterialCommunityIcons
            name="google-maps"
            size={25}
            color={colors.primary}
          />
          <Text style={styles.mapText}>
            {!companyItem
              ? addressesList[0].address.length > 10
                ? addressesList[0].address.substring(0, 10) + '...'
                : addressesList[0].address
              : companyItem?.addresses[0]?.address
              ? companyItem?.addresses[0]?.address
              : 'address not given'}
            <Text style={{color: '#aaa'}}>
              {'\n' +
                `${
                  !companyItem
                    ? addressesList[0].distance
                    : companyItem?.addresses[0]?.distance
                }` +
                '\t' +
                'km'}
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowList(!showList)}>
          <Text style={styles.mapMoreText}>
            {showList ? 'Other locations' : 'Hide'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {showList ? (
            <></>
          ) : (
            <>
              <View
                style={{
                  width: 300,
                  margin: '1%',
                  color: '#000',
                }}>
                <Text>{companyAddresses()}</Text>
              </View>
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  const renderMapList = () => {
    return addressesList?.map((adrs, i) => {
      if (i != 0)
        return (
          <View
            style={{
              marginBottom: 5,
              marginTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MapScreen', {
                  address: adrs.address,
                  coordinates: {
                    latitude: adrs.latitude,
                    longitude: adrs.longitude,
                  },
                });
                setShowList(!showList);
              }}>
              <MaterialCommunityIcons
                name="google-maps"
                size={25}
                color={colors.primary}
              />

              <Text style={styles.mapListText}>
                {adrs.address.length > 10
                  ? adrs.address.substring(0, 10) + '...'
                  : adrs.address}
                {/* {adrs.address} */}
                <Text style={{color: '#969799'}}>
                  {'-' + adrs.distance + '\t' + 'km'}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        );
    });
  };

  return (
    <Screen>
      {company != null && (
        <ScrollView
          style={{backgroundColor: colors.backgroud, marginBottom: 15}}>
          <View style={styles.toolbar}>
            <MaterialIcons
              name="arrow-back"
              style={styles.arrow}
              size={24}
              color={colors.lightBlack}
              onPress={() => navigation.goBack()}
            />
            <View style={{flex: 1}} />
            <ChatIcon
              style={styles.icon}
              onPress={() =>
                navigation.navigate('Request', {
                  contactList: [{name: company.name, id: id}],
                })
              }
            />
          </View>

          <View style={styles.body}>
            <View style={styles.description}>
              <AppText
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.title}>
                {company.name}
              </AppText>
              {addressesList.length > 0 ? renderMap() : <></>}
              {!showList && addressesList.length > 0 ? (
                renderMapList()
              ) : (
                <Text></Text>
              )}

              <AppText style={styles.detail}>{company?.description}</AppText>
              <OpenURLButton
                url={`mailto:${company?.email}`}
                text={company?.email}
              />
              <OpenURLButton url={company?.website} text={company?.website} />
            </View>
            {images.length > 0 && (
              <SafeAreaView style={styles.slider}>
                <ImageSlider
                  images={images}
                  videos={videos}
                  thumbnail={videoThumbnail.path}
                />
              </SafeAreaView>
            )}
            <View style={styles.contact}>
              {company?.facebook ? (
                <SocialIcon
                  type="facebook"
                  onPress={() =>
                    Linking.openURL(
                      'https://www.facebook.com/' + company?.facebook,
                    )
                  }
                />
              ) : (
                <></>
              )}
              {company?.youtube ? (
                <SocialIcon
                  type="youtube"
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/' + company?.youtube,
                    )
                  }
                />
              ) : (
                <></>
              )}

              {company?.twitter ? (
                <SocialIcon
                  type="twitter"
                  onPress={() =>
                    Linking.openURL('https://twitter.com/' + company?.twitter)
                  }
                />
              ) : (
                <></>
              )}
              {company?.instagram ? (
                <SocialIcon
                  type="instagram"
                  onPress={() =>
                    Linking.openURL(
                      'https://www.instagram.com/' + company?.instagram,
                    )
                  }
                />
              ) : (
                <></>
              )}
              {company?.number ? (
                <SocialIcon
                  iconSize={30}
                  light
                  type="phone"
                  onPress={() => Linking.openURL(`tel:${company?.number}`)}
                />
              ) : (
                <></>
              )}
              {company?.number ? (
                <SocialIcon
                  iconSize={30}
                  light
                  type="whatsapp"
                  onPress={() => {
                    Linking.openURL(`https://wa.me/${company?.number}`);
                  }}
                />
              ) : (
                <></>
              )}
            </View>

            <AppText style={styles.listHeading}>Featured In</AppText>
          </View>
          <View style={{marginLeft: 5}}>
            <Text
              style={{
                color: colors.secondary,
                marginBottom: 10,
                fontSize: 16,
                marginLeft: 8,
              }}>
              Products:
            </Text>
            <ScrollView
              pagingEnabled={true}
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}>
              {materials.map((item, index) => {
                if (item.images.length > 0)
                  return (
                    <MaterialFram
                      onPress={() => {
                        setProduct({...item, type: 'Product'});
                        setModalVisible(true);
                      }}
                      key={'Prod' + index}
                      name={item.name}
                      image={item.images[0].image}
                    />
                  );
              })}
            </ScrollView>
          </View>

          {consultants.length > 0 ? (
            <View style={{marginLeft: 5}}>
              <Text
                style={{
                  color: colors.secondary,
                  marginBottom: 10,
                  fontSize: 16,
                  marginLeft: 8,
                }}>
                Projects:
              </Text>
              <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}>
                {consultants.map((item, index) => {
                  if (item.images.length > 0)
                    return (
                      <MaterialFram
                        onPress={() => {
                          setProduct({...item, type: 'Project'});
                          setModalVisible(true);
                        }}
                        key={'Proj' + index}
                        name={item.name}
                        image={item.images[0].image}
                      />
                    );
                })}
              </ScrollView>
            </View>
          ) : (
            <></>
          )}
        </ScrollView>
      )}
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: colors.secondary}}
      />
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContianer}>
          <ImageView
            images={imageToView}
            imageIndex={0}
            isVisible={currentImage.isVisible}
            onClose={() => setCurrentImage({...currentImage, isVisible: false})}
          />
          <View style={styles.modalToolbar}>
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={colors.lightBlack}
              onPress={() => setModalVisible(false)}
            />
            {product && (
              <AppText style={styles.modalHeading}>{product.type}</AppText>
            )}
            <View></View>
          </View>
          {product ? (
            <View style={styles.modalBody}>
              <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment="center">
                {product.images.map((img, i) => {
                  return (
                    <TouchableOpacity
                      style={{
                        height: '50%',
                        width: 350,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 10,
                      }}
                      onPress={() => {
                        setCurrentImage({
                          ...currentImage,
                          image: img.image,
                          isVisible: true,
                        });
                      }}>
                      <ImageBackground
                        style={{
                          height: '100%',
                          width: '100%',
                        }}
                        source={{uri: img.image}}></ImageBackground>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
              <View style={{flexDirection: 'row', marginTop: 30}}>
                <AppText style={styles.modalTextHead}>Name:</AppText>
                <AppText style={styles.modalText}>{product.name}</AppText>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <AppText style={styles.modalTextHead}>Description:</AppText>
                <View style={{flex: 1, alignSelf: 'stretch'}}>
                  <AppText style={styles.modalText}>
                    {product.description}
                  </AppText>
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  modalTextHead: {
    color: colors.lightBlack,
    fontSize: 18,
    marginLeft: 10,
  },
  modalText: {
    color: colors.lightGray,
    fontSize: 18,
    marginLeft: 5,
  },
  modalToolbar: {
    marginTop: 30,
    height: 40,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeading: {
    flex: 1,
    fontSize: 26,
    color: colors.primary,
    marginRight: 20,
  },
  modalContianer: {
    flex: 1,
    backgroundColor: colors.backgroud,
  },
  toolbar: {
    height: 40,
    marginTop: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginRight: 20,
  },
  arrow: {
    height: 24,
    marginLeft: 10,
  },
  description: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: colors.lightGray,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 22,
  },
  distance: {
    fontSize: 17,
    color: colors.secondary,
    textAlign: 'center',
  },
  detail: {
    fontSize: 17,
    marginBottom: 10,
    marginTop: 2,
    color: colors.medium,
  },
  link: {
    color: 'dodgerblue',
    fontSize: 17,
  },
  slider: {
    marginVertical: 10,
  },
  contact: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
  },
  listContainer: {
    height: '100%',
  },
  listHeading: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 20,
    color: colors.primary,
  },
  panel: {
    padding: 20,
    backgroundColor: colors.lightGray,
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
    marginTop: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  container1: {
    flex: 1,
  },
  scrollView1: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  mapListText: {
    flexDirection: 'row-reverse',
    fontSize: 17,
    color: '#878787',
    paddingLeft: 27,
    marginTop: -23.5,
    maxWidth: 350,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  mapMoreText: {
    color: colors.secondary,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    marginBottom: -1,
  },
  mapText: {
    flexDirection: 'row-reverse',
    fontSize: 17,
    color: '#555555',
    paddingLeft: 27,
    marginTop: -25,
    maxWidth: 300,
  },
  contentContainer: {
    paddingTop: 10,
    marginLeft: 3,
    marginTop: -5,
    marginRight: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  video: {
    width: '94%',
    height: 300,
    // padding: '2%',
    margin: '3%',
    borderWidth: 2,
  },
});
export default DetailScreen;
