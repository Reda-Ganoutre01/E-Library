import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/UserService";

const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await UserService.getAllUsers(payload.page, payload.size,payload.sortBy);

      return {
        users: response.data|| [],  
        totalCount: response.data?.page?.totalElements || 0,  
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default fetchUsers;
