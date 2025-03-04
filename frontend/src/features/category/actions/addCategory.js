import { createAsyncThunk } from '@reduxjs/toolkit';
import CategoryService from '../../../services/CategoryService';

const addCategory = createAsyncThunk(
  'category/addCategory', async (category, { rejectWithValue }) => {
    try {
      const response = await CategoryService.addCategory(category); 
      return response.data; 
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default addCategory;
