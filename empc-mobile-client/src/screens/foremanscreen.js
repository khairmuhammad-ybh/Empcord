import React, { Component } from "react";
import { View, Alert } from "react-native";

// Bottom navigation
import BottomNavigation from "../navigations/bottomNavigation.component";
// FAB
import QrCodeFAB from "../components/deprecated/qrcodeFAB.component";
// Icons
import { Icon } from "react-native-elements";
// styles
import styles from "../styles/styles";

// Navigation
// import { withNavigation } from "react-navigation";

// Redux
import { store } from "../redux/store";
import * as Action from "../redux/actions";

class ForemanScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("userName", "NO-ID"),
    headerLeft: () => null,
    headerRight: () => (
      <View style={styles.iconContainer}>
        <Icon
          type={Platform.OS === "ios" ? "ionicon" : "material-community"}
          name={Platform.OS === "ios" ? "ios-log-out" : "logout"}
          onPress={() => this.logoutUser(navigation)}
        />
      </View>
    ),
  });

  static logoutUser = (navigation) => {
    store.dispatch(Action.clear_user_info_state());
    navigation.navigate("Auth");
  };

  UNSAFE_componentWillMount() {
    if (store.getState().User.idToken === null) {
      this.props.navigation.navigate("Auth");
      Alert.alert(
        "Auth Failed",
        "Authentication failed, please try to login again."
      );
    }
  }

  render() {
    const { navigation } = this.props;
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
            height: 100,
          }}
        >
          <QrCodeFAB />
        </View>
        <BottomNavigation/>
      </View>
    );
  }
}

export default ForemanScreen;
