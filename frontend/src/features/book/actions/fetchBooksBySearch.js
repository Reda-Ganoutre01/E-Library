import { createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "../../../services/BookService";


const fetchBooksBySearch = createAsyncThunk('book/fetchBooksBySearch', async (payload , {rejectWithValue}) => {
    try
    {
        const response = await BookService.getBooksBySearch(payload.search);
        return response.data;
    }
    catch (error)
    {
        rejectWithValue(error.response?.data || error.message);
    }
})

export default fetchBooksBySearch;