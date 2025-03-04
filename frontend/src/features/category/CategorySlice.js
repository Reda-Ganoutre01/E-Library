import { createSlice } from '@reduxjs/toolkit';
import fetchCategories from "./actions/fetchCategories";
import addCategory from './actions/addCategory';
import updateCategory from './actions/updateCategory';
import deleteCategory from './actions/deleteCategory';

const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        loading: false,
        error: null,
        totalCategories: 0,  
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.totalCategories = action.payload.page.totalElements;  
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // add
            .addCase(addCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories.push(action.payload);
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // update
            .addCase(updateCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.categories.findIndex(category => category.id === action.payload.id);
                if (index !== -1) {
                    state.categories[index] = action.payload;
                }
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // delete
            .addCase(deleteCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = state.categories.filter(category => category.id !== action.payload.id);
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

const CategoryReducer = CategorySlice.reducer;
export default CategoryReducer;
