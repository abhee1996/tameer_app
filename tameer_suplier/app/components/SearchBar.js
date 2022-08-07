import React, { useState } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

var icon = "search";
function SearchBar({ style, filter, ...otherprops }) {
  const [value, setValue] = useState("");
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={(defaultStyles.text, styles.input)}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          filter(text);
        }}
        {...otherprops}
      />
      <View style={styles.icon}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            setValue("");
            filter("");
          }}
        >
          {!value.length > 0 ? (
            <Ionicons
              name="search-outline"
              size={20}
              color={defaultStyles.colors.medium}
            />
          ) : (
            <Entypo
              name="cross"
              size={25}
              color={defaultStyles.colors.medium}
            />
          )}
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
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    height: 60,
    marginVertical: 10,
  },
  icon: {
    marginLeft: 10,
    marginRight: 8,
    alignSelf: "flex-end",
    alignSelf: "center",
  },
  input: {
    flexGrow: 1,
    paddingLeft: 5,
    fontSize: 18,
  },
});

export default SearchBar;
