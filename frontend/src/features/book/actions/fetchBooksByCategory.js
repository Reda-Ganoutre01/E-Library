import { createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "../../../services/BookService";

const fetchBooksByCategory = createAsyncThunk(
    'book/fetchBooksByCategory',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await BookService.getBooksByCategory(payload.category);
            return response.data;
            
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message); // Ensure rejectWithValue is returned
        }
    }
);

export default fetchBooksByCategory;