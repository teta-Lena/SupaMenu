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
        <View>
          <Button title="Proceed" style={styles.btn} />
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
  form: {
    marginTop: 20,
  },
  btn: {
    width: "80%",
    margin: "auto",
  },
  place: {
    paddingLeft: 20,
  },
});
export default Register;
