import { createAsyncThunk } from '@reduxjs/toolkit';
import CategoryService from '../../../services/CategoryService';

const updateCategory = createAsyncThunk(
  'category/updateCategory', async ({ id, category }, { rejectWithValue }) => {
    try {
      const response = await CategoryService.updateCategory(id, category);
      return response.data; 
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default updateCategory;
