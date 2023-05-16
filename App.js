import React from "react";
import { View, Text } from "react-native";
import Register from "./src/screens/AuthScreens/Register";
import Header from "./src/components/Header";

const App = () => {
  return (
    <View>
      <Header />
      <Register />
    </View>
  );
};

export default App;
