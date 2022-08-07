import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import AppCheckbox from '../AppCheckbox';

function ListItem({
  type,
  item,
  onPress,
  checkPress,
  sendMessge,
  checkPressed,
  isChecked,
}) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <AppCheckbox
          style={styles.checkBox}
          isChecked={isChecked}
          checkPress={checkPressed}
        />

        <View style={styles.textContainer}>
          {item.name.length > 0 ? (
            <AppText
              style={styles.title}
              onPress={onPress}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {item.name}
            </AppText>
          ) : (
            <></>
          )}
          {item?.addresses ? (
            <View
              style={{
                maxWidth: '80%',
                flexDirection: 'row',
                flexShrink: 1,
                flexGrow: 1,
                alignItems: 'center',
                flex: 1,
              }}>
              <AppText
                style={styles.desc}
                onPress={onPress}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item?.addresses[0]?.address
                  ? item?.addresses[0]?.address
                  : 'address not given'}
                {'  '}-
              </AppText>
              <Text style={styles.descDistance}>
                {' '}
                {'\t' + Math.round(item?.addresses[0]?.distance) + ' km'}
              </Text>
            </View>
          ) : (
            <></>
          )}
        </View>

        <View style={styles.imageContainer}>
          <MaterialCommunityIcons
            name="message-outline"
            size={30}
            color="white"
            style={{transform: [{rotateY: '180deg'}]}}
            onPress={sendMessge}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.backgroud,
    alignItems: 'center',
    padding: 10,
  },
  desc: {
    fontSize: 12,
    color: colors.medium,
    maxWidth: '100%',

    flexGrow: 1,

    flexShrink: 1,
  },
  descDistance: {
    fontSize: 12,
    flexWrap: 'wrap',
    color: '#41a6d9',
  },
  imageContainer: {
    backgroundColor: '#68AF15',
    width: 50,
    height: 50,
    paddingTop: '1%',
    top: '0.5%',
    borderRadius: 25,
    left: 18,

    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '60%',
    margin: 5,
  },
  title: {
    color: '#AF4D28',
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap',
  },
});
export default ListItem;
