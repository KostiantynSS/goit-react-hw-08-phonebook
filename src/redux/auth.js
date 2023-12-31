import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

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
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState();

      if (user.token) {
        setToken(user.token);
        const { data } = await instance('/users/current');

        return data;
      }
      return thunkAPI.rejectWithValue(5);
    } catch (e) {}
  }
);

export const getContactsThunk = createAsyncThunk(
  'user/contacts',
  async (_, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState();
      setToken(user.token);

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
