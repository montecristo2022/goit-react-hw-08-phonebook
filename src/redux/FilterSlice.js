import { createSlice } from '@reduxjs/toolkit';


export const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});


export const { filterContact } = FilterSlice.actions;

// export const getFilter = state => state.filterRandom;