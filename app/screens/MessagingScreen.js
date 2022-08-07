import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, StyleSheet, View} from 'react-native';
import Screen from '../components/Screen';
import Inbox from '../components/Inbox';
import Sent from '../components/Sent';
import colors from '../config/colors';

function MessagingScreen({route, navigation}) {
  const [tabName, setTabName] = useState(route.params?.tabName);
  const Tab = createMaterialTopTabNavigator();

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      e.preventDefault();

      navigation.dispatch(StackActions.popToTop());
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Screen style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName={tabName == undefined ? 'Inbox' : tabName}
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: colors.secondary,
          },
          labelStyle: {fontSize: 14, marginTop: 50, fontWeight: 'bold'},
          tabStyle: {paddingHorizontal: 20, marginHorizontal: 20},
          style: {backgroundColor: colors.backgroud},
        }}>
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="Sent" component={Sent} />
      </Tab.Navigator>
    </Screen>
  );
}
const styles = StyleSheet.create({
  toolbar: {
    height: 40,
    paddingTop: 10,
    paddingLeft: 15,
  },
});
export default MessagingScreen;
