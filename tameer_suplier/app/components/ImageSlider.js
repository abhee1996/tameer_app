import React from "react";
import Slick from "react-native-slick";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from "react-native";

function ImageSlider({ images }) {
  return (
    <View style={styles.container}>
      <Slick showsButtons={true}>
        {images ? (
          images.map((image) => (
            <Image key={image} style={styles.image} source={{ uri: image }} />
          ))
        ) : (
          <></>
        )}
      </Slick>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 200,
  },
});
export default ImageSlider;
