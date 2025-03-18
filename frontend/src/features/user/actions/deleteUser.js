import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/UserService";

const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await UserService.deleteUser(payload.id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default deleteUser;
