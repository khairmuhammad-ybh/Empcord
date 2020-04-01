import { createStackNavigator } from "react-navigation-stack";

// Screens
import LoginScreen from "../screens/loginscreen";
import ResetScreen from "../screens/resetscreen";

const AuthNavigation = createStackNavigator(
  {
    Login: LoginScreen,
    Reset: ResetScreen
  },
  {
    initialRouteName: "Login"
  }
);

export default AuthNavigation;
