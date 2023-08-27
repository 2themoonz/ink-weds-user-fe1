import { combineReducers } from "redux";

import Todo from "./todo/reducers";
import Auth from "./auth/reducers";

export default combineReducers({
  Todo,
  Auth,
});
