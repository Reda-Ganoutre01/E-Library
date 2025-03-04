import { createAsyncThunk } from '@reduxjs/toolkit';
import bookService from '../../../services/bookService';

const addBook = createAsyncThunk(
  'book/addBook', async (book, { rejectWithValue }) => {
    try {
      const response = await bookService.addBook(book); 
      return response.data; 
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default addBook;
