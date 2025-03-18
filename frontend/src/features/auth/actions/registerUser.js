import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService        from "../../../services/AuthService";


const registerUser = createAsyncThunk('auth/register' , async (credentials, { rejectWithValue }) => {
    try
    {
        const response = await AuthService.register(credentials);
        return response.data;
    }
    catch (error)
    {
        return rejectWithValue(error.response?.data || error.message);
    }
});


export default registerUser;