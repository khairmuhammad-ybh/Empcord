import * as ACTION from '../actions/progressbar.action';

const initState = {
  progressCompleted: 0,
  progressPending: 1,
  completed: 0,
  pending: 0,
  total: 0,
};

const progressbarStatusStore = (state = initState, {type, payload}) => {
  switch (type) {
    case ACTION.SET_TOTAL_PROGRESS_BAR_STATE: {
      if (state.total != 0) {
        return {...state, pending: state.total};
      } else {
        if (payload.progressTrend) {
          return {
            ...state,
            total: payload.total,
          };
        } else {
          if (state.pending === 0) {
            return {
              ...state,
              total: payload.total,
              pending: payload.total,
            };
          } else {
            return {
              ...state,
              total: payload.total,
            };
          }
        }
      }
    }
    case ACTION.UPDATE_INCREMENTAL_PROGRESS_BAR_STATE: {
      if (state.completed === state.total) {
        return {...state};
      } else {
        return {
          ...state,
          completed: state.completed + 1,
        };
      }
    }

    case ACTION.UPDATE_DECREMENTAL_PROGRESS_BAR_STATE: {
      if (state.pending === 0) {
        return {...state};
      } else {
        return {
          ...state,
          pending: state.pending - 1,
        };
      }
    }
    case ACTION.UPDATE_PROGRESS_BAR_STATE: {
      if (payload.progressTrend) {
        let newProgress = state.progressCompleted + 1 / state.total;
        return {
          ...state,
          progressCompleted: newProgress,
        };
      } else {
        let newProgress = state.progressPending - 1 / state.total;
        return {
          ...state,
          progressPending: newProgress,
        };
      }
    }
    default:
      return state;
  }
};

export default progressbarStatusStore;
