import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/UserService"

const createUser = createAsyncThunk(
  "user/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await UserService.createUser(payload.user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default createUser;
