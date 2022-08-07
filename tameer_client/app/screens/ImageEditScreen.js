import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Screen from '../components/Screen';
import {ScrollView} from 'react-native';
import MessagingImage from '../components/MessageImage';

function ImageEditScreen({route}) {
  const {list} = route.params;
  const [imageList, setImageList] = useState(list);
  const [image, setImage] = useState(imageList[0].uri);
  const [showModal, setShowModal] = useState(false);
  const deleteImage = id => {
    setImageList(imageList.filter(item => item.id !== id));
  };
  const selectImage = (id, uri) => {
    setImage(uri);
  };

  return (
    <Screen style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <View style={styles.cropBtn}>
            <Entypo
              name="crop"
              size={30}
              color="white"
              onPress={() => setShowModal(true)}
            />
          </View>
          <View style={{flexGrow: 1}}></View>
          <View style={styles.sendBtn}>
            <MaterialCommunityIcons name="send" size={30} color="white" />
          </View>
        </View>
        <View style={styles.image}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
        <View style={styles.footer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {imageList.map(pic => (
              <MessagingImage
                key={pic.id}
                data={pic}
                delelteImage={deleteImage}
                selectImage={selectImage}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  toolbar: {
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 20,
    height: 50,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 100,
    marginBottom: 20,
  },
  sendBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  cropBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ImageEditScreen;
