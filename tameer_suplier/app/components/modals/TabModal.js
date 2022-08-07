import React, { useState } from "react";
import Screen from "../../components/Screen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Separator from "../../components/Separator";
import colors from "../../config/colors";

const Tab = createMaterialTopTabNavigator();
import { View, Modal, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import AppText from "../AppText";

const TabModal = ({
  setTabOpen,
  tabOpen,
  setTabValue,
  distributors,
  salesOffices,
}) => {
  const SalesOffice = () => {
    var itemType;
    return (
      <FlatList
        data={salesOffices}
        keyExtractor={(salesOffice) => salesOffice.id}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Separator}
        renderItem={({ item, index }) => (
          (itemType = `${
            item.type == "sales_office" ? "sales office" : `${item.type}`
          }`),
          (
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <DistributorItem
                item={item}
                onPress={() => {
                  setTabValue(item);
                  setTabOpen(false);
                }}
              />
            </View>
          )
        )}
      />
    );
  };

  const Distributor = () => {
    return (
      <FlatList
        data={distributors}
        keyExtractor={(distributor) => distributor.id}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Separator}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <DistributorItem
              item={item}
              onPress={() => {
                setTabValue(item), setTabOpen(false);
              }}
            />
          </View>
        )}
      />
    );
  };
  const DistributorItem = ({ onPress, item }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View onTouchStart={onPress} style={styles.container}>
          <View style={styles.textContainer}>
            <AppText style={styles.name}>{item.name}</AppText>
            <AppText style={styles.message}>
              {item.address}
              {"  "}-
              <Text style={{ color: "#41a6d9" }}>
                {" "}
                {Math.round(item.distance)}Km
              </Text>
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal key={"Modal4"} visible={tabOpen}>
      <Screen style={tabstyles.top}>
        <View style={tabstyles.topText}>
          <View
            style={{
              marginBottom: "3%",
            }}
            onPress={() => setTabOpen(false)}
          >
            <Ionicons
              name="close"
              style={tabstyles.icon}
              size={24}
              color="white"
              onPress={() => setTabOpen(false)}
            />
          </View>
          <Text style={tabstyles.DistributorTitle}>Select a Distributor</Text>
          <Text></Text>
        </View>

        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {
              backgroundColor: colors.secondary,
            },
            labelStyle: { fontSize: 14, marginTop: 5, fontWeight: "bold" },
            tabStyle: { paddingHorizontal: 10, marginHorizontal: 10 },
            style: {
              backgroundColor: colors.backgroud,
              position: "relative",
            },
          }}
        >
          <Tab.Screen name="Distributor" component={Distributor} />
          <Tab.Screen name="Sales Office" component={SalesOffice} />
        </Tab.Navigator>
      </Screen>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  rightContainer: {
    alignSelf: "flex-end",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  countContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  textContainer: {
    width: "85%",
    paddingVertical: 10,
  },
  count: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 8,
  },
  name: {
    fontSize: 23,
    color: colors.primary,
    marginBottom: 2,
    fontWeight: "bold",
  },
  message: {
    fontSize: 13,
    color: colors.medium,
  },
  date: {
    fontSize: 12,
    color: colors.medium,
    marginRight: 20,
    marginTop: 3,
  },
});
const tabstyles = StyleSheet.create({
  top: {
    flex: 1,
  },
  topText: {
    paddingTop: "8%",
    padding: "2%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#41a6d9",
    justifyContent: "space-around",
  },
  icon: {
    right: "80%",
    bottom: "15%",
  },
  DistributorTitle: {
    fontSize: 24,
    textAlign: "center",
    right: "40%",
    marginTop: "-3%",
    color: "#fff",
  },
});
export default TabModal;
