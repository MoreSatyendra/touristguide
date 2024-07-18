import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../navigation/AuthProvider";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useContext(AuthContext);

  const signIn = async (email, password) => {
    console.log("from signUp " + email + " " + password);
    if (email === "" || password === "" || cpass === "") {
      alert("Please fill all the fields");
      return;
    }
    if (password !== cpass) {
      alert("Password does not match");
      return;
    }
    setLoading(true);
    await signup(email, password);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.white, fontSize: 50, alignSelf: "center" }}>
        Sign Up
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={Colors.white}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="password"
        placeholderTextColor={Colors.white}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        autoCapitalize="none"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="confirm password"
        placeholderTextColor={Colors.white}
        value={cpass}
        onChangeText={(text) => {
          setCpass(text);
        }}
        autoCapitalize="none"
      />
      <Pressable
        onPress={() => {
          signIn(email, password);
        }}
        style={styles.btnLogin}
      >
        {loading ? (
          <ActivityIndicator color="#0000ff" size="large" />
        ) : (
          <Text style={{ color: Colors.primary }}>Sign Up</Text>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={styles.signupBtn}
      >
        <Text style={{ color: Colors.secondary }}>Sign In</Text>
      </Pressable>
      <View style={styles.orContainer}>
        <View
          style={{
            borderBottomColor: Colors.white,
            borderBottomWidth: 1,
            width: "40%",
            alignSelf: "center",
          }}
        ></View>
        <Text
          style={{
            color: Colors.white,
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
            fontSize: 22,
          }}
        >
          or
        </Text>
        <View
          style={{
            borderBottomColor: Colors.white,
            borderBottomWidth: 1,
            width: "40%",
            alignSelf: "center",
          }}
        ></View>
      </View>
      <View style={styles.socialContainer}>
        <Pressable style={styles.socialBtn}>
          <Ionicons name="logo-google" size={24} color={Colors.secondary} />
          <Text style={{ color: Colors.secondary, marginHorizontal: 10 }}>
            Google
          </Text>
        </Pressable>
        <Pressable style={styles.socialBtn}>
          <Ionicons name="logo-facebook" size={24} color={Colors.secondary} />
          <Text style={{ color: Colors.secondary, marginHorizontal: 10 }}>
            Facebook
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    justifyContent: "center",
  },
  input: {
    borderColor: Colors.white,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    color: Colors.white,
  },
  btnLogin: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  signupBtn: {
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
  },
  socialBtn: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    // marginVertical: 10,
    width: "48%",
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
