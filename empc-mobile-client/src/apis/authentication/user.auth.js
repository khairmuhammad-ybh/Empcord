import properties from '../../utils/props.utils';
import axios from 'axios';
// Redux
import {store} from '../../redux/store';
import * as Actions from '../../redux/actions';

// db
import * as dbUser from '../../databases/dbUser.database';

// Validator
import Validator from '../../validation/validator';

export const loginUser = userData => {
  return new Promise((resolve, reject) => {
    // check data validation
    Validator.validateUserCreds(loginUser.name, userData)
      .then(resp => {
        if (resp.validate) {
          // continue with login
          // make login request to retrieve idToken
          let api_url = properties.api_url_user_login;
          axios({
            url: api_url,
            method: 'post',
            timeout: properties.server_timeout,
            data: {
              userName: userData.name,
              password: userData.password,
            },
          })
            .then(resp => {
              // store token into redux
              store.dispatch(
                Actions.update_user_idtoken_state({idToken: resp.data.idToken}),
              );
              // make another request to get user information
              api_url = properties.api_url_user_getUserDetails;
              axios({
                url: api_url,
                method: 'get',
                timeout: properties.server_timeout,
                headers: {
                  // use token exist in redux
                  Authorization: `Bearer ${store.getState().User.idToken}`,
                },
              })
                .then(resp => {
                  const userData = resp;
                  // Check for user role for storing data
                  Validator.validateUserRole(resp.data.roles)
                    .then(resp => {
                      let data = null;
                      let newUserInfo = null;
                      if (resp === 'worker') {
                        // user worker data model for string into db
                        data = {
                          _id: userData.data._id,
                          userName: userData.data.userName,
                          firstName: userData.data.firstName,
                          lastName: userData.data.lastName,
                          email: userData.data.email,
                          mobileNumber: parseInt(userData.data.mobileNumber),
                          roles: stringifyRoles(userData.data.roles),
                          rights: stringifyRights(userData.data.rights),
                          createdDt: userData.data.createdDt,
                          status: userData.data.status,
                          officerId: userData.data.officerId,
                          zone: userData.data.zone,
                        };

                        newUserInfo = {
                          _id: properties.realm_idGen,
                          userInfo: data,
                        };
                      } else if (resp === 'officer') {
                        // user officer data model for string into db
                        data = {
                          _id: userData.data._id,
                          userName: userData.data.userName,
                          firstName: userData.data.firstName,
                          lastName: userData.data.lastName,
                          email: userData.data.email,
                          mobileNumber: parseInt(userData.data.mobileNumber),
                          roles: stringifyRoles(userData.data.roles),
                          rights: stringifyRights(userData.data.rights),
                          createdDt: userData.data.createdDt,
                          status: userData.data.status,
                          // officerId: 'string?', // not used for officer
                          zone: userData.data.zone,
                        };

                        newUserInfo = {
                          _id: properties.realm_idGen,
                          userInfo: data,
                        };
                      }
                      // store user info into local db
                      dbUser
                        .insertUserInfo(newUserInfo)
                        .then(resp => {
                          const userData = resp;
                          // store token into local db
                          const newTokenStore = {
                            _id: properties.realm_idGen,
                            idToken: store.getState().User.idToken,
                            signInStatus: true,
                          };

                          console.log(userData);

                          dbUser
                            .insertIdToken(newTokenStore)
                            .then(resp => {
                              // success storing of idToken an userInfo in db
                              resolve({
                                username: userData.userInfo.userName,
                                roles: JSON.parse(userData.userInfo.roles),
                              });
                            })
                            .catch(err => {
                              // storing idToken in db err
                              console.log(err);
                            });
                        })
                        .catch(err => {
                          // local db insertUserInfo
                          console.log(err);
                        });
                    })
                    .catch(err => {
                      // validateUserRole err
                      console.log(err);
                    });
                })
                .catch(err => {
                  // server getUserDetails
                  console.log(err);
                });
            })
            .catch(err => {
              // server login error
              console.log(err);
            });
        }
      })
      .catch(err => {
        // validator error
        reject(err);
      });
  });
};

function stringifyRoles(roles) {
  let rolesArr = [];
  roles.forEach(element => {
    rolesArr.push(element);
  });
  return JSON.stringify(rolesArr);
}

function stringifyRights(rights) {
  let rightsArr = [];
  rights.forEach(element => {
    rightsArr.push(element);
  });
  return JSON.stringify(rightsArr);
}

export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    try {
      // remove user related data in db
      deleteAllToken()
        .then(resp => {
          deleteAllUser()
            .then(resp => {
              // reset data in redux
              store.dispatch(Actions.clear_user_name_state());
              store.dispatch(Actions.clear_user_roles_state());
              resolve();
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });

      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export const retrieveTokens = () => {
  return new Promise((resolve, reject) => {
    dbUser
      .retrieveToken()
      .then(resp => resolve(resp))
      .catch(err => reject(err));
  });
};

export const deleteAllToken = () => {
  return new Promise((resolve, reject) => {
    dbUser
      .deleteAllToken()
      .then(resp => resolve(resp))
      .catch(err => reject(err));
  });
};

export const retrieveUser = () => {
  return new Promise((resolve, reject) => {
    dbUser
      .retrieveUserInfo()
      .then(resp => {
        console.log(JSON.parse(JSON.stringify(resp)));
        resolve(resp);
      })
      .catch(err => reject(err));
  });
};

export const deleteAllUser = () => {
  return new Promise((resolve, reject) => {
    dbUser
      .deleteAllUser()
      .then(resp => resolve(resp))
      .catch(err => reject(err));
  });
};

// Redux
export const removeUserInRedux = () => {
  return new Promise((resolve, reject) => {
    try {
      store.dispatch(Actions.clear_user_info_state());
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export const storeUserBasicInfoInRedux = (userName, userRoles) => {
  return new Promise((resolve, reject) => {
    try {
      store.dispatch(Actions.set_user_name_state({userName: userName}));
      store.dispatch(Actions.set_user_roles_state({userRoles: userRoles}));
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
