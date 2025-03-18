import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/UserService";

const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserService.getUsers();
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default fetchUsers;
