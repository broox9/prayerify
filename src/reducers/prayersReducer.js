const initialState = {
  list: [],
  raw: {}
  // currentPrayer: null
};
export function prayersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET:PRAYERS":
      return {
        ...state,
        list: action.payload
      };
    case "SET:PRAYERS:RAW":
      return {
        ...state,
        raw: action.payload
      };
    // case "SET:CURRENTPRAYER":
    //   return {
    //     ... state,
    //     currentPrayer: action.payload
    //   }
    case "FETCH:PRAYERS":
    default:
      return state;
  }
}
