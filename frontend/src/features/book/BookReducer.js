import { createSlice } from "@reduxjs/toolkit";
import fetchBooks from "./actions/fetchBooks";



const BookSlice=createSlice({
    name:'book',
    initialState:{
        books:[],
        book:{},
        latestBooks:{},
        topBooks:{},
        loadingBooks: false,
        loadingLatestBooks: false,
        loadingTopBooks: false,
        loadingBook : false,

        errorBooks: null,
        errorLatestBooks: null,
        errorTopBooks: null,
        errorBook : null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        // Books
        builder.addCase(fetchBooks.pending,(state,action)=>{
            state.loadingBooks=true,
            state.errorBooks=null
        });
        builder.addCase(fetchBooks.fulfilled ,(state,action)=>{
            state.loadingBooks=false
            state.books=action.payload
        })
        builder.addCase(fetchBooks.rejected,(state,action)=>{
            state.loadingBooks = false;
            state.errorBooks = action.payload;
        })

    }
})


export const BookReducer=BookSlice.reducer

