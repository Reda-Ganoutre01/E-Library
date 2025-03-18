import { createAsyncThunk } from "@reduxjs/toolkit";
import BorrowRecordService from "../../../services/BorrowRecordService.js";

const fetchUserBorrowRecords = createAsyncThunk(
  "borrowRecord/fetchUserBorrowRecords",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await BorrowRecordService.getBorrowRecordByUserId(
        userId
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default fetchUserBorrowRecords;