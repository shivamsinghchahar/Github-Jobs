import React from 'react';
import { connect } from 'react-redux';
import { theme } from '../../actions/themeActions';

import './index.css';

function DarkModeToggler({ dispatch, dark }) {
  return (
    <label
      className={`${dark ? 'bg-blue-900' : 'bg-gray-200' } w-12 h-6 shadow-inner rounded-full flex justify-around items-center`}
      htmlFor="toggle"
    >
      <input
        id="toggle"
        type="checkbox"
        className="hidden"
        onClick={e => dispatch(theme(e.target.checked))}
      />
      {
        !dark && <i className="fas fa-sun text-orange-500 ml-1 text-xs"></i> 
      }
      <span className="w-5 h-5 bg-white rounded-full slider shadow-sm"></span>
      {
        dark && <i className="fas fa-moon mr-1 text-yellow-500 text-xs"></i>
      }
    </label>
  );
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  dark: state.theme.dark
});

export default connect(mapStateToProps)(DarkModeToggler);
