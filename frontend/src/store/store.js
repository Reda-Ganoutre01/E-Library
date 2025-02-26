import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../features/category/CategorySlice";
import BookReducer from "../features/book/BookReducer";
import AuthReducer from "../features/auth/AuthReducer";


const store = configureStore({
    reducer : {
        categories : CategoryReducer,
        books : BookReducer,
        auth  : AuthReducer
    }
});

export default store;
