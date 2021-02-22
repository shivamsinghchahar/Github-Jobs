const allowCors = "https://thingproxy.freeboard.io/fetch";
const baseUrl = "https://jobs.github.com/positions";

export const GET_JOB = "GET_JOB";
export const GET_JOB_SUCCESS = "GET_JOB_SUCCESS";
export const GET_JOB_FAILURE = "GET_JOB_FAILURE";
export const CLEAR_JOB = "CLEAR_JOB";

export const getJob = () => ({
  type: GET_JOB
});

export const getJobSuccess = job => ({
  type: GET_JOB_SUCCESS,
  payload: job
});

export const getJobFailure = () => ({
  type: GET_JOB_FAILURE
});

export const clearJob = () => ({
  type: CLEAR_JOB
});

export function fetchJob(id) {
  const URL = `${allowCors}/${baseUrl}/${id}.json`;

  return async dispatch => {
    dispatch(getJob());
    try {
      const res = await fetch(URL, {
        headers: {
          Accept: "applicaion/json",
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();

      dispatch(getJobSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getJobFailure());
    }
  };
}
