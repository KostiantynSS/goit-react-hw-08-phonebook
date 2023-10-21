import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getNewThunk, logInThunk } from './test';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const addUserFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.token = payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: { items: [], isLoading: false, error: null, token: null },

  extraReducers: builder => {
    builder
      .addCase(getNewThunk.fulfilled, addUserFulfilled)
      .addMatcher(
        isAnyOf(getNewThunk.pending, logInThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getNewThunk.rejected, logInThunk.rejected),
        handleRejected
      );
  },
});

export const userReducer = userSlice.reducer;
