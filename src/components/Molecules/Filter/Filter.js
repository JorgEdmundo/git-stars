import React from 'react';

import Input from '../../Atoms/Input/Input';

import './filter.scss';

function Filter({ handleInputChange, inputFilter }) {
  return (
    <div className="filter">
      <Input
        label="Filter by:"
        placeholder="Programming language"
        handleChange={handleInputChange}
        value={inputFilter}
      />
    </div>
  );
}

export default Filter;
