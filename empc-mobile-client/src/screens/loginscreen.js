import React, { Component } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView
} from "react-native";

// Styles
import styles from "../styles/styles";

import logo from "../../assets/Empcord_logo_1920x1920.png";
import Properties from "../properties/properties";

import { withNavigation } from "react-navigation";

class loginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={styles.logoImg} source={logo}></Image>
        <TextInput
          style={styles.loginTextInput}
          placeholder={Properties.loginUserId_placeholder}
          returnKeyType={"next"}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.loginTextInput}
          placeholder={Properties.loginPassword_placeholder}
          secureTextEntry={true}
          ref={input => {
            this.secondTextInput = input;
          }}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate("Foreman")}
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
export default withNavigation(loginScreen);
