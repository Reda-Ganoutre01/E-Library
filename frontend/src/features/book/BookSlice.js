import { createSlice } from "@reduxjs/toolkit";
import fetchBooks from "./actions/fetchBooks"; // Ensure the correct path

const BookSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        book: {},
        latestBooks: [],
        topBooks: [],
        loadingBooks: false,
        errorBooks: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loadingBooks = true;
                state.errorBooks = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loadingBooks = false;
                state.books = action.payload; // Ensure data structure matches API response
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loadingBooks = false;
                state.errorBooks = action.payload;
            });
    },
});

export default BookSlice.reducer;
