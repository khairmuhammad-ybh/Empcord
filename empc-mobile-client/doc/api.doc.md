# API

Api endpoint to connect the the server for transaction of data between the client and server

---

| API  | Type           |
| ---- | -------------- |
| user | Authentication |

### Dependencies

| Dependencies | Version |
| ------------ | ------- |
| axios        | ^0.19.2 |
| redux        | ^4.0.5  |

### Usage

**user**
Use for authenticating the user before accessing the application and also for any user related information that need to be retrieved

#### Source code

```
import properties from "../../utils/props.utils";
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
            // console.log(resp);

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
      // console.log(navigation);
      store.dispatch(Actions.clear_user_info_state());
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
```
