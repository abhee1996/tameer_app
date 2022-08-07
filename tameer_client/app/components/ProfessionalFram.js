import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';

function ProfessionalFram({data, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: data.image}} />
        <Text style={styles.text} numberOfLines={1}>
          {data.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginLeft: 3,
    marginRight: 3,
    height: 120,
    width: Dimensions.get('window').width / 3 - 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '70%',
    borderColor: colors.white,
    borderWidth: 3,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: colors.medium,
    width: '100%',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
export default ProfessionalFram;
