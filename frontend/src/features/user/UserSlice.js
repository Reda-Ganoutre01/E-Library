import { createSlice } from "@reduxjs/toolkit";
import fetchUsers from "./actions/fetchUsers";
import fetchUser from "./actions/fetchUser";
import updateUser from "./actions/updateUser";
import deleteUser from "./actions/deleteUser";
import  addUser  from "./actions/addUser";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userInfo: null,

    loadingUsers: false,
    loadingUser: false,
    loadingAddUser: false, 

    errorUsers: null,
    errorUser: null,
    errorAddUser: null, 

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
        state.errorUsers = action.error?.message || "Failed to fetch users";
      })
      // user
      .addCase(fetchUser.pending, (state) => {
        state.loadingUser = true;
        state.errorUser = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loadingUser = false;
        state.errorUser = action.error?.message || "Failed to fetch user";
      })
        // Add user
        .addCase(addUser.pending, (state) => {
          state.loadingAddUser = true;
          state.errorAddUser = null;
        })
        .addCase(addUser.fulfilled, (state, action) => {
          state.loadingAddUser = false;
          state.users.push(action.payload); 
        })
        .addCase(addUser.rejected, (state, action) => {
          state.loadingAddUser = false;
          state.errorAddUser = action.error?.message || 'Failed to add user';
        })
      // update
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userInfo = { ...state.userInfo, ...action.payload };
    })
    
      .addCase(deleteUser.fulfilled, (state) => {
        state.userInfo = null;
      });

  },
});

export default UserSlice.reducer;
