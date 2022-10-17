import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import pageReducer from "./pageReducer";

const reducers = combineReducers({
    auth: authReducer,
    page: pageReducer
})

const store = createStore(reducers)

export default store 