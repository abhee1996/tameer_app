import React from 'react';
import { View, StyleSheet } from 'react-native';
import  colors  from '../config/colors';

function Separator({style}) {
    return <View style={[styles.line, style]}/>
}
const styles = StyleSheet.create({
    line:{
        backgroundColor: "#D3D3D3",
        height: 1,
        width: "100%",
    }
})
export default Separator;