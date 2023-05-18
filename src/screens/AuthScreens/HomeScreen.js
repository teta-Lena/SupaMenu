import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderHeightContext } from "react-navigation-stack";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tt}>
        Supa<Text style={{ color: "white" }}>Menu</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f49e06",
    alignItems: "center",
    justifyContent: "center",
  },
  tt: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default HomeScreen;
