import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import { LocationContext } from "../context/LocationContext";

const Details = () => {
  const temple = useLocalSearchParams();
  const { location, loading } = useContext(LocationContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const onPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.name}>{temple.name}</Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => {
            onFavoritePress();
          }}
        >
          {!isFavorite ? (
            <MaterialIcons name="favorite-border" size={24} color="black" />
          ) : (
            <MaterialIcons name="favorite" size={24} color="red" />
          )}
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.location}>{temple.location}</Text> */}
      <Image source={{ uri: temple.image_url }} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "gray",
            // textAlign: "justify",
            lineHeight: 22,
          }}
        >
          {temple.description}
        </Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.card}>
          <Entypo name="location" size={18} color="#f9f9f9" />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {temple.location}
          </Text>
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="location-arrow" size={18} color="#f9f9f9" />
          <Text>/distance from userLocation/</Text>
        </View>
      </View>
      <View style={styles.goBtn}>
        <Pressable
          onPress={() => {
            router.push("/travel");
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Start Travel
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    // justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  location: {
    fontSize: 18,
    color: "gray",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 20,
    marginTop: 20,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  backButton: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    borderColor: "#090909",
    borderWidth: 1,
  },
  favoriteButton: {
    padding: 6,
    borderRadius: 50,
    backgroundColor: "#f9f9f9",
    borderColor: "#090909",
    borderWidth: 1,
  },
  descriptionContainer: {
    marginTop: 20,
    // backgroundColor: "red",
    width: "90%",
  },
  goBtn: {
    position: "absolute",
    bottom: 15,
    width: "90%",
    backgroundColor: "#508D4E",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    height: 50,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    // marginTop: 20,
  },
  card: {
    width: "48%",
    padding: 15,
    height: 100,
    backgroundColor: "lightblue",
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 20,
    // alignItems: "center",
  },
});
