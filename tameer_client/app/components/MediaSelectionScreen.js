import React from 'react';
import Screen from './Screen';
// import { AssetsSelector } from 'expo-images-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageInput from './MessageInput';
import LoginScreen from '../screens/LoginScreen';
import {StyleSheet} from 'react-native';
import AppText from './AppText';
import {View} from 'react-native';
function MediaSelectionScreen({props, navigation}) {
  const goBack = () => {
    navigation.goBack();
  };
  const onDone = data => {
    navigation.navigate('editImage', {list: data});
  };
  return (
    <AssetsSelector
      options={{
        assetsType: ['photo', 'video'],
        maxSelections: 5,
        margin: 3,
        portraitCols: 4,
        landscapeCols: 5,
        widgetWidth: 100,
        widgetBgColor: 'white',
        selectedBgColor: 'red',
        videoIcon: {
          Component: Ionicons,
          iconName: 'ios-videocam',
          color: 'white',
          size: 22,
        },
        selectedIcon: {
          Component: Ionicons,
          iconName: 'ios-checkmark-circle-outline',
          color: 'white',
          bg: '#ffffff50',
          size: 20,
        },
        defaultTopNavigator: {
          continueText: 'Next',
          goBackText: 'Back',
          buttonStyle: styles.button,
          textStyle: {},
          backFunction: () => goBack(),
          doneFunction: data => onDone(data),
        },
        noAssets: {
          Component: () => <Screen />,
        },
        CustomTopNavigator: {
          Component: () => <View style={{marginTop: 30}}></View>,
        },
      }}
    />
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 0,
    padding: 0,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
  },
});
export default MediaSelectionScreen;
