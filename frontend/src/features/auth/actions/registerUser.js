import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";

const registerUser = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await AuthService.register(userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Registration failed");
  }
});

export default registerUser;
