import {createAsyncThunk} from "@reduxjs/toolkit";
import bookService from "../../../services/bookService";

const fetchBook = createAsyncThunk('book/fetchBook', 
    async (payload , {rejectWithValue}) => {
    try
    {
        const response = await bookService.getBook(payload.id);
        return response.data;
    }
    catch (error)
    {
        rejectWithValue(error.response?.data || error.message);
    }
})

export default fetchBook;