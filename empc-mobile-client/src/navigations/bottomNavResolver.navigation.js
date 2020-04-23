import React, {Component} from 'react';

// React navigation
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

// Navigation
import WorkerStack from './workerbottomStackNav.navigation'
import OfficerStack from './officerbottomStackNav.navigation'


const BottomSwitchNavigator = createSwitchNavigator(
  {
    WorkerStack: WorkerStack,
    OfficerStack: OfficerStack,
  },
  {
    initialRouteName: 'WorkerStack',
  },
);

export default createAppContainer(BottomSwitchNavigator);


