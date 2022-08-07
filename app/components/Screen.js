import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";


// const STATUS_BAR = StatusBar.statusBarHeight || 24; 
// const WINDOW_HEIGHT = Dimensions.get('window').height;
function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]} >
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor:colors.backgroud,
    flex:1,
  },
});

export default Screen;
