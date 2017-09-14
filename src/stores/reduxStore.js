import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import rootReducer from "../reducers/";

// devTools
const composeEnhancers = composeWithDevTools({ name: "Prayerify" });

export default function setupStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
