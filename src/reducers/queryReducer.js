export const initialState = {
  description: "",
  location: "",
  full_time: false,
  page: 1,
  searching: false,
};

export default function queryReducer(state = initialState, action) {
  switch (action.type) {
    case "DESCRIPTION":
      return { ...state, description: action.payload, searching: true };
    case "LOCATION":
      return { ...state, location: action.payload, searching: true };
    case "FULL_TIME":
      return { ...state, full_time: action.payload, searching: true };
    case "CLEAR":
      return {
        page: 1,
        description: "",
        location: "",
        full_time: false,
        searching: false,
      };
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
