import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthStack = createStackNavigator();
const AuthStackNavigator= ()=>{
    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="OTPScreen" component={OTPScreen} />
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