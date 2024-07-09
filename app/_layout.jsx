import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { LocationProvider } from "../context/LocationContext";

const _layout = () => {
  return (
    <LocationProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="details" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </LocationProvider>
  );
};

export default _layout;
