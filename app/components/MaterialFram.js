import React from 'react';
import {Dimensions} from 'react-native';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import colors from '../config/colors';

function MaterialFram({name, image, style, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.text} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
    marginLeft: 4,
    marginRight: 4,
    height: 110,
    width: Dimensions.get('window').width / 3 - 12,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '75%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  text: {
    fontSize: 14,
    color: colors.medium,
    width: '100%',
    textAlign: 'center',
    marginTop: 3,
    flexWrap: 'wrap',
    paddingHorizontal: 5,
  },
});

export default MaterialFram;
