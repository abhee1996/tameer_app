import React from 'react';
import { View, StyleSheet, Text,TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';


function SentItem({name, message, count, date}) {
    return (
        <TouchableWithoutFeedback  >        
            <View style={styles.container}>
            <View style={styles.textContainer}>
            <AppText style={styles.name}>Quotation for {name}</AppText>
            <AppText style={styles.date}>{date}</AppText>
           </View> 
           <View style={styles.rightContainer}>
                <View style={styles.countContainer}>
                <Text style={styles.count}>{count}</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>

    );
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:100,
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
        backgroundColor: colors.primary,
    },
    textContainer:{
        width:"70%",
        padding:10,
    },
    count:{
        color:colors.white,
        fontWeight:"bold",
        fontSize:8,
    },
    name:{
        fontSize:18,
        color:colors.medium,
        marginBottom:5,        
    },
    message:{
        fontSize:12,
        color:colors.medium,        
    },
    date:{
        marginTop:5,
        fontSize:12,
        color:colors.medium,        

    }
})


export default SentItem;