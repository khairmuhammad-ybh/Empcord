import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// db
import * as dbUser from '../databases/dbUser.database';

// API
import * as userAuth from '../apis/authentication/user.auth';

class SplashScreen extends Component {
  componentDidMount() {
    dbUser
      .retrieveToken()
      .then(resp => {
        // console.log(resp.length);
        // Navigate to Auth.Login
        if (resp.length > 0) {
          dbUser
            .retrieveUserInfo()
            .then(resp => {
              setTimeout(() => {
                this.props.navigation.navigate('App');
              }, 1000);
              let data = JSON.parse(JSON.stringify(resp));
              let userName = data[0]['userInfo']['userName'];
              // Store userName in redux
              userAuth
                .storeUsernameInRedux(userName)
                .then()
                .catch(err => {
                  console.log(err);
                });
            })
            .catch(err => {
              setTimeout(() => {
                this.props.navigation.navigate('Auth');
              }, 1000);
            });
        } else {
          setTimeout(() => {
            this.props.navigation.navigate('Auth');
          }, 1000);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
