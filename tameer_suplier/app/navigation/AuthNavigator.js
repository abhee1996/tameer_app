import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';
import CompanyInfoScreen from  '../screens/CompanyInfoScreen';

const AuthStack = createStackNavigator();
const AuthStackNavigator= ()=>{
    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="OTPscreen" component={OTPScreen} />
            <AuthStack.Screen name="InfoScreen" component={CompanyInfoScreen} />
        </AuthStack.Navigator>
    );
}
function AuthNavigator() {
    return (
        <NavigationContainer>
            <AuthStackNavigator/>
        </NavigationContainer>
    );
}
export default AuthNavigator;