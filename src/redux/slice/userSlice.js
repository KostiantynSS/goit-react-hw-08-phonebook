import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getNewThunk,
  logInThunk,
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
  logOutThunk,
  refreshThunk,
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
  state.token = payload.token;
  state.isAuth = true;
};
const loginUserFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.token = payload.token;
  state.isAuth = true;
  state.user = payload.user;
};
const logOutUserFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.token = '';
  state.isAuth = false;
  state.user = null;
  state.contacts = [];
};
const refreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isAuth = true;
  state.isLoading = false;
};

const addContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.unshift(action.payload);
};
const deleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
};
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
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
      .addCase(getNewThunk.fulfilled, addUserFulfilled)
      .addCase(logInThunk.fulfilled, loginUserFulfilled)
      .addCase(logOutThunk.fulfilled, logOutUserFulfilled)
      .addCase(refreshThunk.fulfilled, refreshUserFulfilled)
      .addCase(deleteContactThunk.fulfilled, deleteContactFulfilled)
      .addMatcher(
        isAnyOf(
          getNewThunk.pending,
          logInThunk.pending,
          getContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending,
          logOutThunk.pending,
          refreshThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getNewThunk.rejected,
          logInThunk.rejected,
          getContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected,
          logOutThunk.rejected,
          refreshThunk.rejected
        ),
        handleRejected
      );
  },
});

export const userReducer = userSlice.reducer;
