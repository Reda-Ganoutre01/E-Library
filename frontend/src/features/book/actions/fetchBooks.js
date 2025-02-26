import { createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "../../../services/bookService";

const fetchBooks = createAsyncThunk('books/fetchBooks', async (payload, { rejectWithValue }) => {
    try {
        const response = await bookService.getAllBooks(payload.page, payload.size);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message); 
    }
});

export default fetchBooks;
