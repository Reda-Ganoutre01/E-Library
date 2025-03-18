import {createAsyncThunk}  from "@reduxjs/toolkit";
import BorrowRecordService from "../../../services/BorrowRecordService.js";

const fetchBorrowRecords = createAsyncThunk('borrowRecord/fetchBorrowRecords', async (_ , { rejectWithValue }) => {
    try
    {
        const response = await BorrowRecordService.getAllBorrowRecords();
        return response.data;
    }
    catch (error)
    {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export default fetchBorrowRecords;