import React, { Component } from "react";
import { View, Alert } from "react-native";

// Bottom navigation
import BottomNavigation from "../components/bottomNavigation.component";
// FAB
import QrCodeFAB from "../components/qrcodeFAB.component";
// Icons
import { Icon } from "react-native-elements";
// styles
import styles from "../styles/styles";

// Navigation
// import { withNavigation } from "react-navigation";

class ForemanScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 963852741,
    headerLeft: () => null,
    headerRight: () => (
      <View style={styles.iconContainer}>
        <Icon
          type={Platform.OS === "ios" ? "ionicon" : "material-community"}
          name={Platform.OS === "ios" ? "ios-log-out" : "logout"}
          onPress={() => navigation.navigate("Auth")}
        />
      </View>
    )
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            position: "absolute",
            alignSelf: "center",
            bottom: 0,
            zIndex: 10,
            width: 100,
            height: 100
          }}
        >
          <QrCodeFAB />
        </View>
        <BottomNavigation />
      </View>
    );
  }
}

export default ForemanScreen;
