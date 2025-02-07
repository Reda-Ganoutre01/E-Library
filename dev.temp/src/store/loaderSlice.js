import {createSlice} from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
    initialState: {status : false},
    reducers: {
        show() {
            return {status : true}
        },
        hide(){
            return {status : false}
        }
    }
});

export const {hide,show} = loaderSlice.actions;
export default loaderSlice.reducer;
