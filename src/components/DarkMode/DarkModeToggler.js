import React from 'react';
import { connect } from 'react-redux';
import { theme } from '../../actions/themeActions';

import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';

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
        !dark && <img className="ml-1 block" src={sun} alt="sun" width={14} height={14}/>
      }
      <span className="w-5 h-5 bg-white rounded-full slider shadow-sm"></span>
      {
        dark && <img className="mr-1 block" src={moon} alt="moon" width={14} height={14}/>
      }
    </label>
  );
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  dark: state.theme.dark
});

export default connect(mapStateToProps)(DarkModeToggler);
