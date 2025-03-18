import { createSlice } from "@reduxjs/toolkit";

import fetchMessages from "./actions/fetchMessages"

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [], 
    loading: false, 
    error: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default messageSlice.reducer;