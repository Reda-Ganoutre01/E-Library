import { createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "../../../services/BookService";


const fetchLatestBooks = createAsyncThunk('book/fetchLatestBooks', async (_ , {rejectWithValue}) => {
    try
    {
        const response = await BookService.getLatestBooks();
        return response.data;
    }
    catch (error)
    {
        rejectWithValue(error.response?.data || error.message);
    }
})

export default fetchLatestBooks;