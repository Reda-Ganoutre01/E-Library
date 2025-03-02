import { createSlice } from "@reduxjs/toolkit";
import fetchUsers from "./actions/fetchUsers";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loadingUsers: false,
    errorUsers: null,
    totalUsers: 0,  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loadingUsers = true;
        state.errorUsers = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loadingUsers = false;
        state.users = action.payload.users;  
        state.totalUsers = action.payload.totalCount;  
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loadingUsers = false;
        state.errorUsers = action.payload;
      });
  },
});

export default UserSlice.reducer;
