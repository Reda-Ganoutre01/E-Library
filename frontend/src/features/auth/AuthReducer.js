import { createSlice } from "@reduxjs/toolkit";
import authenticateUser from "./actions/authenticateUser.js";
import registerUser   from "./actions/registerUser.js";
import { jwtDecode }  from "jwt-decode";
import isTokenExpired from "../../utils/isTokenExpired.js"

const TOKEN = localStorage.getItem("token");

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: TOKEN && !isTokenExpired(TOKEN) ? jwtDecode(TOKEN) : null,
    token: TOKEN && !isTokenExpired(TOKEN) ? TOKEN : null,
    isAuthenticated: TOKEN && !isTokenExpired(TOKEN),
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
          role: decodedToken.role,
          id: decodedToken.id,
          sub: decodedToken.sub,
        };
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        const decodedToken = jwtDecode(action.payload.token);
        state.user = {
          role: decodedToken.role,
          id: decodedToken.id,
          sub: decodedToken.sub,
        };
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = AuthSlice.actions;
const AuthReducer = AuthSlice.reducer;
export default AuthReducer;