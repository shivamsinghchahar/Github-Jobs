import React from 'react';

import JobList from '../components/Jobs/JobList';
import Header from '../components/shared/Header';
import Search from '../components/Jobs/Search';
import Footer from '../components/shared/Footer';
import NotFound from '../components/shared/NotFound';

function Home({ hasErrors }) {
  return (
    <React.Fragment>
      <Header />
      <Search />
      {
        hasErrors ? <NotFound /> : <JobList />
      }
      <Footer />
    </React.Fragment>
  );
}

export default Home;
