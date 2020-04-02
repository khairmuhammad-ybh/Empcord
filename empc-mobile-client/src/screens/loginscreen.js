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
          if (element === "officer")
            Alert.alert("User Role", `user is ${element}`);
          else if (element === "worker")
            this.props.navigation.navigate("Foreman", resp.data);
          else
            Alert.alert(
              "User Role",
              `please login to web-portal for ${element}`
            );
        });
      })
      .catch(err => {
        console.log(err);
      });
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
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.loginTextInput}
          placeholder={Properties.loginPassword_placeholder}
          onChangeText={password => this.onChangePassword(password)}
          secureTextEntry={true}
          ref={input => {
            this.secondTextInput = input;
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
