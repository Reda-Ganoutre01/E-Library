import { createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "../../../services/BookService";


const fetchTopBooks = createAsyncThunk('book/fetchTopBooks', async (_ , {rejectWithValue}) => {
    try
    {
        const response = await BookService.getTopBooks();
        return response.data;
    }
    catch (error)
    {
        rejectWithValue(error.response?.data || error.message);
    }
})

export default fetchTopBooks;