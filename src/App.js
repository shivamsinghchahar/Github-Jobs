import React from 'react';

import Header from './components/Header';
import Search from './components/Jobs/Search';
import JobList from './components/Jobs/JobList';
import { connect } from 'react-redux';

function App({ dark }) {
  return (
    <div className={`${dark ? 'bg-blue-900' : 'bg-gray-200'} min-h-screen`}>
      <Header />
      <Search />
      <JobList />
    </div>
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark
});

export default connect(mapStateToProps)(App);
