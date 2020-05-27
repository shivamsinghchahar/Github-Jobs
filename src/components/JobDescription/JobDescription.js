import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import CustomSkeleton from "../shared/CustomSkeleton";
import { fetchJob, clearJob } from "../../actions/jobActions";

import "./style.css";

function JobDescription({ dispatch, job, dark }) {
  const { id } = useParams();

  useEffect(() => {
    dispatch(clearJob());
    dispatch(fetchJob(id));
  }, []);

  let date = job && +new Date(job.created_at);
  return (
    <article className="flex flex-col items-center px-4">
      <section
        className={`${
          dark
            ? "text-white bg-blue-800 border border-blue-700"
            : "bg-white text-gray-800 border"
        } w-full lg:w-2/3 flex flex-wrap flex-between items-center p-4 my-4 rounded`}
      >
        <h1 className="text-xl lg:text-3xl font-bold py-2 w-full">
          {job ? job.title : <CustomSkeleton width="60%" />}
        </h1>
        <ul
          className={`${
            dark ? "text-gray-200" : "text-gray-700"
          } w-full flex flex-wrap items-center font-medium text-sm py-2`}
        >
          <li className="mr-4 flex items-center py-2 flex-grow lg:flex-grow-0">
            <i className="fas fa-building mr-1 text-base"></i>
            <a
              href={job && job.company_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {job ? job.company : <CustomSkeleton width={90} />}
            </a>
          </li>
          <li className="lg:mr-4 flex items-center py-2 flex-grow lg:flex-grow-0">
            <i className="fas fa-globe-asia mr-1 text-base"></i>
            <span>{job ? job.location : <CustomSkeleton width={90} />}</span>
          </li>
          <li
            className={`${
              dark ? "text-green-400" : "text-green-600"
            } flex items-center py-2 mr-4 flex-grow lg:flex-grow-0`}
          >
            <i className="fas fa-briefcase mr-1 text-base"></i>
            <span>{job ? job.type : <CustomSkeleton width={90} />}</span>
          </li>
          <li className="sm:w-full lg:w-auto lg:ml-auto lg:ml-0 py-2 flex flex-grow lg:flex-grow-0 items-center text-xs font-light italic">
            {date ? (
              <span>Posted {moment(date).startOf("hour").fromNow()}</span>
            ) : (
              <CustomSkeleton width={90} />
            )}
          </li>
        </ul>
      </section>
      <section
        className={`${
          dark ? "bg-blue-800 border border-blue-700" : "bg-white border"
        } w-full py-6 px-4 lg:w-2/3 lg:py-8 lg:px-6 mb-4 rounded`}
      >
        {job ? (
          <p
            className={`${
              dark ? "text-white" : "text-gray-800"
            } description font-medium text-sm leading-relaxed content break-words antialiased`}
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></p>
        ) : (
          <CustomSkeleton count={20} height={10} width="100%" />
        )}
      </section>
      <section className="w-full lg:w-2/3 flex flex-col-reverse lg:flex-row flex-wrap justify-start items-start">
        <div
          className={`${
            dark ? "bg-blue-800 border border-blue-700" : "bg-white border"
          } w-full lg:w-1/2 py-8 px-6 mb-4 rounded`}
        >
          {job ? (
            <img
              className="mx-auto w-1/2"
              src={job && job.company_logo}
              alt="company logo"
            />
          ) : (
            <div className="w-1/2 flex justify-center mx-auto">
              <CustomSkeleton circle={true} width={150} height={150} />
            </div>
          )}
          <a
            href={job && job.company_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center block bg-blue-400 text-white text-md rounded px-2 py-3 mt-6 w-full"
            disabled={!job}
          >
            View Company
          </a>
        </div>
        <div
          className={`${
            dark
              ? "bg-blue-800 text-white border border-blue-700"
              : "bg-white text-gray-800 border"
          } w-full p-4 flex-grow lg:w-5/12 lg:ml-4 lg:p-6 mb-4 rounded scrolling-touch overflow-auto`}
        >
          <h3 className="font-bold text-lg mb-4">How To Apply</h3>
          {job ? (
            <p
              className="description break-words"
              dangerouslySetInnerHTML={{ __html: job && job.how_to_apply }}
            ></p>
          ) : (
            <CustomSkeleton height={10} width="100%" count={4} />
          )}
        </div>
      </section>
    </article>
  );
}

const mapStateToProps = (state) => ({
  job: state.job.job,
  hasErrors: state.job.hasErrors,
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(JobDescription);
