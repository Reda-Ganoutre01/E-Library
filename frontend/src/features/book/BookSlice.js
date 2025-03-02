import fetchBooks from "./actions/fetchBooks";
import fetchLatestBooks from "./actions/fetchLatestBooks";
import fetchTopBooks from "./actions/fetchTopBooks";
import fetchBooksByCategory from "./actions/fetchBooksByCategory";
import fetchSearchBooks from "./actions/fetchSearchBooks";
import fetchBook from "./actions/fetchBook";
import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
    name: "book",
    initialState: {
        books: [],
        book: {},
        latestBooks: [],
        topBooks: [],
        booksByCategory: [],
        searchBooks: [],
        borrowRecordBook:[],
        totalbooks:0,

        loadingBooks: false,
        loadingLatestBooks: false,
        loadingTopBooks: false,
        loadingBook: false,
        loadingBooksByCategory: false,
        loadingSearchBooks: false,
        loadingborrowRecordBook:false,

        errorBooks: null,
        errorLatestBooks: null,
        errorTopBooks: null,
        errorBook: null,
        errorBooksByCategory: null,
        errorSearchBooks: null,
        errorborrowRecordBook:null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch All Books
            .addCase(fetchBooks.pending, (state) => {
                state.loadingBooks = true;
                state.errorBooks = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loadingBooks = false;
                state.books = action.payload;
                state.totalbooks=action.payload.page.totalElements; 
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loadingBooks = false;
                state.errorBooks = action.payload;
            })

            // Fetch Latest Books
            .addCase(fetchLatestBooks.pending, (state) => {
                state.loadingLatestBooks = true;
                state.errorLatestBooks = null;
            })
            .addCase(fetchLatestBooks.fulfilled, (state, action) => {
                state.loadingLatestBooks = false;
                state.latestBooks = action.payload;
            })
            .addCase(fetchLatestBooks.rejected, (state, action) => {
                state.loadingLatestBooks = false;
                state.errorLatestBooks = action.payload;
            })

            // Fetch Top Books
            .addCase(fetchTopBooks.pending, (state) => {
                state.loadingTopBooks = true;
                state.errorTopBooks = null;
            })
            .addCase(fetchTopBooks.fulfilled, (state, action) => {
                state.loadingTopBooks = false;
                state.topBooks = action.payload;
            })
            .addCase(fetchTopBooks.rejected, (state, action) => {
                state.loadingTopBooks = false;
                state.errorTopBooks = action.payload;
            })

            // Fetch Single Book
            .addCase(fetchBook.pending, (state) => {
                state.loadingBook = true;
                state.errorBook = null;
            })
            .addCase(fetchBook.fulfilled, (state, action) => {
                state.loadingBook = false;
                state.book = action.payload;
            })
            .addCase(fetchBook.rejected, (state, action) => {
                state.loadingBook = false;
                state.errorBook = action.payload;
            })

            // Fetch Books By Category
            .addCase(fetchBooksByCategory.pending, (state) => {
                state.loadingBooksByCategory = true;
                state.errorBooksByCategory = null;
            })
            .addCase(fetchBooksByCategory.fulfilled, (state, action) => {
                state.loadingBooksByCategory = false;
                state.booksByCategory = action.payload;
            })
            .addCase(fetchBooksByCategory.rejected, (state, action) => {
                state.loadingBooksByCategory = false;
                state.errorBooksByCategory = action.payload;
            })

            // Fetch Search Books
            .addCase(fetchSearchBooks.pending, (state) => {
                state.loadingSearchBooks = true;
                state.errorSearchBooks = null;
            })
            .addCase(fetchSearchBooks.fulfilled, (state, action) => {
                state.loadingSearchBooks = false;
                state.searchBooks = action.payload;
            })
            .addCase(fetchSearchBooks.rejected, (state, action) => {
                state.loadingSearchBooks = false;
                state.errorSearchBooks = action.payload;
            });
            // Fetch Books By Category

    },
});



const BookReducer = BookSlice.reducer;
export default BookReducer;