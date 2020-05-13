import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// db
import * as dbUser from '../../databases/dbUser.database';

// API
import * as userAuth from '../../apis/authentication/user.auth';

// validator
import validator from '../../validation/validator';

class SplashScreen extends Component {
  componentDidMount() {
    // retrieve userData from local db
    dbUser
      .retrieveUserInfo()
      .then(resp => {
        console.log(JSON.parse(JSON.stringify(resp)));
        const userData = JSON.parse(JSON.stringify(resp));
        // check if user exist
        if (resp.length === 0) {
          setTimeout(() => {
            this.props.navigation.navigate('Login');
          }, 1000);
        } else {
          // store basic user info in redux
          userAuth
            .storeUserBasicInfoInRedux(
              userData[0]['userInfo']['userName'],
              JSON.parse(userData[0]['userInfo']['roles']),
            )
            .then(() => {
              // validate user roles for navigation
              validator
                .validateUserRole(JSON.parse(userData[0]['userInfo']['roles']))
                .then(resp => {
                  if (resp === 'worker') {
                    setTimeout(() => {
                      this.props.navigation.navigate('WorkerStack');
                    }, 1000);
                  } else if (resp === 'officer') {
                    setTimeout(() => {
                      this.props.navigation.navigate('OfficerStack');
                    }, 1000);
                  }
                })
                .catch(err => {
                  // navigation err
                  console.log(err);
                  setTimeout(() => {
                    this.props.navigation.navigate('Login');
                  }, 1000);
                });
            })
            .catch(err => {
              // storing basic user info in redux error
              console.log(err);
              setTimeout(() => {
                this.props.navigation.navigate('Login');
              }, 1000);
            });
        }
      })
      .catch(err => {
        // retrieving user data err
        console.log(err);
        setTimeout(() => {
          this.props.navigation.navigate('Login');
        }, 1000);
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
