import { createStore } from 'redux';
import { combineReducers } from "redux";
import  serverReducer from './server/server.reducer';


const reducers = combineReducers ({
    serverReducer
})

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());    

export default store;
