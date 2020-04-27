const allowCors = 'https://cors-anywhere.herokuapp.com';
const baseUrl = 'https://jobs.github.com/positions.json';
// Action Types
export const GET_JOBS = 'GET_JOBS';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE';
export const GET_CURRENT_JOBS = 'GET_CURRENT_JOBS';
export const SET_GLOBAL_PAGE = 'SET_GLOBAL_PAGE';
export const CLEAR_JOBS = 'CLEAR_JOBS';

// Create redux action creators that return an action
export const getJobs = () => ({
  type: GET_JOBS,
});

export const getJobsSuccess = jobs => ({
  type: GET_JOBS_SUCCESS,
  payload: jobs,
});

export const getJobsFailure = () => ({
  type: GET_JOBS_FAILURE,
});

export const getCurrentJobs = (start = 0, end = 10) => ({
  type: GET_CURRENT_JOBS,
  payload: {
    start,
    end,
  },
});

export const clearJobs = () => ({
  type: CLEAR_JOBS,
});

export const setGlobalPage = page => ({
  type: SET_GLOBAL_PAGE,
  payload: page,
});

// combine actions in an async thunk
export function fetchJobs(description = '', location = '', full_time = '', page = 1) {
  const URL = `${allowCors}/${baseUrl}?description=${description}&location=${location}&full_time=${full_time ? 'on' : ''}&page=${page}`;
  return async dispatch => {
    dispatch(getJobs());

    try {
      const res = await fetch(URL, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      const data = await res.json();

      dispatch(getJobsSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getJobsFailure());
    }
  }
}
