import React from 'react';
import { useState } from 'react';

import { filterContact } from 'redux/FilterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const [inputValue, setiIputValue] = useState('');
  const handleChange = e => {
    setiIputValue(e.target.value);
    dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="name or number"
      />
    </label>
  );
};

export default Filter;
