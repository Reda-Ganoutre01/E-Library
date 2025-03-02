import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../features/category/CategorySlice";
import BookReducer from "../features/book/BookSlice";
import AuthReducer from "../features/auth/AuthSlice";
import UserReducer from "../features/user/UserSlice";

const store = configureStore({
    reducer : {
        categories : CategoryReducer,
        books : BookReducer,
        auth  : AuthReducer,
        users : UserReducer,
    }
});

export default store;
