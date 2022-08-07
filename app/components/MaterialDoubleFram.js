import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import colors from '../config/colors';
import {Dimensions} from 'react-native';

function MaterialDoubleFram({item, onPress}) {
  return (
    <View
      style={{
        paddingTop: 10,
        marginRight: 5,
      }}>
      <TouchableWithoutFeedback
        style={{marginBottom: 4}}
        onPress={() => {
          onPress(item[0].id);
        }}>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: item[0].image}} />
          <Text style={styles.text} numberOfLines={1}>
            {item[0].name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          onPress(item[1].id);
        }}>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: item[1].image}} />
          <Text style={styles.text} numberOfLines={1}>
            {item[1].name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    marginLeft: 2.5,
    marginRight: 2.5,
    height: 110,
    width: Dimensions.get('window').width / 3 - 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '75%',
    // borderColor: colors.white,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  text: {
    fontSize: 14,
    color: colors.medium,
    // borderTopColor:colors.light,
    // borderTopWidth:1,
    width: '100%',
    textAlign: 'center',
    // alignSelf:"center",
    marginTop: 3,
    flexWrap: 'wrap',
    paddingHorizontal: 5,
  },
});

export default MaterialDoubleFram;
