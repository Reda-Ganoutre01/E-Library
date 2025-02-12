import {createAsyncThunk} from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
    "auth/login" , async ({username , password} , {rejectWithValue}) => {

    }
)