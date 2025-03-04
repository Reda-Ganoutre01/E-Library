// deleteBook.js (Action Creator)

import { createAsyncThunk } from '@reduxjs/toolkit';
import bookService from '../../../services/bookService';

const deleteBook = createAsyncThunk(
  'book/deleteBook', 
  async (id, { rejectWithValue }) => {
    try {
      const response = await bookService.deleteBook(id);  
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default deleteBook;
