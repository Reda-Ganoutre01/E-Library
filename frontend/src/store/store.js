import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../features/book/BookSlice";

const store = configureStore({
    reducer: {
        books: BookReducer,  
    },
});

export default store;
