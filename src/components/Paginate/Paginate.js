import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setPage } from "../../actions/queryActions";
import {
  getCurrentJobs,
  setGlobalPage,
  fetchJobs,
} from "../../actions/jobsActions";
import CustomSkeleton from "../shared/CustomSkeleton";

function Paginate({
  page,
  dispatch,
  jobs,
  globalPage,
  currentJobs,
  searching,
  description,
  location,
  full_time,
  dark,
}) {
  useEffect(() => {
    if (page / 5 > globalPage) {
      dispatch(setGlobalPage(globalPage + 1));
    }

    if (globalPage - page / 5 === 1 && globalPage > 1) {
      dispatch(setGlobalPage(globalPage - 1));
    }
  }, [page, globalPage]);

  useEffect(() => {
    if (jobs.length < globalPage && searching && globalPage > 1) {
      dispatch(fetchJobs(description, location, full_time, globalPage));
    } else if (jobs.length < globalPage && !searching) {
      dispatch(fetchJobs("", "", "", globalPage));
    }
  }, [globalPage]);

  useEffect(() => {
    dispatch(
      getCurrentJobs(
        (page - (globalPage - 1) * 5 - 1) * 10,
        (page - (globalPage - 1) * 5 - 1) * 10 + 10
      )
    );
  }, [page, dispatch, jobs, globalPage]);
  return (
    <React.Fragment>
      <div className="w-full flex justify-center">
        <button
          className={`${
            dark ? "bg-blue-800 text-white" : "bg-white text-gray-700"
          } ${
            page > 1
              ? "hover:bg-blue-500 hover:text-white"
              : "bg-gray-100 text-gray-500 cursor-not-allowed"
          } font-semibold rounded-full h-10 w-10 shadow-sm`}
          disabled={!(page > 1)}
          onClick={() => dispatch(setPage(page - 1))}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div
          className={`${
            dark ? "bg-blue-800" : "bg-white"
          } shadow-sm rounded-full mx-2 flex items-center`}
        >
          {new Array(
            Math.ceil(
              jobs[globalPage - 1] && jobs[globalPage - 1].length / 10
            ) || 5
          )
            .fill(0)
            .map((_, idx) => (
              <button
                className={`${
                  page - (globalPage - 1) * 5 - 1 === idx
                    ? "bg-blue-500 text-white rounded-full h-10 w-10"
                    : dark
                    ? "text-gray-400 hover:text-blue-300 py-2 px-4"
                    : "text-gray-700 hover:text-blue-500 py-2 px-4"
                } text-sm font-bold outline-none bg-transparent hover:text-white hover:border-transparent`}
                onClick={() =>
                  dispatch(setPage((globalPage - 1) * 5 + idx + 1))
                }
              >
                {(globalPage - 1) * 5 + idx + 1}
              </button>
            ))}
        </div>
        <button
          className={`${
            dark ? "bg-blue-800 text-white" : "bg-white text-gray-700"
          } ${
            currentJobs && currentJobs.length === 10
              ? "hover:bg-blue-500 hover:text-white"
              : "bg-gray-100 text-gray-500 cursor-not-allowed"
          } font-semibold rounded-full h-10 w-10 shadow-sm`}
          disabled={currentJobs && currentJobs.length < 10}
          onClick={() => dispatch(setPage(page + 1))}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="w-full lg:w-4/6 lg:my-2 pt-4 pb-2 flex justify-between items-center">
        <div className="bg-gray-500 w-2/12 h-px lg:w-2/6"></div>
        <div className="">
          {currentJobs.length ? (
            <span
              className={`${dark ? "text-gray-200" : "text-gray-600"} text-xs`}
            >
              Showing {(page - 1) * 10 == 0 ? 1 : (page - 1) * 10} -{" "}
              {(page - 1) * 10 + currentJobs.length} of All Jobs
            </span>
          ) : (
            <CustomSkeleton width={190} />
          )}
        </div>
        <div className="bg-gray-500 w-2/12 w-1 h-px lg:w-2/6"></div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  page: state.query.page,
  jobs: state.jobs.jobs,
  currentJobs: state.jobs.currentJobs,
  globalPage: state.jobs.globalPage,
  searching: state.query.searching,
  description: state.query.description,
  location: state.query.location,
  full_time: state.query.full_time,
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(Paginate);
