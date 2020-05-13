// React Navigation v4
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import LoginScreen from '../screens/commonScreen/loginscreen';
import ResetScreen from '../screens/commonScreen/resetscreen';

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
