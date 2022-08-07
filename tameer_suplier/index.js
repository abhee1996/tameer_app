// // import { registerRootComponent } from 'expo';
// import { AppRegistry } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import App from './App';
// import {name as appName} from './app.json';
// // import PushNotificationIOS from "@react-native-community/push-notification-ios";
// // import PushNotification from "react-native-push-notification";

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
// // registerRootComponent(App);
// AppRegistry.registerComponent(appName, () => App);

// // Register background handler
// // messaging().setBackgroundMessageHandler(async remoteMessage => {
// // });
import { AppRegistry } from "react-native";
import App from "./App";
import { registerRootComponent } from "expo";
import { name as appName } from "./app.json";
registerRootComponent(App);
AppRegistry.registerComponent(appName, () => App);
