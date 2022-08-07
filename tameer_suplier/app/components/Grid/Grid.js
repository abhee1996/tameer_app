import React from "react";
import { FlatList, Text, View, ScrollView, StyleSheet } from "react-native";
import colors from "../../config/colors";
import GridITem from "./GridITem";
function List({ data }) {
  return (
    <FlatList
      style={{
        backgroundColor: "dodgerblue",
        alignContent: "center",
        padding: 10,
      }}
      data={data}
      numColumns={3}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <GridITem title={item.title} image={item.image} />
      )}
    />
  );
}
export default List;
