import React from 'react';
import { View, StyleSheet, Text,TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';


function SentItem({name, message, count, date,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >        
            <View style={styles.container}>
            <View style={styles.textContainer}>
            <AppText style={styles.name}>{name}</AppText>
            <AppText style={styles.date}>{date}</AppText>
           </View> 
           <View style={styles.rightContainer}>
                <View style={styles.countContainer}>
                <Text style={styles.count}>{count}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:80,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    rightContainer:{
        alignSelf: "flex-end",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    countContainer:{
        justifyContent:"center",
        alignItems:"center",
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor: colors.orange,
    },
    textContainer:{
        width:"70%",
        padding:10,
    },
    count:{
        color:colors.white,
        fontWeight:"bold",
        fontSize:11,
    },
    name:{
        fontSize:18,
        color:colors.primary,
        marginBottom:5,        
    },
    message:{
        fontSize:12,
        color:colors.medium,        
    },
    date:{
        marginTop:1,
        fontSize:12,
        color:colors.medium,        

    }
})


export default SentItem;