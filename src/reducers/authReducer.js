const initialState = {
  user: null,
  hasAuthBeenChecked: false
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET:USER":
      return {
        ...state,
        user: action.payload
      };
    case "SET:AUTHHASBEENCHECKED":
      return {
        ...state,
        hasAuthBeenChecked: action.payload
      };
    default:
      return state;
  }
}
