import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import config from '../config/config';
import SentItem from './SentItem';
import Separator from './Separator';

 
async function getSentMessages(){
    const url  = config.server +"api/message/getSentMessages?userId="+1;
    return fetch(url)
        .then(data =>data.json());
}


function Sent(props) {

    const [messages, setMessages]  = useState([]);
    useEffect(()=>{
        getSentMessages().then((myMessages)=>{setMessages(myMessages)});
    },[]);
    return (
        <View style={{ flex:1}}>
            <FlatList 
             data= {messages}
             keyExtractor= {(listing)=>listing.id}
             ItemSeparatorComponent={Separator}
             renderItem= {({item})=>
             <SentItem  name= {item.title}  date= {item.timestamp} count= {item.count}  />}  />    
        </View>
    );
}

export default Sent;