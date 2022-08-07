import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppText from '../components/AppText'; 
import Screen from '../components/Screen';
import ProfessinalItem from '../components/professional/ProfessinalItem';
import colors from '../config/colors';
import SearchBar from '../components/SearchBar';


const listings = [
    {
       id: 1,
       title: "Constructor",
       desc: "",
       check:false,    
    },
    {
       id: 2,
       title: "Builder",
       desc: "Lahore Ring Road (3.5 Km)"     
    },
    {
      id: 3,
      title: "Develper",
      desc: "Lahore Ring Road (3.5 Km)",
      check:false,    
   },
   {
      id: 4,
      title: "Labour",
      desc: "Lahore Ring Road (3.5 Km)"     
   }, 
   {
    id: 5,
    title: "Artitechter",
    desc: "Lahore Ring Road (3.5 Km)",
    check:false,    
  },
  {
    id: 6,
    title: "Advisor",
    desc: "Lahore Ring Road (3.5 Km)"     
  },    {
    id: 1,
    title: "Constructor",
    desc: "",
    check:false,    
 },
 {
    id: 7,
    title: "Builder",
    desc: "Lahore Ring Road (3.5 Km)"     
 },
 {
   id: 8,
   title: "Develper",
   desc: "Lahore Ring Road (3.5 Km)",
   check:false,    
},
{
   id: 9,
   title: "Labour",
   desc: "Lahore Ring Road (3.5 Km)"     
}, 
{
 id: 10,
 title: "Artitechter",
 desc: "Lahore Ring Road (3.5 Km)",
 check:false,    
},
{
 id: 11,
 title: "Advisor",
 desc: "Lahore Ring Road (3.5 Km)"     
}
  
]


function SearchScreen(props) {
    return (
        <Screen style={styles.container}>
        <AppText style={styles.title}>Professtion</AppText>
        <SearchBar  placeholder="Search"/>
        <FlatList 
             style ={styles.list}
             data= {listings}
             numColumns={3}
             keyExtractor= {(listing)=>listing.id.toString()}
             renderItem= {({item})=>
                <ProfessinalItem  title= {item.title}  image= {item.image}  onPress={()=> console.log(item.id)}  />}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        paddingTop:20,
        paddingHorizontal:10,
        flex:1,
    },
    title:{
        fontSize:22,
        color:colors.primary,
        fontFamily:"Roboto",
        fontWeight:"bold",
        alignSelf:"center",
        marginBottom:10,
    },
    list:{
        marginTop:30,

    }
})
export default SearchScreen;