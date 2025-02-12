import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "../features/auth/authSlice.js";

const Storage = configureStore({
    reducer : {
        auth : AuthSlice,
    }
})

export {Storage};