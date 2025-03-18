import { createSlice } from "@reduxjs/toolkit";
import addBorrowRecord from "./actions/addBorrowRecord.js";
import fetchUserBorrowRecords from "./actions/fetchUserBorrowRecords.js";
import fetchBorrowRecords from "./actions/fetchBorrowRecords.js"

const borrowRecordSlice = createSlice({
  name: "borrowRecord",
  initialState: {
    record: null,
    loading: false,
    error: null,
    records: [],
    loadingRecords: false,
    errorRecords: null,
    userBooks: [],
    loadingUserBooks: false,
    errorUserBooks: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBorrowRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBorrowRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.record = action.payload;
      })
      .addCase(addBorrowRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserBorrowRecords.pending, (state) => {
        state.loadingUserBooks = true;
        state.errorUserBooks = null;
      })
      .addCase(fetchUserBorrowRecords.fulfilled, (state, action) => {
        state.loadingUserBooks = false;
        state.userBooks = action.payload;
      })
      .addCase(fetchUserBorrowRecords.rejected, (state, action) => {
        state.loadingUserBooks = false;
        state.errorUserBooks = action.payload;
      })
      .addCase(fetchBorrowRecords.pending, (state) => {
        state.loadingRecords = true;
        state.errorRecords = null;
      })
      .addCase(fetchBorrowRecords.fulfilled, (state, action) => {
        state.loadingRecords = false;
        state.records = action.payload;
      })
      .addCase(fetchBorrowRecords.rejected, (state, action) => {
        state.loadingRecords = false;
        state.errorRecords = action.payload;
      });
  },
});

const BorrowRecordReducer = borrowRecordSlice.reducer;
export default BorrowRecordReducer;
