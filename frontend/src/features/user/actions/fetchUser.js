import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/UserService";

const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await UserService.getUserProfile(username);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default fetchUser;
