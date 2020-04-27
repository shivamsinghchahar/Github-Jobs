import React from 'react';
import { connect } from 'react-redux';

function Footer({ dark }) {
  return (
    <footer className={`${dark ? 'text-gray-300' : 'text-gray-800'} w-full flex justify-center items-center bottom-0 p-4`}>
      <p className="font-mono text-xs">
        Made with <i class="fas fa-heart text-red-500"></i> by <a target="_blank" href="https://twitter.com/shahr_96" className={`${dark ? 'text-blue-400' : 'text-blue-600'} italic`}>Shivam Chahar</a>
      </p>
    </footer>
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark
});

export default connect(mapStateToProps)(Footer);
