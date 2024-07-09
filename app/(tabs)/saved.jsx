import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text>Saved Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Saved;
