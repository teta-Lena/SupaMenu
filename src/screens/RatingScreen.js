import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const RatingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.header}>Yayy</Text>
        <Text style={styles.header}>We value all feedback</Text>
        <Text style={styles.header}>please rate your experience below</Text>
      </View>

      <View style={styles.stars}>
        <Icon name="star" type="material" size={40} color={"#f49e06"} />
        <Icon name="star" type="material" size={40} color={"#f49e06"} />
        <Icon name="star" type="material" size={40} color={"#f49e06"} />
        <Icon name="star" type="material" size={40} />
        <Icon name="star" type="material" size={40} />
      </View>
      <View style={styles.text}>
        <Text style={styles.header}>
          Thank you for helping us improve our service
        </Text>
        <Text style={styles.tt}>
          {" "}
          Supa<Text style={{ color: "#f49e06" }}>Menu</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 130,
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    marginTop: 50,
  },
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  header: {
    color: "#f49e06",
    fontSize: 15,
  },
  tt: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
});
export default RatingScreen;
