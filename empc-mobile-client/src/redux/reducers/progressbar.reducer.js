import * as ACTION from '../actions/progressbar.action'

const initState = {
    progress: 0,
    completed: 0,
    total: 0
}

const progressbarStatusStore = (state = initState, {type, payload}) => {
    switch (type) {
        case ACTION.SET_TOTAL_PROGRESS_BAR_STATE: {

            console.log(payload)
            return {
                ...state,
                total: payload.total
            }
        }
        case ACTION.UPDATE_COMPLETED_PROGRESS_BAR_STATE: {
            return {
                ...state,
                completed: state.completed + 1
            }
        }
        case ACTION.UPDATE_PROGRESS_BAR_STATE: {
            let newProgress = (state.completed / state.total) * 100;
            return {
                ...state,
                progress: newProgress
            }
        }
        default:
            return state
    }
}

export default progressbarStatusStore;