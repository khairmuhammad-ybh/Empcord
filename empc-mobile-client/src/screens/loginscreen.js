import React, { Component } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Alert
} from "react-native";

// Styles
import styles from "../styles/styles";

import logo from "../../assets/Empcord_logo_1920x1920.png";
import Properties from "../utils/properties";

// Navigation
import { withNavigation } from "react-navigation";

// Redux
import { connect } from "react-redux";
import { store } from "../redux/store";
import * as Action from "../redux/actions";

// API
import * as userAuth from "../apis/authentication/user.auth";

class loginScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  onChangeName = usrName => {
    store.dispatch(
      Action.update_user_name_state({
        name: usrName
      })
    );
  };

  onChangePassword = usrPassword => {
    store.dispatch(
      Action.update_user_pass_state({
        password: usrPassword
      })
    );
  };

  onPressLoginUser = usrData => {
    userAuth
      .loginUser(usrData)
      .then(resp => {
        console.log({
          status: resp.status,
          roles: resp.data.roles,
          userdata: resp.data
        });
        resp.data.roles.forEach(element => {
          if (element === "officer") {
            this.clearLoginFields();
            this.clearReduxUserInfo();
            Alert.alert("User Role", `user is ${element}`);
          } else if (element === "worker") {
            this.props.navigation.navigate("BottomTabStack", resp.data);
          } else {
            this.clearLoginFields();
            this.clearReduxUserInfo();
            Alert.alert(
              "User Role",
              `please login to web-portal for ${element}`
            );
          }
        });
      })
      .catch(err => {
        // console.log(err.data.error);
        let { statusCode, name, message } = err.data.error;
        console.log(
          `statusCode: ${statusCode}, ErrorName: ${name}, Message: ${message}`
        );

        if (statusCode === 401 && message === "Invalid Password") {
          store.dispatch(Action.clear_user_info_password_state());
          Alert.alert(`${name}`, `${message}`);
          this.clearPasswordField();
        } else if (
          statusCode === 401 &&
          message.includes("not a registered User")
        ) {
          store.dispatch(Action.clear_user_info_state());
          Alert.alert(`${name}`, `${message}`);
          this.clearLoginFields();
        } else {
          store.dispatch(Action.clear_user_info_state());
          Alert.alert(
            `Error`,
            `Empty login field(s), please filled both user name and password`
          );
          this.clearLoginFields();
        }
      });
  };

  // Clear fields
  clearLoginFields = () => {
    this.usernameTextInput.clear();
    this.passwordTextInput.clear();
  };

  clearPasswordField = () => {
    this.passwordTextInput.clear();
  };

  clearReduxUserInfo = () => {
    store.dispatch(Action.clear_user_info_state());
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={styles.logoImg} source={logo}></Image>
        <TextInput
          style={styles.loginTextInput}
          placeholder={Properties.loginUserId_placeholder}
          onChangeText={name => this.onChangeName(name)}
          returnKeyType={"next"}
          ref={input => {
            this.usernameTextInput = input;
          }}
          onSubmitEditing={() => {
            this.passwordTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.loginTextInput}
          placeholder={Properties.loginPassword_placeholder}
          onChangeText={password => this.onChangePassword(password)}
          secureTextEntry={true}
          ref={input => {
            this.passwordTextInput = input;
          }}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() =>
            this.onPressLoginUser({
              name: store.getState().User.name,
              password: store.getState().User.password
            })
          }
        >
          <Text> Login </Text>
        </TouchableOpacity>
        <View style={styles.resetLinkContainer}>
          <Text>
            Forget password ?{" "}
            <Text
              style={styles.resetPassword}
              onPress={() => this.props.navigation.navigate("Reset")}
            >
              Reset here
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const stp = store => {
  let { User } = store;
  return {
    User: User
  };
};

export default withNavigation(connect(stp)(loginScreen));
