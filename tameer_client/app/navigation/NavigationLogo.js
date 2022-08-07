import React from 'react';
import {View, StyleSheet} from 'react-native';
import SvgComponent from '../components/SvgComponent';

function NavigationLogo() {
  return (
    <View style={styles.shadow}>
      <SvgComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    marginRight: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
    bottom: 10,
  },
});

export default NavigationLogo;
