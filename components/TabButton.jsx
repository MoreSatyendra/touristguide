import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Icons } from "../assets/Icons/Icons";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TabButton = (props) => {
  const { label, isFocused, routeName, color } = props;

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1.2]);
    return {
      transform: [{ scale: scaleValue }],
    };
  });

  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={[animatedIconStyle]}>
        {Icons[routeName]({
          color,
        })}
      </Animated.View>
      {/* <Text
        style={{
          color,
          fontSize: 11,
        }}
      >
        {label}
      </Text> */}
    </Pressable>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
