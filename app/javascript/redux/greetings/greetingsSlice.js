import { createSlice } from '@reduxjs/toolkit'
import { fetchRandomGreeting } from './apiSlice';

const initialState = {
  greeting: '',
  error: null,
  isLoading: false
}

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
})

export default greetingsSlice.reducer