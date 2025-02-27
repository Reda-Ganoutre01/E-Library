import { createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "../../../services/bookService";

const fetchTopBooks = createAsyncThunk(
    "book/fetchTopBooks",
    async (_, { rejectWithValue }) => {
      try {
        const response = await bookService.getTopBooks();
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  
export default fetchTopBooks;
