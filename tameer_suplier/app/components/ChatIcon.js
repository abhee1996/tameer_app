import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ChatIcon({style,onPress,  ...otherProps}) {
    return (
        <TouchableWithoutFeedback style={[styles.imageContainer, style]} onPress={onPress}>
         <MaterialCommunityIcons name="message-outline" size={30} color="white"  style={{transform: [{rotateY: '180deg'}]}}/>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    imageContainer:{     
        backgroundColor:"#68AF15",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default ChatIcon;