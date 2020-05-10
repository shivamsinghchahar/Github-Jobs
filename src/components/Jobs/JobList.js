import React from 'react';
import { connect } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Paginate from '../shared/Paginate';
import JobCard from './JobCard';

function JobList({ hasErrors, loading, jobs, dark }) {
  return (
    <main className="flex p-4 pt-0 justify-center flex-wrap">
      <Paginate />
      <section className="w-full lg:w-4/6 min-h-screen">
        {
          loading
            ? (
              <SkeletonTheme color={dark ? '#2c5282' : 'white'} highlightColor={dark ? '#2b6cb0' : '#edf2f7'}>
                <Skeleton count={10} height={90} />
              </SkeletonTheme>)
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
  hasErrors: state.jobs.hasErrors,
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(JobList);
