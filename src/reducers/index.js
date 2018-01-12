import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { prayersReducer } from "./prayersReducer";

export default combineReducers({
  auth: authReducer,
  prayers: prayersReducer
});
