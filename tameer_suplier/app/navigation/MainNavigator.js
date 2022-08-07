import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DistributorsAndSalesOffice from "../screens/DistributorsAndSalesOffice";
import MaterialScreen from "../screens/MaterialScreen";
import MessagingScreen from "../screens/MessagingScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import NavigationLogo from "../navigation/NavigationLogo";
import ChatScreen from "../screens/ChatScreen";
import EditProductScreen from "../screens/EditProductScreen";
import MaterialCategoryScreen from "../screens/MaterialCategoryScreen";
import ConsulatantCategoryScreen from "../screens/ConsultantCategoryScreen";
import ImageEditScreen from "../screens/ImageEditScreen";
import MessageIcone from "../components/MessageIcone";
import CategoryScreen from "../screens/CategoryScreen";
import Item from "../screens/Item";
import Protfolio from "../screens/Protfolio";
import MapScreen from "../screens/MapScreen";
import { Menu, MenuItem } from "react-native-material-menu";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
var getNavigation;
const HomeStack = createStackNavigator();
const HomeStackNavigator = ({ navigation }) => {
  getNavigation = navigation;
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />

      <HomeStack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
      />
      <HomeStack.Screen name="Portfolio" component={Protfolio} />
      <HomeStack.Screen
        name="DistributorsAndSalesOffice"
        component={DistributorsAndSalesOffice}
      />
      <HomeStack.Screen name="Category" component={CategoryScreen} />

      <HomeStack.Screen name="Material" component={MaterialStackNavigator} />
      <HomeStack.Screen name="Consultant" component={ConsultanNavigator} />
      <HomeStack.Screen name="MapScreen" component={MapScreen} />
      <HomeStack.Screen name="Chat" component={ChatNavigator} />
      <HomeStack.Screen name="Messaging" component={MessagingScreen} />
      <HomeStack.Screen name="Item" component={Item} />
    </HomeStack.Navigator>
  );
};
const HomeTabBarListner = ({ navigation, route }) => ({
  tabPress: () => {
    //navigation.navigate(Screens.ITEM);
  },
});

const MaterialCategoryStack = createStackNavigator();
const MaterialStackNavigator = () => {
  return (
    <MaterialCategoryStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MaterialCategory"
    >
      <MaterialCategoryStack.Screen
        name="MaterialCategory"
        component={MaterialCategoryScreen}
      />
      <MaterialCategoryStack.Screen
        name="Material"
        component={MaterialScreen}
      />
    </MaterialCategoryStack.Navigator>
  );
};

const MessageStack = createStackNavigator();
const MessageStackNavigator = () => {
  return (
    <MessageStack.Navigator screenOptions={{ headerShown: false }}>
      <MessageStack.Screen name="Messaging" component={MessagingScreen} />
      <MessageStack.Screen name="Chat" component={ChatNavigator} />
    </MessageStack.Navigator>
  );
};
const MessageTabBarListner = ({ navigation, route }) => ({
  tabPress: () => {
    navigation.navigate("MessagingStack", {
      screen: "Messaging",
    });
  },
});

const ChatStack = createStackNavigator();
const ChatNavigator = () => {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
      <ChatStack.Screen name="editImage" component={ImageEditScreen} />
    </ChatStack.Navigator>
  );
};
const ConsultantStack = createStackNavigator();
const ConsultanNavigator = () => {
  return (
    <ConsultantStack.Navigator screenOptions={{ headerShown: false }}>
      <ConsultantStack.Screen
        name="Consultant"
        component={ConsulatantCategoryScreen}
      />
    </ConsultantStack.Navigator>
  );
};

const AddItemStack = createStackNavigator();
const AddItemNavigator = () => {
  return (
    <AddItemStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Category"
    >
      <AddItemStack.Screen name="Category" component={CategoryScreen} />
      <AddItemStack.Screen name="Material" component={MaterialStackNavigator} />
      <AddItemStack.Screen name="Consultant" component={ConsultanNavigator} />
      <ConsultantStack.Screen name="Item" component={Item} />
    </AddItemStack.Navigator>
  );
};
const CustomBottomTabBarMenu = ({ onPress }) => {
  const [visible, setVisible] = useState(false);
  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Menu
          visible={visible}
          style={{ width: "28%", right: "5%" }}
          anchor={
            <MaterialCommunityIcons
              name="plus-thick"
              onPress={showMenu}
              size={30}
              color={"#fff"}
              style={styles.DistributorTabStyle}
            />
          }
          onRequestClose={hideMenu}
        >
          <MenuItem
            onPress={() => {
              getNavigation.navigate("DistributorsAndSalesOffice");
              hideMenu();
            }}
          >
            <Text style={{ marginHorizontal: "3%", fontWeight: "700" }}>
              Distributor
            </Text>
          </MenuItem>
          <MenuItem
            onPress={() => {
              getNavigation.navigate("Category");
              hideMenu();
            }}
          >
            <Text style={{ marginHorizontal: "3%", fontWeight: "700" }}>
              Category
            </Text>
          </MenuItem>
        </Menu>
      </View>
    </TouchableOpacity>
  );
};
const BottomTabStack = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTabStack.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        activeTintColor: colors.ligthWhite,
        inactiveTintColor: "white",
        activeBackgroundColor: "#009BDD",
        style: {
          height: 70,
          backgroundColor: "#009BDD",
          paddingLeft: "-10%",
          justifyContent: "space-between",
        },
      }}
    >
      <BottomTabStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        listeners={HomeTabBarListner}
        options={{
          tabBarIcon: ({ size, color }) => <NavigationLogo />,
        }}
      />

      <BottomTabStack.Screen
        name="MessagingStack"
        listeners={MessageTabBarListner}
        component={MessageStackNavigator}
        style={{
          justifyContent: "space-between",
          alignSelf: "center",
        }}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MessageIcone color={color} messageStyle={styles} />
          ),
        }}
      />

      <BottomTabStack.Screen
        name="AddItemNavigator"
        component={AddItemNavigator}
        options={{
          tabBarIcon: () => <CustomBottomTabBarMenu />,
        }}
      />
    </BottomTabStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  smallBottomTabStyle: {
    alignSelf: "flex-start",
    position: "relative",
    left: 15,
  },
  DistributorTabStyle: {
    alignSelf: "center",
  },
  MessageTabBarStyle: {
    position: "relative",
    left: 0,
    alignSelf: "center",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#f67725",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-10%",
    left: "15%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
  },
});
export default MainNavigator;
