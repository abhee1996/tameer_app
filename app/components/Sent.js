import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {colors, Overlay} from 'react-native-elements';
import config from '../config/config';
import {UserContext} from '../custom_hooks/UserContext';
import SentItem from './SentItem';
import Separator from './Separator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';
import AppText from './AppText';

async function getSentMessages(id) {
  const url = config.server + 'api/message/getSentMessages?userId=' + id;
  return fetch(url).then(data => data.json());
}

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');
function Sent({navigation}) {
  const [messages, setMessages] = useState([]);
  const [companyNames, setCompanyNames] = useState();
  const [modalVisible, setModelVisible] = useState(false);
  const {user} = useContext(UserContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSentMessages(user.id).then(myMessages => {
        setMessages(myMessages);
      });
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={messages}
        keyExtractor={listing => listing.id}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Separator}
        renderItem={({item}) => (
          <SentItem
            name={item.title}
            onPress={() => {
              setCompanyNames(item.companyname);
              setModelVisible(true);
            }}
            date={item.timestamp}
            count={item.count}
          />
        )}
      />
      <Overlay
        isVisible={modalVisible}
        onBackdropPress={() => setModelVisible(false)}>
        <View style={styles.modal}>
          <View style={styles.modalCard}>
            <View style={styles.modalToolbar}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={25}
                onPress={() => {
                  setModelVisible(false);
                }}
              />
              <AppText
                style={{
                  marginLeft: 10,
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: colors.medium,
                }}>
                Sent To
              </AppText>
            </View>
            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                List of all companies:
              </Text>
            </View>

            <FlatList
              data={companyNames}
              ItemSeparatorComponent={Separator}
              ListFooterComponent={<Separator />}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    padding: 13,
                  }}>
                  <Text style={{flex: 1, color: colors.medium, fontSize: 16}}>
                    {item}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}
const styles = StyleSheet.create({
  modalCard: {
    width: ScreenWidth * 0.75,
    height: ScreenHeight * 0.7,
    backgroundColor: 'white',
  },
  modal: {
    // flex:1,
    height: ScreenHeight * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  modalToolbar: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});
export default Sent;
