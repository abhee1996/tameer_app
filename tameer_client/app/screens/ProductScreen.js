import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  LogBox,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';
import axios from 'axios';
import config from '../config/config';
import ImageView from 'react-native-image-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppText from '../components/AppText';

function ProductScreen({route, navigation}) {
  const [images, setImages] = useState();
  const [product, setProduct] = useState(route.params?.params?.product);
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

  async function getImages(id, company_id) {
    const url =
      config.server + 'api/company/getProductImages/' + id + '/' + company_id;
    return axios.get(url).then(data => data.data);
  }
  useEffect(() => {
    LogBox.ignoreLogs(['Method has been deprecated.']);
    getImages(
      route.params?.params?.product.uuid,
      route.params?.params?.product.company_id,
    ).then(result => {
      setImages(result);
    });
  }, []);
  return (
    <View>
      <ImageView
        images={imageToView}
        useNativeDriver={true}
        imageIndex={0}
        isVisible={currentImage.isVisible}
        onClose={() => setCurrentImage({...currentImage, isVisible: false})}
      />
      <View style={styles.modalToolbar}>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={colors.lightBlack}
          onPress={() => navigation.goBack()}
        />
        {product && <AppText style={styles.modalHeading}>Product</AppText>}
        <View></View>
      </View>
      <View style={styles.modalBody}>
        {images ? (
          <ScrollView
            horizontal
            scrollEventThrottle={1}
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal:
                Platform.OS === 'android'
                  ? Dimensions.get('window').width * 0.1 - 40
                  : 0,
            }}>
            {images.map((img, i) => {
              return (
                <TouchableOpacity
                  key={'Btn' + i}
                  style={{
                    height: 220,
                    width: 350,
                    margin: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setCurrentImage({
                      ...currentImage,
                      image: img,
                      isVisible: true,
                    });
                  }}>
                  <ImageBackground
                    key={'Img' + i}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={{uri: img}}></ImageBackground>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : (
          <></>
        )}

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <AppText style={styles.modalTextHead}>Name:</AppText>
          <AppText style={styles.modalText}>{product.name}</AppText>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <AppText style={styles.modalTextHead}>Description:</AppText>
          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <AppText style={styles.modalText}>{product.description}</AppText>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
export default ProductScreen;
