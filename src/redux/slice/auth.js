import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// instance.defaults.headers.common['Authorization'] =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMyYjE4MGU4YWY1ZjAwMTQ3M2Q2MGUiLCJpYXQiOjE2OTc5MTQzNDJ9.qigwkppBwe9FHPFCyKSpVKVQTfHHkpir0t6gxUk76Eo';
export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
// const token = JSON.parse(localStorage.getItem('persist:user'));
// const parsedToken = JSON.parse(token?.user);
// console.log(parsedToken);
// if (parsedToken?.token) {
//   setToken(parsedToken?.token);
// }
export const getNewThunk = createAsyncThunk(
  'user/signUp',
  async (user, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/signup', user);
      setToken(data.token);

      return data;
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
      setToken(data.token);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOutThunk = createAsyncThunk(
  'user/logOut',
  async (_, thunkAPI) => {
    try {
      const response = await instance.post('/users/logout');

      console.log(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    try {
      // console.log(data);
      // return data;

      const { user } = thunkAPI.getState();
      if (user.token) {
        setToken(user.token);
        const { data } = await instance('/users/current');
        console.log(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getContactsThunk = createAsyncThunk(
  'user/contacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance('/contacts');

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
      const { data } = await instance.post('/contacts', contact);

      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
