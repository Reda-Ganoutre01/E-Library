import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/UserService";

const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await UserService.deleteUser(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default deleteUser;
