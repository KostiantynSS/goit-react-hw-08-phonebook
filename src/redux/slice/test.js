import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
// instance.defaults.headers.common['Authorization'] =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMyYjE4MGU4YWY1ZjAwMTQ3M2Q2MGUiLCJpYXQiOjE2OTc4NzgzOTh9.3Ynqcqo9NELGv5QIE1VF7K318ucyCQ_PPlwT80OU2VM';
export const getNewThunk = createAsyncThunk(
  'user/signUp',
  async (user, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/signup', user);
      console.log(data);
      return data.token;
    } catch (e) {
      alert(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'user/logIn',
  async (user, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', user);

      return data.token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getContactsThunk = createAsyncThunk(
  'user/contacts',
  async (token, thunkAPI) => {
    try {
      const { data } = await instance('/contacts', {
        headers: { Authorization: token },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (token, contact, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', contact, {
        headers: { Authorization: token },
      });

      console.log(response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
