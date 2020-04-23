import * as ACTION from '../actions/user.action';

const initState = {
  name: null,
  password: null,
  idToken: null,
  userName: null,
  userRoles: null
};

const UserLoginStore = (state = initState, {type, payload}) => {
  switch (type) {
    case ACTION.UPDATE_USER_NAME_STATE: {
      return {
        ...state,
        name: payload.name,
      };
    }
    case ACTION.UPDATE_USER_PASS_STATE: {
      return {
        ...state,
        password: payload.password,
      };
    }
    case ACTION.UPDATE_USER_IDTOKEN_STATE: {
      return {
        ...state,
        idToken: payload.idToken,
      };
    }
    case ACTION.CLEAR_USER_INFO_STATE: {
      return {
        ...state,
        name: null,
        password: null,
        idToken: null,
      };
    }
    case ACTION.CLEAR_USER_INFO_NAME_STATE: {
      return {
        ...state,
        name: null,
      };
    }
    case ACTION.CLEAR_USER_INFO_PASSWORD_STATE: {
      return {
        ...state,
        password: null,
      };
    }
    case ACTION.SET_USER_NAME_STATE: {
      return {
        ...state,
        userName : payload.userName
      }
    }
    case ACTION.CLEAR_USER_NAME_STATE: {
      return {
        ...state,
        userName : null
      }
    }
    case ACTION.SET_USER_ROLES_STATE: {
      return {
        ...state,
        userRoles : payload.userRoles
      }
    }
    case ACTION.CLEAR_USER_ROLES_STATE: {
      return {
        ...state,
        userRoles: null
      }
    }
    default:
      return state;
  }
};

export default UserLoginStore;
