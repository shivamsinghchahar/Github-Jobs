import React from 'react';
import { connect } from 'react-redux';

function Input({ type, placeholder = "", handleChange, value, name, dark }) {
  return (
    <input
      name={name}
      type={type}
      className={`${dark ? 'placeholder-gray-400 text-white bg-blue-800 border-2 border-blue-800 focus:bg-blue-700 focus:border-blue-700' : 'border-2 border-white focus:bg-gray-100 focus:border-blue-500'} w-full my-1 lg:my-2 shadow rounded py-2 px-4 appearance-none focus:outline-none`}
      placeholder={placeholder}
      value={value}
      onChange={e => handleChange(e.target.name, e.target.value)}
    />
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark
});

export default connect(mapStateToProps)(Input);
