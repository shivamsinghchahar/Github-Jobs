import React from "react";
import { connect } from "react-redux";

import Paginate from "../Paginate/Paginate";
import Job from "../Job/Job";

function Jobs({ loading, jobs }) {
  return (
    <article className="flex p-4 pb-2 pt-0 justify-center flex-wrap">
      <Paginate />
      <section className="w-full lg:w-4/6 min-h-screen">
        {loading
          ? new Array(10)
              .fill(null)
              .map((job, idx) => <Job job={job} key={idx} />)
          : jobs.map((job) => <Job job={job} key={job.id} />)}
      </section>
    </article>
  );
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.jobs.loading,
  jobs: state.jobs.currentJobs,
});

export default connect(mapStateToProps)(Jobs);
