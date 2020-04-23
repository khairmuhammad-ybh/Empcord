import React from 'react';

// React Navigation v4
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Icons
import {Icon} from 'react-native-elements';

// Screen
import BlockListScreen from '../screens/officerScreen/blockListScreen';
import ForemanScreen from '../screens/officerScreen/foremanScreen';

// components
import QrFab from '../components/qrFab.component';

const OfficerBottomTabStack = createBottomTabNavigator(
  {
    BlockListScreen: BlockListScreen,
    QrFab: {
      screen: () => null,
      navigationOptions: () => ({
        tabBarLabel: () => null,
        tabBarIcon: <QrFab />, // Plus button component
      }),
    },
    ForemanScreen: ForemanScreen,
  },
  {
    initialRouteName: 'BlockListScreen',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'BlockListScreen') {
          return (
            <Icon
              type="ionicon"
              name={focused ? 'md-list-box' : 'md-list'}
              size={25}
              color={tintColor}
            />
          );
        } else if (routeName === 'ForemanScreen') {
          return (
            <Icon
              type="material"
              name={focused ? 'person-pin' : 'person-outline'}
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

export default createAppContainer(OfficerBottomTabStack);
