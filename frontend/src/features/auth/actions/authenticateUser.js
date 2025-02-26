import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService        from "../../../services/AuthService";


const authenticateUser = createAsyncThunk('auth/login' , async (credentials, { rejectWithValue }) => {
    try
    {
        const response = await AuthService.authenticate(credentials);
        return response.data;
    }
    catch (error)
    {
        rejectWithValue(error.response?.data || error.message);
    }
});


export default authenticateUser;