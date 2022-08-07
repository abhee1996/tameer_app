import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import config from '../config/config';
import {UserContext} from '../custom_hooks/UserContext';

async function getCount(id) {
  const url = config.server + 'api/message/getMessageCount?userId=' + id;
  return fetch(url).then(data => data.json());
}

function MessageIcone({color, size}) {
  const {user} = useContext(UserContext);
  const [messageCount, setMessageCount] = useState('0');
  useEffect(() => {
    const interval = setInterval(() => {
      getCount(user.id).then(obj => {
        setMessageCount(obj.count);
      });
    }, 3000);
  }, []);

  return (
    <>
      <Feather name="message-square" size={35} color={color} />
      <View style={styles.circle}>
        <Text style={styles.text}>{messageCount}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#f67725',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: '25%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
});

export default MessageIcone;
