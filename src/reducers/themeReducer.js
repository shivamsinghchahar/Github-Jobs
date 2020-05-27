import * as actions from "../actions/themeActions";

export const initialState = {
  dark: localStorage.dark ? JSON.parse(localStorage.dark) : false,
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LIGHT:
      localStorage.setItem("dark", false);
      return { dark: false };
    case actions.DARK:
      localStorage.setItem("dark", true);
      return { dark: true };
    default:
      return state;
  }
}
