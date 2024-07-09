import { AntDesign, Fontisto, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";

const TempleCard = ({ temple, onPress }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <ImageBackground source={{ uri: temple.image_url }} style={styles.image}>
        <View style={styles.topRightIcon}>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => {
              onFavoritePress();
            }}
          >
            {!isFavorite ? (
              <MaterialIcons name="favorite-border" size={24} color="white" />
            ) : (
              <MaterialIcons name="favorite" size={24} color="red" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBackdrop}>
          <View style={styles.bottomLeft}>
            <Text style={styles.name}>{temple.name}</Text>
            {/* <Text style={styles.location}>{temple.location}</Text> */}
          </View>
          <TouchableOpacity onPress={onPress} style={styles.nextButton}>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 400,
    margin: 10,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  topRightIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  bottomLeft: {
    // position: "absolute",
    width: "auto",
    // backgroundColor: "red",
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    color: "#fff",
    fontSize: 14,
  },
  bottomBackdrop: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0,1)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#508D4E",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  favoriteButton: {
    padding: 6,
    borderRadius: 50,
    // backgroundColor: "#f9f9f9",
    // borderColor: "#090909",
    // borderWidth: 1,
  },
});

export default TempleCard;
