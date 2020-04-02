const prefix = `[user]`;

export const UPDATE_USER_NAME_STATE = `${prefix} UPDATE_USER_NAME_STATE`;
export const UPDATE_USER_PASS_STATE = `${prefix} UPDATE_USER_PASS_STATE`;
export const UPDATE_USER_IDTOKEN_STATE = `${prefix} UPDATE_USER_IDTOKEN_STATE`;

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
