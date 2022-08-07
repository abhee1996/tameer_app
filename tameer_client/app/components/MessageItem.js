import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppCheckbox from './AppCheckbox';

function MessageItem({
  name,
  message,
  messageType,
  count,
  date,
  onPress,
  onLongPress,
  checkPressed,
  isChecked,
  showCheckBox,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.container}>
        {showCheckBox ? (
          <AppCheckbox
            style={styles.checkBox}
            isChecked={isChecked}
            checkPress={checkPressed}
          />
        ) : (
          <></>
        )}
        <View style={styles.textContainer}>
          <AppText style={styles.name}>{name}</AppText>
          {messageType === 'image' ? (
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons name="image" size={20} color={'gray'} />
              <AppText style={{color: 'gray'}}> Photo</AppText>
            </View>
          ) : (
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>
              {message.split('\n')[0]}{' '}
            </Text>
          )}
        </View>

        <View style={styles.rightContainer}>
          {/* <AppText style={styles.date}>{date}</AppText> */}

          {count > 0 && (
            <View style={styles.countContainer}>
              <Text style={styles.count}>{count}</Text>
            </View>
          )}
          <AppText style={styles.date}>{date}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  rightContainer: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  textContainer: {
    width: '70%',
    padding: 10,
  },
  count: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 8,
  },
  name: {
    fontSize: 18,
    color: colors.primary,
    marginBottom: 2,
  },
  message: {
    fontSize: 14,
    color: colors.medium,
  },
  date: {
    fontSize: 12,
    color: colors.medium,
    marginRight: 20,
    marginTop: 3,
  },
});

export default MessageItem;
