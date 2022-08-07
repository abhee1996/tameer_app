import React, { useEffect, useState, useMemo } from "react";
import { View } from "react-native";
import MainNavigator from "./app/navigation/MainNavigator";
import * as SplashScreen from "expo-splash-screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import * as SecureStore from "expo-secure-store";
import AppText from "./app/components/AppText";
import { UserContext } from "./app/custom_hooks/UserContext";

async function showSplash(setUser) {
  await SplashScreen.preventAutoHideAsync();
  try {
    if (SecureStore.isAvailableAsync) {
      const data = await SecureStore.getItemAsync("user");
      if (data) {
        setUser(JSON.parse(data));
      } else {
        setUser(false);
      }
    } else {
    }
  } catch (e) {
    console.warn(e);
  } finally {
    await SplashScreen.hideAsync();
  }
}

export default function App() {
  // states
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    showSplash(setUser);
  }, []);

  if (user == null) {
    return (
      <View>
        <AppText> </AppText>
      </View>
    );
  } else if (user == false) {
    return (
      <UserContext.Provider value={value}>
        <AuthNavigator />
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={value}>
        <MainNavigator />
      </UserContext.Provider>
    );
  }
}
