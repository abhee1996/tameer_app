import React from 'react';
import { View, StyleSheet } from 'react-native';
import  colors  from '../../config/colors';

function ItemSeparator({style}) {
    return <View style={[styles.line, style]}/>
}
const styles = StyleSheet.create({
    line:{
        backgroundColor: colors.light,
        height: 1,
        width: "100%",
    }
})
export default ItemSeparator;