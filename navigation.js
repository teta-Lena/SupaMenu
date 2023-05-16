import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import StarterScreen from "./src/screens/StarterScreen";

const navigator = createStackNavigator(
  {
    Starter: StarterScreen,
  },
  {
    initialRouteName: "Starter",
    defaultNavigationOptions: {
      title: "SupaMenu",
    },
  }
);

export default createAppContainer(navigator);
