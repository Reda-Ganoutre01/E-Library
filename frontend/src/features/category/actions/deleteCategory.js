import { createAsyncThunk } from '@reduxjs/toolkit';
import CategoryService from '../../../services/CategoryService';

const deleteCategory = createAsyncThunk(
  'category/deleteCategory', async (id, { rejectWithValue }) => {
    try {
      const response = await CategoryService.deleteCategory(id);  
      return response.data; 
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default deleteCategory;
