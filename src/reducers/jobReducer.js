import * as actions from "../actions/jobActions";

export const initialState = {
  job: null,
  loading: false,
  hasErrors: false,
};

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_JOB:
      return { ...state, loading: true };
    case actions.GET_JOB_SUCCESS:
      return { ...state, loading: false, job: action.payload };
    case actions.GET_JOB_FAILURE:
      return { ...state, hasErrors: true, loading: false };
    case actions.CLEAR_JOB:
      return { job: null, hasErrors: false, loading: false };
    default:
      return state;
  }
}
