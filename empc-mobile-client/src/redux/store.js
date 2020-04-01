import {createStore, compose, applyMiddleware} from 'redux'
import MainReducer from './reducers/main.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => {
    return MainReducer(state, action)
}

const middlewares = [];

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);