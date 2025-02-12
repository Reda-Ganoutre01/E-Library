import {configureStore} from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice.js";

const store = configureStore({
    reducer: {
        loader : loaderSlice
    }
})
export  default store
