import { View, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth = FIREBASE_AUTH;

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("context logging " + response);
      setUser(response.user);
      AsyncStorage.setItem("user", JSON.stringify(response.user));
      alert("successfully logged in");
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "successfully logged in",
      });
    } catch (error) {
      console.log("catch error " + error);
      //   Toast.show({
      //     type: "error",
      //     text1: "Error",
      //     text2: "Invalid email or password",
      //   });
      alert("an error occurred while logging in");
      //   return false;
    }
  };

  const signup = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("context logging " + response);
      setUser(response.user);
      AsyncStorage.setItem("user", JSON.stringify(response.user));
      alert("successfully registered");
    } catch (error) {
      console.log("catch error " + error);
      alert("an error occurred while registering");
    }
  };

  const logout = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      setUser(null);
      AsyncStorage.removeItem("user");
      alert("Logged out successfully");
    } catch (error) {
      console.log("error from logout " + error);
    }
  };

  const isLoggedIn = async () => {
    let user = await AsyncStorage.getItem("user");
    user = JSON.parse(user);
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        signup,
        auth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
