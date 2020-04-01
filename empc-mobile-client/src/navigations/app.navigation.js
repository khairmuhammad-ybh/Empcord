import { createStackNavigator } from "react-navigation-stack";

// Screens

import pendingscreen from '../screens/pendingscreen';
import foremanscreen from "../screens/foremanscreen";

const AppNavigation = createStackNavigator(
  {
    Foreman: foremanscreen,
    Pending: pendingscreen
  },
  {
    initialRouteName: "Foreman"
  }
);

export default AppNavigation