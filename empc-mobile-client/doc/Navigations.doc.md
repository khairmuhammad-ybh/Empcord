#Navigations
Use for navigation **(React Navigation v5)** in the application

---

| Dependencies                        | Version |
| ----------------------------------- | ------- |
| react-navigation                    | ^4.3.7  |
| react-navigation-stack              | ^2.3.12 |
| react-navigation-tabs               | ^2.8.11 |
| @react-native-community/masked-view | ^0.1.9  |
| react-native-gesture-handler        | ^1.6.1  |
| react-native-reanimated             | ^1.8.0  |
| react-native-safe-area-context      | ^0.7.3  |
| react-native-screens                | ^2.5.0  |

###Navigators
Navigators used to navigate throughout the entire application, created multiple stacks of navigators from the dependencies (_react-navigation-stack_ & _react-navigation-tabs_)

####Stacks

- RootStack - created with _react-navigation_
- AuthStack - created with _react-navigation-stack_
- AppStack - created with _react-navigation-stack_

RootStack wraps two(2) other stacks to build the navigation. Code designed in such a way for simple navigation and to glue all the stacks together as one(1) navigation architecture, as a result makes it easy to add or remove or do any changes in the future.

Code as such

```
const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
    // Loading screen
    Splash: SplashScreen
  },
  {
    initialRouteName: "Splash"
  }
);

const SwitchContainer = createAppContainer(SwitchNavigator);
```

#####Details
Navigator name: `'RootStack'`
Navigation stack: `App` & `Auth`
Source code:

```
import React, {Component} from 'react';

// React navigation
import { createSwitchNavigator, createAppContainer } from "react-navigation";

// Navigation
import AuthNavigation from './src/navigations/auth.navigation';
import AppNavigation from './src/navigations/app.navigation';

// Splash screen
import SplashScreen from './src/screens/splashScreen'

// Redux
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <SwitchContainer/>
      </Provider>
    )
  }
}

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
    // Loading screen
    Splash: SplashScreen
  },
  {
    initialRouteName: "Splash"
  }
);

const SwitchContainer = createAppContainer(SwitchNavigator);

export default App;
```

Navigator name: `"App"`
Navigation stack: `AppNavigation`
Source code:

```
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// React Navigation v4
import {createStackNavigator} from 'react-navigation-stack';

// Stack Components
import BottomTabStack from './bottomNav.navigation';

// Components
import Logout from '../components/logout.component';
import QrScanner from '../components/qrScanner.component';

// Screens
import BlockModel from '../screens/blockModelScreen';

// Icons
import {Icon} from 'react-native-elements';

// styles
import styles from '../styles/main.styles';

// Redux
import {store} from '../redux/store';

const AppNavigation = createStackNavigator(
  {
    BottomTabStack: BottomTabStack,
    // Data Navigation Screens
    QrScanner: QrScanner,
    BlockModel: BlockModel,
  },
  {
    initialRouteName: 'BottomTabStack',
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      if (routeName === 'BottomTabStack') {
        return BottomTabStackOptions(navigation);
      } else if (routeName === 'QrScanner') {
        return QrScannerOptions(navigation);
      } else if (routeName === 'BlockModel') {
        return BlockModelOptions(navigation);
      }
    },
  },
);

const BottomTabStackOptions = navigation => ({
  headerTitle: () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserSetting', navigation)}>
      <Text style={styles.userTitleHeader}>{store.getState().User.userName}</Text>
    </TouchableOpacity>
  ),
  headerLeft: () => null,
  headerRight: () => <Logout {...navigation} />,
});

const QrScannerOptions = navigation => ({
  title: 'QR Scanner',
  headerLeft: () => (
    <View style={styles.iconContainer}>
      <Icon
        type="ionicon"
        name={'md-arrow-back'}
        size={25}
        color="black"
        onPress={() => navigation.goBack()}
      />
    </View>
  ),
});

const BlockModelOptions = navigation => ({
  title: 'Block Details',
  headerLeft: () => (
    <View style={styles.iconContainer}>
      <Icon
        type="ionicon"
        name={'md-arrow-back'}
        size={25}
        color="black"
        onPress={() => navigation.goBack()}
      />
    </View>
  ),
});

export default AppNavigation;
```

Navigator name: `"Auth"`
Navigation stack: `AuthNavigation`
Source code:

```
// React Navigation v4
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import LoginScreen from '../screens/loginscreen';
import ResetScreen from '../screens/resetscreen';

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
```
