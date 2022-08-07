import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';

function ChatIcon({style,onPress,  ...otherProps}) {
    return (
        <TouchableWithoutFeedback style={[styles.imageContainer, style]} onPress={onPress}>
         <MaterialCommunityIcons name="message-outline" size={30} color="white"   style={{transform: [{rotateY: '180deg'}]}}/>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    imageContainer:{     
        backgroundColor:colors.success,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default ChatIcon;