import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBlogs = createAsyncThunk("getBlogs", async () => {
    const response = await axios("https://6576df5f197926adf62ca419.mockapi.io/bloglist")
    return response.data
})

const initialState = {
    blogs: [],
    loading: false,
    error: ""
}

export const blogsList = createSlice({
    name: "blog",
    initialState,
    reducers: {
        updateBlog: (state, action) => {
            state.blogs.push(action.payload)
        },
        sortBlog: (state, action) => {
            console.log("sort")
            state.blogs = state.blogs.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1
                }
                if (a.name > b.name) {
                    return 1
                }
                return 0
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state, action) => {
            state.loading = true
            // console.log(state.blogs)

        })
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.loading = false
            state.blogs = action.payload
            // console.log(state.blogs)

        })
        builder.addCase(getBlogs.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { updateBlog, sortBlog, blogs } = blogsList.actions
export default blogsList.reducer