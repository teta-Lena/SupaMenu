import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { Icon, SearchBar } from "react-native-elements";

const SearchRestoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Icon name="arrow-back" type="material" />
        <Text style="txt">Search ...</Text>
        <View style={styles.line}></View>
      </View>

      <View>
        <Text style={styles.orange}> Nearby Restaurants</Text>

        <View style={styles.contentcontainer}>
          <View style={styles.resto}>
            <Image
              source={require("../../assets/Screenshot_2022.11.11_10.26.03.044.png")}
              style={styles.img}
            />
            <View style={styles.txt}>
              <Text>Choose Kigali</Text>
              <Text>World African Pizzeria Coffee</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentcontainer}>
          <View style={styles.resto}>
            <Image
              source={require("../../assets/Screenshot_2022.11.11_10.26.03.044.png")}
              style={styles.img}
            />
            <View style={styles.txt}>
              <Text>Choose Kigali</Text>
              <Text>World African Pizzeria Coffee</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentcontainer}>
          <View style={styles.resto}>
            <Image
              source={require("../../assets/Screenshot_2022.11.11_10.26.03.044.png")}
              style={styles.img}
            />
            <View style={styles.txt}>
              <Text>Choose Kigali</Text>
              <Text>World African Pizzeria Coffee</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentcontainer}>
          <View style={styles.resto}>
            <Image
              source={require("../../assets/Screenshot_2022.11.11_10.26.03.044.png")}
              style={styles.img}
            />
            <View style={styles.txt}>
              <Text>Choose Kigali</Text>
              <Text>World African Pizzeria Coffee</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentcontainer}>
          <View style={styles.resto}>
            <Image
              source={require("../../assets/Screenshot_2022.11.11_10.26.03.044.png")}
              style={styles.img}
            />
            <View style={styles.txt}>
              <Text>Choose Kigali</Text>
              <Text>World African Pizzeria Coffee</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentcontainer}>
          <View style={styles.resto}>
            <Image
              source={require("../../assets/Screenshot_2022.11.11_10.26.03.044.png")}
              style={styles.img}
            />
            <View style={styles.txt}>
              <Text>Choose Kigali</Text>
              <Text>World African Pizzeria Coffee</Text>
            </View>
          </View>
        </View>

        <View style={styles.nav}>
          <Icon name="home" />
          <Icon name="notifications-none" />
          <Icon name="local-restaurant" />
          <Icon name="restore" />
          <Icon name="shopping-cart" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "auto",
    alignContent: "center",
    paddingBottom: 10,
  },
  container: {
    marginTop: 60,
    backgroundColor: "#e2e7eb",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  resto: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  img: {
    width: "10%",
    height: "100%",
  },

  txt: {
    flexDirection: "column",
  },
  contentcontainer: {
    backgroundColor: "#bec3c8",
    width: "80%",
    marginLeft: 38,
    borderRadius: 10,
    marginTop: 20,
  },
  orange: {
    color: "#f49e06",
    fontSize: 12,
    marginLeft: 40,
    marginTop: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
    shadowRadius: 20,
    shadowColor: "#bec3c8",
    height: 50,
    paddingTop: 10,
    // borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#ffffff",
  },
});

export default SearchRestoScreen;
