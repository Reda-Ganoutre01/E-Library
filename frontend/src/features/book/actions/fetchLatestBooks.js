import { createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "../../../services/bookService";


const fetchLatestBooks = createAsyncThunk('book/fetchLatestBooks', async (_ , {rejectWithValue}) => {
    try
    {
        const response = await bookService.getLatestBooks();
        return response.data;
    }
    catch (error)
    {
        rejectWithValue(error.response?.data || error.message);
    }
})

export default fetchLatestBooks;