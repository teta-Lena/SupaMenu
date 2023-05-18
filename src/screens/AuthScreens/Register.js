import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button, Icon } from "react-native-elements";
import Header from "../../components/Header";
const Register = () => {
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
            name="person"
            iconStyle={{
              color: "#7d8c9a",
              marginHorizontal: 2,
            }}
            type="material"
            size={15}
          />
          <TextInput style={styles.place} placeholder="Full names" />
        </View>
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
            name="phone"
            iconStyle={{
              color: "#7d8c9a",
              marginHorizontal: 2,
            }}
            type="material"
            size={15}
          />
          <TextInput style={styles.place} placeholder="Phone number" />
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
          <Button title="Proceed" buttonStyle={styles.btn} />
        </View>
        <View style={styles.formtext}>
          <Text>---------------------- OR ---------------------------</Text>
          <Text>If you have a PMG account</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Button title="Sign In " buttonStyle={styles.btn} />
        </View>
        <View style={styles.formtext}>
          <Text>
            Don't have an account?{" "}
            <Text style={{ color: "#f49e06" }}>Register</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  formtext: {
    alignItems: "center",
  },
  txtinput: {
    borderWidth: 1,
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
  form: {
    marginTop: 20,
  },
  btn: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f49e06",
    borderRadius: 10,
    justifyContent: "center",
  },
  place: {
    paddingLeft: 20,
  },
});
export default Register;
