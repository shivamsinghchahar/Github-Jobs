import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

import CustomSkeleton from "../shared/CustomSkeleton";

function Job({ job, dark }) {
  let date = job && +new Date(job.created_at);
  return (
    <Link
      to={job ? `/positions/${job.id}` : "#"}
      className={`${
        dark ? "bg-blue-800" : "bg-white"
      } shadow flex flex-wrap py-4 px-3 rounded shadow-sm mb-2 lg:mb-4`}
    >
      <header className="w-full flex flex-wrap justify-between items-baseline lg:mb-2">
        <h2
          className={`${
            dark ? "text-white" : "text-gray-900"
          } truncate w-2/3 text-md font-bold`}
        >
          {job ? job.title : <CustomSkeleton width={300} />}
        </h2>
        <span className={`${dark ? "text-gray-200" : "text-gray-600"} text-xs`}>
          {date ? (
            moment(date).startOf("hour").fromNow()
          ) : (
            <CustomSkeleton width={90} />
          )}
        </span>
      </header>
      <footer className="w-full flex justify-between mt-2">
        <div
          className={`flex flex-wrap items-center w-3/5 flex-between text-xs ${
            dark ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {job ? (
            <>
              <span>
                {job.company.length > 14
                  ? job.company.substring(0, 11) + "..."
                  : job.company}
              </span>
              <span className="mx-1">—</span>
              <span
                className={`${
                  dark
                    ? `${
                        job.type === "Full Time"
                          ? "text-green-400"
                          : "text-orange-400"
                      }`
                    : `${
                        job.type === "Full Time"
                          ? "text-green-600"
                          : "text-orange-600"
                      }`
                } font-bold`}
              >
                {job.type}
              </span>
            </>
          ) : (
            <CustomSkeleton width={160} />
          )}
        </div>
        <div className={`${dark ? "text-gray-200" : "text-gray-600"} text-xs`}>
          {job && <i className="fas fa-globe-asia mr-1"></i>}
          <span>
            {job ? (
              job.location.length > 12 ? (
                job.location.substring(0, 8) + "..."
              ) : (
                job.location
              )
            ) : (
              <CustomSkeleton width={60} />
            )}
          </span>
        </div>
      </footer>
    </Link>
  );
}

const mapStateToProps = (state) => ({
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(Job);
