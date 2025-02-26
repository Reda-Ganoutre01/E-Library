import  fetchCategories       from "./actions/fetchCategories";
import { createSlice }        from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

const CategoryReducer = CategorySlice.reducer;

export default CategoryReducer;