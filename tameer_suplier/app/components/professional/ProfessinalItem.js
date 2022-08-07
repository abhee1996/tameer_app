import React from 'react';
import { Image, Text, View,StyleSheet } from 'react-native';
import colors from '../../config/colors';

function ProfessinalItem({image, title}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}  source= {{uri: "https://picsum.photos/seed/picsum/200/300" }} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:10,
        marginLeft:5,
        height: 130,
        alignItems:"center",
        backgroundColor:colors.light,
    },
    image:{
        width:"100%",
        height:"70%",
        borderColor: colors.white,
        borderWidth:5,
        borderRadius:10,
    },
    text:{
        fontSize: 18,
        color: colors.medium,
    }
})
export default ProfessinalItem;