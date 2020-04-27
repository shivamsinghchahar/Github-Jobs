import React from 'react';
import { connect } from 'react-redux';

import Paginate from '../shared/Paginate';
import JobCard from './JobCard';

function JobList({ hasErrors, loading, jobs }) {
  return (
    <main className="flex p-4 pt-0 justify-center flex-wrap">
      <Paginate />
      <section className="w-full lg:w-4/6">
        {
          jobs && jobs.map(job => <JobCard job={job}/>)
        }
      </section>
    </main>
  );
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  loading: state.jobs.loading,
  jobs: state.jobs.currentJobs,
  hasErrors: state.jobs.hasErrors,
});

export default connect(mapStateToProps)(JobList);
