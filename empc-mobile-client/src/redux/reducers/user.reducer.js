import * as ACTION from "../actions/user.action";

// Properties
import properties from "../../utils/properties";

const initState = {
  name: null,
  password: null,
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
    case ACTION.CLEAR_USER_INFO_STATE: {
      return {
        ...state,
        name: null,
        password: null,
        idToken: null
      };
    }
    case ACTION.CLEAR_USER_INFO_NAME_STATE: {
      return {
        ...state,
        name: null
      };
    }
    case ACTION.CLEAR_USER_INFO_PASSWORD_STATE: {
      return {
        ...state,
        password: null
      };
    }
    default:
      return state;
  }
};

export default UserLoginStore;
