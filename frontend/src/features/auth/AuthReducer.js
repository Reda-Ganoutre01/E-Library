import {createSlice}    from "@reduxjs/toolkit";
import authenticateUser from "./actions/authenticateUser.js";
import {jwtDecode} from "jwt-decode";

const TOKEN = localStorage.getItem("token");
const ROLE  = localStorage.getItem("role");

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: TOKEN ? jwtDecode(TOKEN) : null,
    token: TOKEN || null,
    isAuthenticated: !!TOKEN,
    isAdmin: ROLE === "LIBRARIAN",
    isUser: ROLE === "USER",
    adminOnly: !!TOKEN && ROLE === "LIBRARIAN",

    loading: false,
    error: null,
  },
  reducers: {
      logout: (state) => {
          state.user = null;
          state.token = null;
          state.isAuthenticated = false;
          localStorage.removeItem("token");
      },
  },
  extraReducers: (builder) => {
    builder
        .addCase(authenticateUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(authenticateUser.fulfilled, (state, action) => {
          state.loading = false;
          state.token = action.payload.token;
          const decodedToken = jwtDecode(action.payload.token);
          state.user = {
              role : decodedToken.role,
              id : decodedToken.id,
              sub : decodedToken.sub
          }
          state.isAuthenticated = true;
          localStorage.setItem("token", action.payload.token);
        })
        .addCase(authenticateUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export const { logout }        = AuthSlice.actions;
const AuthReducer = AuthSlice.reducer;
export default AuthReducer;