import {combineReducers} from 'redux'
import ProgressBar from './progressbar.reducer'
import User from './user.reducer'

export default combineReducers({
    ProgressBar: ProgressBar,
    User: User
})