import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import TabButton from "./TabButton";
import { Colors } from "../../constants/Colors";

const TabContainer = ({ state, descriptors, navigation }) => {
  console.log(state.routes);
  const activeColor = Colors.secondary;
  const inactiveColor = Colors.lightGray;
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? activeColor : inactiveColor}
            label={label}
          />
        );
      })}
    </View>
  );
};

export default TabContainer;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});
