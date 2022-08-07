import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";
import { Dimensions } from "react-native";

function MaterialFram({ KeyMF, name, image, style, onPress, onLongPress }) {
  return (
    <TouchableWithoutFeedback
      key={KeyMF + "btn"}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View key={KeyMF + "view"} style={styles.container}>
        {image ? (
          <Image
            key={KeyMF + "img"}
            style={styles.image}
            source={{ uri: image }}
          />
        ) : (
          <></>
        )}
        <Text key={KeyMF + "txt"} style={styles.text} numberOfLines={5}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    height: 110,
    width: Dimensions.get("window").width / 3 - 20,
    marginHorizontal: "0.85%",
    borderRadius: 7,
    borderWidth: 1,
    // borderColor: "#cacaca",
    borderColor: "#c0c0c0",
    // borderColor: "#b6b6b6",
    alignItems: "center",
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "75%",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  text: {
    fontSize: 14,
    color: colors.medium,

    width: "100%",
    textAlign: "center",
    marginTop: 3,
    flexWrap: "wrap",
    paddingHorizontal: 5,
  },
});

export default MaterialFram;
