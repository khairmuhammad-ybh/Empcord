import {combineReducers} from 'redux';
import ProgressBar from './progressBar.reducer';
import User from './user.reducer';

export default combineReducers({
  ProgressBar: ProgressBar,
  User: User,
});
