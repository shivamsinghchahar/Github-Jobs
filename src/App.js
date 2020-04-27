import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Search from './components/Jobs/Search';
import JobList from './components/Jobs/JobList';
import Footer from './components/Footer';

function App({ dark }) {
  return (
    <div className={`${dark ? 'bg-blue-900' : 'bg-gray-200'} min-h-screen`}>
      <Header />
      <Search />
      <JobList />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark
});

export default connect(mapStateToProps)(App);
