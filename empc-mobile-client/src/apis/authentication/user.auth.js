import properties from '../../utils/props.utils';
import axios from 'axios';
// Redux
import {store} from '../../redux/store';
import * as Actions from '../../redux/actions';

// db
import * as dbUser from '../../databases/dbUser.database';
import {userSchema} from '../../databases/dbModel.database';

export const loginUser = userData => {
  let api_url;
  return new Promise((resolve, reject) => {
    // Invloke loading [ON]
    api_url = properties.api_url_user_login;
    axios({
      url: api_url,
      method: 'POST',
      timeout: properties.server_timeout,
      data: {
        userName: userData.name,
        password: userData.password,
      },
    })
      .then(resp => {
        // store token
        store.dispatch(
          Actions.update_user_idtoken_state({idToken: resp.data.idToken}),
        );

        // Store token into local database
        const newTokenStore = {
          _id: properties.realm_idGen,
          idToken: resp.data.idToken,
          signInStatus: true,
        };
        dbUser
          .insertIdToken(newTokenStore)
          .then(resp => {
            // Request for user info using token
            api_url = properties.api_url_user_me;
            axios({
              headers: {
                Authorization: `Bearer ${store.getState().User.idToken}`,
              },
              url: api_url,
              method: 'GET',

              timeout: properties.server_timeout,
            })
              .then(resp => {
                // console.log(resp.data);
                // store user info inside database
                const data = {
                  _id: resp.data._id,
                  userName: resp.data.userName,
                  firstName: resp.data.firstName,
                  lastName: resp.data.lastName,
                  email: resp.data.email,
                  mobileNumber: parseInt(resp.data.mobileNumber),
                  roles: [resp.data.roles],
                  rights: [resp.data.rights],
                  createdDt: resp.data.createdDt,
                  status: resp.data.status,
                };

                const newUserInfo = {
                  _id: properties.realm_idGen,
                  userInfo: data,
                };
                dbUser
                  .insertUserInfo(newUserInfo)
                  .then(resp => resolve(resp))
                  .catch(err => {
                    // db error
                    reject(err);
                  });

                // resolve(resp);
              })
              .catch(err => {
                reject(err.response);
              });
          })
          .catch(err => {
            // db error
            reject(err);
          });
      })
      .catch(err => {
        reject(err.response);
      });
  });
};

export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    try {
      // store.dispatch(Actions.clear_user_info_state());
      // remove user related data in db
      deleteAllToken()
        .then(resp => {
          deleteAllUser()
            .then(resp => {
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
      .then(resp => resolve(resp))
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

export const storeUsernameInRedux = userName => {
  return new Promise((resolve, reject) => {
    try {
      store.dispatch(Actions.set_user_name_state({userName: userName}));
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
