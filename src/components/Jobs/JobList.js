import React from 'react';
import { connect } from 'react-redux';

import Paginate from '../shared/Paginate';
import JobCard from './JobCard';

function JobList({ loading, jobs }) {
  return (
    <main className="flex p-4 pt-0 justify-center flex-wrap">
      <Paginate />
      <section className="w-full lg:w-4/6 min-h-screen">
        {
          loading
            ? new Array(10).fill(null).map((job, idx) => <JobCard job={job} key={idx} />)
            : jobs.map(job => <JobCard job={job} key={job.id} />)
        }
      </section>
    </main>
  );
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  loading: state.jobs.loading,
  jobs: state.jobs.currentJobs,
});

export default connect(mapStateToProps)(JobList);
