import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Icon } from "react-native-elements";

const DrinksScreen = () => {
  return (
    <View>
      <Icon name="arrow-back" style={styles.btn} color={"#f49e06"} />
      <View style={styles.headers}>
        <Text style={styles.pagetitle}>Choose Kigali</Text>
        <Text style={styles.subtitle}>Drinks</Text>
      </View>

      <View style={styles.drinkcontainer}>
        <View style={styles.drink}>
          <Image
            source={require("../../assets/Screenshot_2022.11.11_10.26.03.044.png")}
            style={styles.img}
          />

          <View style={styles.details}>
            <Text>Kaffir Lime Vodka,Lemongrass,Ginger,Citrus</Text>
            <Text>Tom Yummy -12.5</Text>
            <View style={styles.nbr}>
              <Text>Frw 5,000</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.checkout}>
        <Text>
          More drinks
          <Icon name="arrow-right-alt" />
        </Text>
        <View style={styles.total}>
          <Text>Total</Text>
          <Text>16,000Frw</Text>
        </View>
        <View>
          <Button title="Proceed to checkout" buttonStyle={styles.btn1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {},
  btn: {
    alignItems: "flex-start",
    marginTop: 90,
    marginLeft: 40,
    backgroundColor: "#d8dadb",
    width: "7%",
    color: "#f49e06",
  },
  pagetitle: {
    color: "#454647",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
    marginTop: 50,
    marginRight: 60,
  },
  subtitle: {
    textAlign: "right",
    marginRight: 60,
    marginTop: 20,
    color: "#f49e06",
    fontSize: 25,
  },
  img: {
    width: "20%",
    height: "80%",
    borderRadius: 10,
    marginLeft: 10,
  },
  drink: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  drinkcontainer: {
    backgroundColor: "#bec3c8",
    width: "100%",
    marginLeft: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  counter: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cbtn: {
    flexDirection: "row",
  },
  valueText: {
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#d0d3d4",
    flexDirection: "row",
    borderRadius: 5,
    // alignItems: "flex-end",
    justifyContent: "space-between",
    // justifyContent: "",
  },
  details: {
    marginLeft: 10,
    fontSize: 10,
  },
  nbr: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  checkout: {
    marginTop: 50,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  btn1: {
    height: 50,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#f49e06",
    borderRadius: 10,
    marginLeft: 17,
  },
});

export default DrinksScreen;
