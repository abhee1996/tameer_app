import React, {useEffect, useState, useMemo, createContext} from 'react';
import {StyleSheet, View} from 'react-native';
import MainNavigator from './app/navigation/MainNavigator';
import * as AsyncStorage from './app/utility/AsyncStorageFunc';

import AuthNavigator from './app/navigation/AuthNavigator';

// import * as SplashScreen from 'expo-splash-screen';
// import * as SecureStore from 'expo-secure-store';
import AppText from './app/components/AppText';
import {UserContext} from './app/custom_hooks/UserContext';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import PushNotification from 'react-native-push-notification';
// import SplashScreen from 'react-native-splash-screen';
import * as Animatable from 'react-native-animatable';

async function showSplash(setUser, setShowSplah, showSplah) {
  // await SplashScreen.show();
  // await SplashScreen.preventAutoHideAsync();

  try {
    const user = await AsyncStorage.getUser('user');
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  } catch (e) {
    console.warn(e);
  } finally {
    if (showSplah) {
      setInterval(() => {
        setShowSplah(false);
      }, 450);
    }
    // setShowSplah(false);
    // await SplashScreen.hide();
    // await SplashScreen.hideAsync();
  }
}

export default function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  const [showSplah, setShowSplah] = useState(true);

  useEffect(() => {
    showSplash(setUser, setShowSplah, showSplah);

    // PushNotification.configure({
    //   // (optional) Called when Token is generated (iOS and Android)
    //   onRegister: function (token) {},

    //   // (required) Called when a remote is received or opened, or local notification is opened
    //   onNotification: function (notification) {
    //     // process the notification
    //     // (required) Called when a remote is received or opened, or local notification is opened
    //     // notification.finish(PushNotificationIOS.FetchResult.NoData);
    //   },

    //   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    //   onAction: function (notification) {
    //     // process the action
    //   },

    //   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    //   onRegistrationError: function (err) {},

    //   // IOS ONLY (optional): default: all - Permissions to register.
    //   permissions: {
    //     alert: true,
    //     badge: true,
    //     sound: true,
    //   },

    //   // Should the initial notification be popped automatically
    //   // default: true
    //   popInitialNotification: true,

    //   /**
    //    * (optional) default: true
    //    * - Specified if permissions (ios) and token (android and ios) will requested or not,
    //    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    //    * - if you are not using remote notification or do not have Firebase installed, use this:
    //    *     requestPermissions: Platform.OS === 'ios'
    //    */
    //   requestPermissions: true,
    // });
  }, []);
  if (user == null) {
    return (
      <View>
        <AppText></AppText>
      </View>
    );
  } else if (user === false) {
    return (
      <UserContext.Provider value={value}>
        <SafeAreaProvider>
          <AuthNavigator />
        </SafeAreaProvider>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={value}>
        {showSplah ? (
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Animatable.Image
              style={{height: '100%', width: '100%'}}
              animation="bounceIn"
              // duraton="1500"
              duration={1500}
              source={require('./app/img/Splash.png')}
              resizeMode="stretch"
            />
          </View>
        ) : (
          <MainNavigator />
        )}
      </UserContext.Provider>
    );
  }
}
