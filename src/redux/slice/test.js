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

      return data.token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
