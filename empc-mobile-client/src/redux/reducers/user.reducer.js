import * as ACTION from "../actions/user.action";

// Properties
import properties from "../../utils/properties";

const initState = {
  name: properties.loginUserId_placeholder,
  password: properties.loginPassword_placeholder,
  idToken: null
};

const UserLoginStore = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTION.UPDATE_USER_NAME_STATE: {
      return {
        ...state,
        name: payload.name
      };
    }
    case ACTION.UPDATE_USER_PASS_STATE: {
      return {
        ...state,
        password: payload.password
      };
    }
    case ACTION.UPDATE_USER_IDTOKEN_STATE: {
      return {
        ...state,
        idToken: payload.idToken
      };
    }
    default:
      return state;
  }
};

export default UserLoginStore;
