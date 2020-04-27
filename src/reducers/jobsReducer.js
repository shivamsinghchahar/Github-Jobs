// Import all actions
import * as actions from '../actions/jobsActions';

export const initialState = {
  jobs: [],
  loading: false,
  hasErrors: false,
  currentJobs: null,
  globalPage: 1,
};

export default function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_JOBS:
      return { ...state, loading: true }
    case actions.GET_JOBS_SUCCESS:
      let jobs = [...state.jobs];
      jobs.push(action.payload);
      return { ...state, loading: false, hasErrors: false, jobs }
    case actions.GET_JOBS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.GET_CURRENT_JOBS:
      return { ...state, currentJobs: state.jobs.length >= state.globalPage ? state.jobs[state.globalPage - 1].slice(action.payload.start, action.payload.end) : null }
    case actions.SET_GLOBAL_PAGE:
      return { ...state, globalPage: action.payload }
    case actions.CLEAR_JOBS:
      return { ...state, jobs: [], globalPage: 1 }
    default:
      return state;
  }
}
