const prefix = `[progress bar]`;

export const UPDATE_COMPLETED_PROGRESS_BAR_STATE = `${prefix} UPDATE_COMPLETED_PROGRESS_BAR_STATE`;
export const SET_TOTAL_PROGRESS_BAR_STATE = `${prefix} SET_TOTAL_PROGRESS_BAR_STATE`;
export const UPDATE_PROGRESS_BAR_STATE = `${prefix} UPDATE_PROGRESS_BAR_STATE`;

export const set_total_progress_bar_state = progress_data => ({
    type: SET_TOTAL_PROGRESS_BAR_STATE,
    payload: progress_data
})

export const update_completed_progress_bar_state = progress_data => ({
    type: UPDATE_COMPLETED_PROGRESS_BAR_STATE,
    payload: progress_data
})

export const update_progress_bar_status = progress_data => ({
    type: UPDATE_PROGRESS_BAR_STATE,
    payload: progress_data
})

