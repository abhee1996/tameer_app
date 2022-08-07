import React, { useEffect, useState } from "react";
import { View, FlatList, ScrollView, StyleSheet } from "react-native";
import colors from "../config/colors";
import ProfessinalItem from "../components/ProfessionalFram";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import SearchBar from "../components/SearchBar";
import config from "../config/config";
import Spinner from "react-native-loading-spinner-overlay";

async function getMaterials() {
  const url = config.server + "api/consultant/findAll";
  return fetch(url).then((data) => data.json());
}

function ConsulatantCategoryScreen({ navigation }) {
  const [consultantList, setConsultantList] = useState([]);
  const [origConsultantList, setOrigConsultantList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMaterials().then((items) => {
      setOrigConsultantList(items);
      setConsultantList(items);
      setLoading(false);
    });
  }, []);
  function filter(text) {
    if (text == "") setConsultantList(origConsultantList);
    else
      setConsultantList(
        origConsultantList.filter((consultant) => {
          if (
            consultant.name
              .trim()
              .toLowerCase()
              .indexOf(text.trim().toLowerCase()) !== -1
          )
            return consultant;
        })
      );
  }
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Consultant Categories</AppText>
      <View
        style={{
          marginHorizontal: 15,
          height: 80,
        }}
      >
        <SearchBar filter={filter} placeholder="Search" />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {consultantList.map((item, index) => (
          <ProfessinalItem
            data={item}
            key={item.id}
            onPress={() =>
              navigation.navigate("Item", {
                categoryType: "consultant",
                categoryName: item.name,
                categoryId: item.id,
              })
            }
          />
        ))}
      </ScrollView>

      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: colors.secondary }}
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
    fontFamily: "Roboto",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  list: {
    marginTop: 30,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 5,
  },
  contentContainer: {
    justifyContent: "space-between",
    marginLeft: 18,
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 30,
    width: "91%",
  },
});
export default ConsulatantCategoryScreen;
