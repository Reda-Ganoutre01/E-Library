import { createAsyncThunk } from "@reduxjs/toolkit";
import MessageService from "../../../services/MessageService";

/**
 * Fetch paginated user messages from the backend API.
 * @param {Object} payload - Contains `user`, `page`, and `size`.
 * @returns {Promise} A promise that resolves to the list of messages.
 */
const fetchMessages = createAsyncThunk(
  "message/fetchMessages",
  async ({ user }, { rejectWithValue }) => {
    try {
      const response = await MessageService.getAllUserMessages(user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default fetchMessages;
