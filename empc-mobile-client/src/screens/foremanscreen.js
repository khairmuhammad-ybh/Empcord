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

// Redux
import { store } from "../redux/store";

class ForemanScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("userName", "NO-ID"),
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

  UNSAFE_componentWillMount() {
    if (store.getState().User.idToken === null){
      this.props.navigation.navigate("Auth");
      Alert.alert("Auth Failed", "Authentication failed, please try to login again.")
    }
      
  }

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
