import React from "react";
import { View, Text } from "react-native";
import Register from "./src/screens/AuthScreens/Register";
import Header from "./src/components/Header";
import HomeScreen from "./src/screens/AuthScreens/HomeScreen";
import LoginScreen from "./src/screens/AuthScreens/LoginScreen";
import SearchRestoScreen from "./src/screens/SearchRestoScreen";
import RestoScreen from "./src/screens/RestoScreen";

const App = () => {
  return (
    <View>
      {/* <Header /> */}
      {/* <Register /> */}
      {/* <HomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <SearchRestoScreen /> */}
      <RestoScreen />
    </View>
  );
};

export default App;
