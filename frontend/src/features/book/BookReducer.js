import fetchBooks       from "./actions/fetchBooks";
import fetchLatestBooks from "./actions/fetchLatestBooks"
import fetchTopBooks    from "./actions/fetchTopBooks"
import { createSlice }  from "@reduxjs/toolkit"
import fetchBook from "./actions/fetchBook.js";


const BookSlice = createSlice({
    name: 'book',
    initialState: {

        books: [],
        book : {},
        latestBooks: [],
        topBooks: [],

        loadingBooks: false,
        loadingLatestBooks: false,
        loadingTopBooks: false,
        loadingBook : false,

        errorBooks: null,
        errorLatestBooks: null,
        errorTopBooks: null,
        errorBook : null,
    },
    reducers: {},
    extraReducers: (builder) => {
     
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.loadingBooks = true;
            state.errorBooks = null;
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loadingBooks = false;
            state.books = action.payload;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loadingBooks = false;
            state.errorBooks = action.payload;
        });


        builder.addCase(fetchLatestBooks.pending, (state, action) => {
            state.loadingLatestBooks = true;
            state.errorLatestBooks = null;
        });
        builder.addCase(fetchLatestBooks.fulfilled, (state, action) => {
            state.loadingLatestBooks = false;
            state.latestBooks = action.payload;
        });
        builder.addCase(fetchLatestBooks.rejected, (state, action) => {
            state.loadingLatestBooks = false;
            state.errorLatestBooks = action.payload;
        });


        builder.addCase(fetchTopBooks.pending, (state, action) => {
            state.loadingTopBooks = true;
            state.errorTopBooks = null;
        });
        builder.addCase(fetchTopBooks.fulfilled, (state, action) => {
            state.loadingTopBooks = false;
            state.topBooks = action.payload;
        });
        builder.addCase(fetchTopBooks.rejected, (state, action) => {
            state.loadingTopBooks = false;
            state.errorTopBooks = action.payload;
        });

        builder.addCase(fetchBook.pending, (state, action) => {
            state.loadingBook = true;
            state.errorBook = null
        });
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.loadingBook = true;
            state.book = action.payload;
        });
        builder.addCase(fetchBook.rejected, (state, action) => {
            state.loadingBook = false;
            state.errorBook = action.payload;
        });
    }
});

const BookReducer = BookSlice.reducer;
export default BookReducer;