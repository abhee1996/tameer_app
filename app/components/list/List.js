import React from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native';
import  colors  from '../../config/colors';
import styles from '../../config/styles';
import ItemSeparator from './ItemSeparator';
import ListItem from './ListItem';
function List({data}) {
    return (
            <ScrollView>
            <View>
            <FlatList 
             data= {data}
             keyExtractor= {(listing)=>listing.id.toString()}
             ItemSeparatorComponent= {ItemSeparator} 
             renderItem= {({item})=>
                <ListItem  title= {item.title} desc= {item.desc} onPress={()=> item.check}  />}
            />
           <Text style={{fontWeight: "bold", color: "blue", backgroundColor: colors.light, height:70,}}> ADVERTISEMENT </Text>
            <FlatList 
             data= {data}
             keyExtractor= {(listing)=>listing.id.toString()}
             ItemSeparatorComponent= {ItemSeparator} 
             renderItem= {({item})=>
                <ListItem  title= {item.title} desc= {item.desc} onPress={()=> item.check}  />}
            />
            </View>
            </ScrollView>
    );
}


export default List;