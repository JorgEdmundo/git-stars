import React from 'react';

import './input.scss';

function Input({ type = 'text', handleChange, label, ...rest }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input type={type} onChange={handleChange} {...rest} />
    </div>
  );
}

export default Input;
