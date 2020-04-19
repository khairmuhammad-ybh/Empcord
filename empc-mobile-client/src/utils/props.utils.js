import {serverProps, dbProps} from './server.utils'

const properties = {
    // User inputs properties
    loginUserId_placeholder: "User ID",
    loginPassword_placeholder: "Password",
  
    // API properties
    api_url_user_login: serverProps.server_user_login,
    api_url_user_me: serverProps.server_user_me,
    server_timeout: 3 * 1000, // Server timeout
  
    // Google Map properties
    pinColorComplete : "#58DD7E",
    pinColorPending : "#F0E47A",

    // Realm Db properties
    realm_idGen : dbProps.realm_idGenerator
  };
  
  export default properties;
  