import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

instance.defaults.headers.common['Authorization'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMyYjE4MGU4YWY1ZjAwMTQ3M2Q2MGUiLCJpYXQiOjE2OTc5MTQzNDJ9.qigwkppBwe9FHPFCyKSpVKVQTfHHkpir0t6gxUk76Eo';

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
  'contacts/addContactNew',
  async (contact, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', contact);

      console.log(response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
