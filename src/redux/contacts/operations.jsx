import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /tasks
export const fetchContacts = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactValue, thunkAPI) => {
console.log(contactValue)
    try {
      const response = await axios.post('/contacts', { ...contactValue });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);




// DELETE @ /tasks/:id
export const deleteContact = createAsyncThunk(
  'tasks/deleteTask',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
