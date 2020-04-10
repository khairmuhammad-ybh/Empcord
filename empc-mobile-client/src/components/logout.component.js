import React from "react";
import { View } from "react-native";

// Icons
import { Icon } from "react-native-elements";

// styles
import styles from "../styles/styles";

// services
import * as userAuth from "../apis/authentication/user.auth";

const LogoutComponent = (navigation) => {
  return (
    <View style={styles.iconContainer}>
      <Icon
        type={Platform.OS === "ios" ? "ionicon" : "material-community"}
        name={Platform.OS === "ios" ? "ios-log-out" : "logout"}
        onPress={() =>
          userAuth
            .logoutUser(navigation)
            .then(navigation.navigate("Auth"))
            .catch((err) => {
              console.log(err);
            })
        }
      />
    </View>
  );
};

export default LogoutComponent;
