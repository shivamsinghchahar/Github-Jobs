import React from 'react';
import { connect } from 'react-redux';

import notFound from '../../assets/images/404.svg';

function NotFound({ dark }) {
  return (
    <section className="w-full flex flex-wrap items-center justify-center p-4">
      <p className={`w-full sm:text-sm lg:text-xl antialiased font-mono text-center mb-4 py-4 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
        Oops! Nothing here.
        Please try again.
      </p>
      <div className="w-full flex justify-center mb-4">
        <img className="w-screen lg:w-1/3" src={notFound} alt="not found" />
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark,
})

export default connect(mapStateToProps)(NotFound);
