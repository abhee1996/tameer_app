import React from 'react';
import { Text, View,StyleSheet, TouchableWithoutFeedback,Image } from 'react-native';
import colors from '../config/colors'
import { Dimensions } from 'react-native';

function ProfessionalFram({data, onPress,onLongPress}) {
    return (
        <TouchableWithoutFeedback onPress ={onPress} onLongPress={onLongPress} >
            <View style={styles.container}>
             <Image  style={styles.image}  source= {{uri: data.image}} />
             <Text style={styles.text} numberOfLines={1} >{data.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        marginBottom:5,
        marginTop:5,
        height: 120,
        width:(Dimensions.get('window').width/3)-20,
        alignItems:"center",
        backgroundColor:"transparent",
        borderRadius:5,
    },
    image:{
        width:"100%",
        height:"70%",
        borderColor: colors.white,
        borderWidth:5,
        borderRadius:10,        
    },
    text:{
        fontSize: 14,
        color: colors.medium,
        flexWrap:"wrap",
    }
})
export default ProfessionalFram;