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
import styles from '../styles/main.styles';

import logo from '../../asset/empcord_logo.png';
import Properties from '../utils/props.utils';

// Redux
import {connect} from 'react-redux';
import {store} from '../redux/store';
import * as Action from '../redux/actions';

// API
import * as userAuth from '../apis/authentication/user.auth';

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

  onPressLoginUser = usrData => {
    userAuth
      .loginUser(usrData)
      .then(resp => {
        let user = JSON.parse(JSON.stringify(resp));
        let userName = user['userInfo']['userName'];
        // console.log(userName);
        // Clear token in redux
        userAuth
          .removeUserInRedux()
          .then()
          .catch(err => {
            console.log(err);
          });

        // Store userName in redux
        userAuth
          .storeUsernameInRedux(userName)
          .then()
          .catch(err => {
            console.log(err);
          });

        user.userInfo.roles.forEach(element => {
          if (element[0] === 'officer') {
            this.clearLoginFields();
            this.clearReduxUserInfo();
            Alert.alert('User Role', `user is ${element[0]}`);
          } else if (element[0] === 'worker') {
            this.props.navigation.navigate('BottomTabStack', resp.data);
          } else {
            this.clearLoginFields();
            this.clearReduxUserInfo();
            Alert.alert(
              'User Role',
              `please login to web-portal for ${element[0]}`,
            );
          }
        });
      })
      .catch(err => {
        console.log(`db err: ${err}`);

        if (statusCode === 401 && message === 'Invalid Password') {
          store.dispatch(Action.clear_user_info_password_state());
          Alert.alert(`${name}`, `${message}`);
          this.clearPasswordField();
        } else if (
          statusCode === 401 &&
          message.includes('not a registered User')
        ) {
          store.dispatch(Action.clear_user_info_state());
          Alert.alert(`${name}`, `${message}`);
          this.clearLoginFields();
        } else {
          store.dispatch(Action.clear_user_info_state());
          Alert.alert(
            `Error`,
            `Empty login field(s), please filled both user name and password`,
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
