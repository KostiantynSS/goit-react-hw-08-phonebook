import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getNewThunk,
  logInThunk,
  getContactsThunk,
  addContactThunk,
} from './auth';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
  state.isAuth = false;
};
const addUserFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.token = payload;
  state.isAuth = true;
};
const addContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: [],
    isLoading: false,
    isAuth: false,
    error: null,
    token: '',
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = payload;
      })
      .addCase(addContactThunk.fulfilled, addContactFulfilled)
      .addMatcher(
        isAnyOf(getNewThunk.fulfilled, logInThunk.fulfilled),
        addUserFulfilled
      )
      .addMatcher(
        isAnyOf(
          getNewThunk.pending,
          logInThunk.pending,
          getContactsThunk.pending,
          addContactThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getNewThunk.rejected,
          logInThunk.rejected,
          getContactsThunk.rejected,
          addContactThunk.rejected
        ),
        handleRejected
      );
  },
});

export const userReducer = userSlice.reducer;
