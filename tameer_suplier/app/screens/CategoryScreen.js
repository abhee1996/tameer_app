import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function CategoryScreen({ navigation }) {
  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppText style={styles.heading}>Select Type</AppText>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Material")}
        >
          <View style={styles.ImgBox}>
            <Image
              style={styles.image}
              source={require("../img/material.jpg")}
            />
            <AppText style={styles.text}>Material</AppText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Consultant")}
        >
          <View style={styles.ImgBox}>
            <Image
              style={styles.image}
              source={require("../img/consultant.jpg")}
            />
            <AppText style={styles.text}>Consultant</AppText>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    width: "100%",
    height: "40%",
    alignItems: "center",
    borderRadius: 20,
    margin: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    paddingTop: "32%",
    position: "absolute",
  },
  ImgBox: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    color: colors.primary,
    marginBottom: 50,
    marginTop: 20,
  },
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
});
export default CategoryScreen;
