import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user : null,
        isAuthenticated: false
    },
    reducers: {
        loginSucess(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logoutSucess : (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;