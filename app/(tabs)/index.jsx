import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { TempleData } from "../../constant/TempleData";
import TempleCard from "../../components/TempleCard";
import { useRouter } from "expo-router";

const Home = () => {
  const [loaded, error] = useFonts({
    "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const router = useRouter();
  if (!loaded && !error) {
    return null;
  }

  const onPress = (temple) => {
    router.push({ pathname: "details", params: temple });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.heading, { fontFamily: "space-mono" }]}>
        Explore the {"\n"}Ancient India?
      </Text>
      {/* SearchBar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <Feather name="search" size={26} color="black" />
          </View>
          <View
            style={{
              justifyContent: "center",
              // backgroundColor: "green",
            }}
          >
            {/* <TextInput /> */}
            <TextInput
              style={styles.searchInput}
              placeholder="Search for the ancient places"
            />
          </View>
        </View>
        <View style={styles.searchFilterIcon}>
          <SimpleLineIcons name="equalizer" size={24} color="black" />
        </View>
      </View>
      <View>{}</View>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{
            marginVertical: 10,
          }}
          // decelerationRate={-10}
          // snapToAlignment="start"
          // snapToInterval={300}
        >
          {TempleData.map((temple, index) => (
            <TempleCard
              key={index}
              temple={temple}
              onPress={() => onPress(temple)}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    // textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 16,
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    height: 50,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    width: "82%",
    backgroundColor: "#DBE2EF",
    borderRadius: 25,
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    // backgroundColor: "red",
  },
  searchInput: {
    opacity: 0.3,
    fontSize: 16,
  },
  searchFilterIcon: {
    width: "15%",
    backgroundColor: "#DBE2EF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  card: {
    width: 300,
    height: 400,
    backgroundColor: "lightblue",
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
    // marginHorizontal: 10,
    // backgroundColor: "red",
    alignItems: "center",
  },
});
