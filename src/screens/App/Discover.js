import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Callout, Marker } from "react-native-maps";
import { TempleData } from "../../constants/TempleData";

const Discover = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setLoading(false);
    };
    getPermissions();
  }, []);
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

export default Discover;

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
