import React from 'react';
import { connect } from 'react-redux';

import Home from './pages/Home/Home';

function App({ dark, hasErrors }) {
  return (
    <div className={`${dark ? 'bg-blue-900' : 'bg-gray-200'} min-h-screen`}>
      <Home hasErrors={hasErrors} />
    </div>
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark,
  hasErrors: state.jobs.hasErrors,
});

export default connect(mapStateToProps)(App);
