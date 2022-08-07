import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';
import config from '../config/config';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const SearchingScreen = ({setSearchScreen, searchScreen, navigation}) => {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [filterCategory, setFilterCategory] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [resultProduct, setResultProduct] = useState(true);

  const searchForData = value => {
    const url = config.server + 'api/company/search?value=' + value;
    return fetch(url).then(data => data.json());
  };

  const horizontalScroll = (categories, i, table) => {
    if (categories)
      return (
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          contentContainerStyle={{
            paddingRight: Platform.OS === 'android' ? 20 : 0,
          }}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={'Horiz' + index}
              style={styles.chipsItem}
              onPress={() => {
                if (table === 'materialCategorie') {
                  navigation.navigate('MaterialStack', {
                    screen: 'Material',
                    params: {
                      categoryId: category.id,
                    },
                  });
                } else if (table === 'material') {
                  navigation.navigate('Provider', {
                    screen: 'Providers',
                    params: {
                      id: category.id,
                      type: 'material',
                      image_1: category.image,
                      name: category.name,
                    },
                  });
                } else if (table === 'consultantCategorie') {
                  navigation.navigate('Provider', {
                    screen: 'Providers',
                    params: {
                      id: category.id,
                      type: 'consultant',
                      image_1: category.image,
                      name: category.name,
                    },
                  });
                } else if (table === 'consultant') {
                  navigation.navigate('Provider', {
                    screen: 'Detail',
                    params: {
                      id: category.company_id,
                    },
                  });
                }
              }}>
              <Text
                key={index + 16}
                style={{color: colors.secondary, fontSize: 15}}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
  };

  const finalProductScrollView = (data, name) => {
    if (data)
      return (
        <View>
          <Text style={styles.resultHeading} key={name + ' text'}>
            {name}
          </Text>

          {data.map((comp, ind) => {
            return (
              <TouchableOpacity
                key={name + ' btn' + ind}
                style={[styles.resultButton, {backgroundColor: '#b3b3b3'}]}
                onPress={() => {
                  if (name === 'Consultants:') {
                    navigation.navigate('Provider', {
                      screen: 'Detail',
                      params: {
                        id: comp.company_id,
                      },
                    });
                  } else if (name === 'Companies:') {
                    navigation.navigate('Provider', {
                      screen: 'Detail',
                      params: {
                        id: comp.id,
                      },
                    });
                  } else {
                    navigation.navigate('Product', {
                      params: {
                        product: comp,
                      },
                    });
                  }
                }}>
                <FontAwesome
                  key={name + ' icon' + ind}
                  name="circle-o"
                  size={15}
                  style={{marginTop: 4, marginLeft: 10}}
                />
                <Text style={styles.resultText} key={name + ' btnIcon' + ind}>
                  {'\t\t\t\t\t\t' + comp.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
  };
  return (
    <Animatable.View key={1} animation="fadeInUpBig" style={styles.parentView}>
      <View
        key={2}
        style={[
          styles.searchView,
          {
            height: showFilter
              ? Dimensions.get('window').height / 4.6
              : Dimensions.get('window').height / 10,
          },
        ]}>
        <View key={3} style={[styles.searchContainer, {elevation: 1}]}>
          <TextInput
            key={4}
            placeholder="Search"
            autoFocus={true}
            style={styles.input}
            value={value}
            onChangeText={text => {
              setValue(text);
              if (text.length > 2) {
                searchForData(text).then(response => {
                  setSearchResults(response);
                });
              } else {
                setSearchResults({});
              }
            }}
          />

          <Entypo
            key={8}
            name="cross"
            size={25}
            color={colors.medium}
            style={{
              marginTop: 15,
              marginRight: 10,
            }}
            onPress={() => setSearchScreen(!searchScreen)}
          />
          <View style={styles.filteIcon}>
            <Feather
              name="filter"
              size={20}
              color={colors.medium}
              onPress={() => setShowFilter(!showFilter)}
            />
          </View>
        </View>

        {/* --------------Filter Material / Consultant-------------- */}
        {showFilter ? (
          <View style={[styles.filterView, {elevation: 0}]}>
            <TouchableOpacity
              onPress={() => {
                setFilterCategory(true);
                setShowFilter(false);
              }}>
              <Text
                style={[
                  styles.filterButton,
                  {
                    backgroundColor: filterCategory
                      ? colors.filterSelected
                      : colors.filter,
                  },
                ]}>
                Material
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setResultProduct(true);
                setFilterCategory(false);
                setShowFilter(false);
              }}>
              <Text
                style={[
                  styles.filterButton,
                  {
                    backgroundColor: filterCategory
                      ? colors.filter
                      : colors.filterSelected,
                  },
                ]}>
                Consultant
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>

      {/* --------------Left Scroll views of search results-------------- */}
      {filterCategory ? (
        <View style={styles.scrollViewContainer}>
          {horizontalScroll(
            searchResults.materialCategorie,
            1001,
            'materialCategorie',
          )}
          {horizontalScroll(searchResults.material, 1002, 'material')}
        </View>
      ) : (
        <View style={styles.scrollViewContainer}>
          {horizontalScroll(
            searchResults.consultantCategorie,
            1001,
            'consultantCategorie',
          )}
        </View>
      )}

      {/* --------------Filter Consultant or Company / Product-------------- */}
      {filterCategory ? (
        <>
          <View style={styles.filterParent}>
            <TouchableOpacity
              style={[
                styles.fPButton2,
                {
                  backgroundColor: resultProduct
                    ? colors.secondary
                    : colors.unSelected,
                },
              ]}
              onPress={() => setResultProduct(true)}>
              <Text
                style={[
                  styles.fpText2,
                  {
                    color: resultProduct ? colors.white : colors.lightGray,
                  },
                ]}>
                Companies
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.fPButton2,
                {
                  backgroundColor: resultProduct
                    ? colors.unSelected
                    : colors.secondary,
                },
              ]}
              onPress={() => setResultProduct(false)}>
              <Text
                style={[
                  styles.fpText2,
                  {
                    color: resultProduct ? colors.lightGray : colors.white,
                  },
                ]}>
                Products
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            scrollEventThrottle={1}
            style={{
              backgroundColor: colors.backgroud,
              marginBottom: 20,
            }}>
            {resultProduct
              ? finalProductScrollView(searchResults.company, 'Companies:')
              : finalProductScrollView(searchResults.product, 'Products:')}
          </ScrollView>
        </>
      ) : (
        <ScrollView
          scrollEventThrottle={1}
          style={{
            backgroundColor: colors.backgroud,
            marginBottom: 20,
          }}>
          {finalProductScrollView(searchResults.consultant, 'Consultants:')}
        </ScrollView>
      )}
    </Animatable.View>
  );
};
const styles = StyleSheet.create({
  parentView: {
    backgroundColor: colors.backgroud,
    height: '100%',
  },
  searchView: {
    backgroundColor: colors.white,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  searchContainer: {
    backgroundColor: colors.backgroud,
    flexDirection: 'row',
    width: '95%',
    height: Dimensions.get('window').height / 15 + 5,
    marginTop: 20,
  },
  filterView: {
    backgroundColor: colors.backgroud,
    width: '95%',
    height: Dimensions.get('window').height / 8.7,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 10,
    fontSize: 18,
  },
  filteIcon: {
    backgroundColor: colors.filter,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },

  filterButton: {
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  filterParent: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  fPButton2: {
    height: 50,
    width: '50%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fpText2: {
    fontSize: 15,
  },
  scrollViewContainer: {
    backgroundColor: colors.white,
    flexDirection: 'column',
    width: '100%',
    height: 70,
  },
  chipsItem: {
    flexDirection: 'row',
    padding: 7,
    paddingHorizontal: 10,
    marginLeft: 1,
    height: 35,
  },
  resultHeading: {
    width: '95%',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  resultButton: {
    backgroundColor: colors.white,
    width: '75%',
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 5,
    flexDirection: 'row',
  },
  resultText: {
    fontSize: 18,
    maxWidth: 300,
  },
});

export default SearchingScreen;
