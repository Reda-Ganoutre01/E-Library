import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";

const authenticateUser = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await AuthService.authenticate(credentials);
    console.log(response.data)
    
    return response.data;

    
  } catch (error) {
    return rejectWithValue(error.response?.data || "Authentication failed");
  }
});

export default authenticateUser;
