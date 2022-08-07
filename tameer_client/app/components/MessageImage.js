import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../config/colors';
import {ImageBackground} from 'react-native';

function MessagingImage({data, delelteImage, selectImage}) {
  return (
    <TouchableWithoutFeedback onPress={() => selectImage(data.id, data.uri)}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: data.uri}}>
          <Entypo
            name="cross"
            size={20}
            color="black"
            onPress={() => delelteImage(data.id)}
          />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    height: 100,
    width: 120,
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  image: {
    width: '100%',
    height: '100%',
    borderColor: colors.white,
    flexDirection: 'row-reverse',
  },
});
export default MessagingImage;
