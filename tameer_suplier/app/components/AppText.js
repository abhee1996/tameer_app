import React from 'react';
import { View, Text } from 'react-native';
import defaultStyles from '../config/styles'

function AppText({keyApp,children, style,onPress}) {
    return (
        <View key={keyApp}>
           <Text key={keyApp+"txt"} style={[defaultStyles.text, style]} onPress={onPress}>{children}</Text> 
        </View>
    );
}

export default AppText;