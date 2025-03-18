import BookService from "../../../services/BookService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const deleteBook = createAsyncThunk("book/deleteBook", async (payload , {rejectWithValue}) => {
  try
      {
          const response = await BookService.deleteBook(payload.id);
          return response.data;
      }
      catch (error)
      {
          return rejectWithValue(error.response?.data || error.message);
      }
});

export default deleteBook;
