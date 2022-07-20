import { combineReducers, createStore } from "redux";
import Reducer from "./Reducer";

const reducers = combineReducers({
  app: Reducer
})

const store = createStore(reducers)

export default store