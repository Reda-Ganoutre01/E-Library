import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/UserService";

const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await UserService.updateUser(id, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default updateUser;
