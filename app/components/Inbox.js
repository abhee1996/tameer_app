import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, LogBox} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../config/colors';
import config from '../config/config';
import {UserContext} from '../custom_hooks/UserContext';
import MessageItem from './MessageItem';
import Separator from './Separator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
LogBox.ignoreLogs(['new NativeEventEmitter']);

async function getConversations(id, setConversations) {
  const url =
    config.server + 'api/message/getAllUserConversations?userId=' + id;
  await fetch(url)
    .then(data => data.json())
    .then(data => {
      setConversations(data);
    });
}
async function deleteConversation(
  convoToDelete,
  chkState,
  setChkState,
  setShowDelete,
) {
  convoToDelete.forEach(convo => {
    let conversationId = convo.id;
    const url =
      config.server +
      'api/message/deleteConversations/sender/' +
      conversationId;
    axios.delete(url).then(data => {
      if (data.data) {
        setChkState(new Array(chkState.length).fill(false));
        setShowDelete(false);
      }
    });
  });
}
function Inbox({navigation}) {
  const [conversations, setConversations] = useState([]);
  const {user} = useContext(UserContext);
  const [showSpinner, setShowSpinner] = useState(true);
  const [chkState, setChkState] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  useEffect(() => {
    getConversations(user.id, setConversations);

    let interval = setInterval(async () => {
      const url =
        config.server + 'api/message/getAllUserConversations?userId=' + user.id;
      await fetch(url)
        .then(data => data.json())
        .then(data => {
          if (chkState === []) {
            setChkState(new Array(data.length).fill(false));
          }
          setConversations(data);
          if (data) {
            setShowSpinner(false);
          }
        });
    }, 3000);
    return function cleanup() {
      clearInterval(interval);
    };
  }, []);
  const onLongPress = index => {
    let temp = [...chkState];
    temp[index] = true;
    setChkState(temp);
    setShowDelete(true);
  };
  const deleteConversationfunction = () => {
    let convoToDelete = conversations.filter(function (element, index) {
      return chkState[index];
    });
    deleteConversation(convoToDelete, chkState, setChkState, setShowDelete);
  };
  return (
    <View style={{flex: 1}}>
      {showDelete ? (
        <>
          <View
            style={{
              backgroundColor: colors.backgroud,
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.lightGray,
                width: '50%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setShowDelete(false)}>
              <MaterialCommunityIcons name="cancel" size={22} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.danger,
                width: '50%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => deleteConversationfunction()}>
              <AntDesign name="delete" size={22} />
            </TouchableOpacity>
          </View>
          <View style={styles.selectAllView}>
            <Text
              style={styles.selectAllText}
              onPress={() => setChkState(new Array(data.length).fill(true))}>
              Select All
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}

      <FlatList
        data={conversations}
        keyExtractor={listing => listing.id}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Separator}
        renderItem={({item, index}) => (
          <MessageItem
            name={item.title}
            message={item.message}
            messageType={item.message_type}
            date={item.created_ts}
            count={item.count}
            onPress={() =>
              navigation.navigate('Chat', {
                screen: 'ChatScreen',
                params: {
                  conversationId: item.id,
                  receiverId: item.receiver_id,
                  userId: user.id,
                  title: item.title,
                  name: item.name,
                  number: item.number,
                },
              })
            }
            onLongPress={() => onLongPress(index)}
            isChecked={chkState[index]}
            checkPressed={() => {
              let temp = [...chkState];
              temp[index] = !temp[index];
              setChkState(temp);
            }}
            showCheckBox={showDelete}
          />
        )}
      />
      <Spinner
        visible={showSpinner}
        textContent={'Loading...'}
        textStyle={{color: colors.secondary}}
        size="large"
      />
    </View>
  );
}

export default Inbox;

const styles = StyleSheet.create({
  selectAllView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 10,
  },
  selectAllText: {flex: 1, color: colors.secondary},
});
