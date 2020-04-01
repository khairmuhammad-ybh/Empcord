import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Icons
import { Icon } from "react-native-elements";

// Screen
import CompleteScreen from "../screens/completescreen";
import PendingScreen from "../screens/pendingscreen";

const TabNavigator = createBottomTabNavigator(
  {
    Complete: CompleteScreen,
    Pending: PendingScreen
  },
  {
    initialRouteName: "Complete",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Complete") {
          return (
            <Icon
              type="ionicon"
              name={focused ? "md-checkbox" : "md-checkbox-outline"}
              size={25}
              color={tintColor}
            />
          );
        } else if (routeName === "Pending") {
          return (
            <Icon
              type="material-community"
              name={focused ? "clock" : "progress-clock"}
              size={25}
              color={tintColor}
            />
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "#14C3EE",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
