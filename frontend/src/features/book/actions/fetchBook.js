import {createAsyncThunk} from "@reduxjs/toolkit";
import BookService from "../../../services/BookService.js";

const fetchBook = createAsyncThunk('book/fetchBook', 
    async (payload , {rejectWithValue}) => {
    try
    {
        const response = await BookService.getBook(payload.id);
        return response.data;
    }
    catch (error)
    {
        rejectWithValue(error.response?.data || error.message);
    }
})

export default fetchBook;