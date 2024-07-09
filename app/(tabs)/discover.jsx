import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { TempleData } from "../../constant/TempleData";
import { LocationContext } from "../../context/LocationContext";

const Discover = () => {
  const { location, loading } = useContext(LocationContext);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Location permissions not granted</Text>
      </View>
    );
  }

  const onPressd = () => {
    console.log("pressed");
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
          latitudeDelta: 10.0922,
          longitudeDelta: 10.0421,
        }}
      >
        <Marker
          style={{ width: 50, height: 50 }}
          pinColor="blue"
          coordinate={location?.coords}
        >
          <Callout>
            <Text>You</Text>
          </Callout>
        </Marker>
        {TempleData.map((temple, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: temple.latitude,
              longitude: temple.longitude,
            }}
            title={temple.name}
            description={temple.location}
          >
            <Callout>
              <Text>{temple.name}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Discover;
