import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Header from "../../components/Header";
import { Button, Icon } from "react-native-elements";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formtext}>
        <Text style={styles.title} className="font-bold">
          Supa<Text style={styles.menu}>Menu</Text>
        </Text>
        <Text className="text-blue-950 font-bold">Welcome...</Text>
        <Text className="text-gray-400">Sign in to continue</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.txtinput}>
          <Icon
            name="email"
            iconStyle={{
              color: "#7d8c9a",
              marginHorizontal: 2,
            }}
            type="material"
            size={15}
          />
          <TextInput style={styles.place} placeholder="Email" />
        </View>
        <View style={styles.txtinput}>
          <Icon
            name="lock"
            iconStyle={{
              color: "#7d8c9a",
              marginHorizontal: 2,
            }}
            type="material"
            size={15}
          />
          <TextInput style={styles.place} placeholder="Password" />
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Button title="Sign In " buttonStyle={styles.btn} />
        </View>
        <View style={styles.formtext}>
          <Text style={{ color: "grey" }}> OR</Text>
        </View>
        <View style={styles.btninput}>
          <Icon
            name="login"
            iconStyle={{
              color: "red",
              marginHorizontal: 2,
            }}
            type="material"
            size={15}
          />
          <Button
            title="Login with Google"
            buttonStyle={styles.google}
            titleStyle={{ color: "grey" }}
          />
        </View>
        <View style={styles.btninput}>
          <Icon
            name="facebook"
            iconStyle={{
              color: "blue",
              marginHorizontal: 2,
            }}
            type="material"
            size={25}
          />
          <Button
            title="Login with Facebook"
            buttonStyle={styles.fb}
            titleStyle={{ color: "grey" }}
          />
        </View>
        <View style={styles.formtext}>
          <Text style={{ color: "#f49e06", paddingBottom: 10 }}>
            Forgot Password?
          </Text>
          <Text>
            Don't have an account?
            <Text style={{ color: "#f49e06", padding: 7 }}> Register</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formtext: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
    fontSize: 30,
    justifyContent: "space-evenly",
  },
  txtinput: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "#7d8c9a",
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 30,
    fontFamily: "Roboto",
    alignItems: "center",
  },
  menu: {
    color: "#e29a22",
  },
  btn: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f49e06",
    borderRadius: 10,
    justifyContent: "center",
  },
  fb: {
    backgroundColor: "white",
  },
  google: {
    backgroundColor: "white",
  },
  line: {
    width: "20%",
    height: 1,
    backgroundColor: "grey",
    borderColor: "grey",
  },
  btninput: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 8,
    borderColor: "#bec3c8",
    paddingLeft: 3,
    paddingTop: 5,
    paddingBottom: 5,
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
export default LoginScreen;
