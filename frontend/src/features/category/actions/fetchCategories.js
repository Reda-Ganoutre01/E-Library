import { createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../../../services/CategoryService";

const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async (payload = {}, { rejectWithValue }) => {
        try {
            const { page, size, sortBy } = payload;
            const response = await CategoryService.getAllCategories(page, size, sortBy);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export default fetchCategories;
