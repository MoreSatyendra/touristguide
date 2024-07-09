import { StyleSheet, Text, View } from "react-native";
import React from "react";

const travel = () => {
  return (
    <View style={styles.container}>
      <Text>travel</Text>
    </View>
  );
};

export default travel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
