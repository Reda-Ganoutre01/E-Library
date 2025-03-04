import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../../services/UserService';

const addUser = createAsyncThunk(
  'user/addUser', async (userData, {rejectWithValue}) => {
    try {
      const response = await UserService.addUser(userData);  
      return response.data; 
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
  }
);

export default addUser;
