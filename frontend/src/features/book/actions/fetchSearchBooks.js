import { createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "../../../services/bookService";

const fetchSearchBooks = createAsyncThunk(
    "book/fetchSearchBooks",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await bookService.searchBooks(payload.search);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Erreur lors de la recherche des livres");
        }
    }
);

export default fetchSearchBooks;
