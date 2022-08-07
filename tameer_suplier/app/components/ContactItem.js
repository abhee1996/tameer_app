import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 

function ContactItem({id, name, func}) {
    return (
        <View style={styles.container}>
            <Text style= {styles.nameText}>{name}</Text>
            <Entypo name="cross" size={20} style={{marginLeft:5}} onPress={()=>func(id)} />
        </View>
    );
}
const styles = StyleSheet.create({
    contactcontainer:{
        alignSelf:"center",
        backgroundColor: "dodgerblue",
        flexDirection:"row",
        padding:5,
        borderRadius:10,
        margin:5,
        alignItems:"center"
    },
    nameText:{
        fontSize: 14,
    }
})
export default ContactItem;



