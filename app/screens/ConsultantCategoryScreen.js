import React, {useEffect, useState} from 'react';
import {View, FlatList, ScrollView, StyleSheet} from 'react-native';
import colors from '../config/colors';
import ProfessinalItem from '../components/ProfessionalFram';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import config from '../config/config';
import Spinner from 'react-native-loading-spinner-overlay';
import SearchBar from '../components/SearchBar';

async function getConsulatantCategories() {
  const url = config.server + 'api/consultant/findAll';
  return fetch(url).then(data => data.json());
}

function ConsulatantCategoryScreen({navigation}) {
  const [consultantList, setConsultantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [origConsultantList, setOrigConsultantList] = useState([]);

  useEffect(() => {
    getConsulatantCategories().then(items => {
      setConsultantList(items);
      setOrigConsultantList(items);
      setLoading(false);
    });
  }, []);
  function filter(text) {
    if (text == '') setConsultantList(origConsultantList);
    else
      setConsultantList(
        origConsultantList.filter(consultant => {
          if (
            consultant.name
              .trim()
              .toLowerCase()
              .indexOf(text.trim().toLowerCase()) !== -1
          )
            return consultant;
        }),
      );
  }
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Consultant Categories</AppText>
      <View
        style={{
          marginHorizontal: 15,
          height: 80,
        }}>
        <SearchBar filter={filter} placeholder="Search" />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {consultantList.map((item, index) => (
          <ProfessinalItem
            data={item}
            key={'Cons' + index}
            onPress={() =>
              navigation.navigate('Provider', {
                screen: 'Providers',
                params: {
                  id: item.id,
                  type: 'consultant',
                  image_1: item.image,
                  name: item.name,
                },
              })
            }
          />
        ))}
      </ScrollView>

      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: colors.secondary}}
        size="large"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroud,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontFamily: 'Roboto',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  list: {
    marginTop: 30,
  },
  container1: {
    flexDirection: 'row-reverse',
    backgroundColor: colors.white,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    width: '95%',
    height: 55,
    marginVertical: 8,
    marginLeft: 8,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 5,
  },
  contentContainer: {
    marginLeft: 5,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 30,
  },
});
export default ConsulatantCategoryScreen;
