import {createAsyncThunk} from "@reduxjs/toolkit";
import BorrowRecordService from "../../../services/BorrowRecordService.js";

const addBorrowRecord = createAsyncThunk('borrowRecord/add', async (borrowRecord , { rejectWithValue }) => {
    try
    {
        const response = await BorrowRecordService.createBorrowRecord(borrowRecord);
        return response.data;
    }
    catch (error)
    {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export default addBorrowRecord;