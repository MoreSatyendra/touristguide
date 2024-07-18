import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "./AuthProvider";
import { onAuthStateChanged } from "firebase/auth";
import { Login, Register } from "../screens";

const Navigation = () => {
  const { user, setUser, auth } = useContext(AuthContext);
  //   if (isLoading) {
  //     return (
  //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //         <ActivityIndicator size={"large"} />
  //       </View>
  //     );
  //   }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default Navigation;
