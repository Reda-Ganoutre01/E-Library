import BookService from "../../../services/BookService";

import { createAsyncThunk } from "@reduxjs/toolkit";

const updateBook = createAsyncThunk(
  "book/updateBook",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await BookService.updateBook(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export default updateBook;
