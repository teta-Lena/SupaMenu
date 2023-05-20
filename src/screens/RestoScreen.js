import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
const RestoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resto}>Choose Kigali</Text>
      <View style={styles.options}>
        <View>
          <Icon name="restaurant" type="material" size={60} color={"#f49e06"} />
          <Text style={styles.opttxt}>Ordered</Text>
        </View>
        <View>
          <Icon name="person" type="material" size={60} color={"#f49e06"} />
          <Text style={styles.opttxt}>Call waiter</Text>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.menu}>Menu</Text>
        <View style={styles.topic}>
          <Text style={styles.topictxt}>Appetizer</Text>
          <Icon name="arrow-right" />
        </View>
        <View style={styles.topic}>
          <Text style={styles.topictxt}>Starter</Text>
          <Icon name="arrow-right" />
        </View>
        <View style={styles.topic}>
          <Text style={styles.topictxt}>Main</Text>
          <Icon name="arrow-right" />
        </View>
        <View style={styles.topic}>
          <Text style={styles.topictxt}>Dessert</Text>
          <Icon name="arrow-right" />
        </View>
        <View style={styles.topic}>
          <Text style={styles.topictxt}>Drink</Text>
          <Icon name="arrow-right" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },

  options: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 100,
  },
  resto: {
    marginTop: 120,
    textAlign: "center",
    fontSize: 25,
    color: "#f49e06",
  },
  topic: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  menu: {
    fontSize: 40,
    marginTop: 60,
    marginBottom: 20,
    textAlign: "center",
    color: "#f49e06",
  },
  opttxt: {
    fontSize: 20,
    color: "white",
  },
  topictxt: {
    color: "white",
    fontSize: 30,
  },
});

export default RestoScreen;
