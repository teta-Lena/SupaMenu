import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
const RestoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resto}>Choose Kigali</Text>
      <View style={styles.options}>
        <View>
          <Icon name="home" type="material" />
          <Text>Ordered</Text>
        </View>
        <View>
          <Icon name="person" type="material" />
          <Text>Call waiter</Text>
        </View>
      </View>
      <View style={styles.list}>
        <Text>Menu</Text>
        <View style={styles.topic}>
          <Text>Appetizer</Text>
          <Icon name="arrow-right" />
        </View>
        <View style={styles.topic}>
          <Text>Starter</Text>
          <Icon name="arrow-right" />
        </View>
        <View style={styles.topic}>
          <Text>Main</Text>
          <Icon name="arrow-right" />
        </View>
        <View style={styles.topic}>
          <Text>Dessert</Text>
          <Icon name="arrow-right" />
        </View>
        <View style={styles.topic}>
          <Text>Drink</Text>
          <Icon name="arrow-right" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  options: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
  resto: {
    marginTop: 70,
    textAlign: "center",
    fontSize: 25,
    color: "#f49e06",
  },
  topic: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default RestoScreen;
