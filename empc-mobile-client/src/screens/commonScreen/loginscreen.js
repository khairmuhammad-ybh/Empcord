import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

// Styles
import styles from '../../styles/main.styles';

import logo from '../../../asset/empcord_logo.png';
import Properties from '../../utils/props.utils';

// Redux
import {connect} from 'react-redux';
import {store} from '../../redux/store';
import * as Action from '../../redux/actions';

// API
import * as userAuth from '../../apis/authentication/user.auth';

// validator
import validator from '../../validation/validator';

class loginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  onChangeName = usrName => {
    store.dispatch(
      Action.update_user_name_state({
        name: usrName,
      }),
    );
  };

  onChangePassword = usrPassword => {
    store.dispatch(
      Action.update_user_pass_state({
        password: usrPassword,
      }),
    );
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

  onPressLoginUser = userData => {
    userAuth
      .loginUser(userData)
      .then(resp => {
        console.log(resp);
        const userName = resp.username;
        const userRoles = resp.roles;
        // store basic user info in redux
        store.dispatch(Action.set_user_name_state({userName: userName}));
        store.dispatch(Action.set_user_roles_state({userRoles: userRoles}));
        // clear user data in redux (name, password & idToken)
        userAuth
          .removeUserInRedux()
          .then(() => {
            // clear login fields (name & password) (under UI)
            this.clearLoginFields();
            // validate user roles for navigation
            validator
              .validateUserRole(userRoles)
              .then(resp => {
                if (resp === 'worker') {
                  this.props.navigation.navigate('WorkerStack');
                } else if (resp === 'officer') {
                  this.props.navigation.navigate('OfficerStack');
                }
              })
              .catch(err => {
                // navigation err
                console.log(err);
              });
          })
          .catch(err => {
            // error in clearing of usere data in redux (name, password & idToken)
            console.log(err);
          });
      })
      .catch(err => {
        // error in login user
        console.log(err);
        Alert.alert(
          'Empty Fields',
          `'${err.property.charAt(0).toUpperCase() +
            err.property.substring(1)}' ${err.message}`,
        );
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={styles.logoImg} source={logo} />
        <TextInput
          style={styles.loginTextInput}
          placeholder={Properties.loginUserId_placeholder}
          onChangeText={name => this.onChangeName(name)}
          returnKeyType={'next'}
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
              password: store.getState().User.password,
            })
          }>
          <Text> Login </Text>
        </TouchableOpacity>
        <View style={styles.resetLinkContainer}>
          <Text>
            Forget password ?{' '}
            <Text
              style={styles.resetPassword}
              onPress={() => this.props.navigation.navigate('Reset')}>
              Reset here
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const stp = store => {
  let {User} = store;
  return {
    User: User,
  };
};

export default connect(stp)(loginScreen);
