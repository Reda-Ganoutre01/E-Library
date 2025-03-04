import { createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "../../../services/bookService";

const fetchBooksByCategory = createAsyncThunk(
    "book/fetchBooksByCategory", async (payload, { rejectWithValue }) => {
    try {
        const response = await bookService.getBooksByCategory(payload.category);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export default fetchBooksByCategory;
