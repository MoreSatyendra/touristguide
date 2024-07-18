import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { Colors } from "../../constants/Colors";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>
        Welcome{`\n`} {user.email}
      </Text>
      <Pressable
        style={styles.logoutBtn}
        onPress={() => {
          console.log("logout");
          logout();
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontWeight: "bold",
          }}
        >
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  logoutBtn: {
    backgroundColor: Colors.primary,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 5,
  },
});
