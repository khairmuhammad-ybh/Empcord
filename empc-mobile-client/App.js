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