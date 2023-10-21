import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
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
      const response = await instance.post('/users/login', user);

      console.log(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
