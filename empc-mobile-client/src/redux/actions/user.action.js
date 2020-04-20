const prefix = `[user]`;

export const UPDATE_USER_NAME_STATE = `${prefix} UPDATE_USER_NAME_STATE`;
export const UPDATE_USER_PASS_STATE = `${prefix} UPDATE_USER_PASS_STATE`;
export const UPDATE_USER_IDTOKEN_STATE = `${prefix} UPDATE_USER_IDTOKEN_STATE`;
export const SET_USER_NAME_STATE = `${prefix} SET_USER_NAME_STATE`;
export const CLEAR_USER_INFO_STATE = `${prefix} CLEAR_USER_INFO_STATE`;
export const CLEAR_USER_INFO_PASSWORD_STATE = `${prefix} CLEAR_USER_INFO_PASSWORD_STATE`;
export const CLEAR_USER_INFO_NAME_STATE = `${prefix} CLEAR_USER_INFO_NAME_STATE`;
export const CLEAR_USER_NAME_STATE = `${prefix} CLEAR_USER_NAME_STATE `;

export const update_user_name_state = usrData => ({
  type: UPDATE_USER_NAME_STATE,
  payload: usrData
});

export const update_user_pass_state = usrData => ({
  type: UPDATE_USER_PASS_STATE,
  payload: usrData
});

export const update_user_idtoken_state = usrData => ({
  type: UPDATE_USER_IDTOKEN_STATE,
  payload: usrData
});

export const clear_user_info_state = usrData => ({
  type: CLEAR_USER_INFO_STATE,
  payload: usrData
});

export const clear_user_info_password_state = usrData => ({
  type: CLEAR_USER_INFO_PASSWORD_STATE,
  payload: usrData
});

export const clear_user_info_name_state = usrData => ({
  type: CLEAR_USER_INFO_NAME_STATE,
  payload: usrData
});

export const set_user_name_state = usrData => ({
  type: SET_USER_NAME_STATE,
  payload: usrData
});

export const clear_user_name_state = usrData => ({
  type: CLEAR_USER_NAME_STATE,
  payload: usrData
});
