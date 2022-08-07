import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "../navigation/navigationTheme";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Inbox from "../components/Inbox";
import Sent from "../components/Sent";
import colors from "../config/colors";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      indicatorStyle: {
        backgroundColor: colors.secondary,
      },
      labelStyle: { fontSize: 16, marginTop: 50, fontWeight: "bold" },
      tabStyle: { paddingHorizontal: 20, marginHorizontal: 20 },
      style: { backgroundColor: colors.backgroud },
    }}
  >
    <Tab.Screen name="Inbox" component={Inbox} />
  </Tab.Navigator>
);
function MessagingScreen({ navigation }) {
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();

      navigation.dispatch(StackActions.popToTop());
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Screen style={{ flex: 1 }}>
      <Tabs />
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
