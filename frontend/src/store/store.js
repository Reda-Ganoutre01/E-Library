import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../features/category/CategorySlice";
import BookReducer from "../features/book/BookReducer";
import AuthReducer from "../features/auth/AuthReducer";
import loaderSlice from "../features/loader/loaderSlice"

const store = configureStore({
    reducer : {
        categories : CategoryReducer,
        books : BookReducer,
        auth  : AuthReducer,
        loader:loaderSlice
    }
});

export default store;
