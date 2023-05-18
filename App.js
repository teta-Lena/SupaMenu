import React from "react";
import { View, Text } from "react-native";
import Register from "./src/screens/AuthScreens/Register";
import Header from "./src/components/Header";
import HomeScreen from "./src/screens/AuthScreens/HomeScreen";

const App = () => {
  return (
    <View>
      {/* <Header />
      <Register /> */}
      <HomeScreen />
    </View>
  );
};

export default App;
