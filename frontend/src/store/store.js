import { configureStore } from "@reduxjs/toolkit";
import { BookReducer } from "../features/book/BookReducer";


export const store=configureStore({
    reducer:{
        books:BookReducer,
    }
})