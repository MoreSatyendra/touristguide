import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Discover, Home, Profile, Saved } from "../screens";
import TabContainer from "../components/Tab/TabContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screens/App/Details";
import Travel from "../screens/App/Travel";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabContainer {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeStack} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="travel" component={Travel} />
    </Stack.Navigator>
  );
};

export default AppStack;
