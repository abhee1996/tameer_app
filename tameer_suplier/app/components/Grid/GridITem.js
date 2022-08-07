import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import colors  from '../../config/colors';

function GridITem({ title, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}  source= {{uri: image }} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        height: 100,
        borderRadius: 10,
        backgroundColor: colors.white,
        overflow: "hidden",
        alignItems:"center",
    },
    image:{
        width: "100%",
        height:"70%",
    },
    text:{
        fontSize: 16,
        color: colors.medium,
        alignSelf: "center"
    }
})
export default GridITem;