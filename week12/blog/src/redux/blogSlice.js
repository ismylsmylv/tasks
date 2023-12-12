import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBlogs = createAsyncThunk("getBlogs", async () => {
    const response = await axios("https://6576df5f197926adf62ca419.mockapi.io/bloglist")
    return response.data
})

const initialState = {
    blogs: [],
    backBlogs: [],
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
        },
        searchBlog: (state, action) => {
            // console.log("search")
            if (action.payload != "") {
                state.blogs = state.blogs.filter(elem => elem.name.includes(action.payload))
            }
            else {
                state.blogs = state.backBlogs
            }
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
            state.backBlogs = action.payload
            // console.log(state.blogs)

        })
        builder.addCase(getBlogs.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { updateBlog, sortBlog, blogs, searchBlog } = blogsList.actions
export default blogsList.reducer