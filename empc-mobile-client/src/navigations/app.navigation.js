import React from "react";
import { View } from "react-native";

import { createStackNavigator } from "react-navigation-stack";

// Screens
import BlockModel from "../screens/blockModelScreen";

// Components
import QrScanner from "../components/qrScanner.component";
import Logout from "../components/logout.component";

// Stack Components
import BottomTabStack from "./bottomNavigation.component";

// Icons
import { Icon } from "react-native-elements";

// styles
import styles from "../styles/styles";

const AppNavigation = createStackNavigator(
  {
    BottomTabStack: BottomTabStack,
    // Data Navigation
    QrScanner: QrScanner,
    BlockModel: BlockModel,
  },
  {
    initialRouteName: "BottomTabStack",
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      if (routeName === "BottomTabStack") {
        return BottomTabStackOptions(navigation);
      } else if (routeName === "QrScanner") {
        return QrScannerOptions(navigation);
      } else if (routeName === "BlockModel") {
        return BlockModelOptions(navigation);
      }
    },
  }
);

const BottomTabStackOptions = (navigation) => ({
  title: navigation.getParam("userName", "NO-ID"),
  headerLeft: () => null,
  headerRight: () => <Logout {...navigation} />,
});

const DataNavigationStackOptions = () => ({
  headerShown: false,
});

const QrScannerOptions = (navigation) => ({
  title: "QR Scanner",
  headerLeft: () => (
    <View style={styles.iconContainer}>
      <Icon
        type="ionicon"
        name={"md-arrow-back"}
        size={25}
        color="black"
        onPress={() => navigation.goBack()}
      />
    </View>
  ),
});

const BlockModelOptions = (navigation) => ({
  title: "Block Details",
  headerLeft: () => (
    <View style={styles.iconContainer}>
      <Icon
        type="ionicon"
        name={"md-arrow-back"}
        size={25}
        color="black"
        onPress={() => navigation.goBack()}
      />
    </View>
  ),
});

export default AppNavigation;
