import * as actions from '../actions/themeActions';

export const initialState = {
  dark: false,
};

export default function themeReducer(state = initialState, action) {
  switch(action.type) {
    case actions.LIGHT:
      return { dark: false }
    case actions.DARK:
      return { dark: true }
    default:
      return state;
  }
}
