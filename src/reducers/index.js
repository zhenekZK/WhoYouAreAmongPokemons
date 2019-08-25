import { combineReducers } from "redux";
import users from "./users";
import title from "./title";

export default combineReducers({
  users,
  title
});
