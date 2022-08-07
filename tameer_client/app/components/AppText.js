import React from 'react';
import { View, Text } from 'react-native';
import defaultStyles from '../config/styles'

function AppText({children, style,onPress, ...otherProps}) {
    return (
        <View>
           <Text style={[defaultStyles.text, style]} onPress={onPress}  {...otherProps} >{children}</Text> 
        </View>
    );
}

export default AppText;