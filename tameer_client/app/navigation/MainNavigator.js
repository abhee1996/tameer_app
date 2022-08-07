import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CommonActions,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
// import SupplierAndSalesOffice from '../screens/SupplierAndSalesOfficeScreen';
import MaterialScreen from '../screens/MaterialScreen';
import MessagingScreen from '../screens/MessagingScreen';
import DetailScreen from '../screens/DetailScreen';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavigationLogo from '../navigation/NavigationLogo';
import ProviderScreen from '../screens/ProviderScreen';
import ChatScreen from '../screens/ChatScreen';
import MediaSelectionScreen from '../components/MediaSelectionScreen';
import RequestScreen from '../screens/RequestScreen';
import MaterialCategoryScreen from '../screens/MaterialCategoryScreen';
import ConsulatantCategoryScreen from '../screens/ConsultantCategoryScreen';
import ImageEditScreen from '../screens/ImageEditScreen';
import MessageIcone from '../components/MessageIcone';
import MapScreen from '../screens/MapScreen';
import ProductScreen from '../screens/ProductScreen';

const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen
        name="SupplierAndSalesOffice"
        component={SupplierAndSalesOffice}
      /> */}
      <HomeStack.Screen name="Product" component={ProductScreen} />
      <HomeStack.Screen name="Provider" component={ProviderStackNavigator} />
      {/* <HomeStack.Screen name="Messaging" component={MessagingScreen} /> */}
      <HomeStack.Screen name="Chat" component={ChatNavigator} />
    </HomeStack.Navigator>
  );
};

const MaterialCategoryStack = createStackNavigator();
const MaterialStackNavigator = () => {
  return (
    <MaterialStack.Navigator screenOptions={{headerShown: false}}>
      <MaterialStack.Screen
        name="MaterialCategory"
        component={MaterialCategoryScreen}
      />
      <MaterialStack.Screen name="Material" component={MaterialScreen} />
      <MaterialStack.Screen
        name="Provider"
        component={ProviderStackNavigator}
      />
    </MaterialStack.Navigator>
  );
};
const MaterialStack = createStackNavigator();
const ConsulatantStackNavigator = () => {
  return (
    <MaterialStack.Navigator screenOptions={{headerShown: false}}>
      <MaterialStack.Screen
        name="ConsultantCategory"
        component={ConsulatantCategoryScreen}
      />
      <MaterialStack.Screen
        name="Provider"
        component={ProviderStackNavigator}
      />
    </MaterialStack.Navigator>
  );
};

const ProviderStack = createStackNavigator();
const ProviderStackNavigator = navigation => {
  return (
    <ProviderStack.Navigator screenOptions={{headerShown: false}}>
      <ProviderStack.Screen name="Providers" component={ProviderScreen} />
      <ProviderStack.Screen name="Detail" component={DetailScreen} />
      <ProviderStack.Screen name="MapScreen" component={MapScreen} />
      <ProviderStack.Screen name="Request" component={RequestScreen} />
      <MessageStack.Screen name="Message" component={MessageStackNavigator} />
    </ProviderStack.Navigator>
  );
};

const MessageStack = createStackNavigator();
const MessageStackNavigator = () => {
  return (
    <MessageStack.Navigator screenOptions={{headerShown: false}}>
      <MessageStack.Screen name="Messaging" component={MessagingScreen} />
      {/* <MessageStack.Screen name="Chat" component={ChatNavigator} /> */}
    </MessageStack.Navigator>
  );
};
const ChatStack = createStackNavigator();
const ChatNavigator = () => {
  return (
    <ChatStack.Navigator screenOptions={{headerShown: false}}>
      <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
      <ChatStack.Screen
        name="MediaSelectionScreen"
        component={MediaSelectionScreen}
      />
      <ChatStack.Screen name="editImage" component={ImageEditScreen} />
    </ChatStack.Navigator>
  );
};

// tabPress: () => {
//     navigation.reset({
//         index: 0,
//         routes: [{ name: "ConsultantCategory" }],
// });

const HomeTabBarListner = ({navigation, route}) => ({
  tabPress: event => {
    navigation.navigate('HomeStack', {screen: 'Home'});
  },
});

const MaterialStackTabBarListner = ({navigation, route}) => ({
  tabPress: event => {
    event.preventDefault();
    navigation.navigate('MaterialStack', {screen: 'MaterialCategory'});
  },
});

const ConsultantStackTabBarListner = ({navigation, route}) => ({
  tabPress: event => {
    event.preventDefault();
    navigation.navigate('ConsultantStack', {screen: 'ConsultantCategory'});
  },
});
const MessageTabBarListner = ({navigation, route}) => ({
  tabPress: event => {
    event.preventDefault();
    navigation.navigate('MessagingStack', {screen: 'Messaging'});
  },
});

const BottomTabStack = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTabStack.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        showLabel: false,
        showIcon: true,

        activeTintColor: colors.ligthWhite,
        inactiveTintColor: 'white',
        activeBackgroundColor: '#009BDD',
        style: {height: 70, backgroundColor: '#009BDD', paddingLeft: 10},
      }}>
      <BottomTabStack.Screen
        name="HomeStack"
        listeners={HomeTabBarListner}
        component={HomeStackNavigator}
        options={{tabBarIcon: ({size, color}) => <NavigationLogo />}}
      />
      <BottomTabStack.Screen
        name="ConsultantStack"
        listeners={ConsultantStackTabBarListner}
        component={ConsulatantStackNavigator}
        options={{
          tabBarIcon: ({size, color}) => {
            return <FontAwesome5 name="hard-hat" size={25} color={color} />;
          },
        }}
      />
      <BottomTabStack.Screen
        name="MaterialStack"
        listeners={MaterialStackTabBarListner}
        component={MaterialStackNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="cube-outline"
              size={35}
              color={color}
            />
          ),
        }}
      />
      <BottomTabStack.Screen
        name="MessagingStack"
        listeners={MessageTabBarListner}
        component={MessageStackNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <MessageIcone color={color} size={40} />
          ),
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

export default MainNavigator;
