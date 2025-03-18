import { createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../../../services/CategoryService";

const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CategoryService.getAllCategories();
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default fetchCategories;
