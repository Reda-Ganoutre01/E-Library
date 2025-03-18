import BookService from "../../../services/BookService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createBook = createAsyncThunk(
  "book/createBook",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await BookService.createBook(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default createBook;
