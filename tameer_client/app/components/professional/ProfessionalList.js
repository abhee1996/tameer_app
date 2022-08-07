import React from 'react';
import { FlatList, Text, View, ScrollView, StyleSheet} from 'react-native';
import  colors  from '../../config/colors';
import ProfessinalItem from './ProfessinalItem';
function ProfessionalList({data}) {
    return (

            <FlatList 
            style={{backgroundColor: colors.light, alignContent:"center", padding:10}}
             data= {data}
             numColumns={3}
             keyExtractor= {(listing)=>listing.id.toString()}
             renderItem= {({item})=>
                <ProfessinalItem  title= {item.title}  image= {item.image}  onPress={()=> console.log(item.id)}  />}
            />
    );
}
export default ProfessionalList;