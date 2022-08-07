import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Keyboard} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import defaultStyles from '../config/styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import config from '../config/config';

function SearchBar({style, filter, ...otherprops}) {
  const [value, setValue] = useState('');
  const searchForData = value => {
    const url = config.server + 'api/company/search?value=' + value;
    return fetch(url).then(data => data.json());
  };
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={(defaultStyles.text, styles.input)}
        value={value}
        onChangeText={text => {
          setValue(text);
          text.length > 2
            ? searchForData(text).then(response => {
                filter(text);
              })
            : filter('');
        }}
        {...otherprops}
      />
      <View style={styles.icon}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <Ionicons
            name="search-outline"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    height: 60,
    marginVertical: 10,
  },
  icon: {
    marginLeft: 10,
    marginRight: 8,
    alignSelf: 'flex-end',
    alignSelf: 'center',
  },
  input: {
    flexGrow: 1,
    paddingLeft: 5,
    fontSize: 18,
  },
});

export default SearchBar;
