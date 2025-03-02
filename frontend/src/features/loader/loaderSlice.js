import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: { status: false },
  reducers: {
    showLoader: (state) => {
      state.status = true; // Show loader
    },
    hideLoader: (state) => {
      state.status = false; // Hide loader
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
