import React from 'react';
import { useState } from 'react';
import { filterContact } from 'redux/FilterSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const [inputValue, setiIputValue] = useState('');
  const handleChange = e => {
    setiIputValue(e.target.value);
    dispatch(filterContact(e.target.value));
  };

  return (
<>
<p>Find contact</p>
    <label>
      <input
      className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="name"
      />
    </label>
</>
  );
};

export default Filter;
