import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';
import MaterialFram from '../components/MaterialFram';
import AppText from '../components/AppText';
import config from '../config/config';
import Spinner from 'react-native-loading-spinner-overlay';
import SearchBar from '../components/SearchBar';

async function getMaterialCategories() {
  const url = config.server + 'api/material/findAllCategories';
  return fetch(url).then(data => data.json());
}

function MaterialCategoryScreen({navigation}) {
  const [materialList, setMaterialList] = useState([]);
  const [origMaterialList, setOrigMaterialList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMaterialCategories().then(items => {
      setOrigMaterialList(items);
      setMaterialList(items);
      setLoading(false);
    });
  }, []);

  function filter(text) {
    if (text == '') setMaterialList(origMaterialList);
    else
      setMaterialList(
        origMaterialList.filter(material => {
          if (
            material.name
              .trim()
              .toLowerCase()
              .indexOf(text.trim().toLowerCase()) !== -1
          )
            return material;
        }),
      );
  }

  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Materials Categories</AppText>
      <View
        style={{
          marginHorizontal: 15,
          height: 80,
        }}>
        <SearchBar filter={filter} placeholder="Search" />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {materialList.map((item, index) => (
          <MaterialFram
            key={index}
            name={item.name}
            image={item.image}
            onPress={() =>
              navigation.navigate('Material', {categoryId: item.id})
            }
          />
        ))}
      </ScrollView>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: colors.secondary}}
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
    marginTop: 40,
  },
  list: {
    marginTop: 30,
  },
  container1: {
    flexDirection: 'row-reverse',
    backgroundColor: colors.white,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
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
export default MaterialCategoryScreen;
