import { auth } from "../services/firebase";
import { fetchPrayers } from "./prayerActions";

export function setUser(user) {
  return {
    type: "SET:USER",
    payload: user
  };
}

export function setHasAuthBeenChecked(bool) {
  return {
    type: "SET:AUTHHASBEENCHECKED",
    payload: bool
  };
}

export function setAuthError(err) {
  return {
    type: "ERROR:AUTH",
    payload: err
  };
}

// thunk
export function checkForAuth() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch(setUser(user));
      dispatch(setHasAuthBeenChecked(true));
      dispatch(fetchPrayers());
    });
  };
}

// thunk
export function signInUser({ uid, pwd }) {
  return dispatch => {
    auth
      .signInWithEmailAndPassword(uid, pwd)
      .then(user => {
        console.log("Signed In", user);
        dispatch(setUser(user));
      })
      .catch(error => console.log("SIGN IN ERR", error));
  };
}

// thunk
/* @TODO actuall make this work and fire another action */
export function signOutUser() {
  return dispatch => {
    auth.signOut().then(rtn => {
      console.log("Signed Out", rtn);
    });
  };
}
