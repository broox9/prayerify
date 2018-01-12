import { db } from "../services/firebase";

// const firebaseRef for /prayers
let prayerRef = null

export function setPrayers(prayers) {
  return {
    type: "SET:PRAYERS",
    payload: prayers
  };
}

export function setPrayersRaw(prayers) {
  return {
    type: "SET:PRAYERS:RAW",
    payload:prayers
  }
}

// thunk thunk thunk
export function fetchPrayers() {
  return dispatch => {
    prayerRef = db.ref("/prayers");
    let prayers = {};

    prayerRef.on("value", snapShot => {
      prayers = snapShot.val();
      dispatch(setPrayersRaw(prayers));
      dispatch(setPrayers(prayerObjectToArray(prayers)));
    });
  };
}

export function createPrayer(prayer) {
  return dispatch => {
    const newRef = prayerRef.push()
    newRef.set(prayer)
  }
}

function prayerObjectToArray(prayers) {
  const prayersArray = [];
  for (let prayer in prayers) {
    prayersArray.push({ fbId: prayer, ...prayers[prayer] });
  }
  return prayersArray;
}
