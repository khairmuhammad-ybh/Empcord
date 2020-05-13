import React from 'react';

// React Navigation v4
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Icons
import {Icon} from 'react-native-elements';

// Screen
import CompleteScreen from '../screens/workerScreen/completescreen';
import PendingScreen from '../screens/workerScreen/pendingscreen';

// components
import QrFab from '../components/qrFab.component';

const WorkerBottomTabStack = createBottomTabNavigator(
  {
    CompleteScreen: CompleteScreen,
    QrFab: {
      screen: () => null,
      navigationOptions: () => ({
        tabBarLabel: () => null,
        tabBarIcon: <QrFab />, // Plus button component
      }),
    },
    PendingScreen: PendingScreen,
  },
  {
    initialRouteName: 'CompleteScreen',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'CompleteScreen') {
          return (
            <Icon
              type="ionicon"
              name={focused ? 'md-checkbox' : 'md-checkbox-outline'}
              size={25}
              color={tintColor}
            />
          );
        } else if (routeName === 'PendingScreen') {
          return (
            <Icon
              type="material-community"
              name={focused ? 'clock' : 'progress-clock'}
              size={25}
              color={tintColor}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#14C3EE',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(WorkerBottomTabStack);
