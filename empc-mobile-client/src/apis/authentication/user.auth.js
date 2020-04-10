import properties from "../../utils/properties";
import axios from "axios";
// Redux
import { store } from "../../redux/store";
import * as Actions from "../../redux/actions";

export const loginUser = (userData) => {
  let api_url;
  return new Promise((resolve, reject) => {
    // Invloke loading [ON]
    api_url = properties.api_url_user_login;
    axios({
      url: api_url,
      method: "POST",
      timeout: properties.server_timeout,
      data: {
        userName: userData.name,
        password: userData.password,
      },
    })
      .then((resp) => {
        // store token
        store.dispatch(
          Actions.update_user_idtoken_state({ idToken: resp.data.idToken })
        );

        // Request for user info using token
        api_url = properties.api_url_user_me;
        axios({
          headers: {
            Authorization: `Bearer ${store.getState().User.idToken}`,
          },
          url: api_url,
          method: "GET",

          timeout: properties.server_timeout,
        })
          .then((resp) => {
            console.log(resp);

            resolve(resp);
          })
          .catch((err) => {
            reject(err.response);
          });
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const logoutUser = (navigation) => {
  return new Promise((resolve, reject) => {
    try {
      console.log(navigation);
      store.dispatch(Actions.clear_user_info_state());
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
