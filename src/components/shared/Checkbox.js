import React from 'react';

export default function Checkbox({ label = "", handleChange, checked, name }) {
  return (
    <label className="w-full py-2 text-gray-500 font-bold flex items-center">
      <input
        name={name}
        className="mr-2 leading-tight"
        type="checkbox"
        onChange={e => handleChange(e.target.name, e.target.checked)}
        checked={checked}
      />
      <span className="text-xs">
        {label}
      </span>
    </label>
  );
}